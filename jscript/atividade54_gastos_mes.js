import { input, number } from "@inquirer/prompts";

const gastos = {};

let despesa = "";
let valor = 0;
let acumulado = 0;
let qtcat = 0;
let maiorvalor = -Infinity;
let menorvalor = Infinity;
let maiordespesa = "";
let menordespesa = "";

qtcat = await number({
  message: "Digite quantas categorias: ",
  min: 1,
  validate: (valor) =>
    Number.isInteger(valor) || "Digite um número inteiro."
});

for (let i = 0; i < qtcat; i++) {
  despesa = await input({
    message: `Digite o tipo da despesa ${i + 1}: `
  });

  valor = await number({
    message: `Digite o valor da despesa ${i + 1}: `,
    min: 0
  });

  acumulado += valor;
  gastos[despesa] = valor;

  if (valor > maiorvalor) {
    maiorvalor = valor;
    maiordespesa = despesa;
  }

  if (valor < menorvalor) {
    menorvalor = valor;
    menordespesa = despesa;
  }
}

console.log(gastos);

console.log(`Total das despesas: R$ ${acumulado.toFixed(2)}`);
console.log(`Menor despesa: ${menordespesa} - R$ ${menorvalor.toFixed(2)}`);
console.log(`Maior despesa: ${maiordespesa} - R$ ${maiorvalor.toFixed(2)}`);
