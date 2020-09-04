const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function onTextSize() {
  textRef.style.fontSize = `${inputRef.value}px`;
}

// inputRef.addEventListener('keydown', onTextSize);
inputRef.addEventListener('input', onTextSize);
// inputRef.addEventListener('mouseup', onTextSize);
