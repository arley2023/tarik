import { input, number, password, confirm } from '@inquirer/prompts';

const aceita = await confirm({ message: 'Aceita os termos? ' });
const novidades = await confirm({ message: 'Receber novidades?', default: false });
console.log(aceita, typeof aceita);

const senha = await password({ message: 'senha?', mask: '*'});
console.log(typeof senha);