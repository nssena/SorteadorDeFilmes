# 🎬 Sorteador de Filmes 🍿

Este projeto surgiu da minha paixão por filmes. Criei essa ferramenta onde posso adicionar filmes que quero assistir ou já assisti e amo, e depois sorteá-los para assistir em um momento que não estou com vontade de escolher um filme específico.

Nesta lista coloquei filmes de ficção científica (que eu amo!), mas você pode adicionar o que quiser.

## 🚀 Como Usar

Para executar, você só precisa seguir as rotas:

- **GET /filmes:** Veja a lista completa de filmes.
  
![Lista de filmes](https://github.com/nssena/SorteadorDeFilmes/blob/main/listar_filmes.png)

- Caso não haja mais filmes na lista, você receberá uma mensagem.
  
  ![Lista vazia](https://github.com/nssena/SorteadorDeFilmes/blob/main/lista_zerada.png)

- **GET /sortearfilme:** Um filme aleatório dentro da lista de filmes será escolhido para você. Depois de ser sorteado, ele sai da lista para não ser repetido.

  ![Filme sorteado](https://github.com/nssena/SorteadorDeFilmes/blob/main/sortear_filme.png)

  ![Lista para sorteio zerada](https://github.com/nssena/SorteadorDeFilmes/blob/main/sorteio_zerado.png)

- **POST /adicionarfilme:** Você poderá adicionar um novo filme à lista adicionando o nome em JSON no corpo da requisição.
  
  ![Adicionando um novo filme](https://github.com/nssena/SorteadorDeFilmes/blob/main/adicionar_filme.png)

-   Caso esse filme já exista, você receberá uma mensagem.

  ![Filme repetido](https://github.com/nssena/SorteadorDeFilmes/blob/main/adicionar_filme_erro.png)

Divirta-se escolhendo filmes para assistir! 🍀🎥
