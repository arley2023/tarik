import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log("\n\n");

const ingresso = await confirm({
  message: "Tem ingresso? [y/N] -> ",
  default: false,
});

const idade = await number({
  message: "Idade -> ",
  required: true,
});

const acompanhado = await confirm({
  message: "Está acompanhado? [y/N] -> ",
  default: false,
});

const mensagem =
  ingresso && (idade >= 18 || acompanhado) ? "Entrada liberada!" : "Vazaaa!!";

const largura = 15;
console.log("\n\n\n");
console.log("=".repeat(largura));
console.log(mensagem.padStart(largura));
console.log("=".repeat(largura));
console.log("\n\n\n");
