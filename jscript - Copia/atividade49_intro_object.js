import { input, number } from "@inquirer/prompts"

let animais = []

let animal = {
    "raça":"cahcorro",
    peso: 30,
    idade: 12,
    nome: "Dino",
    dono: "Arley"
}

animais.push(animal)

console.log(`
    Ficha do paciente:
    
    nome: ${animal["nome"]}
    espécie: ${animal["raça"]}
    peso: ${animal["peso"]}
    idade: ${animal["idade"]}
    domo: ${animal["dono"]}
    
    `)

