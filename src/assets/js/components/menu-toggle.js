// Menu Toggle
// ****************
const burgerToggle = document.getElementById('burger');
const headerShow = document.getElementById('header');
const siteNavShow = document.getElementById('site-nav');
const toggleByLink = document.querySelectorAll('.site-nav__link');
const bodyDisableScroll = document.querySelector('body');

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('burger_active');
    headerShow.classList.toggle('header_show');
    siteNavShow.classList.toggle('site-nav_show');
    bodyDisableScroll.classList.toggle('no-scroll');
});

toggleByLink.forEach(e => e.addEventListener('click', () => {
    burgerToggle.classList.remove('burger_active');
    headerShow.classList.remove('header_show');
    siteNavShow.classList.remove('site-nav_show');
    bodyDisableScroll.classList.remove('no-scroll');
}));