import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

let numero = []

for (let i = 0; i <= 4; i++) {
  let numeroadd = await input({message:"Digite um número: "})
  numero.push(numeroadd)
}

console.log(`array: ${numero}`)