const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('change', event => {
  nameRef.textContent = event.target.value;
});
inputRef.addEventListener('focus', onInputClear);

function onInputClear() {
  event.target.value = '';
  nameRef.textContent = 'незнакомец';
}
