let { filmes } = require("../Bancodedados/listadefilmes")

const listarFilmes = (req, res) => {

    if (filmes.length === 0) {
        return res.send({ mensagem: "Não há mais filmes na lista, adicione mais." })
    }

    return res.send(filmes)
}

const sortearFilme = (req, res) => {

    if (filmes.length === 0) {
        return res.send({ mensagem: "Não há mais filmes na lista, adicione mais." })
    }
    
    const numeroAleatorio = Math.floor(Math.random() * filmes.length);
    const filmeAleatorio = filmes[numeroAleatorio];

    filmes = filmes.filter(filme => filme !== filmeAleatorio)

    return res.send({ "Filme escolhido": filmeAleatorio })
}

const adicionarFilme = (req, res) => {
    let { filme } = req.body;

    if (!filme) {
       return res.status(400).json({ mensagem: "É obrigatório enviar o nome do filme." })
    }

    if (filmes.includes(filme)) {
        return res.status(400).json({ mensagem: "Este filme já está na lista!" })
    }

    filmes.push(filme)

    return res.sendStatus(201)
}

module.exports = {
    listarFilmes,
    sortearFilme, 
    adicionarFilme
}

