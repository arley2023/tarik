import { input, number, password, confirm, select, checkbox } from "@inquirer/prompts";

console.log();
console.log("Advinhe o número");

// let secreto = Math.floor(Math.random() * 10) + 1;
let secreto = 7;
let conceito;
// console.log(secreto);

const numero = await number({
  message: "Digite um numero 0 a 10: ",
  min: 0,
  max: 10,
});

if (numero == secreto) {
  conceito = "Você Acertou!";
} else if (numero > secreto) {
  conceito = "errou, seu número é maior";
} else {
  conceito = "errou, seu número é menor";
}

console.log(conceito);

const numero1 = await number({
  message: "Digite um numero 0 a 50: ",
  min: 0,
  max: 50,
});

if (numero1 == secreto) {
  conceito = "Você Acertou!";
} else if (numero1 > secreto) {
  conceito = "errou, seu número é maior";
} else {
  conceito = "errou, seu número é menor";
}

console.log(conceito);

const numero2 = await number({
  message: "Digite um numero 0 a 50: ",
  min: 0,
  max: 50,
});

if (numero2 == secreto) {
  conceito = "Você Acertou!";
} else if (numero2 > secreto) {
  conceito = "errou, seu número é maior";
} else {
  conceito = "errou, seu número é menor";
}

console.log(conceito);
console.log(secreto);
