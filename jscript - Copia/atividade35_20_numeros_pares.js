import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

let numero = 0;
let total = 0;
let contador = 0;

while (contador <= 20) {
  if (numero % 2 == 0) {
    console.log(`Número: ${numero}`);
    total += numero;
    contador++;
  }
  numero++;
};

console.log(`Total: ${total}`);
