import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

// 4. Faça um sistema de lanchonete. O sistema deve exibir uma lista de lanches contendo código, nome e preço de um lanche e deverá perguntar para o usuário qual lanche ele gostaria de escolher, após isso ele deve perguntar a quantidade desejada e se o cliente deseja continuar comprando, se a resposta for afirmativa o sistema deve pedir o código do próximo lanche. Ao final exiba o total que o clientedeverá pagar. 
// DESAFIO 1: Aplique um desconto de 10 reais para compras com total a partir de 100 reais e um desconto de 15 reais para compras com total a partir de 200 reais
// DESAFIO 2: Monte a nota fiscal do cliente, contendo os itens que foram comprados, seus preços, o desconto aplicado e o total da compra.


while (true) {
  let opcao = await select({
    message: "Escolha uma opção:",
    choices: [
      { name: "Opção 1", value: 1 },
      { name: "Opção 2", value: 2 },
      { name: "Opção 3", value: 3 },
      { name: "Opção 4", value: 4 },
      { name: "Sair", value: 0 }
    ]
  });

  if (opcao === 0) {
    console.log("Saindo do programa.");
    break;
  } else 
    if (opcao < 1 || opcao > 4) {
      console.log("Opção inválida. Por favor, escolha uma opção válida.");
      continue;
    } else 
      if (opcao === 1) {
        console.log("Você escolheu a Opção 1.");
      } else if (opcao === 2) {
        console.log("Você escolheu a Opção 2.");
      } else if (opcao === 3) {
        console.log("Você escolheu a Opção 3.");
      } else if (opcao === 4) {
        console.log("Você escolheu a Opção 4.");
      }
}
