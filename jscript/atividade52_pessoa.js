import { input, number } from "@inquirer/prompts"

let nome=""
let idade=0
let cidade=""
let dados={}

nome = await input({message: "digite o nome: "})
idade = await number({message: "digite a idade: "})
cidade = await input({message: "digite a cidade: "})

dados.nome=nome
dados.idade=idade
dados.cidade=cidade

console.log()
console.log(dados)
console.log()

