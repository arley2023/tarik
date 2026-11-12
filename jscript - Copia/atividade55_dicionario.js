import { input } from "@inquirer/prompts";

let termo = {};

while (true) { console.log(`GLOSSÁRIO

    1. CADASTRAR TERMO
    2. BUSCAR TERMO
    3. LISTAR TODOS
    4. REMOVER
    0. SAIR
    
    `);

    let op = await input({message: "DIGITE O NÚMERO DA OPÇÃO DESEJADA: "});

    if (op === "1") {
        console.log("CADASTRAR TERMO");

        let nome;
        while (true) {
            nome = await input({message: "Digite o nome do termo: "});
            if (!nome.trim()) {
                console.warn("TERMO DEVE SER PREENCHIDO! TENTE NOVAMENTE");
                continue;
            }
            break;
        }

        let descricao;
        while (true) {
            descricao = await input({message: "Digite a descrição do termo: "});
            if (!descricao.trim()) {
                console.warn("DESCRIÇÃO DEVE SER PREENCHIDA! TENTE NOVAMENTE");
                continue;
            }
            break;
        }

        termo[nome] = descricao;
        console.log("NOVO TERMO CADASTRADO!");

    } else if (op === "2") {
        console.log("BUSCAR TERMO");
        let buscatermo = await input({message: "Digite o termo que deseja buscar: "});

         if (termo[buscatermo] !== undefined) {
            console.log(`TERMO: ${buscatermo}`);
            console.log(`DESCRIÇÃO: ${termo[buscatermo]}`);
        } else {
            console.warn("TERMO NÃO ENCONTRADO!");
        }

    } else if (op === "3") {
        console.log("LISTA DE TODOS OS TERMOS:");

        let nomes = Object.keys(termo);

        if (nomes.length === 0) {
            console.log("NENHUM TERMO CADASTRADO!");
        } else {
            for (let i = 0; i < nomes.length; i++) {
                console.log(`${i + 1}. ${nomes[i]}`);
                console.log(`   Descrição: ${termo[nomes[i]]}`);
            }
        }

    } else if (op === "4") {
        console.log("BUSCAR TERMO");
        let buscatermo = await input({message: "Digite o termo que deseja buscar: "});

        if (termo[buscatermo] !== undefined) {
            console.log(`TERMO: ${buscatermo}`);
            console.log(`DESCRIÇÃO: ${termo[buscatermo]}`);
            delete termo[buscatermo]
        } else {
            console.warn("TERMO NÃO ENCONTRADO!");
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
