const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('keydown', event => {
  //   console.log(event.target.value);
  //   event.target.value = 0
  for (let i of event.target.value) {
    console.log(i);
    if ((event.target.value[i] += 1)) {
      console.log('Увеличиваем шрифт');
    } else {
      console.log('Уменьшаем шрифт');
    }
  }
});
