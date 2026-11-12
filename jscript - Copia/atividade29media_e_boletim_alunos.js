import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log();
console.log("Alunos");
console.log();

const nome = await input({
    message: "Digite o nome do aluno: "
});

const qtnotas = await number({
        message: "Digite a quantidade de notas para tirar a média (4 a 8): ",
        min: 4,
        max: 8
  });

const listaNotas = [];
let mediaf = "";

for (let i = 1; i <= qtnotas; i++) {
  let nota = await number({ message: `Digite a nota ${i}: `, step: 0.1, min: 0, max: 10, required: true });
  listaNotas.push(nota);
}

let media = listaNotas.reduce((acc, nota) => acc + nota, 0) / listaNotas.length;

console.log(`Sua média é de ${media.toFixed(1).replace('.', ',')}`);

if (media >= 7) {
  mediaf = "Aprovado";
}else if (media >= 5) {
  mediaf = "Recuperação";
} else {
  mediaf = "Reprovado";
} 


console.log('┌──────────────────────────────────────────────────┐');
console.log(`│ Aluno: ${nome.padEnd(41)} │`);
console.log('├──────────────────────────────────────────────────┤');
console.log(`│ Média: ${media.toFixed(1).replace('.', ',').padEnd(41)} │`);
console.log(`│ Situação: ${mediaf.padEnd(38)} │`);
console.log('├──────────────────────────────────────────────────┤');

for (let i = 0; i < listaNotas.length; i++) {
  console.log(`│ Nota ${i + 1}: ${listaNotas[i].toFixed(1).replace('.', ',').padEnd(40)} │`);
}
console.log('└──────────────────────────────────────────────────┘');
console.log();
