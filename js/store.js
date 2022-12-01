const container = document.querySelector('#container-store');


fetch(`${base_api}/stores?key=${api_key}`)
    .then(res => res.json())
    .then(dados => {

        const dadosStore = dados.results;

        dadosStore.forEach(dados => {
            const { image_background, name , domain, games_count } = dados;

            cardsStoreTemplate(container, image_background, name, domain , games_count);
        });

    })
    .catch(erro => console.log(erro));

