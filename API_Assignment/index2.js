// This is an alternative but I will not use it I was just practicing it. 
// PLUS why .catch does not work here I tried and it complained about some errors.

const fetchApi = () => {
    let API_KEY = "6jZEVt0PIeW96p8nVvy8b5gn4KFaIVJ22kIJgyIL";
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            // console log the respnse to the console.
            console.log(data);
            // creating a div assigning it to a class to show the response on the website.
            let htmlDiv = document.createElement('div');
            htmlDiv.classList.add('apod-content');
            // creating 2 variables, one for the image explanatiion and one for the image itself. +assigning the proper response to them.
            let description = document.createTextNode(data.explanation);
            let image = document.createElement('img');
            image.src = data.url;

            // appending/adding the 2 variables to the created div.
            htmlDiv.appendChild(description);
            htmlDiv.appendChild(image);

            // adding the created div to the content section in the html page.
            document.getElementById('content').append(htmlDiv);
        });


}

// the response would normally display when loaded immediately. However, we want it only load after the button clicked.
let apodBtn = document.getElementById('apod-btn');
apodBtn.addEventListener('click', () => {
    fetchApi();
})