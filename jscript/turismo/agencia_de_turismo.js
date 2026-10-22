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
        console.log("BUSCAR PASSAGEIRO");
        let buscaPASSAGEIRO = await input({message: "Digite o PASSAGEIRO que deseja buscar: "});

         if (passageiro[buscaPASSAGEIRO] !== undefined) {
            console.log(`PASSAGEIRO: ${buscaPASSAGEIRO}`);
            console.log(`DESCRIÇÃO: ${passageiro[buscaPASSAGEIRO]}`);
        } else {
            console.warn("PASSAGEIRO NÃO ENCONTRADO!");
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


        if (selecao > passageiro.length || selecao <= 0) {
            console.warn("PASSAGEIRO NÃO ENCONTRADO!");
        } else {
            passageiro.splice(selecao, selecao--);
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
