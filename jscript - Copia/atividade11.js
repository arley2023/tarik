import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

const email = await input({
    message: 'e-mail?',
    validate: (valor) => valor.includes('@') || "digite um email valido",
});

const par = await number({
    Message: 'um numero par = ',
    required: true,
    validate: (n) => n % 2 === 0 || 'so numeros pares',
})