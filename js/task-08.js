const form = document.querySelector('.login-form');

form.addEventListener('submit', onForm);

function onForm(event) {
    event.preventDefault();

    const loginForm = event.currentTarget.elements;
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if(form.elements.email.value === '' || form.elements.password.value === '') {
        return alert('Всі поля повинні бути заповнені!')
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);

    form.reset();

};
