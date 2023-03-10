const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {

    event.preventDefault();


    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passWordInput = document.getElementById("passWord");


    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        passWord: passWordInput.value,
    }

    const errors = {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        passWord: false,
    }


    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passWordError = document.getElementById('passWordError');


    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    passWordError.style.display = 'none';


    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    const nameRegex = /^[a-zA-Z ]+$/
    const phoneRegex = /(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
    const passWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&_]{8,50}$/;

    if (!formData.firstName || !nameRegex.test(formData.firstName)) {

        errors.firstName = true;
        firstNameError.style.display = 'block';
    }
    if (!formData.lastName || !nameRegex.test(formData.lastName)) {
        errors.lastName = true;
        lastNameError.style.display = 'block';
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = true;
        emailError.style.display = 'block';
    }
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
        errors.phone = true;
        phoneError.style.display = 'block';
    }
    if (!formData.passWord || !passWordRegex.test(formData.passWord)) {
        errors.passWord = true;
        passWordError.style.display = 'block';
    }

    if (!Object.values(errors).includes(true)) {
        console.log(formData)
    }
contactForm.reset();
})