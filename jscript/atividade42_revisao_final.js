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


let totalFolhaPagamento = 0
let totalFuncionarios = 0
let mediaSalario

let listaFuncionarios = ""

while (true) {
    console.log(`
        SEJA BEM VINDO AO SISTEMA RH XYZ

        MENU:

        1. Adicionar Funcionários
        2. Ver Resumo Da Folha

        0. Sair
        `)

    let op = await input({ message: "Digite uma opção do menu: " })

    if (op === "1") {

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

            console.log(`
FICHA DO FUNCIONÁRIO:

Nome: ${nome}

CPF: ${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}

Cargo: ${cargo}

Departamento: ${departamento}

Salário: ${salario.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
    
`)

            totalFolhaPagamento += salario
            totalFuncionarios += 1

            listaFuncionarios += `${totalFuncionarios}. ${nome} - ${cargo}\n`

            let finalizar

            while (true) {

                finalizar = await input({ message: "DESEJA FINALIZAR? (S/N)" })

                if (finalizar === "S" || finalizar === "N") {
                    break
                } else {
                    console.error("DIGITE APENAS (S) ou (N)")
                }
            }

            if (finalizar === "S") {
                console.warn("FINALIZANDO O CADASTRO DE FUNCIONÁRIOS...")
                break
            }
        }


    } else if (op == "2") {

        mediaSalario = totalFolhaPagamento / totalFuncionarios

        console.log(`
    RESUMO DA FOLHA


    Total a Pagar: ${totalFolhaPagamento.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
    Total Funcionários: ${totalFuncionarios}

    Média Salarial: ${mediaSalario.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
    
    LISTA DE FUNCIONÁRIOS:

${listaFuncionarios}
    `)

    }
    else if (op == "0") {
        console.warn("SAINDO DO PROGRAMA...")
        break
    }

    await input({ message: "TECLE ENTER PARA CONTINUAR" })

}