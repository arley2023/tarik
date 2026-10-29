import express from "express";
import {readFile, writeFile} from "node:fs/promises";
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// a pasta do server.js, em qualquer computador
const PASTA = path.dirname(fileURLToPath(import.meta.url));
const ARQUIVO = path.join(PASTA, 'contatos.json');

async function lerContatos(){
    let texto = await readFile(ARQUIVO, "utf-8")

    return JSON.parse(texto)
}

async function salvarContatos(contatos){
    let texto = JSON.stringify(contatos, null, 4)

    await writeFile(ARQUIVO, texto, {encoding:"utf-8"})
}

const app = express()

app.use(express.json())

app.get("/contatos", async (req,ree) => {
    let jogos = await lerContatos()

    res.status(200).json(contatos)
})

app.get("/contatos/1", async(req,res) => [
    console.log(lerContatos)
])