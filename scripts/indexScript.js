const preFix='/coal_ice/'
// const preFix=''
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('myRange');
    const container = document.querySelector('.container');
    applyWeatherBasedFilter();
    function applyWeatherBasedFilter() {
        const apiKey = 'ec2286d04b47fb98645ebb09c617b846'; // api key
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${apiKey}&units=metric`;

        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                const temp = data.main.temp;
                console.log(temp); // console log temp to check
                const image = document.querySelector('.image-container img');
                if (image) { // make sure image exist
                    if (temp >= 25) {
                        image.style.filter = 'hue-rotate(-30deg) brightness(100%)'; // hot weather, red color
                    } else if (temp <= 10) {
                        image.style.filter = 'hue-rotate(240deg) brightness(100%)'; // cold weather，blue color
                    } else {
                        image.style.filter = 'hue-rotate(120deg) brightness(100%)'; // medium, green
                    }
                } else {
                    console.error('Image not found');
                }
            })
            .catch(error => {
                console.error('Failed to load weather data:', error);
            });
    }

    slider.addEventListener('input', function() {
        let contentFile = preFix + 'entries/index-content.html'; // load first page as default

        if (this.value == 1) {
            contentFile = preFix + 'entries/index-content.html';
        } else if (this.value == 2) {
            contentFile = preFix + 'entries/about-content.html';
        } else if (this.value == 3) {
            contentFile = preFix + 'entries/artist-content.html';
        } else if (this.value == 4) {
            contentFile = preFix + 'entries/image-content-3.html';
        } else if (this.value == 5) {
            contentFile = preFix + 'entries/image-content-4.html';
        } else if (this.value == 6) {
            contentFile = preFix + 'entries/image-content-5.html';
        } else if (this.value == 7) {
            contentFile = preFix + 'entries/image-content-6.html';
        } else if (this.value == 8) {
            contentFile = preFix + 'entries/image-content-8.html';
        } else if (this.value == 9) {
            contentFile = preFix + 'entries/image-content-9.html';
        } else if (this.value == 10) {
            contentFile = preFix + 'entries/image-content-10.html';
        } 

        // load content and apply color filter
        fetch(contentFile)
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
                applyWeatherBasedFilter(); // call weather function to change color
            })
            .catch(error => {
                console.error('Failed to load content:', error);
            });
    });
});

