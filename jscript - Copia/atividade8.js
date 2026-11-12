import { input, number, password } from '@inquirer/prompts';

// const name = await input({ message: 'Qual o seu nome? ' });

// const idade = await number({ message: "Idade",  min: 10, max: 120, required: true });

// await number({
//     message: "Idade",
//     min: 10,
//     max: 120,
//     required: true,
// });


//    TEXTO LIVRE

// const cidade = await input({ message: 'Cidade?', default: 'São Paulo' });

// const login = await password({ message: 'Login:', required: true });

const nome = await input({ message: 'Qual o seu nome? ' });
const idade = await number({ message: "Idade",  min: 10, max: 120, required: true });
// usar CRASE pra usar ${}
console.log(`Olá, ${nome}! ano que vem você terá ${idade + 1} anos!`);
// abaixo é CONCATENAÇÃO
console.log("nome -> " + typeof nome);
console.log("idade -> " + typeof idade);
