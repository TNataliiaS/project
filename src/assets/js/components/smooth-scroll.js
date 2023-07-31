// Smooth scoll element
// ****************
const links = document.querySelectorAll('.smooth-scroll-link');

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = header.offsetHeight;

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
}

// Button scroll up
// ****************
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scroll-up-link');
    scroll.classList.toggle('scroll-up-link_showed', window.scrollY > 650)
});
