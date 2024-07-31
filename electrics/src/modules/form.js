/* eslint-disable no-unused-vars */
const form = () => {
    const form = document.querySelector("[name=form-callback]");
    const status = document.createElement("div");
    const loadText = "Загрузка..";
    const errorText = "Ошибка!";
    const successText = "Успешная отправка! Наш менеджер скоро с вами свяжется.";
    const warningText = "Заполните форму";

    const validate = (list) => {
        let success = true;
        list.forEach((input) => {
            if (input.name !== 'fio' && !input.classList.contains("success")) {
                success = false;
            }
        });
        return success;
    };

    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((response) => response.json());
    };


    form.append(status);

    const clearStatus = () => {
        setTimeout(() => {
            status.textContent = '';
        }, 3000);
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll("[name]");
        const formData = new FormData(form);
        const formBody = {};

        status.textContent = loadText;

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then((data) => {
                    status.textContent = successText;
                    clearStatus();

                    formElements.forEach((input) => {
                        input.value = "";
                        input.classList.remove('success');
                    });
                })
                .catch((error) => {
                    status.textContent = errorText;
                    clearStatus();
                });
        } else {
            status.textContent = warningText;
            clearStatus();
        };
    };

    try {
        if (!form) {
            throw new Error("Верните форму на место, пожалуйста!");
        };

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            submitForm();
        });
    } catch (error) {
        error.message;
    };
};

export default form;
