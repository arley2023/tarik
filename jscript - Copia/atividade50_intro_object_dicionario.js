import { input, number } from "@inquirer/prompts"

let funcionario = []

let animal = {
    nome:"aaaaaaa",
    idade: 32,
    cargo: "Gerente",
    setor: "almoxarifado",
    filial: "centro"
}

// animais.push(animal)

console.log(`
    Ficha do funcionário:
    
    nome: ${animal["nome"]}
    idade: ${animal["idade"]}
    cargo: ${animal["cargo"]}
    setor: ${animal["setor"]}
    filial: ${animal["filial"]}
    
    `)

