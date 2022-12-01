function cardsGamesTemplate(demostrador, background_image, name, rating, released, id) {
    const template = `<div class="col-sm-4 my-3">
                    <div class="card">
                        <img src=${background_image} class="card-img-top" alt="Jogo 1">
                            <div class="card-body">
                            <h3 class="card-title">${name}</h3>
                            <h5 class="card-text">${rating}</h5>
                            <h5 class="card-text">${released}</h5>
                            <button
                            class="btn btn-success" id="card1_button"><a href="/detalhes.html?${id}">Detalhes</a></button>
                            </div>
                        </div>
                </div> `
    demostrador.innerHTML += template;
}