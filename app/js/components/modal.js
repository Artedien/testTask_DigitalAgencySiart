function modal() {
    function inputsValidate() {
        const inputs = document.querySelectorAll('.form__input--required');
        inputs.forEach((item) => {
            item.addEventListener('input', () => {
                const inputValue = item.value.trim();

                const parent = item.parentElement;

                if (inputValue == '') {
                    parent.classList.add('form__error');
                } else {
                    parent.classList.remove('form__error');
                }
            });
            item.addEventListener('blur', () => {
                const inputValue = item.value.trim();

                const parent = item.parentElement;

                if (inputValue == '') {
                    parent.classList.add('form__error');
                } else {
                    parent.classList.remove('form__error');
                }
            });
        });
    }
    inputsValidate();

    const modalWindow = document.querySelector('.modal');
    const closeBtn = document.querySelectorAll('.close-btn');
    const body = document.body;

    function openModal() {
        modalWindow.classList.add('isOpen');

        const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
        let scrollWith = getScrollbarWidth();
        body.style.paddingRight = `${scrollWith}px`;
        body.style.overflow = 'hidden';
    }
    function closeModal() {
        modalWindow.classList.remove('isOpen');
        setTimeout(() => {
            body.style.paddingRight = `0px`;
            body.style.overflow = 'visible';
        }, 500);
    }

    function submitForm() {
        const form = document.querySelector('.form__form');
        const submitButton = document.querySelector('.form__submit-btn');

        const formElements = form.querySelectorAll('.form__input--required');
        const formElementCheckbox = form.querySelectorAll('.form__agree-checkbox');

        function updateSubmitButtonState() {
            const isEmpty = Array.from(formElements).some((element) => {
                return element.value.trim() === '';
            });

            const formErrorCheckbox = Array.from(formElementCheckbox).some((element) => {
                return !element.checked;
            });

            formElements.forEach((item) => {
                const inputValue = item.value.trim();

                const parent = item.parentElement;

                if (inputValue == '') {
                    parent.classList.add('form__error');
                } else {
                    parent.classList.remove('form__error');
                }
            });

            formElementCheckbox.forEach((item) => {
                const inputValue = item.checked;

                const parent = item.parentElement;

                if (!inputValue) {
                    parent.classList.add('form__error');
                } else {
                    parent.classList.remove('form__error');
                }
            });

            if (!isEmpty && !formErrorCheckbox) {
                openModal();
            }
        }
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            updateSubmitButtonState();
        });
    }

    submitForm();

    closeBtn.forEach((item) => {
        item.addEventListener('click', closeModal);
    });

    modalWindow.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('modal')) {
            closeModal();
        }
    });
}

export default modal;
