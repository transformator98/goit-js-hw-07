const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  nameRef.textContent = event.target.value;
  if (event.target.value === '') {
    nameRef.textContent = 'незнакомец';
  }
});
inputRef.addEventListener('focus', onInputClear);

function onInputClear() {
  event.target.value = '';
  nameRef.textContent = 'незнакомец';
}
