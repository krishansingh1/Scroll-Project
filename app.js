const toogle = document.querySelector(".nav-bars");
const links = document.querySelector('.links');

toogle.addEventListener('click', () => {
    // console.log(links);
    links.classList.toggle('show-links');
})

