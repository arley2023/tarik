import express from "express"
const app = express()

app.get('/sobre', (req, res) => {
res.json({
    "lanchonete": "Cantina da Escola",
    "horario": "18h às 22h",
    "pagamento": ["dinheiro", "pix"]
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando no endereço http://localhost:3000/")
})
