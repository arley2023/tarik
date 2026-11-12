import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log("\n\n");

const nome = await input({
  message: "Seu nome: ",
});

console.log(nome.length);
console.log(nome.toUpperCase());
console.log(nome.slice(0, 9));
console.log(nome.indexOf('a'));
console.log(nome.includes('o super'));
console.log(nome);
console.log(nome.replace('o super', 'o magnifico'));

console.log(nome.repeat(3));
console.log(nome.trim());
console.log(nome.replaceAll('a', 'A'));
console.log(nome.at(-3));
console.log(nome.startsWith('magn'));

console.log("\n\n");

console.log('vamos tratar o numero 5.3');
const nr = 5.3

console.log(Math.round(nr));
console.log(Math.floor(nr));
console.log(Math.ceil(nr));
console.log(Math.trunc(nr));
console.log(Math.max(nr.math.round(nr), 6, 2));
console.log(Math.min(nr.math.round(nr), 6, 2));
console.log(Math.sqrt(nr));
console.log(Math.abs(nr));
console.log(Math.PI(nr));
console.log(Math.random(nr));
console.log(Math.floor(math.random(nr)));
