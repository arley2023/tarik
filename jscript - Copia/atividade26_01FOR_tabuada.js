import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log();
console.log("Tabuada");
console.log();

const numero = await number({
  message: "Digite um número: "});
console.log();
const final = await number({
  message: "Digite o número final: "});
console.log();
  
for (let i = final; i >= 1; i--) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    // await new Promise(resolve => setTimeout(resolve, 500));
}
