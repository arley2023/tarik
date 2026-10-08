import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

// 4. Faça um sistema de lanchonete. O sistema deve exibir uma lista de lanches contendo código, nome e preço de um lanche e deverá perguntar para o usuário qual lanche ele gostaria de escolher, após isso ele deve perguntar a quantidade desejada e se o cliente deseja continuar comprando, se a resposta for afirmativa o sistema deve pedir o código do próximo lanche. Ao final exiba o total que o clientedeverá pagar. 
// DESAFIO 1: Aplique um desconto de 10 reais para compras com total a partir de 100 reais e um desconto de 15 reais para compras com total a partir de 200 reais
// DESAFIO 2: Monte a nota fiscal do cliente, contendo os itens que foram comprados, seus preços, o desconto aplicado e o total da compra.

let totalVenda = 0;

while (true) {
  console.log(`
    Seja bem vindo ao Pará Lanches
    
    código   | Nome do Lanche      | Preço
    001      | x-burguer           | R$ 10,00
    002      | x-salada            | R$ 12,00
    003      | Bauru               | R$ 15,00
    004      | Kuririn no Pão Bola | R$ 20,00
    005      | X-bacon com picolo  | R$ 25,00
    006      | coca zero 350ml     | R$ 5,00
    
    `);

let cod = await input({message:"Digite o código do lanche desejado: "})

        let nome = undefined
        let preco = undefined

    if (cod === "001") {
      nome = "x-burguer";
      preco = 10;
    } else if (cod === "002") {
      nome = "x-salada";
      preco = 12;
    } else if (cod === "003") {
      nome = "Bauru";
      preco = 15;
    } else if (cod === "004") {
      nome = "Kuririn no Pão Bola";
      preco = 20;
    } else if (cod === "005") {
      nome = "X-bacon com picolo";
      preco = 25;
    } else if (cod === "006") {
      nome = "coca zero 350ml";
      preco = 5;
    } else {
      console.log("Produto não encontrado.");
      continue;
    }

     console.log(`Você escolheu ${nome} por R$ ${preco.toFixed(2)}`)
        let quantidade = await number({message:"Digite quantas unidades deseja: "})

        totalVenda += (preco * quantidade)


        let continuar = await input({message:"DESEJA COMPRAR OUTRO PRODUTO? (S/N)"})

        if (continuar == "N"){
            console.log("Venda Finalizada!")
            break
        } 
        
}

if (totalVenda >= 200) {
  totalVenda = totalVenda - 15
} else if (totalVenda >= 100) {
  totalVenda = totalVenda - 10
}

console.log(`Total a Pagar: ${totalVenda.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}`)

