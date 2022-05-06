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
            spaceBetween: 10,
            speed: 200,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

window.addEventListener('load', (e) => {
    eventosCarta();
    pasarHojas();
});


function eventosCarta() {
    const carta = document.getElementById('carta');
    const btnCerrar = document.getElementById('btnCerrar');
    const iconoCorazon = document.querySelector('.iconoCorazon');

    if (screen.width > 768) {
        carta.addEventListener('mouseover', (e) => {
            carta.classList.add("hover");
        });
        carta.addEventListener('mouseout', (e) => {
            carta.classList.remove("hover");
        });
    } else {
        iconoCorazon.addEventListener('click', (e) => {
            carta.classList.add("hover");
        });

        btnCerrar.addEventListener('click', (e) => {
            carta.classList.remove("hover");
        });
    }
}

function pasarHojas() {
    const hojas = document.querySelectorAll('.carta .contenido .posiciones #mensajes .cuaderno .hoja');
    hojas.forEach(hoja => {
        hoja.addEventListener('click', (e) => {
            hoja.classList.toggle('pasar');
        });
    });
}