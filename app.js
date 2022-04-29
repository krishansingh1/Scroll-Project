const toogle = document.querySelector(".nav-bars");
const links = document.querySelector('.links');

toogle.addEventListener('click', () => {
    links.classList.toogle('show-links');
})

