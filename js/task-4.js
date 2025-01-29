
const loginForm = document.querySelector('.login-form');



const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.trim() === '' || password.trim() === '') {
        alert('All form fields must be filled in');
    } else {
        const results = {
            email: email.trim(),
            password: password.trim(),
        }
        console.log(results);
        form.reset();
    }

}



loginForm.addEventListener('submit', handleSubmit);