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
                let popupImages = itemSelected.querySelector('picture').cloneNode(true);

                let imgtag = popupImages.querySelector('img');
                let sourcetag = popupImages.querySelector('source');

                const sourceInitial = imgInitial.getAttribute('src');
                const altInitial = imgInitial.getAttribute('alt');
                let sourceJpg = imgtag.getAttribute('src');
                let sourceWebp = sourcetag.getAttribute('srcset');

                const projectWrapper = document.querySelector('.projects__popup-wrapper');
                const itemSelectedList = itemSelected.querySelector('.projects__item-list');
                const newO = document.createElement('ul');

                return function() {
                    imgtag.classList.add('projects__popup-img');
                    imgtag.classList.remove('projects__item-img');

                    projectWrapper.prepend(popupImages);

                    popup.classList.toggle('popup_active');
                    hideScrollBar();

                    projectWrapper.append(newO);
                    newO.replaceWith(itemSelectedList);
                    itemSelectedList.classList.add('projects__popup-list');

                    let noJpg = sourceJpg.slice(0,-6);
                    let noWebp = sourceWebp.slice(0,-7);
                    let num = sourceInitial.slice(-6, -4);

                    let largesourceJpg = noJpg + num + '-large.jpg';
                    let largesourceWebp = noWebp + num + '-large.webp';

                    imgtag.src = largesourceJpg;
                    sourcetag.srcset = largesourceWebp;

                    imgtag.alt = altInitial;

                    let pictureHeight = document.querySelector('.projects__popup-wrapper picture');
                    let newNum = imgtag.offsetHeight + 'px';
                    pictureHeight.style.height = newNum;
                }
            })(projectsItem[j]);
        }
    }

    else {
        for(let i = 0; i < projectsItem.length; i++) {
            projectsItem[i].onclick = ((image) => {
                const imgInitial = image.querySelector('img');
                let imgtag = popup.querySelector('img');
                let sourcetag = popup.querySelector('source');

                const sourceInitial = imgInitial.getAttribute('src');
                const altInitial = imgInitial.getAttribute('alt');
                let sourceJpg = imgtag.getAttribute('src');
                let sourceWebp = sourcetag.getAttribute('srcset');

                return function() {
                    popup.classList.toggle('popup_active');
                    hideScrollBar();

                    let noJpg = sourceJpg.slice(0,-6);
                    let noWebp = sourceWebp.slice(0,-7);
                    let num = sourceInitial.slice(-6, -4);

                    let largesourceJpg = noJpg + num + '-large.jpg';
                    let largesourceWebp = noWebp + num + '-large.webp';

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