import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

// const cor = await select({
//     message: 'Cor Favorita?',
//     choices: ['azul', 'verde', 'vermelho'],
// });

// console.log(cor, typeof cor);


// const parcelas = await select({
//     message: 'Parcelas?',
//     choices: [
//         { name: 'À vista', value: 1 },
//         { name: '3x sem juros', value: 3 },
//         { name: '12x sem juros', value: 12 },
//     ],
// });

// console.log(parcelas, typeof parcelas);


// const opcoes = await checkbox({
//     message: 'Extras?',
//     choices: [
//         { name: 'Embalagem', value: 'Embalagem', checked: true },
//         { name: 'Cartão', value: 'cartao' },
//         { name: 'Entrega expressa', value: 'expressa' },
//     ],
// });

// console.log(opcoes);

console.log();
console.log('='.repeat(35));
console.log();
const tamanho = await select({
    message: 'Tamanhos?',
    choices: [
        { name: 'P', value: 'P' },
        { name: 'M', value: 'M' },
        { name: 'G', value: 'G' },
    ],
});

console.log();
console.log('='.repeat(35));
console.log();
const adicionais = await checkbox({
    message: 'Adicionais?',
    choices: [
        { name: 'Bacon', value: 'bacon' },
        { name: 'Ovo', value: 'ovo' },
        { name: 'Queijo', value: 'queijo' },
    ],
});
console.log();
console.log('='.repeat(35));
console.log();
console.log();


console.log('='.repeat(70));
console.log('| Pedido de Hamburguer - Tamanho e Extras'.padEnd(69) + '|');
console.log('='.repeat(70));
console.log();
console.log('|  ' + tamanho.padEnd(16) + ' | ' + adicionais[0].padStart(15) + adicionais[1].padStart(15) + adicionais[2].padStart(15)  + '  |');
console.log();
console.log('='.repeat(70));

