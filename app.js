const toggle = document.querySelector(".nav-bars");
const links = document.querySelector('.links');

toggle.addEventListener('click', () => {
    // console.log(links);
    links.classList.toggle('show-links');
})

