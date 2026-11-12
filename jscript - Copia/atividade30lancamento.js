import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log();
console.log("Lançamento");
console.log();

const contagem = await input({
  message: "Digite o número para contagem regressiva 5 - 10: ",
  min: 5,
  max: 10
});

for (let i = contagem; i >= 2; i--) {
  console.log(`${i}`);
  console.log();
  await new Promise(resolve => setTimeout(resolve, 1200));
}

console.log("LANÇAMENTO");
