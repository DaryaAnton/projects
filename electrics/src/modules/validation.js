/* eslint-disable no-useless-escape */
const validation = () => {
    const nameInput = document.querySelector('[name=fio]');
    const phoneInput = document.querySelector('[name=tel]');


    nameInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я]/gi, "");
    });
    phoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\+]/gi, "");

        if (e.target.value.length >= 11) {
            e.target.classList.add('success');
        } else {
            e.target.classList.remove('success');
        };
    });
};

export default validation;