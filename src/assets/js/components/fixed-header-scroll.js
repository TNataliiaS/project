// Fixed header on scroll
// ****************
const firstEl = document.getElementById('intro');
const header = document.getElementById('header');
const headerHeight = header.offsetHeight;
const firstElHeight = firstEl.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= firstElHeight - headerHeight) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
});