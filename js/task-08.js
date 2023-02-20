const formRef = document.querySelector(".login-form");
const emailInputRef = document.querySelector(".login-form");
const passInputRef = document.querySelector(".login-form"); 

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    if(email === '' || password === ''){
        alert("Потрібно заповнити всі поля");
    } else {
        
        const formElements = {
            email,
            password,
        };
        console.log(formElements);

        formRef.reset();
    }
};
// done