import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

let numero = 2;
let qtPrimos = 0;
let total = 0;

while (qtPrimos < 10) {

  let qtdivisores = 0;
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      qtdivisores += 1;
      break;
    }
  };

  if (qtdivisores == 0) {
    console.log(`Número ${numero} é Primo.`);
    qtPrimos++;
    total += numero;
  };

  numero++;
};

console.log(`Total: ${total}`);
