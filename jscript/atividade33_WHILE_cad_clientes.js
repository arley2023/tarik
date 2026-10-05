import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

console.log(); console.log("Lançamento"); console.log();
  
let nome = "";
let contagemclientes = 0;

while (nome != "sair") {
  nome = await input({message:"Digite o nome do cliente (ou 'sair' para encerrar): "});

  if (nome == "" ) {
    console.log("voce nao digitou nada!")
  };
  
  if (nome != "sair" && nome != "" ) {
    contagemclientes++;
  };
}
  console.log(`Total de clientes cadastrados: ${contagemclientes}`);
