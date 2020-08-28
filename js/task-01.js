/**
 * Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
 * Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество
 * элементов в категории (всех вложенных в него элементов li).
 *
 * Например для первой категории получится:
 * Категория: Животные
 * Количество элементов: 4
 */
// const itemNumberRef = document.querySelectorAll('.item');
// console.log(`В списке ${itemNumberRef.length} категории.`);

const itemNumberRef = document.querySelector('#categories');
console.log(`В списке ${itemNumberRef.children.length} категории.`);

const categoriesElementRef = [...itemNumberRef.children].forEach(element =>
  console.log(
    `Категория: ${element.querySelector('h2').textContent}
Количество элементов: ${element.querySelectorAll('li').length}`,
  ),
);
