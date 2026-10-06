import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

// 3. Faça um menu de atendimento simples com 4 opções e um comando de sair. Cada opção deve ter uma frase correspondente que é exibida quando o usuário escolhe aquela opção.

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

// switch (opcao) {
//   case 1:
//     console.log("Você escolheu a Opção 1.");
//     break;
//   case 2:
//     console.log("Você escolheu a Opção 2.");
//     break;
//   case 3:
//     console.log("Você escolheu a Opção 3.");
//     break;
//   case 4:
//     console.log("Você escolheu a Opção 4.");
//     break;
//   case 0:
//     console.log("Saindo do programa.");
//     break;
//   default:
//     console.log("Opção inválida. Por favor, escolha uma opção válida.");
//     break;
// }