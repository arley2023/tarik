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

let ordensServico = [
  { id: 1, cliente: 'Ana', veiculo: 'Honda Civic', servico: 'Troca de óleo', status: 'em_andamento' },
  { id: 2, cliente: 'Carlos', veiculo: 'Toyota Corolla', servico: 'Alinhamento e balanceamento', status: 'concluido' },
  { id: 3, cliente: 'Mariana', veiculo: 'Jeep Renegade', servico: 'Revisão dos 40 mil km', status: 'cancelado' },
  { id: 4, cliente: 'Pedro', veiculo: 'VW Golf', servico: 'Troca de pastilhas de freio', status: 'em_andamento' },
  { id: 5, cliente: 'Juliana', veiculo: 'Hyundai Creta', servico: 'Conserto de suspensão', status: 'aguardando_pecas' },
  { id: 6, cliente: 'Lucas', veiculo: 'Chevrolet Onix', servico: 'Funilaria e pintura', status: 'em_andamento' }
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
    res.status(200).json(ordensServico)
})

app.get("/clientes/:id", (req, res) => {
    let idservico = Number(req.params.id)

    let servico = ordensServico.find((a) => a.id === idservico)

    if (servico){
        res.status(200).json(servico)
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

    let {cliente, veiculo, servico, status} = req.body

    if (!cliente || !veiculo || !servico || !status){
        res.status(400).json({message:"Não foi possível cadastrar o aluno.", error:"NÃO FOI INFORMADO NOME, PLANO OU STATUS!"}) 
    } else{

        let servicoNovo = {id: proximoId, cliente, veiculo, servico, status}
        proximoId++

        ordensServico.push(servicoNovo)

        res.status(201).json({"veículo-cadastrado":servicoNovo, message:"CADASTRO REALIZADO COM SUCESSO"})

    }
})

app.put("/clientes/:id", (req,res) => {
    let idservico = Number(req.params.id)

    let servico = ordensServico.find((a) => a.id === idservico)

    if (!servico){
        res.status(404).json({message:"ID Informado Não Existe"})
    }
    else{

        if (!req.body){
            return res.status(400).json({message:"NÃO FORAM ENVIADAS INFORMAÇÕES PARA ATUALIZAR"})
        }

        let {cliente, veiculo, servico, status} = req.body

        if (!cliente || !veiculo || !servico || !status){
            res.status(400).json({message:"FALTAM INFORMAÇÕES PARA EDIÇÃO"})
        }else{
            
            ordensServico.cliente = cliente
            ordensServico.veiculo = veiculo
            ordensServico.servico = servico
            ordensServico.status = status
            
            

            res.status(200).json({message:"SERVIÇO ATUALIZADO COM SUCESSO", dados:ordensServico})
        }
    }
})

app.delete("/clientes/:id", (req,res) => {
    let idservico = Number(req.params.id)

    let servico = ordensServico.find((a) => a.id === idservico)

    if (!servico){
        res.status(404).json({message:"ID Informado Não Existe"})
    }
    else{
        let posicaoOrdem = ordensServico.indexOf(servico)
        ordensServico.splice(posicaoOrdem, 1)

        res.status(200).json({message: "Serviço removido com sucesso", removido: ordensServico })
    }
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    // Exibe no terminal o endereço para acessar o servidor
    console.log("SERVIDOR RODANDO NO ENDEREÇO -> http://localhost:3000")
})