import express from "express";
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PASTA = path.dirname(fileURLToPath(import.meta.url));
const ARQUIVO = path.join(PASTA, 'jogos.json');

async function lerjogos() {
    let jogo = await readFile(ARQUIVO, "utf-8");

    return JSON.parse(jogo);
};

async function salvarjogos(jogos){
    let jogo = JSON.stringify(jogos, null, 4)

    await writeFile(ARQUIVO, jogo, {encoding:"utf-8"})
}


const app = express()

app.use(express.json())

app.get("/jogos", async (req,res) => {
    let jogos = await lerjogos()

    res.status(200).json(jogos)
})

app.get("/jogos/:id", async(req,res) => {
    let idAtual = Number(req.params.id)

    if (idAtual === NaN){
        return res.status(400).json({message:"O PARAMETRO ACEITO É APENAS NÚMERO!"})
    }

    let jogos = await lerjogos()

    let jogo = jogos.find((c) => c.id === idAtual)

    if (!jogo){
        res.status(404).json({message:"JOGO NÃO IDENTIFICADO!"})
    } else{
        res.status(200).json(jogo)
    }
})

app.post("/jogos", async(req,res) => {
    
    if (!req.body){
        return res.status(400).json({message:"NÃO FORAM ENVIADAS INFORMAÇÕES PARA CADASTRO."})
    }

    let {id, titulo, plataforma, preco} = req.body

    if (!id || !titulo || !plataforma || !preco){
        res.status(400).json({message:"INFORMAÇÔES FALTANTE. ENVIE ID, TITULO, PLATAFORMA E PRECO."})
    }else{
        // 1. Ler o arquivo
        let jogos = await lerjogos()

        // 2. Manipular os dados
        let novojogo = {
            id, titulo, plataforma, preco
        }
        jogos.push(novojogo)

        // 3. Salvar os dados no arquivo
        await salvarjogos(jogos)

        // 4. Mandar resposta ao servidor
        res.send(201).status({message:"JOGA CADASTRADO COM SUCESSO", jogo: novojogo})
    }

})


app.put("/jogos/:id", async (req, res) => {
    let idjogo = Number(req.params.id)

    let jogos = await lerjogos()

    let jogo = jogos.find((a) => a.id === idjogo)

    if (!jogo) {
        return res.status(404).json({
            message: "ID Informado Não Existe"
        })
    }

    if (!req.body) {
        return res.status(400).json({
            message: "NÃO FORAM ENVIADAS INFORMAÇÕES PARA ATUALIZAR"
        })
    }

    let { titulo, plataforma, preco } = req.body

    if (!titulo || !plataforma || !preco) {
        return res.status(400).json({
            message: "FALTAM INFORMAÇÕES PARA EDIÇÃO"
        })
    }

    jogo.titulo = titulo
    jogo.plataforma = plataforma
    jogo.preco = preco

    await salvarjogos(jogos)

    res.status(200).json({
        message: "JOGO ATUALIZADO COM SUCESSO",
        dados: jogo
    })
})

app.delete('/jogos/:id', async (req, res) => {
    let idAtual = Number(req.params.id)

    let jogos = await lerjogos()

    let jogo = jogos.find((a) => a.id === idAtual)

    if (!jogo){
        res.status(404).json({message:"ID Informado Não Existe"})
    }
    else{
        let posicaojogo = jogos.indexOf(jogo)
        jogos.splice(posicaojogo, 1)
        await salvarjogos(jogos);
        res.status(200).json({message: "jogo removido com sucesso", removido: jogo })
    }
});

app.listen(3000, () => {
    console.log("SERVIDOR INICIADO NO ENDEREÇO http://localhost:3000")
})

