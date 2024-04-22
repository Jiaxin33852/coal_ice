// 在 indexScript.js 文件中
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('myRange');
    const container = document.querySelector('.container');

    slider.addEventListener('input', function() {
        let contentFile = '/coal_ice/entries/index-content.html'; // 默认加载首页内容

        if (this.value == 1) {
            contentFile = '/coal_ice/entries/index-content.html'; // 首页内容文件
        } else if (this.value == 2){
            contentFile = '/coal_ice/entries/about-content.html';
        }

        // 使用fetch API来加载HTML文件内容
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
