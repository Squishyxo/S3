let apodBtn = document.getElementById("apod-btn");
let marsBtn = document.getElementById("mars-btn");



//add event listener to the button that is responsible for displaying the APOD by calling a function.
apodBtn.addEventListener("click", () => {
    console.log('apod button pressed');
    sendApiReq()
})

//add event listener to the button that is responsible for displaying the mars pictures by calling a function.
marsBtn.addEventListener("click", () => {
    console.log('mars button pressed');
    sendApiReq2()
})


async function sendApiReq() {
    let API_KEY = "6jZEVt0PIeW96p8nVvy8b5gn4KFaIVJ22kIJgyIL";
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    let data = await response.json();
    console.log(data);
    console.log(data.explanation);
    renderApiData(data);
}

//This function is to take the response and render it on the website after clicking the button.
function renderApiData(data) {
    document.querySelector("#content").innerHTML += data.explanation;
    document.querySelector("#content").innerHTML += `<br><br><img src="${data.url}">`;
}
async function sendApiReq2() {
    let API_KEY = "6jZEVt0PIeW96p8nVvy8b5gn4KFaIVJ22kIJgyIL";
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
    let data = await response.json();
    console.log(data);
    renderApiData2(data);
}

//This function is to take the response and render it on the website after clicking the button.
function renderApiData2(data) {
    for (let i = 1; i <= 9; i++) {
        const randomNum = Math.floor(Math.random() * 99)
        console.log(randomNum);
        // document.querySelector("#moon-content").innerHTML += data.photos[randomNum].rover.id + '<br>';
        // document.querySelector("#moon-content").innerHTML += data.photos[randomNum].rover.name;
        // document.querySelector("#moon-content").innerHTML += `<br><br><img src="${data.photos[randomNum].img_src}">`;
        document.querySelector(".row").innerHTML += `<br><br><img src="${data.photos[randomNum].img_src}">`;


    }
}