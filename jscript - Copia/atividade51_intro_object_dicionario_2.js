import { input, number } from "@inquirer/prompts"

let pokemon = {
    "001":"Pikachu",
    "002":"Charizard",
    "003":"Bulbasaur",
    "004":"Squirtle",
    "005":"Charmander",
    "006":"Jigglypuff",
    "007":"Eevee",
    "008":"Snorlax",
    "009":"Mewtwo",
    "010":"Gengar"
}

console.log("Pokedex")
console.log()

for (const numeropokedex in pokemon) {
    console.log(`${numeropokedex} - ${pokemon[numeropokedex]}`)
}





// let pokemond = {nome:"Pikachu"}
// pokemon.push(pokemond)
// pokemond = {nome:"Charizard"}
// pokemon.push(pokemond)
// pokemond = {nome:"Bulbasaur"}
// pokemon.push(pokemond)
// pokemond = {nome:"Squirtle"}
// pokemon.push(pokemond)
// pokemond = {nome:"Charmander"}
// pokemon.push(pokemond)
// pokemond = {nome:"Jigglypuff"}
// pokemon.push(pokemond)
// pokemond = {nome:"Eevee"}
// pokemon.push(pokemond)
// pokemond = {nome:"Snorlax"}
// pokemon.push(pokemond)
// pokemond = {nome:"Mewtwo"}
// pokemon.push(pokemond)
// pokemond = {nome:"Gengar"}
// pokemon.push(pokemond)

// console.log("Lista de pokemons")

// console.log(pokemon)

// for (let i = 0; i < pokemon.length; i++) {
//     console.log(`${i+1}. ${JSON.stringify(pokemon[i]["nome"])}`)
// }

// for (let i = 0; i < pokemon.length; i++) {
//     console.log(`${i+1}. ${pokemon[i]["nome"]}`)
// }
