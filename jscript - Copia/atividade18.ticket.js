import { input, number, confirm, select } from '@inquirer/prompts';

const brl = { style: 'currency', currency: 'BRL' };

const cliente = await input({ message: 'Nome do Cliente: ', required: true });

const produto = await select({
    message: 'Produto? ',
    choices: [
        { name: 'Fone de Ouvido', value: 'fone de ouvido' },
        { name: 'Joystick', value: 'Joystick' },
        { name: 'Câmera', value: 'Câmera' },
    ],
     require: true,
});

const tablela = [("fone de ouvido", 350.03), ("Joystick", 220.57), ("Câmera", 110)];

const quantidade = await input({ message: 'Quantidade? ', required: true });

const cupom = await confirm({
  message: "Tem cupom de desconto? [y/N] -> ",
  default: false,
});

const parcelas = await select({
    message: 'Quantas parcelas? ',
    choices: [
        { name: '1x', value: 1 },
        { name: '3x', value: 3 },
        { name: '6x', value: 6 },
    ],
     require: true,
});




// / TODO: produto, quantidade, cupom (confirm) e parcelas (select)
// / TODO: subtotal, desconto (ternário), total e valor da parcela
// / TODO: imprimir o recibo com padEnd, padStart e toLocaleString('pt-BR', brl)


// const idade = 20;
// const apelido = '' | 'sem apelido'; / | troca qualquer falsy
// const pontos = 0 ? 10; / ? só troca null/undefined
// const tipo = idade = 18 ? 'adulto' : 'menor'; / ternário




// ====================================
// RECIBO DE COMPRA
// ====================================
// Cliente Ana Souza
// Produto Fone Bluetooth
// Qtd 3 x R$ 129,90
// Subtotal R$ 389,70
// Desconto R$ 38,97
// Total R$ 350,73
// 3x de R$ 116,91
// ====================================

console.log();
console.log('┌──────────────────────────────────────────────────┐');
console.log('│                RECIBO DE COMPRA                  │');
console.log('├──────────────────────────────────────────────────┤');
console.log(`│ Cliente ${cliente.toString().padEnd(34 - length(cliente))} │`);

console.log("Preço".padEnd(15) + preco.toLocaleString("pt-BR", brl).padStart(20));

console.log(`│ Produto ${produto.toString().padStart(4)} │`);
console.log(`│ Quantidade ${quantidade.toString().padStart(4)} │`);

// console.log(`│ Subtotal ${idade.toString().padEnd(34)} │`);
// console.log(`│ Desconto ${idade.toString().padEnd(34)} │`);
// console.log(`│ Total ${idade.toString().padEnd(34)} │`);


// console.log(`│ ${parcelas) + 'x de ' ${.padEnd(34)} │`);
console.log('└──────────────────────────────────────────────────┘');
console.log();