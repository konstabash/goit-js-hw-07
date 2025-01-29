function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('button.change-color');
const body = document.querySelector('body');
const colorName = document.querySelector('span.color')

const handleColor = e => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
}

button.addEventListener('click', handleColor);