import { input, number, password, confirm, select, checkbox } from "@inquirer/prompts";

while (true) {

const charadas = await select({
    message: 'Selecione a Charada que você sabe a resposta?',
    choices: [
        { name: 'O que é, o que é: cai em pé e corre deitado? ', value: 1 },
        { name: 'O que é, o que é: quanto mais tira, maior fica? ', value: 2 },
        { name: 'O que é, o que é: tem dentes, mas não morde? ', value: 3 },
    ],
});

console.log();
const resposta = await input({ message: 'Digite a Resposta da Charada: ' });
console.log();

if (charadas === 1 && resposta.toLowerCase() === 'chuva') {
    console.log('Parabéns, você acertou a resposta da charada!');
} else if (charadas === 2 && resposta.toLowerCase() === 'buraco') {
    console.log('Parabéns, você acertou a resposta da charada!');
} else if (charadas === 3 && resposta.toLowerCase() === 'pente') {
    console.log('Parabéns, você acertou a resposta da charada!');
} else {
    console.log('Que pena, você errou a resposta da charada!');
};
}