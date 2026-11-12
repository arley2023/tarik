import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

// Exercício 1 — Frete grátis no Mercadinho Dona Socorro
// Dona Socorro oferece frete grátis para compras a partir de R$ 150,00. Abaixo disso, o fretecusta R$ 12,00.
// Entrada:
// valor da compra.
// Saída:
// "Frete grátis!" ou "Frete: R$ 12,00 — Total: R$ X".
// Teste com:
// 149.99, 150 e 200.



// console.log();
// console.log("Frete grátis no Mercadinho Dona Socorro Dona Socorro oferece frete grátis para compras a partir de R$ 150,00. Abaixo disso, o fretecusta R$ 12,00.");

// const valorcompra = await number({
//   message: "Valor da compra: "
// });

// if(valorcompra < 150){
//     console.log(`Sua teve o valor de ${(valorcompra)} e nao terá frete grátis`)
// }else if(valorcompra >= 150){
//     console.log(`Sua teve o valor de ${(valorcompra)} e terá frete grátis`)
// }



// -------------------------------------------------------------------------------

// Exercício 2 — Classificação indicativa do Cine Iracema
// O cinema precisa verificar se o cliente pode assistir a um filme com classificação 16 anos.
// Entrada:
// idade do cliente.
// Saída:
// "Entrada liberada" ou "Entrada não permitida para menores de 16 anos".
// Reflexão:
// qual idade é o caso-limite desse problema? Por que ele deve ser testado?


// console.log();
// console.log("Classificação indicativa do Cine Iracema");

// const idadecliente = await number({
//   message: "Idade do cliente: "
// });

// if(idadecliente <= 16){
//     console.log(`Você tem ${(idadecliente)} anos e sua entrada não é permitida.`)
// }else {
//     console.log(`Você tem ${(idadecliente)} anos e tem acesso liberado`)
// }



// -------------------------------------------------------------------------------

// Exercício 3 — Par ou ímpar na senha da fila
// A farmácia chama senhas pares no Caixa 1 e ímpares no Caixa 2.
// Entrada:
// número da senha.
// Saída:
// "Dirija-se ao Caixa 1" ou "Dirija-se ao Caixa 2".
// Dica:
// use o operador de resto
// %
// .
// Reflexão:
// reescreva a solução usando o operador ternário.
// Operador 
// Significado
// Exemplo
// Resultado
// &&
// E (as duas precisam ser verdadeiras)
// idade >= 18 && temCNH
// depende
// ||
// OU (basta uma ser verdadeira)
// ehVip || total > 200
// depende
// !
// NÃO (inverte o valor)
// !estaBloqueado
// depende
// Lista de Exercícios – Estruturas Condicionais IF/ELSE em JavaScript
// Page 2 of 4

// console.log();
// console.log("Chamada por senha");

// const senha = await number({
//   message: "Digite sua senha: "
// });

// if((senha%2)===1){
//     console.log(`Senha número ${(senha)} dirija-se ao Caixa 2.`)
// }else {
//     console.log(`Senha número ${(senha)} dirija-se ao Caixa 1.`)
// }



// -------------------------------------------------------------------------------

// Exercício 4 — Estoque mínimo da Lanchonete Sabor da Praia
// Quando a quantidade de pão fica abaixo de 20 unidades, o sistema deve alertar para fazerum novo pedido.
// Entrada:
// quantidade em estoque.
// Saída:
// "Atenção: faça um novo pedido!" ou "Estoque adequado".
// Reflexão:
// que outra regra do negócio poderia ser adicionada (ex.: estoque zerado)?

// console.log();
// console.log("Cotrole de Estoque");

// const paes = await number({
//   message: "Digite a quantidade de Pães em estoque: "
// });

// if(paes < 20){
//     console.log(`Você tem ${(paes)} em estoque. Atenção faça um novo pedido`)
// }else {
//     console.log(`Você tem ${(paes)} em estoque. Seu estoque está adequado`)
// }

// -------------------------------------------------------------------------------



// Nível 2 — Várias regras ao mesmo tempo (else if, &&, ||)
// Objetivo: encadear condições por faixas e combinar critérios com operadores lógicos.Indicadores 1 a 4.

// Exercício 5 — Boletim da Escola de Idiomas Speak Up
// A escola classifica o aluno pela média de duas notas (0 a 10):
// nota 1 e nota 2.
// Saída:
// média com uma casa decimal e a situação.
// Desafio extra:
// exiba "Nota inválida" se alguma nota for menor que 0 ou maior que 10.
// Reflexão:
// a ordem dos
// else if
// importa? Teste invertendo a ordem e explique o queacontece.



console.log();
console.log("Boletim da Escola de Idiomas Speak Up");

const nota1 = Number(
  (await input({ message: "Digite a primeira nota: " }))
    .replace(',', '.')
);

const nota2 = Number(
  (await input({ message: "Digite a segunda nota: " }))
    .replace(',', '.')
);

const media = (nota1 + nota2) / 2;

if (media < 7) {
  console.log(`Sua média é de ${media.toFixed(1)} REPROVADO`);
} else {
  console.log(`Sua média é de ${media.toFixed(1)} APROVADO`);
}




// -------------------------------------------------------------------------------

// Exercício 6 — Plano ideal na Academia Corpo em Movimento
// Entrada:
// quantidade de treinos por semana.
// Saída:
// plano e mensalidade; "Quantidade inválida" para valores fora de 1 a 7.
// Média
// Situação
// 7,0 ou mais - Aprovado
// de 5,0 a 6,9 - Recuperação
// abaixo de 5,0 - Reprovado
// Treinos por semana
// Plano sugerido
// Mensalidade
// 1 a 2
// Básico
// R$ 79,90
// 3 a 4
// Intermediário
// R$ 99,90
// 5 a 7
// Livre
// R$ 129,90
// Lista de Exercícios – Estruturas Condicionais IF/ELSE em JavaScript


// console.log();
// console.log("Plano ideal na Academia Corpo em Movimento");

// const plano = await number({
//   message: "Digite quantos treinos na semana: ",
//   min: 0,
//   max: 7
// });

// if (plano <= 2) {
//   console.log(`Seu plano ideal é o básico de R$ 79,90`);
// } else if (plano >= 3 && plano <= 5) {
//   console.log(`Seu plano ideal é o intermediário de R$ 99,90`);
// } else {
//   console.log(`Seu plano ideal é o Plano Livre de R$ 129,90`);
// }



// -------------------------------------------------------------------------------

// Exercício 7 — Desconto no Mercadinho Dona Socorro
// O cliente ganha 10% de desconto se for cadastrado no programa de fidelidade e a compra for acima de R$ 100,00. Clientes com mais de 60 anos ganham 5% em qualquer compra. Se atender às duas regras, vale o maior desconto.
// Entrada:
// valor da compra, se é cadastrado (
// true
// /
// false
// ) e idade.
// Saída:
// percentual aplicado e valor final.
// Reflexão:
// em quais situações você usou &&
// e em quais usou // || // ? Por quê?


// console.log();
// console.log("Desconto no Mercadinho Dona Socorro - O cliente ganha 10% de desconto se for cadastrado no programa de fidelidade");

// const idade = await number({
//   message: "Digite sua idade: ",
// });

// const valor = await Number(
//   (await input({ message: "Digite a primeira compra: " }))
//     .replace(',', '.')
// );

// const fidelidade = await confirm({
//   message: "Tem cadastro no programa de fidelidade? [y/N] -> ",
//   default: false,
// });

// if (fidelidade === true && valor > 100) {
//     console.log(`Você ganhou um desconto de R$ ${valor * 0.1} e pagará apenas R$ ${(valor - (valor * 0.1)).toFixed(2)}`);
// } else 
//     if (idade >= 60 && fidelidade !== true || valor < 100) {
//         console.log(`Você tem mais de 60 anos e ganhou um desconto de R$ ${(valor * 0.05).toFixed(2)} e pagará apenas R$ ${valor - (valor * 0.05).toFixed(2)}`);
//     } else {
//         console.log("você nao tem descontos")
// }


// -------------------------------------------------------------------------------

// Exercício 8 — Empréstimo de livros na Biblioteca Comunitária
// Um leitor pode pegar um livro emprestado se não tiver livros atrasados
// e tiver menos de 3 livros em mãos. Leitores com cadastro de professor podem ter até 5 livros.
// Entrada:
// tem atraso (
// true
// /
// false
// ), quantidade de livros em mãos, é professor(
// true
// /
// false
// ).
// Saída:
// "Empréstimo autorizado" ou o motivo da recusa.
// Dica:
// use o operador
// !
// para testar a ausência de atraso.



const atraso = await confirm({
  message: "Possui livros em atraso [SIM] ou [NÃO]:", 
  default: false})

const qtd_livros = await number({
  message: "Quantidade de Livros:",
  min: 0
})

const ehProfessor = await confirm({
  message: "Professor [SIM] ou [NÃO]:", 
  default: false})

if(!atraso && qtd_livros <= 3){
  console.log('Empréstimo Concedido!')
}else if(!atraso && qtd_livros <= 5 && ehProfessor){
  console.log('Empréstimo Concedido!')
}else{
  console.log('Empréstimo Recusado!')
}






// -------------------------------------------------------------------------------

// Exercício 9 — Tarifa do estacionamento do shopping
// Entrada:
// tempo em minutos.
// Saída:
// valor a pagar.
// Dica:
// pesquise
// Math.ceil()
// para arredondar a hora adicional.


const minutos = await number({message: 'Tempo em minutos: '})

if(minutos <= 15){
  console.log('Estacionamento grátis!')
}else if(minutos <= 180){ //3 horas
  console.log('Tarifa Estacionamento: R$8,00')
}else{
  let total = 8 + (Math.ceil(minutos/60) * 3)
  console.log(`Tarifa Estacionamento: R$${total.toFixed(2)}`)
}