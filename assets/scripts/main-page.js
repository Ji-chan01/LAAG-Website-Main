const threeDots = document.querySelector(".three-dots");
const ul = document.querySelector("nav ul");
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");

function nextBtn() {
    let item = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(item[0])
}

function previousBtn() {
    let item = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(item[item.length - 1]);
}

next.addEventListener('click', nextBtn)
previous.addEventListener('click', previousBtn)

let intervalID;

intervalID = setInterval(nextBtn, 6500);

window.addEventListener('keydown', (event) => {
    if (event.key === "ArrowRight") nextBtn();
    if (event.key === "ArrowLeft") previousBtn();
    clearInterval(intervalID);
    intervalID = setInterval(nextBtn, 6500);
})

threeDots.addEventListener('click', () => {
    ul.classList.toggle('active');
})