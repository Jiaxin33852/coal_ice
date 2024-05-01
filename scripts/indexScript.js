// 在 indexScript.js 文件中
// const preFix='/coal_ice/'
const preFix=''
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('myRange');
    const container = document.querySelector('.container');

    slider.addEventListener('input', function() {
        let contentFile = preFix+'entries/index-content.html'; // load first page as default

        if (this.value == 1) {
            contentFile = preFix+'entries/index-content.html'; // index content
        } else if (this.value == 2){
            contentFile = preFix+'entries/about-content.html';
        } else if (this.value == 3){
            contentFile = preFix+'entries/artist-content.html';
        } else if (this.value == 4){
            contentFile = preFix+'entries/image-content-1.html';
        } else if (this.value == 5){
            contentFile = preFix+'entries/image-content-2.html';
        } else if (this.value == 6){
            contentFile = preFix+'entries/image-content-3.html';
        } else if (this.value == 7){
            contentFile = preFix+'entries/image-content-4.html';
        } else if (this.value == 8){
            contentFile = preFix+'entries/image-content-5.html';
        } else if (this.value == 9){
            contentFile = preFix+'entries/image-content-6.html';
        } else if (this.value == 10){
            contentFile = preFix+'entries/image-content-7.html';
        } else if (this.value == 11){
            contentFile = preFix+'entries/image-content-8.html';
        } else if (this.value == 12){
            contentFile = preFix+'entries/image-content-9.html';
        } else if (this.value == 13){
            contentFile = preFix+'entries/image-content-10.html';
        }

        // use fetch to load html content
        fetch(contentFile)
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
            })
            .catch(error => {
                console.error('Failed to load content:', error);
            });
    });
});
