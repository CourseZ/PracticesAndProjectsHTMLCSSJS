const navbarElem = document.querySelector('.navbar');
const bottomContainerElem = document.querySelector('.bottom-container');

console.log(navbarElem.offsetHeight);
console.log(bottomContainerElem.offsetTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > bottomContainerElem.offsetTop - navbarElem.offsetHeight - 50) {
        navbarElem.classList.add('active');
    } else 
        navbarElem.classList.remove('active');
});