import { input, number } from "@inquirer/prompts";

let passageiro = [];
let idpas = 1;

while (true) { console.log(`BOA VIAGEM TURISMO

    1. CADASTRAR PASSAGEIRO
    2. ALTERAR DADOS PASSAGEIRO
    3. LISTAR PASSAGEIROS
    4. REMOVER
    0. SAIR
    
    `);

    let op = await input({message: "DIGITE O NÚMERO DA OPÇÃO DESEJADA: "});

    if (op === "1") {
        console.log("CADASTRAR PASSAGEIRO");

        let nome;
        while (true) {
            nome = await input({message: "Digite o nome do passageiro: "});
            if (!nome.trim()) {
                console.warn("PASSAGEIRO DEVE SER PREENCHIDO! TENTE NOVAMENTE");
                continue;
            }
            break;
        }

        let destino;
        while (true) {
            destino = await input({message: "Digite o destino do passageiro: "});
            if (!destino.trim()) {
                console.warn("DESTINO DEVE SER PREENCHIDO! TENTE NOVAMENTE");
                continue;
            }
            break;
        }

        passageiro.push({
                    id: idpas,
                    nome: nome,
                    destino: destino
                });

        console.log("NOVO PASSAGEIRO CADASTRADO!");
        idpas++


       




    } else if (op === "2") {
        console.log("ALTERAR DADOS DO PASSAGEIRO");
        // let buscaPASSAGEIRO = await input({message: "Digite o PASSAGEIRO que deseja buscar: "});

         if (passageiro.length === 0) {
            console.log("NENHUM PASSAGEIRO CADASTRADO!");
        } else {
            for (let i = 0; i < passageiro.length; i++) {
                console.log(`ID: ${passageiro[i].id}. Nome: ${passageiro[i].nome} - Destino: ${passageiro[i].destino}`);
            }
        }

        let selecao = await number({message: "DIGITE A ID DO PASSAGEIRO A EDITAR: "});

        let editpas = passageiro.find((p) => p.id === selecao) 

        if (!editpas) { 
            console.warn("PASSAGEIRO NÃO ENCONTRADO!");
        } else {
            // Os valores atuais aparecem como padrão; o usuário pode confirmar
            // ou informar novos valores para cada campo.
            let nome = await input({ message: "Nome do Passageiro: ", default: editpas.nome })

            let destino = await input({ message: "Destino: ", default: editpas.destino })

            // A variável aponta para o próprio objeto que está dentro do array;
            // atualizar suas propriedades altera o filme cadastrado.
            editpas.nome = nome
            editpas.destino = destino
            console.log("PASSAGEIRO ATUALIZADO COM SUCESSO")       
        
        }

    } else if (op === "3") {
        console.log("LISTA DE TODOS OS PASSAGEIROS:");

        if (passageiro.length === 0) {
            console.log("NENHUM PASSAGEIRO CADASTRADO!");
        } else {
            for (let i = 0; i < passageiro.length; i++) {
                console.log(`ID: ${passageiro[i].id}. Nome: ${passageiro[i].nome} - Destino: ${passageiro[i].destino}`);
            }
        }

    } else if (op === "4") {
        console.log("EXCLUIR PASSAGEIRO");

        if (passageiro.length === 0) {
            console.log("NENHUM PASSAGEIRO CADASTRADO!");
        } else {
            for (let i = 0; i < passageiro.length; i++) {
                console.log(`ID: ${passageiro[i].id}. Nome: ${passageiro[i].nome} - Destino: ${passageiro[i].destino}`);
            }
        }

        let selecao = await number({message: "DIGITE A ID DO PASSAGEIRO A EXCLUIR: "});

        let removepas = passageiro.find((p) => p.id === selecao) 

        if (!removepas) { 
            console.warn("PASSAGEIRO NÃO ENCONTRADO!");
        } else {
            passageiro.splice(passageiro.indexOf(removepas), 1)
            console.log("Passageiro excluido");
        }

    } else if (op === "0") {
        console.warn("PROGRAMA SENDO ENCERRADO...");
        break;

    } else {
        console.error("DIGITE UMA OPÇÃO VÁLIDA!");
    }

    if (op !== "0") {
        await input({ message: "TECLE ENTER PARA CONTINUAR!" });
    }
}
