// Para iniciar o servidor, execute no terminal: node server.js

// Importa o framework Express para criar o servidor
import express from "express"

// Cria uma instância da aplicação Express
const app = express()

app.use((req, res, next) => {
    console.log("REQUISIÇÃO DETECTADA: ", req.method, req.url)
    next()
})

app.use(express.json())

let produtos = [
{ id: 1, nome: 'Coxinha', preco: 6.5, categoria: 'salgado' },
{ id: 2, nome: 'Pastel', preco: 7, categoria: 'salgado' },
{ id: 3, nome: 'Refrigerante', preco: 5, categoria: 'bebida' }
];
let proximoId = 4;

// Define uma rota GET para a página inicial
app.get("/", (req, res) => {
    // Envia uma resposta em HTML quando a rota é acessada
    res.send("<h1>SEJA BEM VINDO</h1> <p>Este é meu primeiro servidor</p>")
})

app.get("/produtos", (req, res) => {
    res.status(200).json(produtos)
})

app.get("/produtos/:id", (req, res) => {
    let idProduto = Number(req.params.id)

    let produto = produtos.find((a) => a.id === idProduto)

    if (produto){
        res.status(200).json(produto)
    }else {
        res.status(404).json({
            message:"ERRO NA REQUISIÇÃO",
            error:"PRODUTO NÃO ENCONTRADO"
        })
    }
    
})

app.post("/produtos", (req, res) => {

    let {nome, preco, categoria} = req.body

    if (!nome || !preco || !categoria){
        res.status(400).json({message:"Não foi possível cadastrar o produto.", error:"NÃO FOI INFORMADO NOME, PREÇO OU CATEGORIA!"}) 
    } else{

        let produtoNovo = {id: proximoId, nome, preco, categoria}
        proximoId++

        produtos.push(produtoNovo)

        res.status(201).json({"produto-cadastrado":produtoNovo, message:"CADASTRO REALIZADO COM SUCESSO"})

    }
})


app.put('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(a => a.id === id);
    if (!produto) {
        return res.status(404)
        .json({ erro: 'Produto não encontrado' });
        }
    produto.nome = req.body.nome ?? produto.nome;
    produto.preco = req.body.preco ?? produto.preco;
    produto.categoria = req.body.categoria ?? produto.categoria;
    res.json(produto);
});


app.delete('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const existe = produtos.some(a => a.id === id);
    if (!existe) {
        return res.status(404)
        .json({ erro: 'Produto não encontrado' });
        }
    produtos = produtos.filter(a => a.id !== id);
    res.status(204).send();
    });


// Inicia o servidor na porta 3000
app.listen(3000, () => {
    // Exibe no terminal o endereço para acessar o servidor
    console.log("SERVIDOR RODANDO NO ENDEREÇO -> http://localhost:3000")
})