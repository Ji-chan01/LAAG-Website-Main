const threeDots = document.querySelector(".three-dots");
const ul = document.querySelector("nav ul");

threeDots.addEventListener('click', () => {
    ul.classList.toggle('active');
})