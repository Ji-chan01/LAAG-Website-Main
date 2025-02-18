const nextBtn = document.getElementById('nextBtn');
const registerBtn = document.getElementById('registerBtn');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
    prev.classList.remove('active');
    next.classList.add('active');
});