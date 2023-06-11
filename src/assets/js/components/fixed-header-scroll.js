// Fixed header on scroll
// ****************
const firstEl = document.getElementById('intro');
const header = document.getElementById('header');
const introWrapper = document.getElementById('intro__wrapper');

const headerHeight = header.offsetHeight;
const firstElHeight = firstEl.offsetHeight;
const heightDifference = firstElHeight - headerHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= heightDifference) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
});


const getDimensionsIntro = () => {
    const headerHeight = header.offsetHeight;
    const heightDifference = firstElHeight - headerHeight;
    console.log(headerHeight);
    console.log(heightDifference);

    firstEl.style.paddingTop = headerHeight + 'px';
    introWrapper.style.height = heightDifference  + 'px';
};

getDimensionsIntro();

window.addEventListener('resize', getDimensionsIntro);


