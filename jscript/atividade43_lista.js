import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

// const frutas = ["Uva", "Maçã", "Pêssego"]

// frutas = ["Uva", "Maçã", "Limão"]

// console.log(frutas[2])


// 1. Crie uma lista de animais que contenha pelo menos 5 animais. Imprima a lista completa na tela.

// 2. Permita que o usuário escreva o nome de um novo animal e adicione na lista. Imprima a nova lista. (.push())

// 3. Imprima o primeiro animal da lista, o último animal da lista e o animal da posição 3

// 4. Imprima a lista de animais de forma numerada. (Use o for) 
// Ex:
// 1. Leão
// 2. Cachorro
// ...

// 5. Imprima somente os animais que começarem com vogais

const animais = ["cachorro", "gato", "passaro", "sapo", "peixe"]

while(true) {
for (let i = 0; i < animais.length; i++) {
  console.log(`animal: ${animais[(i)]}`);
}

let maisanimal = await input({ message: "adicione mais um animal: "});
animais.push(maisanimal)
};