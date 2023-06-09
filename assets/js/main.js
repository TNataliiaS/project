"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Fixed header on scroll
  // ****************
  var firstEl = document.getElementById('intro');
  var header = document.getElementById('header');
  var headerHeight = header.offsetHeight;
  var firstElHeight = firstEl.offsetHeight;
  window.addEventListener('scroll', function () {
    if (window.scrollY >= firstElHeight - headerHeight) {
      header.classList.add('header_fixed');
    } else {
      header.classList.remove('header_fixed');
    }
  });
  // Menu Toggle
  // ****************
  var burgerToggle = document.getElementById('burger');
  var headerShow = document.getElementById('header');
  var siteNavShow = document.getElementById('site-nav');
  var toggleByLink = document.querySelectorAll('.site-nav__link');
  var bodyDisableScroll = document.querySelector('body');
  burgerToggle.addEventListener('click', function () {
    burgerToggle.classList.toggle('burger_active');
    headerShow.classList.toggle('header_show');
    siteNavShow.classList.toggle('site-nav_show');
    bodyDisableScroll.classList.toggle('no-scroll');
  });
  toggleByLink.forEach(function (e) {
    return e.addEventListener('click', function () {
      burgerToggle.classList.remove('burger_active');
      headerShow.classList.remove('header_show');
      siteNavShow.classList.remove('site-nav_show');
      bodyDisableScroll.classList.remove('no-scroll');
    });
  });
  // Smooth scoll element
  // ****************
  var links = document.querySelectorAll('.smooth-scroll-link');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      event.preventDefault();
      var href = this.getAttribute('href').substring(1);
      var scrollTarget = document.getElementById(href);
      var topOffset = document.getElementById('header').offsetHeight;
      var elementPosition = scrollTarget.getBoundingClientRect().top;
      var offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  }
  var popup = document.getElementById('popup');
  var projectsItem = document.querySelectorAll('.projects__item');
  var getScrollbarWidth = function getScrollbarWidth() {
    var scrollbarWidth = Math.max(window.innerWidth - document.documentElement.clientWidth, 0);
    return "".concat(scrollbarWidth, "px");
  };
  function toggleImages() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.querySelector('.projects__popup-wrapper picture').remove();
      var _loop = function _loop() {
        var itemSelected = projectsItem[j];
        var itemSelectedBtn = itemSelected.querySelector('.projects__item-more');
        itemSelectedBtn.onclick = function () {
          var imgInitial = itemSelected.querySelector('img');
          // let imgtag = popup.querySelector('img');
          var popupImages = itemSelected.querySelector('picture').cloneNode(true);
          var imgtag = popupImages.querySelector('img');
          var sourcetag = popupImages.querySelector('source');
          // let sourcetag = popup.querySelector('source');

          var sourceInitial = imgInitial.getAttribute('src');
          var altInitial = imgInitial.getAttribute('alt');
          var sourceJpg = imgtag.getAttribute('src');
          var sourceWebp = sourcetag.getAttribute('srcset');
          var projectWrapper = document.querySelector('.projects__popup-wrapper');
          var itemSelectedList = itemSelected.querySelector('.projects__item-list');
          var newO = document.createElement('ul');
          return function () {
            imgtag.classList.add('projects__popup-img');
            imgtag.classList.remove('projects__item-img');

            // let we = itemSelected.querySelector('picture').cloneNode(true);
            // projectWrapper.prepend(we);
            projectWrapper.prepend(popupImages);
            popup.classList.toggle('popup_active');
            document.querySelector('.header__wrapper').style.marginRight = getScrollbarWidth();
            document.documentElement.style.marginRight = getScrollbarWidth();
            document.documentElement.style.overflow = 'hidden';
            projectWrapper.append(newO);
            newO.replaceWith(itemSelectedList);
            itemSelectedList.classList.add('projects__popup-list');

            // projectWrapper.insertAdjacentElement('beforeend', newO);
            // newO.replaceWith(itemSelectedList);
            // itemSelectedList.classList.add('projects__popup-list');

            var noJpg = sourceJpg.slice(0, -6);
            var noWebp = sourceWebp.slice(0, -7);
            var num = sourceInitial.slice(-6, -4);
            var largesourceJpg = noJpg + num + '-large.jpg';
            var largesourceWebp = noWebp + num + '-large.webp';
            imgtag.src = largesourceJpg;
            sourcetag.srcset = largesourceWebp;
            imgtag.alt = altInitial;
            var pictureHeight = document.querySelector('.projects__popup-wrapper picture');
            var newNum = imgtag.offsetHeight + 'px';
            pictureHeight.style.height = newNum;
            document.querySelector('.projects__popup-wrapper picture').style.display = 'block';
          };
        }(projectsItem[j]);
      };
      for (var j = 0; j < projectsItem.length; j++) {
        _loop();
      }
    } else {
      for (var _i = 0; _i < projectsItem.length; _i++) {
        projectsItem[_i].onclick = function (image) {
          var imgInitial = image.querySelector('img');
          var imgtag = popup.querySelector('img');
          var sourcetag = popup.querySelector('source');
          var sourceInitial = imgInitial.getAttribute('src');
          var altInitial = imgInitial.getAttribute('alt');
          var sourceJpg = imgtag.getAttribute('src');
          var sourceWebp = sourcetag.getAttribute('srcset');
          return function () {
            popup.classList.toggle('popup_active');
            document.querySelector('.header__wrapper').style.marginRight = getScrollbarWidth();
            document.documentElement.style.marginRight = getScrollbarWidth();
            document.documentElement.style.overflow = 'hidden';
            var noJpg = sourceJpg.slice(0, -6);
            var noWebp = sourceWebp.slice(0, -7);
            var num = sourceInitial.slice(-6, -4);
            var largesourceJpg = noJpg + num + '-large.jpg';
            var largesourceWebp = noWebp + num + '-large.webp';
            imgtag.src = largesourceJpg;
            sourcetag.srcset = largesourceWebp;
            imgtag.alt = altInitial;
            document.querySelector('.projects__popup-wrapper picture').style.display = 'block';
          };
        }(projectsItem[_i]);
      }
    }
  }
  toggleImages();
  var hideImagesPopup = function hideImagesPopup() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      document.querySelector('.projects__popup-wrapper picture').remove();
      document.querySelector('.projects__popup-wrapper ul').remove();
    }
    popup.classList.remove('popup_active');
    document.querySelector('.projects__popup-wrapper picture').style.display = 'none';
    setTimeout(function () {
      document.querySelector('.header__wrapper').style.marginRight = '0';
      document.documentElement.style.marginRight = '0';
      document.documentElement.style.overflow = 'auto';
    }, 300);
    if (document.querySelector('.projects__popup-list') !== null) {
      document.querySelector('.projects__popup-list').remove();
    }
    ;
  };
  document.querySelector('.popup__close-btn').addEventListener('click', function () {
    hideImagesPopup();
  });
  document.addEventListener('click', function (e) {
    if (e.target === document.querySelector('.projects__popup-wrapper')) {
      hideImagesPopup();
    }
    if (e.target === document.querySelector('.projects__popup-wrapper picture')) {
      hideImagesPopup();
    }
    if (e.target.id === 'popup') {
      hideImagesPopup();
    }
  });
  // let biggestHeight = 0;
  // const elements = document.querySelectorAll('.areas-activity__item');

  // for (let i = 0; i < elements.length; ++i) {
  //     // const oneEl = elements[i];
  //     if (biggestHeight < elements[i].offsetHeight) {
  //         biggestHeight = elements[i].offsetHeight;
  //     }
  // }
  // // console.log(biggestHeight);

  // for (let i = 0; i < elements.length; ++i) {
  //     // const oneEl = elements[i];
  //     elements[i].style.height = biggestHeight + 'px';
  // }
});