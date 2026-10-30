import express from "express";
import {readFile, writeFile} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PASTA = path.dirname(fileURLToPath(import.meta.url))
const ARQUIVO = path.join(PASTA, "contatos.json")

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

app.get("/contatos", async (req,res) => {
    let contatos = await lerContatos()

    res.status(200).json(contatos)
})

app.get("/contatos/:id", async(req,res) =>{
    let idAtual = Number(req.params.id)

    if (idAtual === NaN){
        return res.status(400).json({message:"O PARAMETRO ACEITO É APENAS NÚMERO!"})
    }

    let contatos = await lerContatos()

    let contato = contatos.find((c) => c.id === idAtual)

    if (!contato){
        res.status(404).json({message:"CONTATO NÃO IDENTIFICADO!"})
    } else{
        res.status(200).json(contato)
    }
})





app.post("/contatos", async (req,res) =>{

    if (!req.body){
        return res.status(400).json({message:"NÃO FORAM ENVIADAS INFORMAÇÕES PARA CADASTRO."})
    }

    let {id, nome, telefone} = req.body

    if (!id || !nome || !telefone){
        res.status(400).json({message:"INFORMAÇÔES FALTANTE. ENVIE ID, NOME E TELEFONE."})
    }else{
        // 1. Ler o arquivo
        let contatos = await lerContatos()

        // 2. Manipular os dados
        let novoContato = {
            id, nome, telefone
        }
        contatos.push(novoContato)

        // 3. Salvar os dados no arquivo
        await salvarContatos(contatos)

        // 4. Mandar resposta ao servidor
        res.send(201).status({message:"CONTATO CADASTRADO COM SUCESSO", contato: novoContato})
    }
})






app.listen(3000, () => {
    console.log("SERVIDOR INICIADO NO ENDEREÇO http://localhost:3000")
})