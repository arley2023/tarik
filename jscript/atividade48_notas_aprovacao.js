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
        let nota = await number({message:"Digite a nota do aluno (0 a 10):", step:0.1, min: 0, max: 10});
            
        alunos.push(nome)
        notas.push(nota)

        console.log("NOVO ALUNO CADASTRADO")

    }else if (op === "2"){
        console.log("LISTA DE ALUNOS:")
        for (let i = 0; i < alunos.length; i++){
            console.log(`${i+1}. ${alunos[i]} - ${notas[i].toFixed(1)} Situação: ${situa(notas[i])}`)}
        let mediaTurma = notas.reduce((soma,nota) => soma+nota)/notas.length
        console.log(`Média da Turma: ${mediaTurma.toFixed(2)}`)

    }else if (op === "0"){
        console.warn("PROGRAMA SENDO ENCERRADO...")
        break
    }else{
        console.error("DIGITE UMA OPÇÃO VÁLIDA!")
    }
    await input({message:"TECLE ENTER PARA CONTINUAR!"})
}

function situa(notax) {
    if (notax <= 10 && notax >= 7) {
        return "Aprovado"
    } else {
        if (notax < 7 && notax >= 4) {
            return"reuperação"
        } else {
            return "Reprovado"
        }
    }
}