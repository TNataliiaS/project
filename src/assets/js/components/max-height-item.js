let biggestHeight = 0;
const elements = document.querySelectorAll('.areas-activity__item');

for (let i = 0; i < elements.length; ++i) {
    // const oneEl = elements[i];
    if (biggestHeight < elements[i].offsetHeight) {
        biggestHeight = elements[i].offsetHeight;
    }
}
console.log(biggestHeight);

for (let i = 0; i < elements.length; ++i) {
    // const oneEl = elements[i];
    elements[i].style.height = biggestHeight + 'px';
}