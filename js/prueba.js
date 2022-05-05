var swiper = new Swiper(".mySwiper", {
    freeMode: true,

    effect: "coverflow",

    slidesPerGroup: 1,

    autoplay: {
        delay: 5000,
    },

    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    breakpoints: {
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 200,
            
        },

        992: {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 200,
        },

        576: {
            slidesPerView: 2,
            spaceBetween: 20,
            speed: 200,
        },

        0: {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 200,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});