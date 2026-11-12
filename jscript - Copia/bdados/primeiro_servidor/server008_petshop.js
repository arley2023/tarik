// Para iniciar o servidor, execute no terminal: node server.js

// academia /petshop
// id nome plano ativo
// { id: 1, nome: 'Ana', plano: 'anual', ativo: 'sim/nao'}
// oficina /ordens
// id placa swerviço status
// { id: 1, placa: 'XXXXXXX', serviço: 'troca de oleo', status: 'finalizado/na oficina'}

// petshop /pets
// id nome especie tutor
// { id: 1, nome: 'totó', especie: 'cachorro', tutor: 'Olavo'}


// Importa o framework Express para criar o servidor
import express from "express"

// Cria uma instância da aplicação Express
const app = express()

app.use((req, res, next) => {
    console.log("REQUISIÇÃO DETECTADA: ", req.method, req.url)
    next()
})

app.use(express.json())

let pets = [
  { id: 1, nome: 'totó', especie: 'cachorro', tutor: 'Olavo' },
  { id: 2, nome: 'Mimi', especie: 'gato', tutor: 'Mariana' },
  { id: 3, nome: 'Rex', especie: 'cachorro', tutor: 'Carlos' },
  { id: 4, nome: 'Luna', especie: 'gato', tutor: 'Juliana' },
  { id: 5, nome: 'Pipoca', especie: 'coelho', tutor: 'Pedro' },
  { id: 6, nome: 'Nina', especie: 'calopsita', tutor: 'Fernanda' }
];

let proximoId = 7;

// Define uma rota GET para a página inicial
app.get("/", (req, res) => {
    // Envia uma resposta em HTML quando a rota é acessada
    res.send("<h1>SEJA BEM VINDO</h1> <p>Este é meu primeiro servidor</p>")
})

app.get("/", (req, res) => {
    res.json({
        nome: "Tarik Ponciano",
        curso: "Técnico de Informática",
        projeto: "Meu Primeiro Servidor",
        versao: 1
    })
})

app.get("/petshop", (req, res) => {
    res.status(200).json(pets)
})

app.get("/petshop/:id", (req, res) => {
    let idpet = Number(req.params.id)

    let pet = pets.find((a) => a.id === idpet)

    if (pet){
        res.status(200).json(pet)
    }else {
        res.status(404).json({
            message:"ERRO NA REQUISIÇÃO",
            error:"PET NÃO ENCONTRADO"
        })
    }
    
})

app.post("/petshop", (req,res) =>{
    // let petNovo = req.body

    if (!req.body){
        return res.status(400).json({message:"NENHUMA INFORMAÇÃO RECEBIDA"})
    }

    let {nome, especie, tutor} = req.body

    if (!nome || !especie || !tutor){
        res.status(400).json({message:"Não foi possível cadastrar o pet.", error:"NÃO FOI INFORMADO NOME, ESPÉCIE OU TUTOR!"}) 
    } else{

        let petNovo = {id: proximoId, nome, especie, tutor}
        proximoId++

        pets.push(petNovo)

        res.status(201).json({"pet-cadastrado":petNovo, message:"CADASTRO REALIZADO COM SUCESSO"})

    }
})

app.put("/petshop/:id", (req,res) => {
    let idpet = Number(req.params.id)

    let pet = pets.find((a) => a.id === idpet)

    if (!pet){
        res.status(404).json({message:"ID Informado Não Existe"})
    }
    else{

        if (!req.body){
            return res.status(400).json({message:"NÃO FORAM ENVIADAS INFORMAÇÕES PARA ATUALIZAR"})
        }

        let {nome, especie, tutor} = req.body

        if (!nome || !especie || !tutor){
            res.status(400).json({message:"FALTAM INFORMAÇÕES PARA EDIÇÃO"})
        }else{
            
            pet.nome = nome
            pet.especie = especie
            pet.tutor = tutor

            res.status(200).json({message:"PET ATUALIZADO COM SUCESSO", dados:pet})
        }
    }
})

app.delete("/petshop/:id", (req,res) => {
    let idpet = Number(req.params.id)

    let pet = pets.find((a) => a.id === idpet)

    if (!pet){
        res.status(404).json({message:"ID Informado Não Existe"})
    }
    else{
        let posicaopet = pets.indexOf(pet)
        pets.splice(posicaopet, 1)

        res.status(200).json({message: "pet removido com sucesso", removido: pet })
    }
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    // Exibe no terminal o endereço para acessar o servidor
    console.log("SERVIDOR RODANDO NO ENDEREÇO -> http://localhost:3000")
})