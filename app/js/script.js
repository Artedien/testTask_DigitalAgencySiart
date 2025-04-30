import aboutSwiper from './components/swiper';
import goodsStateBtn from './components/goodsStateBtn';
import goodsCounter from './components/goodsCounter';
import modal from './components/modal';

document.addEventListener('DOMContentLoaded', () => {
    try {
        aboutSwiper();
    } catch {}
    try {
        goodsStateBtn();
    } catch {}
    try {
        goodsCounter();
    } catch {}
    try {
        modal();
    } catch {}
});
