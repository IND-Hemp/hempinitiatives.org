/* script.js */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    hamburger.classList.toggle('toggle');
});
