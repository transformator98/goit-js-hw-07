const counterValue = document.querySelector('#value');
const clearValue = document.querySelector('button[data-action="clear"]');
const buttonDelRef = document.querySelector('button[data-action="decrement"]');
const buttonAddRef = document.querySelector('button[data-action="increment"]');

buttonDelRef.addEventListener('click', onDeliteBtn);

buttonAddRef.addEventListener('click', onAddedBtn);

clearValue.addEventListener('click', onClearOutput);

function onDeliteBtn() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

function onAddedBtn() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

function onClearOutput() {
  counterValue.textContent = 0;
}
