import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log();
console.log("Soma de números em um intervalo");
console.log();

const numero1 = await number({
        message: "Digite o primeiro número: "
  });
const numero2 = await number({
        message: "Digite o segundo número: "
  });
 
let total = 0;
if (numero1 > numero2) {
  for (let i = numero1; i >= numero2; i--) {
    total = total + i
  };
  console.log(`A soma dos números entre ${numero2} e ${numero1} é: ${total}`);} else {
    if (numero1 < numero2) {
    for (let i = numero1; i <= numero2; i++) {
      total = total + i
    };
    console.log(`A soma dos números entre ${numero1} e ${numero2} é: ${total}`);
  }
}
