import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

//Revisão

// Crie um Sistema de RH

// 1. O programa deverá pedir as seguintes informações de um funcionário: Nome, CPF, Cargo, Departamento, Salário


let nome = "";
let cpf = "";
let cargo = "";
let departamento = "";
let salario = "";

while(true){

  while(true) {
    nome = await input({ message: 'Qual o seu nome? ', required: true });
    if (nome == "") {
      await input({message:"DIGITE SEU NOME - TECLE ENTER PARA CONTINUAR"});
      } else {
        break;
        }
  }
  if(nome === "sair"){
    break;
    }
  while(true) {
    cpf = await input({ message: 'Digite seu CPF ? ' });
      if (cpf === "" || cpf.length != 11) {
      await input({message:"DIGITE UM CPF VÁLIDO - TECLE ENTER PARA CONTINUAR"});
      } else {
        break;
      }
    }
  while(true) {
    cargo = await input({ message: 'Digite seu cargo ? ' });
      if (cargo === "") {
      await input({message:"DIGITE O SEU CARGO - TECLE ENTER PARA CONTINUAR"});
      } else {
        break;
      }
    }
  while(true) {
    departamento = await input({ message: 'Digite seu departamento ? ' });
      if (departamento === "") {
      await input({message:"DIGITE O SEU DEPARTAMENTO - TECLE ENTER PARA CONTINUAR"});
      } else {
        break;
      }
    }
  while(true) {
    salario = await input({ message: 'Digite seu salario ? ' });
      if (salario.trim() === "" || isNaN(Number(salario))) {
      await input({message:"DIGITE O SEU SALÁRIO - TECLE ENTER PARA CONTINUAR"});
      } else {
        break;
      }
    }
  }





//       let nome = "";

// while(true){
//   if(nome === "sair")
//   break;
//   while(true) {
//     let nome = await input({ message: 'Qual o seu nome? ' });
//     if (nome == "" || nome == "sair") {
//       await input({message:"DIGITE SEU NOME - TECLE ENTER PARA CONTINUAR"})
//       break;
//     } else {
//       while(true) {
//         let cpf = await input({ message: 'Digite seu CPF ? ' });
//         if (cpf === "" || cpf.length() != 11); {
//          await input({message:"DIGITE UM CPF VÁLIDO - TECLE ENTER PARA CONTINUAR"});
//         } else {
//           while(true) {
//             let cargo = await input({ message: 'Qual o seu cargo? ' });
//             if (cargo == "") {  
//               await input({message:"DIGITE SEU CARGO - TECLE ENTER PARA CONTINUAR"});
//             } else {
//               while(true) {
//                 let departamento = await input({ message: 'Qual o seu departamento? ' });
//                 if (separtamento == "") {  
//                   await input({message:"DIGITE O DEPARTAMENTO - TECLE ENTER PARA CONTINUAR"});
//               } else {
//                 while(true) {
//                 let salario = await input({ message: 'Qual o seu salario? ' });
//                 if (salario.trim() === "" || isNaN(Number(salario)))
//                   await input({message:"DIGITE O SALÁRIO - TECLE ENTER PARA CONTINUAR"});
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }   }}}


