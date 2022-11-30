const details = localStorage.getItem('id');

fetch(`https://rawg.io/api/games/${details}?token=da20b07b8c954723a7a143c644b237fe`)

    .then((res) => res.json())
    .then(data => {

        let str = ''

        const { name, backgroung_image, rating, description } = data;
        str = `
        <h1 id="        
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
            </div>
            </div>
                
            `

    })













    `