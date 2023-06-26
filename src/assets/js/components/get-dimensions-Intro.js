// Get dimensions intro
// ****************
const firstEl = document.getElementById('intro');
const header = document.getElementById('header');
const introWrapper = document.getElementById('intro__wrapper');

const getDimensionsIntro = () => {
    const headerHeight = header.offsetHeight;
    const firstElHeight = firstEl.offsetHeight;
    const heightDifference = firstElHeight - headerHeight;

    if (typeof(introWrapper) != 'undefined' && introWrapper != null) {
        firstEl.style.paddingTop = headerHeight + 'px';
        introWrapper.style.height = heightDifference  + 'px';
    } else {
        firstEl.style.paddingTop = headerHeight + 'px';

    }
};

getDimensionsIntro();

window.addEventListener('resize', getDimensionsIntro);