const toogle = document.querySelector(".nav-bars");
const nav = document.getElementById('nav')
toogle.addEventListener('click', () => {
    nav.classList.toggle('show-links');
})

