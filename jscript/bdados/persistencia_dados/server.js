import express from "express";

// Importa o framework Express para criar o servidor
import { readFile, writeFile } from 'node:fs/promises';

// lê o arquivo inteiro como texto
// const jogo = await readFile('./gameplay.json', 'utf-8');

// grava o texto no arquivo (substitui o que tinha)
// await writeFile('./gameplay.json', texto);

const ARQUIVO = "./jogos.json";

async function lergames() {
    let jogo = await readFile(ARQUIVO, 'utf-8');
    return JSON.parse(jogo);
};

console.log(await lergames()); // await porque a funçao lergames é async
