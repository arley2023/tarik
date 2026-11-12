import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log();
let total = 0;
while (total < 1000) {
  let produto = await input({ message: 'Qual o nome do produto? ', required: true });
  let quantidade = await number({ message: "Quantidade? ",  min: 1, required: true });
  let valor = await number({ message: 'Qual o valor do produto? ', step:0.01, required: true, validate: (v) => !isNaN(v) || "digite um valor válido" });
  total += valor * quantidade;
  console.log(`total parcial: ${total.toFixed(2).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
};

console.log(`Total da compra: ${total.toFixed(2).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
