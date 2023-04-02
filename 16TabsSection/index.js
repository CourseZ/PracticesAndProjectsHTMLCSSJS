const tabs = document.querySelector('.tabs');
const btns = document.querySelectorAll('.button');
const articles = document.querySelectorAll('.content');

tabs.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    console.log(id); // lấy được data-id

    if (id) {
        // remove selected from other buttons
        btns.forEach((btn) => {
            btn.classList.remove('live');
        });
        e.target.classList.add('live');

        // hide other articles
        articles.forEach((article) => {
            article.classList.remove('live');
        });
        const elemment = document.getElementById(id);
        elemment.classList.add('live');
    }

});