import { input, number } from "@inquirer/prompts"

let alunos = []
let notas = []

while (true){
    console.log(`BEM VINDO AO SISTEMA ESCOLAR XYZ
        
    MENU:
    
    1. CADASTRAR ALUNO
    2. VER RESULTADOS DA TURMA
    
    0. SAIR`)

    let op = await input({message:"DIGITE O NÚMERO DA OPÇÃO DESEJADA:"})


    if (op === "1"){
        console.log("CADASTRO DE ALUNOS")
        let nome
        while(true){
            nome = await input({message:"Digite o nome do aluno:"})
            if (!nome.trim()){
                console.warn("NOME DEVE SER PREENCHIDO! TENTE NOVAMENTE")
                continue
            }else{
                break
            }
        }

        let nota = await number({message:"Digite a nota do aluno:", step:0.1})

        alunos.push(nome)
        notas.push(nota)

        console.log("NOVO ALUNO CADASTRADO")

    }else if (op === "2"){

        console.log("LISTA DE ALUNOS:")

        let somaNotas = 0

        for (let i = 0; i < alunos.length; i++){
            console.log(`${i+1}. ${alunos[i]} - ${notas[i].toFixed(1)}`)
            somaNotas += notas[i]
        }

        let mediaTurma = somaNotas/notas.length

        console.log(`Média da Turma: ${mediaTurma.toFixed(2)}`)

    }else if (op === "0"){
        console.warn("PROGRAMA SENDO ENCERRADO...")
        break
    }else{
        console.error("DIGITE UMA OPÇÃO VÁLIDA!")
    }

    await input({message:"TECLE ENTER PARA CONTINUAR!"})
}
