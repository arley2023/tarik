import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

const a = await input({ message: 'Primeiro valor? '});
const b = await input({ message: 'Segundo valor? '});

console.log( 'Soma: ', a + b );
