import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

let numero = []
let soma = 0

for (let i = 0; i <= 4; i++) {
  let numeroadd = await number({message:"Digite um número: "})
  numero.push(numeroadd)
}
console.log("------------------------------------")

console.log(`array: ${numero}`)
console.log(`quantidade: ${numero.length}`)
for (let j = 0; j < numero.length; j++) {
  soma += numero[j]
}
console.log(`soma: ${soma}`)
console.log(`media: ${soma/numero.length}`)

// let menor = Math.min(...numero);
// let maior = Math.max(...numero);

let menor = numero[0]
let maior = numero[0]

for (let k = 0; k < numero.length; k++) {
  if (numero[k] < menor) {
    menor = numero[k];
  }

  if (numero[k] > maior) {
    maior = numero[k];
  }
}

console.log(`menor numero: ${menor}`)
console.log(`maior numero: ${maior}`)

