const validation = () => {
    const phoneInput = document.querySelector('[name=user_phone]');

    phoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/gi, "");
    });
}

export default validation;