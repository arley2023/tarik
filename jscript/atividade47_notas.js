import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

let nometab = []
let notatab = []
let nomes
let notas
let selecao = ""

while (selecao != "sair") {
  selecao = await input({message:
    "-----Cadastro de notas-----"
    "1 - Cadastrar Aluno"
    "2 - Ver Notas"
    "0 - Sair"
  });

  if (selecao == "" ) {
    console.log("voce nao digitou nada!")
  };
  
  if (selecao == "1" ) {
    cadastro()
  };
  
  if (selecao == "2" ) {
    ver()
  };
    
  if (selecao = "0") {
    break;
  };
}

function cadastro() {

while (nomes != "sair") {
  nomes = await input({message:"Digite um nome (ou 'sair' para encerrar): "});

  if (nomes == "" ) {
    console.log("voce nao digitou nada!")
  };
  
  if (nomes != "sair" && nomes != "" ) {
    nometab.push(nomes)
  };
}

while (notas >= 0) {
  notas = await number({message:"Digite uma nota: "});

  if (notas < 0 ) {
    console.log("voce digitou nota inválida!")
   } else {
    notatab.push(notas)
    };
  }
}

function ver() {
  
}


let nometab = []
let contagem = 0
let nomes
let notas
let selecao = ""
