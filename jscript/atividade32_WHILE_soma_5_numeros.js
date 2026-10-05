import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log();
console.log("Lançamento");
console.log();
  
let contagem = 0;
let soma = 0;

while (contagem < 5) {
  let valor = await number({
    message: "Digite um número: ",
  })
  if (valor !== 0) {
    soma += valor;
    contagem++;
  }
};

console.log(`Soma dos 5 números: ${soma}`);
