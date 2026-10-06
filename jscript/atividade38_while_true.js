import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

//1. Faça um programa usando while(true) que pede um número inteiro até que o usuário digite '0' Ao final exiba a soma dos números.

let soma = 0;

while (true) {
  let numero = await number({ message:"Digite um número inteiro (0 para sair): " });

  if (numero === 0) {
    break;
  }

  soma += numero;
}

console.log(`A soma dos números é: ${soma}`);
