function detalhesGameTemplate(demostrador, name, background_image, background_image_additional, description) {
    const template = `
<section>
    <h1>${name}</h1>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src=${background_image} class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src=${background_image_additional} class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src=${background_image} class="d-block w-100" alt="...">
                </div>
            </div>
        </div>
        <div class="card m-3 p-4">
            <h3>Descrição do Game</h3>
            ${description}
        </div>
</section>`
    demostrador.innerHTML = template;

}