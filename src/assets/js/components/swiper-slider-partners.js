const swiperPartners = new Swiper('.company-partners__swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 700,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
    grid: {
        rows: 2,
        fill: "row",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            grid: {
                rows: 2,
                fill: "row",
            },
        },

        577: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },
    }
})