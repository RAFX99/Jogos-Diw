const container = document.querySelector('#container-store');



fetch(`${base_api}/stores?key=${api_key}`)
    .then(res => res.json())
    .then(dados => {

        const dadosStore = dados.results;

        dadosStore.forEach(dados => {
            const { image, name } = dados;

            cardsStoreTemplate(container, image, name);
        });

    })
    .catch(erro => console.log(erro));

