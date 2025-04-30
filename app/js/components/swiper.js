import Swiper from 'swiper/bundle';

const aboutSwiper = () => {
    const swiper = new Swiper('.goods__swiper', {
        slidesPerView: 2,
        spaceBetween: 8,
        loop: true,
        grabCursor: true,

        // Navigation arrows
        navigation: {
            nextEl: '.goods__swiper-btn-next',
            prevEl: '.goods__swiper-btn-prev'
        },
        pagination: {
            el: '.swiper-pagination'
            
        },
        breakpoints: {
            361: {
                slidesPerView: 3,
                spaceBetween: 8
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 8
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 8
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 16
            },
            1920: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });
};

export default aboutSwiper;
