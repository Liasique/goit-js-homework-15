const controls = document.querySelector('#controls');
const inputElement = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', handleCreate);
destroyButton.addEventListener('click', handleDestroy);

function handleCreate() {
  const amount = inputElement.value;
  createBoxes(amount);
}

function handleDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  const boxSize = 30;
  const gap = 10;
  let boxesMarkup = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = boxSize + i * gap;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesMarkup += box.outerHTML;
  }

  boxesContainer.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
