const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('change', event => {
  console.log(event);
  nameRef.textContent = event.target.value;
});
