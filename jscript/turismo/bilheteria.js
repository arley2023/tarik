// Implementar um sistema de Cinema
import { input, number } from "@inquirer/prompts"

function verCatalogo() {
    console.log("CATÁLOGO DE FILMES")
    for (let i = 0; i < filmes.length; i++) {
        
        let filmeAtual = filmes[i]
        console.log(`${filmeAtual.id} | ${filmeAtual.titulo} | ${filmeAtual.duracao} min | ${filmeAtual.classificacao} | ${filmeAtual.sessoes.join(" - ")}`)
    }
}



let filmes = [
    {
        id: 1,
        titulo: "Star Wars 1: Ameaça Fantasma",
        duracao: 120,
        classificacao: "13+",
        sessoes: ["13:30", "15:30", "18:00"]
    },
    {
        id: 2,
        titulo: "Star Wars 2: Ataque dos Clones",
        duracao: 142,
        classificacao: "13+",
        sessoes: ["14:00", "17:00", "20:30"]
    },
    {
        id: 3,
        titulo: "Star Wars 3: A Vingança dos Sith",
        duracao: 140,
        classificacao: "14+",
        sessoes: ["12:45", "16:15", "19:45", "22:00"]
    }
]

let idAtual = 4

while (true) {
    console.log(`===== CINEMA FILMES ANIMAIS =====
        1 - Cadastrar filme
        2 - Ver todos os filmes
        3 - Ver um filme
        4 - Editar filme
        5 - Remover filme
        0 - Sair`)

    let op = await input({ message: "DIGITE A OPÇÃO DESEJADA: " })

    if (op === "1") {
        console.log("CADASTRO DE FILMES")

        let titulo = await input({ message: "Digite o título do filme:" })
        let duracao = await number({ message: "Digite a duração do filme em minutos:" })
        let classificacao = await input({ message: "Digite a classificação do filme:" })
        let sessoes = await input({ message: "Digite os horários da sessão, separados por '-':" }).split("-")

        let novoFilme = {
            id: idAtual,
            titulo: titulo,
            duracao: duracao,
            classificacao: classificacao,
            sessoes: sessoes
        }

        filmes.push(novoFilme)
        console.log("FILME CADASTRADO COM SUCESSO")
        idAtual++

    } else if (op === "2") {
        console.log("CATÁLOGO DE FILMES")
        for (let i = 0; i < filmes.length; i++) {
            let filmeAtual = filmes[i]
            console.log(`${filmeAtual.id} | ${filmeAtual.titulo} | ${filmeAtual.duracao} min | ${filmeAtual.classificacao} | ${filmeAtual.sessoes.join(" - ")}`)
        } // IMPLEMENTADO NA FUNÇÃO verCatalogo()

    } else if (op === "3") {

        verCatalogo()
        let idFilme = await number({message:"DIGITE O ID DO FILME DESEJADO:"})

        // let filmeSelecionado = undefined

        // for (let i = 0; i < filmes.length; i++){
        //     if(idFilme === filmes[i].id){
        //         filmeSelecionado = filmes[i]
        //     }
        // }

        let filmeSelecionado = filmes.find((filme) => filme.id === idFilme)

        if(!filmeSelecionado){
            console.warn("ID DIGITADO NÃO CORRESPONDE A UM FILME!")
        }else{
            console.log(`
            FICHA DO FILME

            ID: ${filmeSelecionado.id}
            Titulo: ${filmeSelecionado.titulo}
            Classificação: ${filmeSelecionado.classificacao}
            Duracao: ${filmeSelecionado.duracao}
            Sessoes: ${filmeSelecionado.sessoes.join(" - ")}    
                `)
        }


    } else if (op === "4") {

    } else if (op === "5") {

    } else if (op === "0") {
        console.log("SAINDO DO SISTEMA DE FILMES")
        break
    } else {
        console.warn("DIGITE UMA OPÇÃO VÁLIDA")
    }

    await input({ message: "TECLE ENTER PARA CONTINUAR" })
}