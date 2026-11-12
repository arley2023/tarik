import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

let nometab = []
let contagem = 0
let nomes

while (nomes != "sair") {
  nomes = await input({message:"Digite um nome (ou 'sair' para encerrar): "});

  if (nomes == "" ) {
    console.log("voce nao digitou nada!")
  };
  
  if (nomes != "sair" && nomes != "" ) {
    nometab.push(nomes)
    contagem++;
  };
}

for (let i = 0; i < contagem; i++) {
  console.log(`${i + 1} - ${nometab[i]}`);
}

console.log(`Total de nomes: ${contagem}`)

console.log(`Nome aleatório: ${nometab[Math.floor((Math.random(nometab)*contagem))]}`)
