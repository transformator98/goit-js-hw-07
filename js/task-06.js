const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputValid);
inputRef.addEventListener('focus', onInputClear);

function onInputValid() {
  event.target.value.length === Number(inputRef.dataset.length)
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}

function onInputClear() {
  event.target.value = '';
  inputRef.classList.remove('valid');
  inputRef.classList.remove('invalid');
}
