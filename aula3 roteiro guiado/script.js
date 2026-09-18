// Inicializa a lista carregando os dados do localStorage (chave unificada para o RH)
let listaFuncionarios = JSON.parse(localStorage.getItem("meu_rh_funcionarios")) || [];

// Executa a primeira renderização assim que a página carrega
window.onload = function() {
    atualizarTela();
};

// Captura o envio do formulário via addEventListener para evitar conflitos com onsubmit no HTML
document.getElementById("form-cadastro").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const cargo = document.getElementById('cargo').value;
    const setor = document.querySelector('input[name="setor"]:checked')?.value;  
    const admissao = document.getElementById('admissao').value;

    // Validação robusta de campos vazios
    if (!nome || !cargo || !setor || !admissao) {
        alert("Por favor, preencha todos os campos antes de continuar!");
        return;
    }

    // Cria o objeto do novo funcionário
    const novoFuncionario = {
        nome,
        cargo,
        setor,
        admissao
    };

    // Adiciona na lista e salva no localStorage
    listaFuncionarios.push(novoFuncionario);
    salvarESincronizar();

    alert(`Cadastro Realizado com Sucesso!\n\nNome: ${nome}\nCargo: ${cargo}\nSetor: ${setor}\nAdmissão: ${new Date(admissao + 'T00:00:00').toLocaleDateString('pt-BR')}`);

    // Limpa o formulário
    document.getElementById("form-cadastro").reset();
});

// Centraliza a gravação no localStorage e a atualização visual
function salvarESincronizar() {
    localStorage.setItem("meu_rh_funcionarios", JSON.stringify(listaFuncionarios));
    atualizarTela();
}

// Função para remover um funcionário pelo índice
function removerFuncionario(indice) {
    listaFuncionarios.splice(indice, 1);
    salvarESincronizar();
}

// Atualiza a interface gráfica exibindo todos os funcionários salvos
function atualizarTela() {
    const ul = document.getElementById("lista-funcionarios");
    ul.innerHTML = ""; // Limpa a lista antes de desenhar de novo

    listaFuncionarios.forEach((func, indice) => {
        const li = document.createElement("li");

        const dataFormatada = new Date(func.admissao + 'T00:00:00').toLocaleDateString('pt-BR');

        // Texto com os detalhes do funcionário
        const spanInfo = document.createElement("span");
        spanInfo.innerHTML = `<strong>Nome:</strong> ${func.nome} | <strong>Cargo:</strong> ${func.cargo} | <strong>Setor:</strong> ${func.setor} | <strong>Admissão:</strong> ${dataFormatada}`;

        // Botão de Remover
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "REMOVER";
        botaoRemover.onclick = () => removerFuncionario(indice);

        li.appendChild(spanInfo);
        li.appendChild(botaoRemover);
        ul.appendChild(li);
    });
}