function cardsStoreTemplate(demostrador, image_background, name, description, id) {
    const template = `<div class="col-sm-4 my-3">
                    <div class="card">
                        <img src=${image_background} class="card-img-top">
                            <div class="card-body">
                            <h3 class="card-title">${name}</h3>
                            <h5 class="card-text">${description}</h5>
                            <h5 class="card-text">${description}</h5>
                            <button
                            class="btn btn-success" id="card1_button"><a href="/detalhes.html?${id}">Detalhes</a></button>
                            </div>
                        </div>
                </div> `
    demostrador.innerHTML += template;
}