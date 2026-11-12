import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log();
console.log("Alunos");
console.log();

let mensagemfinal = "";
  
for (let i = 1; i <= 5; i++) {
    const nome = await input({
        message: `Digite o nome do aluno ${i}: `
    })

    console.log(`Seja bem vindo ${nome} - ${i}`);

    if (i == 5) {
        mensagemfinal += `${i}, ${nome}`
    }else{
        mensagemfinal += `${i}, ${nome}\n`
    }
};

console.log(mensagemfinal);





// for (let i = 1; i <= 5; i++) {
//     const nome = await input({
//         message: `Digite o nome do aluno ${i}: `
//     });
//     console.log(`Seja bem vindo ${nome} - ${i}`);
// }
