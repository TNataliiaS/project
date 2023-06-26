// Fixed header on scroll
// ****************
window.addEventListener('scroll', () => {
    const firstEl = document.getElementById('intro');
    const header = document.getElementById('header');

    const firstElHeight = firstEl.offsetHeight;
    const headerHeight = header.offsetHeight;
    const heightDifference = firstElHeight - headerHeight;

    if (window.scrollY >= heightDifference) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
});