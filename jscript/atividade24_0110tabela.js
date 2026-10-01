import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log();
console.log();
const produto = await input({ message: 'Qual o nome do produto? ', required: true });
const quantidade = await number({ message: "Quantidade? ",  min: 1, required: true });
const valor = await number({ message: 'Qual o valor do produto? ', step:0.01, required: true, validate: (v) => !isNaN(v) || "digite um valor válido" });

let desconto, faixa;

if ((quantidade * valor) >= 500) {
    desconto = 0.15;
    faixa = 'Você tem 15% de desconto'
} else {
    if ((quantidade * valor) >= 200) {
        desconto = 0.1;
        faixa = 'Você tem 10% de desconto'
    } else {
        desconto = 0;
        faixa = 'Você não tem desconto'
    }
};

console.log('┌──────────────────────────────────────────────────┐');
console.log(`│ Total da Compra                                  │`);
console.log('├─────────────┬────────────────────────────────────┤');
console.log(`│ Produto     │ ${produto.padEnd(34)} │`);
console.log('├─────────────┼────────────────────────────────────┤');
console.log(`│ Quantidade  │ ${quantidade.toString().padEnd(34)} │`);
console.log('├─────────────┼────────────────────────────────────┤');
console.log(`│ Valor       │ R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).padEnd(31)} │`);
console.log('├─────────────┼────────────────────────────────────┤');
console.log(`│ Descontos   │ ${faixa.padEnd(34)} │`);
console.log('├─────────────┼────────────────────────────────────┤');
console.log(`│ Valor Total │ R$ ${((quantidade * valor) - (quantidade * valor * desconto))
  .toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  .padEnd(31)} │`);
console.log('└─────────────┴────────────────────────────────────┘');
console.log();

