// Menu Toggle
// ****************
const burgerToggle = document.getElementById('burger');
const siteNavShow = document.getElementById('site-nav');
const toggleByLink = document.querySelectorAll('.site-nav__link');
const headerWrapper = document.getElementById('header__wrapper');

burgerToggle.addEventListener('click', () => {
    burgerToggle.classList.toggle('burger_active');
    header.classList.toggle('header_show');
    siteNavShow.classList.toggle('site-nav_show');

    if(burgerToggle.classList.contains('burger_active')) {
        headerWrapper.style.marginRight = getScrollbarWidth();
        document.documentElement.style.marginRight = getScrollbarWidth();
        document.documentElement.style.overflow = 'hidden';
    } else {
        setTimeout(() => {
            headerWrapper.style.marginRight = '0';
            document.documentElement.style.marginRight = '0';
            document.documentElement.style.overflow = 'auto';
        }, 300);
    }
});

toggleByLink.forEach(e => e.addEventListener('click', () => {
    burgerToggle.classList.remove('burger_active');
    header.classList.remove('header_show');
    siteNavShow.classList.remove('site-nav_show');

    setTimeout(() => {
        headerWrapper.style.marginRight = '0';
        document.documentElement.style.marginRight = '0';
        document.documentElement.style.overflow = 'auto';
    }, 300);
}));