import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

//1. Faça um programa usando while(true) que pede um número inteiro até que o usuário digite '0' Ao final exiba a soma dos números.

let soma = 0
let qtdNumeros = 0

while(true){
    let numero = await number({message:"Digite seu número"})

    soma += numero
    qtdNumeros += 1

    if(numero == 0 || qtdNumeros >= 10){
        break
    }
}

console.log(`A soma dos números é: ${soma}`);
console.log(`A quantidade de números digitados é: ${qtdNumeros}`);
  