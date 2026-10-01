import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log();
console.log("Nota Comceito");

const idade = await number({
  message: "Digite sua idade: "});

let conceito;

if (idade >= 0 && idade <= 13) {
  conceito = "Criança";
} else 
  if (idade >= 14 && idade <= 19) {
    conceito = "Adolescente";
  } else 
    if (idade >= 20 && idade <= 69) {
      conceito = "Adulto";
      } else
        if (idade >= 70) {
          conceito = "Sênior";
          } else {
            conceito = "Alienígena";
            }

console.log(`Sua idade é de ${idade} anos, você é um/a ${conceito}`);
