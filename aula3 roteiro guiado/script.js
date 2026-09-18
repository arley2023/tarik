// Inicializa a lista carregando os dados do localStorage (se existirem)
const listaTarefas = JSON.parse(localStorage.getItem("minhas_tarefas")) || []

// Executa a primeira renderização caso já haja dados salvos ao abrir a página
window.onload = function() {
    atualizarTela()
}

function cadastrarTarefa(e) {
    e.preventDefault()

    const inputTitulo = document.getElementById("titulo")
    const titulo = inputTitulo.value.trim()

    // Validação básica para evitar campos vazios
    if (!titulo) {
        alert("Por favor, digite o título da tarefa!")
        return
    }

    const novaTarefa = {
        "titulo": titulo,
        "estado": "pendente" // Todo item nasce como pendente
    }

    // Armazenar a nova tarefa no array
    listaTarefas.push(novaTarefa)

    // Salva no localStorage e atualiza a tela
    salvarESincronizar()

    // Reseta o formulário
    document.getElementById("form-cadastro").reset()
}

// Função para desenhar a lista no HTML com o layout reestruturado
function atualizarTela() {
    const ul = document.getElementById("lista-tarefas-ui")
    ul.innerHTML = "" // Limpa a lista antes de desenhar de novo

    listaTarefas.forEach((tarefa, indice) => {
        const li = document.createElement("li")
        li.style.display = "flex"
        li.style.justifyContent = "space-between"
        li.style.alignItems = "center"
        li.style.padding = "10px"
        li.style.marginBottom = "8px"
        li.style.background = "#f9f9f9"
        li.style.border = "1px solid #ddd"
        li.style.borderRadius = "4px"

        // Esquerda: Container para o Título + Badge de Estado Atual na frente
        const divInfo = document.createElement("div")
        divInfo.style.display = "flex"
        divInfo.style.alignItems = "center"
        divInfo.style.gap = "10px"

        const spanTitulo = document.createElement("span")
        spanTitulo.textContent = tarefa.titulo
        spanTitulo.style.fontWeight = "bold"

        // Botão/Badge que mostra o estado atual na frente da tarefa
        const spanEstadoAtual = document.createElement("span")
        spanEstadoAtual.textContent = tarefa.estado.toUpperCase()
        spanEstadoAtual.style.padding = "4px 8px"
        spanEstadoAtual.style.borderRadius = "4px"
        spanEstadoAtual.style.fontSize = "11px"
        spanEstadoAtual.style.fontWeight = "bold"
        spanEstadoAtual.style.color = "white"

        // Cores de fundo do estado atual
        if (tarefa.estado === "pendente") {
            spanEstadoAtual.style.background = "#f0ad4e" // Laranja/Amarelo
        } else if (tarefa.estado === "concluido") {
            spanEstadoAtual.style.background = "#5cb85c" // Verde
        } else if (tarefa.estado === "cancelado") {
            spanEstadoAtual.style.background = "#d9534f" // Vermelho
        }

        divInfo.appendChild(spanTitulo)
        divInfo.appendChild(spanEstadoAtual)

        // Direita: Container para os botões de ação
        const divAcoes = document.createElement("div")
        divAcoes.style.display = "flex"
        divAcoes.style.gap = "5px"
        divAcoes.style.alignItems = "center"

        // Só mostra o botão se ele NÃO for o estado atual da tarefa
        if (tarefa.estado !== "pendente") {
            const btnPendente = criarBotaoAção("Pendente", "#f0ad4e", () => alterarEstado(indice, "pendente"))
            divAcoes.appendChild(btnPendente)
        }

        if (tarefa.estado !== "concluido") {
            const btnConcluido = criarBotaoAção("Concluir", "#5cb85c", () => alterarEstado(indice, "concluido"))
            divAcoes.appendChild(btnConcluido)
        }

        if (tarefa.estado !== "cancelado") {
            const btnCancelado = criarBotaoAção("Cancelar", "#d9534f", () => alterarEstado(indice, "cancelado"))
            divAcoes.appendChild(btnCancelado)
        }

        // Botão de Excluir
        const btnExcluir = criarBotaoAção("Excluir", "#333", () => removerTarefa(indice))
        divAcoes.appendChild(btnExcluir)

        // Monta a linha completa (li)
        li.appendChild(divInfo)
        li.appendChild(divAcoes)
        
        ul.appendChild(li)
    })
}

// Função auxiliar para padronizar os botões
function criarBotaoAção(texto, corFundo, funcaoClique) {
    const btn = document.createElement("button")
    btn.textContent = texto
    btn.style.background = corFundo
    btn.style.color = "white"
    btn.style.border = "none"
    btn.style.padding = "5px 8px"
    btn.style.borderRadius = "3px"
    btn.style.cursor = "pointer"
    btn.style.fontSize = "11px"
    btn.onclick = funcaoClique
    return btn
}

// Altera o estado, salva no navegador e atualiza a tela
function alterarEstado(indice, novoEstado) {
    listaTarefas[indice].estado = novoEstado
    salvarESincronizar()
}

// Remove a tarefa, salva no navegador e atualiza a tela
function removerTarefa(indice) {
    listaTarefas.splice(indice, 1)
    salvarESincronizar()
}

// Centraliza a gravação no localStorage e a atualização visual
function salvarESincronizar() {
    localStorage.setItem("minhas_tarefas", JSON.stringify(listaTarefas))
    atualizarTela()
}


// const listaTarefas = []

// function cadastrarTarefa(e) {
//     e.preventDefault()

//     const inputTitulo = document.getElementById("titulo")
//     const titulo = inputTitulo.value.trim()

//     // Validação básica para evitar campos vazios
//     if (!titulo) {
//         alert("Por favor, digite o título da tarefa!")
//         return
//     }

//     const novaTarefa = {
//         "titulo": titulo,
//         "estado": "pendente" // Todo item nasce como pendente
//     }

//     // Armazenar a nova tarefa no array
//     listaTarefas.push(novaTarefa)

//     // Atualiza a exibição na tela imediatamente
//     atualizarTela()

//     // Reseta o formulário
//     document.getElementById("form-cadastro").reset()
// }

// // Função para desenhar a lista no HTML com o layout reestruturado
// function atualizarTela() {
//     const ul = document.getElementById("lista-tarefas-ui")
//     ul.innerHTML = "" // Limpa a lista antes de desenhar de novo

//     listaTarefas.forEach((tarefa, indice) => {
//         const li = document.createElement("li")
//         li.style.display = "flex"
//         li.style.justifyContent = "space-between"
//         li.style.alignItems = "center"
//         li.style.padding = "10px"
//         li.style.marginBottom = "8px"
//         li.style.background = "#f9f9f9"
//         li.style.border = "1px solid #ddd"
//         li.style.borderRadius = "4px"

//         // Esquerda: Container para o Título + Badge de Estado Atual na frente
//         const divInfo = document.createElement("div")
//         divInfo.style.display = "flex"
//         divInfo.style.alignItems = "center"
//         divInfo.style.gap = "10px"

//         const spanTitulo = document.createElement("span")
//         spanTitulo.textContent = tarefa.titulo
//         spanTitulo.style.fontWeight = "bold"

//         // Botão/Badge que mostra o estado atual na frente da tarefa
//         const spanEstadoAtual = document.createElement("span")
//         spanEstadoAtual.textContent = tarefa.estado.toUpperCase()
//         spanEstadoAtual.style.padding = "4px 8px"
//         spanEstadoAtual.style.borderRadius = "4px"
//         spanEstadoAtual.style.fontSize = "11px"
//         spanEstadoAtual.style.fontWeight = "bold"
//         spanEstadoAtual.style.color = "white"

//         // Cores de fundo do estado atual
//         if (tarefa.estado === "pendente") {
//             spanEstadoAtual.style.background = "#f0ad4e" // Laranja/Amarelo
//         } else if (tarefa.estado === "concluido") {
//             spanEstadoAtual.style.background = "#5cb85c" // Verde
//         } else if (tarefa.estado === "cancelado") {
//             spanEstadoAtual.style.background = "#d9534f" // Vermelho
//         }

//         divInfo.appendChild(spanTitulo)
//         divInfo.appendChild(spanEstadoAtual)

//         // Direita: Container para os botões de alterar estado (apenas os diferentes do estado atual) e excluir
//         const divAcoes = document.createElement("div")
//         divAcoes.style.display = "flex"
//         divAcoes.style.gap = "5px"
//         divAcoes.style.alignItems = "center"

//         // Só mostra o botão se ele NÃO for o estado atual da tarefa
//         if (tarefa.estado !== "pendente") {
//             const btnPendente = criarBotaoAção("Pendente", "#f0ad4e", () => alterarEstado(indice, "pendente"))
//             divAcoes.appendChild(btnPendente)
//         }

//         if (tarefa.estado !== "concluido") {
//             const btnConcluido = criarBotaoAção("Concluir", "#5cb85c", () => alterarEstado(indice, "concluido"))
//             divAcoes.appendChild(btnConcluido)
//         }

//         if (tarefa.estado !== "cancelado") {
//             const btnCancelado = criarBotaoAção("Cancelar", "#d9534f", () => alterarEstado(indice, "cancelado"))
//             divAcoes.appendChild(btnCancelado)
//         }

//         // Botão de Excluir (sempre presente nas ações)
//         const btnExcluir = criarBotaoAção("Excluir", "#333", () => removerTarefa(indice))
//         divAcoes.appendChild(btnExcluir)

//         // Monta a linha completa (li)
//         li.appendChild(divInfo)
//         li.appendChild(divAcoes)
        
//         ul.appendChild(li)
//     })
// }

// // Função auxiliar para padronizar os botões
// function criarBotaoAção(texto, corFundo, funcaoClique) {
//     const btn = document.createElement("button")
//     btn.textContent = texto
//     btn.style.background = corFundo
//     btn.style.color = "white"
//     btn.style.border = "none"
//     btn.style.padding = "5px 8px"
//     btn.style.borderRadius = "3px"
//     btn.style.cursor = "pointer"
//     btn.style.fontSize = "11px"
//     btn.onclick = funcaoClique
//     return btn
// }

// // Altera o estado imediatamente e redesenha a tela
// function alterarEstado(indice, novoEstado) {
//     listaTarefas[indice].estado = novoEstado
//     atualizarTela()
// }

// // Remove a tarefa imediatamente e redesenha a tela
// function removerTarefa(indice) {
//     listaTarefas.splice(indice, 1)
//     atualizarTela()
// }




// // // const listaTarefas = []

// // function cadastrarTarefa(e){
// //     e.preventDefault()

// //     const titulo = document.getElementById("titulo").value

// //     const novaTarefa = {
// //         "titulo": titulo,
// //         "estado": "pendente"
// //     }

// //     // 3 - armazenar a nova tarefa no array de tarefas
// //     listaTarefas.push(novaTarefa)
// //     // Monta a string com todas as tarefas cadastradas até o momento
// //     let mensagemLista = "Tarefas cadastradas:\n\n";
    
// //     listaTarefas.forEach((tarefa, indice) => {
// //         mensagemLista += `${indice + 1}. ${tarefa.titulo} (${tarefa.estado})\n`;
// //     })

// //     // Atualiza a exibição na tela
// //     atualizarTela()

// //     // Exibe a lista completa no alert
// //     alert(mensagemLista)

// //     document.getElementById("form-cadastro").reset()
// // }

// // // Função para desenhar a lista no HTML e adicionar o botão de excluir
// // function atualizarTela() {
// //     const ul = document.getElementById("lista-tarefas-ui")
// //     ul.innerHTML = "" // Limpa a lista antes de desenhar de novo

// //     listaTarefas.forEach((tarefa, indice) => {
// //         const li = document.createElement("li")
// //         li.style.display = "flex"
// //         li.style.justifyContent = "space-between"
// //         li.style.alignItems = "center"
// //         li.style.padding = "8px"
// //         li.style.marginBottom = "5px"
// //         li.style.background = "#f4f4f4"
// //         li.style.border = "1px solid #ddd"

// //         // Texto da tarefa com o estado
// //         const span = document.createElement("span")
// //         span.textContent = `${tarefa.titulo} (${tarefa.estado})`

// //         // Botão de excluir
// //         const btnExcluir = document.createElement("button")
// //         btnExcluir.textContent = "Excluir"
// //         btnExcluir.style.background = "#ff4d4d"
// //         btnExcluir.style.color = "white"
// //         btnExcluir.style.border = "none"
// //         btnExcluir.style.padding = "4px 8px"
// //         btnExcluir.style.cursor = "pointer"
        
// //         // Ação do botão excluir usando o índice do array
// //         btnExcluir.onclick = function() {
// //             removerTarefa(indice)
// //         }

// //         // Monta os elementos na tela
// //         li.appendChild(span)
// //         li.appendChild(btnExcluir)
// //         ul.appendChild(li)
// //     })
// // }

// // function renderizar() {
// //     // lembrar de zerar elemento que segura os cards
// //     document.getElementById("lista-tarefas").innerHTML = ""
// //     listaTarefas.forEach((tarefa) => {
// //         const cardtarefa = document.createElement("li")
        
// //         cardtarefa.innerHTML = `${tarefa["titulo"]} - ${tarefa["estado"]}`

// //         const botaoCompletar = document.createElement("button")
// //             tarefa["estado"] = "concluido"
// //             renderizar()

// //         botaoCompletar.textContent = "Completar"

// //         cardtarefa.appendChild(botaoCompletar)

// //         document.getElementById("lista-tarefas").appendChild(cardtarefa)
// //     })
    

// //     for (let i = 0; i < listaTarefas.length; i++) {
// //         const tarefa = listaTarefas[i];

// //     }
// // }

