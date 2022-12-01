function cardsStoreTemplate(demostrador, image_background, name, description, games_count) {
    const template = `<div class="col-sm-4 my-3">
                    <div class="card">
                        <img src=${image_background} class="card-img-top">
                            <div class="card-body">
                            <h3 class="card-title">${name}</h3>
                            <h5 class="card-text">${description}</h5>
                            <p> games_count : ${games_count}</p>
                        </div>
                </div> `
    demostrador.innerHTML += template;
}