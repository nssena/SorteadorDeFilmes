const express = require("express");
const { listarFilmes, sortearFilme, adicionarFilme } = require("./controladores");

const rotas = express();

rotas.get('/filmes', listarFilmes)
rotas.get('/sortearfilme', sortearFilme)
rotas.post('/adicionarfilme', adicionarFilme)

module.exports = rotas