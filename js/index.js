const api_key = 'da20b07b8c954723a7a143c644b237fe'
const base_api = 'https://api.rawg.io/api'

async function GetInfo(id){
    const data = await fetch (`${base_api}/games/${id}?key=${api_key}`).then(res => res.json())

    localStorage.setItem("details", JSON.stringify(data))
    window.location.href = "http://127.0.0.1:5501/detalhes.html"

     const details = JSON.parse(localStorage.getItem("details"))
}

async function getDataBase() {
    const {results} = await fetch (`${base_api}/games?key=${api_key}`).then(res => res.json())

    document.getElementById("card1_title").innerText = results[0].name;
    document.getElementById("img_card1").src = results[0].background_image;
    document.getElementById("text_1").innerText = "Rating: " + results[0].rating;
    document.getElementById("text_2").innerText = "Date: " + results[0].released;
    const button1 = document.getElementById("card1_button")
    button1.onclick = () => GetInfo(results[0].id);

    document.getElementById("card2_title").innerText = results[1].name;
    document.getElementById("img_card2").src = results[1].background_image;
    document.getElementById("text_3").innerText = "Rating: " + results[1].rating;
    document.getElementById("text_4").innerText = "Date: " + results[1].released;
    const button2 = document.getElementById("card2_button")
    button2.onclick = () => GetInfo(results[1].id);
    
    document.getElementById("card3_title").innerText = results[3].name;
    document.getElementById("img_card3").src = results[3].background_image;
    document.getElementById("text_5").innerText = "Rating: " + results[3].rating;
    document.getElementById("text_6").innerText = "Date: " + results[3].released;
    const button3 = document.getElementById("card3_button")
    button3.onclick = () => GetInfo(results[2].id);
    
    document.getElementById("card4_title").innerText = results[4].name;
    document.getElementById("img_card4").src = results[4].background_image;
    document.getElementById("text_7").innerText = "Rating: " + results[4].rating;
    document.getElementById("text_8").innerText = "Date: " + results[4].released;
    const button4 = document.getElementById("card4_button")
    button4.onclick = () => GetInfo(results[3].id);

    document.getElementById("card5_title").innerText = results[5].name;
    document.getElementById("img_card5").src = results[5].background_image;
    document.getElementById("text_9").innerText = "Rating: " + results[5].rating;
    document.getElementById("text_10").innerText = "Date: " + results[5].released;
    const button5 = document.getElementById("card5_button")
    button5.onclick = () => GetInfo(results[4].id);

    document.getElementById("card6_title").innerText = results[6].name;
    document.getElementById("img_card6").src = results[6].background_image;
    document.getElementById("text_11").innerText = "Rating: " + results[6].rating;
    document.getElementById("text_12").innerText = "Date: " + results[6].released;
    const button6 = document.getElementById("card6_button")
    button6.onclick = () => GetInfo(results[5].id);

    document.getElementById("card7_title").innerText = results[7].name;
    document.getElementById("img_card7").src = results[7].background_image;
    document.getElementById("text_13").innerText = "Rating: " + results[7].rating;
    document.getElementById("text_14").innerText = "Date: " + results[7].released;
    const button7 = document.getElementById("card7_button")
    button7.onclick = () => GetInfo(results[6].id);

    document.getElementById("card8_title").innerText = results[8].name;
    document.getElementById("img_card8").src = results[8].background_image;
    document.getElementById("text_15").innerText = "Rating: " + results[8].rating;
    document.getElementById("text_16").innerText = "Date: " + results[8].released;
    const button8 = document.getElementById("card8_button")
    button8.onclick = () => GetInfo(results[7].id);

    document.getElementById("card9_title").innerText = results[9].name;
    document.getElementById("img_card9").src = results[9].background_image;
    document.getElementById("text_17").innerText = "Rating: " + results[9].rating;
    document.getElementById("text_18").innerText = "Date: " + results[9].released;
    const button9 = document.getElementById("card9_button")
    button9.onclick = () => GetInfo(results[8].id);
}

getDataBase();





