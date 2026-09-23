import { input, number, password, confirm, select } from '@inquirer/prompts';

const cor = await select({
    message: 'Cor Favorita?',
    choices: ['azul', 'verde', 'vermelho'],
});

console.log(cor, typeof cor);
