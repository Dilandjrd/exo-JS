const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {

    event.preventDefault();


    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const addressInput = document.getElementById("address");
    const phoneInput = document.getElementById("phone");
    const pizzaSizeSelect = document.getElementById("pizzaSize")
    const pizzaChoiceSelect = document.getElementById("pizzaChoice")


    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        address: addressInput.value,
        phone: phoneInput.value,
        pizzaSize: pizzaSizeSelect.value,
        pizzaChoice: pizzaChoiceSelect.value,
    }

    const errors = {
        firstName: false,
        lastName: false,
        address: false,
        phone: false,
        pizzaSize: false,
        pizzaChoice: false,
    }


    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const addressError = document.getElementById('addressError');
    const phoneError = document.getElementById('phoneError');
    const pizzaSizeError = document.getElementById('pizzaSizeError')
    const pizzaChoiceError = document.getElementById('pizzaChoiceError')

    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    addressError.style.display = 'none';
    phoneError.style.display = 'none';
    pizzaSizeError.style.display = 'none';
    pizzaChoiceError.style.display = 'non';
    

    const nameRegex = /^[a-zA-Z ]+$/
    const phoneRegex = /(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
    const addressRegex = /^\d+\s[A-Za-z\s]+\s[A-Za-z\s]+$/

    if (!formData.firstName || !nameRegex.test(formData.firstName)) {

        errors.firstName = true;
        firstNameError.style.display = 'block';
    }
    if (!formData.lastName || !nameRegex.test(formData.lastName)) {
        errors.lastName = true;
        lastNameError.style.display = 'block';
    }
    if (!formData.address || !addressRegex.test(formData.address)) {
        errors.address = true;
        addressError.style.display = 'block';
    }
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
        errors.phone = true;
        phoneError.style.display = 'block';
    }
    if (! formData.pizzaSize) {
        errors.pizzaSize = true;
        pizzaSizeError.style.display = 'block'
    }
    if (! formData.pizzaChoice) {
        errors.pizzaChoice = true;
        pizzaChoiceError.style.display = 'block'
    }

    let sizeCost = {
        small: 5,
        medium: 7,
        large:10,
      }
      let pizzaCost = {
        Savoyarde: 5,
        Cannibal: 5,
        Margarita: 5,
        Fromages : 5,
        Reines : 5,
      }
      let totalCost = sizeCost[pizzaSizeSelect.value] + pizzaCost[pizzaChoiceSelect.value];

      let totalCostElement = document.getElementById("totalCost");
      totalCostElement.innerHTML = `Coût total :${totalCost}€`;

      alert("Merci pour votre commande!");

    if (!Object.values(errors).includes(true)) {
        console.log(formData);
        
        contactForm.reset();
    }
})