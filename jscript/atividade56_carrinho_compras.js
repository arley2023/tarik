
import { input, number } from "@inquirer/prompts";

let lista = [];
let total = 0;
let qtdprod = 0;

while (true) {
    console.log(`
CARRINHO

    1. ADICIONAR PRODUTO
    2. VER CARRINHO
    0. FINALIZAR COMPRA
    `);

    let op = await input({
        message: "DIGITE O NÚMERO DA OPÇÃO DESEJADA: "
    });

    if (op === "1") {
        console.log("CADASTRAR PRODUTO");

        let produto;

        while (true) {
            produto = await input({
                message: "Digite o nome do produto: "
            });

            produto = produto.trim();

            if (!produto) {
                console.warn("O NOME DO PRODUTO DEVE SER PREENCHIDO!");
                continue;
            }

            // Verifica se o produto já está cadastrado
            let existe = lista.some(
                item => item.produto.toLowerCase() === produto.toLowerCase()
            );

            if (existe) {
                console.warn("PRODUTO JÁ CADASTRADO! TENTE NOVAMENTE.");
                continue;
            }
            
        let preco;

        while (true) {
            preco = await number({
                message: "Digite o preço do produto: ",
                step: 0.1,
                min: 1,
                required: true
            });

            if (!Number.isFinite(preco) || preco <= 0) {
                console.warn("O PREÇO DEVE SER MAIOR QUE ZERO!");
                continue;
            }

            break;
        }

        let quantidade;

        while (true) {
            quantidade = await number({
                message: "Digite a quantidade: ",
                min: 1,
                required: true
            });

            if (
                !Number.isInteger(quantidade) ||
                quantidade < 1
            ) {
                console.warn("A QUANTIDADE DEVE SER UM INTEIRO MAIOR QUE ZERO!");
                continue;
            }

            break;
        }

        lista.push({
            produto: produto,
            preco: preco,
            quantidade: quantidade
        });

        total += preco * quantidade;
        qtdprod++;

        console.log("NOVO PRODUTO CADASTRADO!");
        console.log(lista);

    } else if (op === "2") {
        console.log("CARRINHO DE COMPRAS:");

        if (lista.length === 0) {
            console.log("NENHUM PRODUTO CADASTRADO!");
        } else {
            for (let i = 0; i < lista.length; i++) {
                console.log(`${i + 1}. Produto: ${lista[i].produto}`);
                console.log(`   Preço unitário: R$ ${lista[i].preco.toFixed(2)}`);
                console.log(`   Quantidade: ${lista[i].quantidade}`);
                console.log(
                    `   Subtotal: R$ ${(lista[i].preco * lista[i].quantidade).toFixed(2)}`
                );
            }

            console.log(`TOTAL DA COMPRA: R$ ${total.toFixed(2)}`);
            console.log(`QUANTIDADE DE PRODUTOS CADASTRADOS: ${qtdprod}`);
        }

    } else if (op === "0") {
        console.log("\nFINALIZANDO COMPRA...");

        if (lista.length === 0) {
            console.log("CARRINHO VAZIO!");
        } else {
            console.log(`TOTAL DE PRODUTOS CADASTRADOS: ${qtdprod}`);
            console.log(`VALOR TOTAL: R$ ${total.toFixed(2)}`);
            console.log("OBRIGADO PELA COMPRA!");
        }

        console.warn("PROGRAMA SENDO ENCERRADO...");
        break;

    } else {
        console.warn("OPÇÃO INVÁLIDA! TENTE NOVAMENTE.");
    }
}
