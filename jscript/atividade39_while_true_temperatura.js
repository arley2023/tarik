import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

//2. Usando while(true) faça um programa de coleta de temperaturas. O programa deverá pedir uma temperatura em Celsius, quando o usuário digitar "SAIR", a coleta deverá ser encerrada e a média das temperaturas inseridas deverá ser calculada e exibida no terminal.


let mediatemp = 0;
let somatemp = 0;
let qttemp = 0;

while (true) {
  let temperatura = await input({ message: `Digite a ${qttemp + 1} temperatura em celsius (sair para encerrar): ` });

  if (temperatura === "sair") {
    console.log("Encerrando a coleta de temperaturas...");
    break
  }

  temperatura = Number(temperatura);

if (isNaN(temperatura)) {
  console.log("Por favor, digite um número válido ou 'sair' para encerrar.");
  continue;
}

if (temperatura >= -50 && temperatura <= 50) {
  somatemp += temperatura;
  qttemp++;
} else {
  console.log("Por favor, digite uma temperatura entre -50 e 50 graus Celsius.");
  continue;
}

}

console.log(`A média das temperaturas é: ${(somatemp / qttemp).toFixed(2)}`);
