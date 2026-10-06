import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

//2. Usando while(true) faça um programa de coleta de temperaturas. O programa deverá pedir uma temperatura em Celsius, quando o usuário digitar "SAIR", a coleta deverá ser encerrada e a média das temperaturas inseridas deverá ser calculada e exibida no terminal.


let soma = 0;
let qtsoma = 0;

while (true) {
  let temp = await number({ message:"Digite a temperatura em celsius (0 para sair): ", step: 0.1 });


  if (temp === 0) {
    break;
  }

  soma += temp;
  qtsoma++;
}

console.log(`A média das temperaturas é: ${soma / qtsoma}`);
