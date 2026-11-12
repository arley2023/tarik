import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

let numerosecreto = Math.floor(Math.random() * 11); // 0 a 10
let palpite = 0;

do {
  palpite = await number({ message: 'Qual o seu palpite? (0 a 10)' });

}
while (palpite != numerosecreto);

// let numerosecreto = Math.floor(Math.random() * 11); // 0 a 10
// let palpite = 0;

// while (palpite != numerosecreto) {
//   palpite = await number({ message: 'Qual o seu palpite? (0 a 10)' });
// };

console.log(`Parabéns! Você acertou o número secreto: ${numerosecreto}`);
