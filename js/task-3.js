const inputField = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output')

const handleInput = e => {
    if (e.target.value.trim() === '') {
        nameOutput.textContent = 'Anonymous'
    } else {
        nameOutput.textContent = e.target.value.trim();
        }
}

inputField.addEventListener('input', handleInput);