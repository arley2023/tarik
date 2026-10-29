import express from "express";

import { readFile, writeFile } from 'node:fs/promises';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PASTA = path.dirname(fileURLToPath(import.meta.url));
const ARQUIVO = path.join(PASTA, 'jogos.json');

async function lerjogos() {
    let jogo = await readFile(ARQUIVO, 'utf-8');

    return JSON.parse(jogo);
};

console.log(await lerjogos()); // await porque a funçao lergames é async

// ------------ salvar

async function salvarjogos(jogos) {
    let jogo = JSON.stringify(jogos, null, 4);

    await writeFile(ARQUIVO, jogo, {encoding: "utf-8"})
};

const app = express()

app.use(express.json())

app.get("/jogos", async (req,ree) => {
    let jogo = await lerjogos()

    res.status(200).json(jogo)
})

app.get('/jogos/:id', async (req,ree) => {
const id = Number(req.params.id);
const contatos = await lerjogos();
const contato = contatos.find(a => a.id === id);
if (!jogos) {
return res.status(404)
.json({ erro: 'Jogo não encontrado' });
}
res.json(jogo);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    // Exibe no terminal o endereço para acessar o servidor
    console.log("SERVIDOR RODANDO NO ENDEREÇO -> http://localhost:3000")
})