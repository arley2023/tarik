import { input, number, password, confirm, select, checkbox } from '@inquirer/prompts';

//Revisão

// Crie um Sistema de RH

// 1. O programa deverá pedir as seguintes informações de um funcionário: Nome, CPF, Cargo, Departamento, Salário

// 2. Exiba uma ficha contendo as informações do funcionário cadastrado. Ex:
/*

--------------------------
FICHA DO FUNCIONÁRIO:

Nome: {nome}
Cargo: {cargo}
...
--------------------------
*/

// 3. Adicione validações para os campos, exiba um mensagem de erro caso alguma das informações fique vazia. Para o campo de salário verifique se o salário é um número positivo acima do salário mínimo (R$ 1621.00), para o campo CPF verifique se o tamanho do CPF é exatamente 11.

// 4. Caso o usuário cometa algum erro no cadastro das informações, mostre um erro e peça para a pessoa tentar novamente

//5. Permita que o usuário cadastre funcionários indefinidamente (while true), ao final de cada cadastro pergunte se o usuário deseja continuar.

//6. Ao final exiba o total da folha de pagamento, a média salarial e quantos funcionários foram cadastrados no total

//7. Ao final do programa exiba uma lista numerada com o nome e cargo de todos os funcionários cadastrados

//8. Adapte o código para exibir um menu de opções onde o usuário pode escolher entre Adicionar um novo funcionário ou ver os funcionários já cadastrados


const listanome = [];
const listacpf = [];
const listacargo = [];
const listadepartameto = [];
const listasalario = [];

while (true) {
    let nome
    let cargo
    let salario
    let departamento
    let cpf

    while (true) {
        nome = await input({ message: "Digite o nome do funcionário" })
        if (!nome) {
            console.error("NOME VAZIO DETECTADO. TENTE NOVAMENTE")
        } else {
            break
        }
    }

    while (true) {
        cpf = await input({ message: "Digite o cpf do funcionário" })

        if (cpf.length !== 11) {
            console.error("CPF COM TAMANHO INADEQUADO DETECTADO. CPF PRECISA CONTER 11 DIGITOS.")
        }
        else {
            break
        }

    }

    while (true) {
        cargo = await input({ message: "Digite o cargo do funcionário" })

        if (!cargo) {
            console.error("CARGO VAZIO DETECTADO. TENTE NOVAMENTE")
        } else {
            break
        }
    }

    while (true) {
        departamento = await input({ message: "Digite o departamento do funcionário" })

        if (!departamento) {
            console.error("DEPARTAMENTO VAZIO DETECTADO. TENTE NOVAMENTE")
        } else {
            break
        }
    }

    while (true) {
        salario = await number({ message: "Digite o salário do funcionário", step: 0.01 })
        if (salario < 1621) {
            console.error("VALOR DE SALÁRIO DIGITADO É INVÁLIDO. SALÁRIO MÍNIMO É R$ 1.621,00")
        } else {
            break
        }

    }

        listanome.push(nome);
        listacpf.push(cpf);
        listacargo.push(cargo);
        listadepartameto.push(departamento);
        listasalario.push(salario);
    
    let continuar
    
    while(true) {
        continuar = await input({message: "Deseja continuar entrada de dados s/n", required: (true) });
        if (continuar == "s" || continuar == "n")
            break;
    }


    if (continuar !== "s") {
        break
    }
}

console.log('┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐');
console.log(`│ Relação de Funcioánarios                                                                             │`);
console.log('├──────┬────────────────┬────────────────┬──────────────────┬────────────────┬─────────────────────────┤');
console.log(`│  ID  │  Nome          │  CPF           │  DEPARTAMENTO    │ CARGO          │  SALÁRIO                │`);
console.log('├──────┼────────────────┼────────────────┼──────────────────┼────────────────┼─────────────────────────┤');


for (let i = 0; i < listanome.length; i++) {
  console.log(`| ${(i+1).toFixed(0).padEnd(5)}│ ${listanome[i].padEnd(15)}│ ${listacpf[i]} │ ${listadepartameto[i].padEnd()}│ ${listacargo[i]}│ ${listasalario[i].toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}   │`);
}

console.log('├──────┴────────────────┴─────┬──────────┴─────────┬────────┴────────────────┴────┬────────────────────┤');
console.log(`│  TOTAL SALARIOS             │                    │  MÉDIA SALRIAL               │                    │`);
console.log('└─────────────────────────────┴────────────────────┴──────────────────────────────┴────────────────────┘');
console.log();
