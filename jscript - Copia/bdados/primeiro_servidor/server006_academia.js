// Para iniciar o servidor, execute no terminal: node server.js

// academia /clientes
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

let alunos = [
  { id: 1, nome: 'Ana', plano: 'anual', ativo: 'sim' },
  { id: 2, nome: 'Carlos', plano: 'mensal', ativo: 'sim' },
  { id: 3, nome: 'Mariana', plano: 'anual', ativo: 'nao' },
  { id: 4, nome: 'Pedro', plano: 'semestral', ativo: 'sim' },
  { id: 5, nome: 'Juliana', plano: 'mensal', ativo: 'nao' },
  { id: 6, nome: 'Lucas', plano: 'anual', ativo: 'sim' }
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

app.get("/clientes", (req, res) => {
    res.status(200).json(alunos)
})

app.get("/clientes/:id", (req, res) => {
    let idaluno = Number(req.params.id)

    let aluno = alunos.find((a) => a.id === idaluno)

    if (aluno){
        res.status(200).json(aluno)
    }else {
        res.status(404).json({
            message:"ERRO NA REQUISIÇÃO",
            error:"ALUNO NÃO ENCONTRADO"
        })
    }
    
})

app.post("/clientes", (req,res) =>{
    // let alunoNovo = req.body

    if (!req.body){
        return res.status(400).json({message:"NENHUMA INFORMAÇÃO RECEBIDA"})
    }

    let {nome, plano, ativo} = req.body

    if (!nome || !plano || !ativo){
        res.status(400).json({message:"Não foi possível cadastrar o aluno.", error:"NÃO FOI INFORMADO NOME, PLANO OU STATUS!"}) 
    } else{

        let alunoNovo = {id: proximoId, nome, plano, ativo}
        proximoId++

        alunos.push(alunoNovo)

        res.status(201).json({"aluno-cadastrado":alunoNovo, message:"CADASTRO REALIZADO COM SUCESSO"})

    }
})

app.put("/clientes/:id", (req,res) => {
    let idAluno = Number(req.params.id)

    let aluno = alunos.find((a) => a.id === idAluno)

    if (!aluno){
        res.status(404).json({message:"ID Informado Não Existe"})
    }
    else{

        if (!req.body){
            return res.status(400).json({message:"NÃO FORAM ENVIADAS INFORMAÇÕES PARA ATUALIZAR"})
        }

        let {nome, plano, ativo} = req.body

        if (!nome || !plano || !ativo){
            res.status(400).json({message:"FALTAM INFORMAÇÕES PARA EDIÇÃO"})
        }else{
            
            aluno.nome = nome
            aluno.plano = plano
            aluno.ativo = ativo

            res.status(200).json({message:"ALUNO ATUALIZADO COM SUCESSO", dados:aluno})
        }
    }
})

app.delete("/clientes/:id", (req,res) => {
    let idAluno = Number(req.params.id)

    let aluno = alunos.find((a) => a.id === idAluno)

    if (!aluno){
        res.status(404).json({message:"ID Informado Não Existe"})
    }
    else{
        let posicaoAluno = alunos.indexOf(aluno)
        alunos.splice(posicaoAluno, 1)

        res.status(200).json({message: "Aluno removido com sucesso", removido: aluno })
    }
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    // Exibe no terminal o endereço para acessar o servidor
    console.log("SERVIDOR RODANDO NO ENDEREÇO -> http://localhost:3000")
})