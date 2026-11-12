import express from "express"
const app = express()

app.get('/sobre', (req, res) => {
res.json({
    sistema: 'API de Alunos',
    curso: 'Desenvolvimento de Sistemas',
    versao: 1
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando no endereço http://localhost:3000/sobre")
})
