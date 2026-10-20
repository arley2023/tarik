import { input, number } from "@inquirer/prompts";

let lista = [];
let total = 0;

while (true) { console.log(`CARRINHO

    1. ADICIONAR PRODUTO
    2. VER CARRINHO
    0. FINALZIA COMPRA
    `);

    let op = await input({message: "DIGITE O NÚMERO DA OPÇÃO DESEJADA: "});

    if (op === "1") {
        console.log("CADASTRAR TERMO");

        let produto;
        while (true) {
            produto = await input({message: "Digite o nome do produto: "});
            if (!produto.trim()) {
                console.warn("PRODUTO DEVE SER PREENCHIDO! TENTE NOVAMENTE");
                continue;
            }
            break;
        }

        let preco;
        while (true) {
            preco = await number({message: "Digite o preço do produto: ", step?=1});
            if (preco <= 0) {
                console.warn("PREÇO DEVE SER PREENCHIDO! TENTE NOVAMENTE");
                continue;
            }
            break;
        }

        let quantidade;
        while (true) {
            quantidade = await number({message: "Digite a quantidade: ", min: 1, required: true});
            if (preco <= 0) {
                console.warn("A QUANTIDADE DEVE SER PREENCHIDA! TENTE NOVAMENTE");
                continue;
            }
            break;
        }
        termo[produto] = descricao;
        total += (quantidade*preco)
        console.log("NOVO TERMO CADASTRADO!");
    



    } else if (op === "2") {
        console.log("BUSCAR PRODUTO");
        let buscaproduto = await input({message: "Digite o produto que deseja buscar: "});

         if (termo[buscaproduto] !== undefined) {
            console.log(`TERMO: ${buscaproduto}`);
            console.log(`DESCRIÇÃO: ${termo[buscaproduto]}`);
        } else {
            console.warn("PRODUTO NÃO ENCONTRADO!");
        }





    } else if (op === "3") {
        console.log("LISTA DE TODOS OS TERMOS:");

        let produtos = Object.keys(termo);

        if (produtos.length === 0) {
            console.log("NENHUM TERMO CADASTRADO!");
        } else {
            for (let i = 0; i < produtos.length; i++) {
                console.log(`${i + 1}. ${produtos[i]}`);
                console.log(`   Descrição: ${termo[produtos[i]]}`);
            }
        }

    // } else if (op === "4") {
    //     console.log("BUSCAR TERMO");
    //     let buscatermo = await input({message: "Digite o termo que deseja buscar: "});

    //     if (termo[buscatermo] !== undefined) {
    //         console.log(`TERMO: ${buscatermo}`);
    //         console.log(`DESCRIÇÃO: ${termo[buscatermo]}`);
    //         delete termo[buscatermo]
    //     } else {
    //         console.warn("TERMO NÃO ENCONTRADO!");
    //     }

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
