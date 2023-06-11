// Hide and show scroll bar
// ****************
const showScrollBar = () => {
    setTimeout(() => {
            headerWrapper.style.marginRight = '0';
            document.documentElement.style.marginRight = '0';
            document.documentElement.style.overflow = 'auto';
    }, 300);
}

const hideScrollBar = () => {
    headerWrapper.style.marginRight = getScrollbarWidth();
    document.documentElement.style.marginRight = getScrollbarWidth();
    document.documentElement.style.overflow = 'hidden';
}