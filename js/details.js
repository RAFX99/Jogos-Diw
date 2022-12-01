
const idEncontrado = buscarIdUrl();

const container = document.querySelector('#container-detalhes');

fetch(`${base_api}/games/${idEncontrado}?key=${api_key}`)
    .then(res => res.json())
    .then(informacao => {

        const { background_image,
            background_image_additional,
            description,
            name } = informacao;

        detalhesGameTemplate(container, name, background_image, background_image_additional, description);
    })
    .catch(erro => console.log(erro));

