
const container = document.querySelector('#container-jogos');

fetch(`${base_api}/games?key=${api_key}`)
    .then(res => res.json())
    .then(informacao => {

        const dadosTodosJogos = informacao.results;

        dadosTodosJogos.forEach(dados => {
            const { background_image, name, rating, released, id } = dados;

            cardsGamesTemplate(container, background_image, name, rating, released, id);
        });

    })
    .catch(erro => console.log(erro));


