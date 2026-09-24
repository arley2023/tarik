import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

const nome = await input({ message: 'Qual seu nome? ', required: true });

const idade = await number({ message: "Idade",  min: 10, max: 80, required: true });

const altura = await input({ message: 'Qual sua altura? ', required: true, validate: (h) => h.includes(',') || "use virgula" });

const novidades = await confirm({ message: 'Receber novidades? ', default: false });

const plano = await select({
    message: 'Plano?',
    choices: [
        { name: 'básico', value: 1 },
        { name: 'médio', value: 2 },
        { name: 'avançado', value: 3 },
    ],
});

const interesses = await checkbox({
    message: 'Interesses?',
    choices: [
        { name: 'Espoetes', value: 'Esportes' },
        { name: 'Informática', value: 'Informática' },
        { name: 'Politica', value: 'Política' },
    ],
});

console.log("nome -> " + typeof nome);
console.log("idade -> " + typeof idade);
console.log("altura -> " + typeof altura);
console.log("novidades -> " + typeof novidades);
console.log("plano -> " + typeof plano);
console.log("interesses -> " + typeof interesses);

console.log('┌─────────────┬────────────────────────────────────┐');
console.log(`│ Nome        │ ${nome.padEnd(34)} │`);
console.log('├─────────────┼────────────────────────────────────┤');
console.log(`│ Idade       │ ${idade.toString().padEnd(34)} │`);
console.log('├─────────────┼────────────────────────────────────┤');
console.log(`│ Altura      │ ${altura.padEnd(34)} │`);
console.log('├─────────────┼────────────────────────────────────┤');
console.log(`│ Novidades   │ ${novidades.toString().padEnd(34)} │`);
console.log('├─────────────┼────────────────────────────────────┤');
console.log(`│ Plano       │ ${plano.toString().padEnd(34)} │`);
console.log('├─────────────┼────────────────────────────────────┤');
console.log(`│ Interesses  │ ${interesses[0].toString().padEnd(34)} │`);
console.log('├─────────────┼────────────────────────────────────┤');
console.log(`│ Interesses  │ ${interesses[1].toString().padEnd(34)} │`);
console.log('├─────────────┼────────────────────────────────────┤');
console.log(`│ Interesses  │ ${interesses[2].toString().padEnd(34)} │`);
console.log('└─────────────┴────────────────────────────────────┘');
console.log();