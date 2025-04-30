const goodsCounter = () => {
    const parrent = document.querySelector('.goods__swiper-box');

    parrent.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target);
        if (target.classList.contains('goods__slide-content-btn')&&!target.classList.contains('goods__slide-content-btn--not')) {
            target.parentElement.classList.add('active');
        }

        if (target.classList.contains('goods__slide-counter-btn')) {
            const counter = target.parentElement;
            const counterParent = counter.parentElement;
            const counterNumber = counter.querySelector('.goods__slide-counter-number');
            if (target.classList.contains('goods__slide-counter-btn--min')) {
                (function () {
                    decrementCounter(counterNumber, counterParent);
                })();
            }
            if (target.classList.contains('goods__slide-counter-btn--plus')) {
                (function () {
                    incrementCounter(counterNumber, counterParent);
                })();
            }
        }

        function decrementCounter(counterNumber, counterParent) {
            let currentValue = parseInt(counterNumber.innerText);

            if (currentValue > 0) {
                currentValue--;
                counterNumber.innerText = currentValue;
            }
            if (currentValue < 1) {
                counterParent.classList.remove('active');
                counterNumber.innerText = 1;
            }
        }

        function incrementCounter(counterNumber, counterParent) {
            let currentValue = parseInt(counterNumber.innerText);
            // Увеличиваем значение счетчика
            currentValue++;

            // Обновляем значение счетчика
            counterNumber.innerText = currentValue;

            // Обновляем класс родительского элемента
            counterParent.classList.add('active');
        }
    });
};

export default goodsCounter;
