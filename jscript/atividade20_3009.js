import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log();
console.log("Nota Comceito");

const nota = await number({
  message: "Digite sua nota: ", 
  step:"any",
  min: 0,
  max: 10
});

let conceito;

if (nota >= 9 && nota <= 10) {
  conceito = "A";
} else 
  if (nota >= 7 && nota < 9) {
    conceito = "B";
  } else 
    if (nota >= 5 && nota < 7) {
      conceito = "C";
    } else {
        conceito = "D";
      }

console.log(`Sua Nota Final é ${nota} conceito é ${conceito}`);


// if (nota >= 9) {
//   console.log(`Seu conceito é A`);
// } else if (nota >= 7) {
//   console.log(`Seu conceito é B`);
// } else if (nota >= 5) {
//   console.log(`Seu conceito é C`);
// } else{
//   console.log(`Seu conceito é D`);
// }
