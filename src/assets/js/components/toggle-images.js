const popup = document.getElementById('popup');
const projectsItem = document.querySelectorAll('.projects__item');

const getScrollbarWidth = () => {
    const scrollbarWidth = Math.max(window.innerWidth - document.documentElement.clientWidth, 0);
    return `${scrollbarWidth}px`;
};

function toggleImages() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.querySelector('.projects__popup-wrapper picture').remove();

        for(let j = 0; j < projectsItem.length; j++) {
            const itemSelected = projectsItem[j];
            const itemSelectedBtn = itemSelected.querySelector('.projects__item-more');

            itemSelectedBtn.onclick = (() => {
                const imgInitial = itemSelected.querySelector('img');
                const popupImages = itemSelected.querySelector('picture').cloneNode(true);
                const imgtag = popupImages.querySelector('img');
                const sourcetag = popupImages.querySelector('source');

                const sourceInitial = imgInitial.getAttribute('src');
                const altInitial = imgInitial.getAttribute('alt');
                const sourceJpg = imgtag.getAttribute('src');
                const sourceWebp = sourcetag.getAttribute('srcset');

                const projectWrapper = document.querySelector('.projects__popup-wrapper');
                const itemSelectedList = itemSelected.querySelector('.projects__item-list');
                const newList = document.createElement('ul');

                return function() {
                    imgtag.classList.add('projects__popup-img');
                    imgtag.classList.remove('projects__item-img');

                    projectWrapper.prepend(popupImages);

                    popup.classList.toggle('popup_active');
                    hideScrollBar();

                    projectWrapper.append(newList);
                    newList.replaceWith(itemSelectedList);
                    itemSelectedList.classList.add('projects__popup-list');

                    const noJpg = sourceJpg.slice(0,-6);
                    const noWebp = sourceWebp.slice(0,-7);
                    const num = sourceInitial.slice(-6, -4);

                    const largesourceJpg = noJpg + num + '-large.jpg';
                    const largesourceWebp = noWebp + num + '-large.webp';

                    imgtag.src = largesourceJpg;
                    sourcetag.srcset = largesourceWebp;
                    imgtag.alt = altInitial;

                    const pictureHeight = document.querySelector('.projects__popup-wrapper picture');
                    const newNum = imgtag.offsetHeight + 'px';
                    pictureHeight.style.height = newNum;
                }
            })(projectsItem[j]);
        }
    }

    else {
        for(let i = 0; i < projectsItem.length; i++) {
            projectsItem[i].onclick = ((image) => {
                const imgInitial = image.querySelector('img');
                const imgtag = popup.querySelector('img');
                const sourcetag = popup.querySelector('source');

                const sourceInitial = imgInitial.getAttribute('src');
                const altInitial = imgInitial.getAttribute('alt');
                const sourceJpg = imgtag.getAttribute('src');
                const sourceWebp = sourcetag.getAttribute('srcset');

                return function() {
                    popup.classList.toggle('popup_active');
                    hideScrollBar();

                    const noJpg = sourceJpg.slice(0,-6);
                    const noWebp = sourceWebp.slice(0,-7);
                    const num = sourceInitial.slice(-6, -4);

                    const largesourceJpg = noJpg + num + '-large.jpg';
                    const largesourceWebp = noWebp + num + '-large.webp';

                    imgtag.src = largesourceJpg;
                    sourcetag.srcset = largesourceWebp;
                    imgtag.alt = altInitial;

                    document.querySelector('.projects__popup-wrapper picture').style.display = 'block';
                }
            })(projectsItem[i]);
        }
    }
}

toggleImages();

const hideImagesPopup = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        document.querySelector('.projects__popup-wrapper picture').remove();
        document.querySelector('.projects__popup-wrapper ul').remove();
    } else {
        document.querySelector('.projects__popup-wrapper picture').style.display = 'none';
    }

    popup.classList.remove('popup_active');
    showScrollBar();

    if(document.querySelector('.projects__popup-list') !== null) {
        document.querySelector('.projects__popup-list').remove()
    };
}

document.querySelector('.popup__close-btn').addEventListener('click',() => {
    hideImagesPopup();
});

document.addEventListener('click', (e) => {
    if(e.target === document.querySelector('.projects__popup-wrapper')) {
        hideImagesPopup();
    }

    if(e.target === document.querySelector('.projects__popup-wrapper picture')) {
        hideImagesPopup();
    }

    if(e.target.id === 'popup') {
        hideImagesPopup();
    }
});