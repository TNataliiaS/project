"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Get dimensions intro
  // ****************
  var firstEl = document.getElementById('intro');
  var header = document.getElementById('header');
  var introWrapper = document.getElementById('intro__wrapper');
  var getDimensionsIntro = function getDimensionsIntro() {
    var headerHeight = header.offsetHeight;
    var firstElHeight = firstEl.offsetHeight;
    var heightDifference = firstElHeight - headerHeight;
    if (typeof introWrapper != 'undefined' && introWrapper != null) {
      firstEl.style.paddingTop = headerHeight + 'px';
      introWrapper.style.height = heightDifference + 'px';
    } else {
      firstEl.style.paddingTop = headerHeight + 'px';
    }
  };
  getDimensionsIntro();
  window.addEventListener('resize', getDimensionsIntro);
  // Fixed header on scroll
  // ****************
  window.addEventListener('scroll', function () {
    var firstEl = document.getElementById('intro');
    var header = document.getElementById('header');
    var firstElHeight = firstEl.offsetHeight;
    var headerHeight = header.offsetHeight;
    var heightDifference = firstElHeight - headerHeight;
    if (window.scrollY >= heightDifference) {
      header.classList.add('header_fixed');
    } else {
      header.classList.remove('header_fixed');
    }
  });
  // Hide and show scroll bar
  // ****************
  var headerWrapper = document.getElementById('header__wrapper');
  var getScrollbarWidth = function getScrollbarWidth() {
    var scrollbarWidth = Math.max(window.innerWidth - document.documentElement.clientWidth, 0);
    return "".concat(scrollbarWidth, "px");
  };
  var showScrollBar = function showScrollBar() {
    setTimeout(function () {
      headerWrapper.style.marginRight = '0';
      document.documentElement.style.marginRight = '0';
      document.documentElement.style.overflow = 'auto';
    }, 300);
  };
  var hideScrollBar = function hideScrollBar() {
    headerWrapper.style.marginRight = getScrollbarWidth();
    document.documentElement.style.marginRight = getScrollbarWidth();
    document.documentElement.style.overflow = 'hidden';
  };
  // Smooth scoll element
  // ****************
  var links = document.querySelectorAll('.smooth-scroll-link');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
      event.preventDefault();
      var href = this.getAttribute('href').substring(1);
      var scrollTarget = document.getElementById(href);
      var topOffset = header.offsetHeight;
      var elementPosition = scrollTarget.getBoundingClientRect().top;
      var offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  }

  // Button scroll up
  // ****************
  window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.scroll-up-link');
    scroll.classList.toggle('scroll-up-link_showed', window.scrollY > 650);
  });

  // Menu Toggle
  // ****************
  var burgerToggle = document.getElementById('burger');
  var siteNavShow = document.getElementById('site-nav');
  var toggleByLink = document.querySelectorAll('.site-nav__link');
  burgerToggle.addEventListener('click', function () {
    burgerToggle.classList.toggle('burger_active');
    header.classList.toggle('header_show');
    siteNavShow.classList.toggle('site-nav_show');
    if (burgerToggle.classList.contains('burger_active')) {
      hideScrollBar();
    } else {
      showScrollBar();
    }
  });
  toggleByLink.forEach(function (e) {
    return e.addEventListener('click', function () {
      burgerToggle.classList.remove('burger_active');
      header.classList.remove('header_show');
      siteNavShow.classList.remove('site-nav_show');
      showScrollBar();
    });
  });
  var popup = document.getElementById('popup');
  var projectsItem = document.querySelectorAll('.projects__item');
  function toggleImages() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      var _loop = function _loop() {
        var itemSelected = projectsItem[j];
        var itemSelectedBtn = itemSelected.querySelector('.projects__item-more');
        itemSelectedBtn.onclick = function () {
          var imgInitial = itemSelected.querySelector('img');
          var popupImages = itemSelected.querySelector('picture').cloneNode(true);
          var imgtag = popupImages.querySelector('img');
          var sourcetag = popupImages.querySelector('source');
          var sourceInitial = imgInitial.getAttribute('src');
          var altInitial = imgInitial.getAttribute('alt');
          var sourceJpg = imgtag.getAttribute('src');
          var sourceWebp = sourcetag.getAttribute('srcset');
          var projectWrapper = document.querySelector('.projects__popup-wrapper');
          var itemSelectedList = itemSelected.querySelector('.projects__item-list');
          var newList = document.createElement('ul');
          var one = sourceWebp.slice(0, -8);
          return function () {
            imgtag.classList.add('projects__popup-img');
            imgtag.classList.remove('projects__item-img');
            projectWrapper.prepend(popupImages);
            popup.classList.toggle('popup_active');
            hideScrollBar();
            projectWrapper.append(newList);
            newList.replaceWith(itemSelectedList);
            itemSelectedList.classList.add('projects__popup-list');
            imgtag.alt = altInitial;
            if (one == './assets/images/projects/project-mobile') {
              var noJpg = sourceJpg.slice(0, -6);
              var noWebp = sourceWebp.slice(0, -7);
              var num = sourceInitial.slice(-6, -4);
              var largesourceJpg = noJpg + 'mobile-' + num + '.jpg';
              var largesourceWebp = noWebp + num + '.webp';
              imgtag.src = largesourceJpg;
              sourcetag.srcset = largesourceWebp;
            }
            // else {
            // console.log('no')
            //     const noJpg = sourceJpg.slice(0,-6);
            //     const noWebp = sourceWebp.slice(0,-7);
            //     const num = sourceInitial.slice(-6, -4);

            //     const largesourceJpg = noJpg + num + '-large.jpg';
            //     const largesourceWebp = noWebp + num + '-large.webp';

            //     imgtag.src = largesourceJpg;
            //     sourcetag.srcset = largesourceWebp;
            //     imgtag.alt = altInitial;
            // }

            // const noJpg = sourceJpg.slice(0,-6);
            // const noWebp = sourceWebp.slice(0,-7);
            // const num = sourceInitial.slice(-6, -4);

            // const largesourceJpg = noJpg + num + '-large.jpg';
            // const largesourceWebp = noWebp + num + '-large.webp';

            // imgtag.src = largesourceJpg;
            // sourcetag.srcset = largesourceWebp;
            // imgtag.alt = altInitial;

            document.querySelector('.projects__popup-wrapper picture').style.display = 'block';
            var pictureHeight = document.querySelector('.projects__popup-wrapper picture');
            var newNum = imgtag.offsetHeight + 'px';
            pictureHeight.style.height = newNum;
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
            hideScrollBar();
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
    } else {
      document.querySelector('.projects__popup-wrapper picture').style.display = 'none';
    }
    popup.classList.remove('popup_active');
    showScrollBar();
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
});