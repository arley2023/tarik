import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log();
console.log("Lançamento");
console.log();
  
let contagem = 0;

while (contagem < 5 || contagem > 10) {
  contagem = await input({
    message: "Digite o número para contagem regressiva 5 - 10: ",
    min: 5,
    max: 10
  });
  console.log("Número inválido. Digite um número entre 5 e 10.");
};

while (contagem >= 2) {
  console.log(`${contagem}`);
  await new Promise(resolve => setTimeout(resolve, 1200));  
  contagem--;
};

console.log("LANÇAMENTO");
