const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galeryRef = document.querySelector('#gallery');
galeryRef.classList.add('container');

const createList = image => {
  const listItemRef = document.createElement('li');
  listItemRef.classList.add('galery__item');
  galeryRef.appendChild(listItemRef);

  const imgRef = document.createElement('img');
  listItemRef.appendChild(imgRef);
  imgRef.classList.add('galery__img');
  imgRef.src = image.url;
  imgRef.alt = image.alt;
  imgRef.addEventListener('click', () => {
    imgRef.classList.add('galery__img_filter');
  });
};

const imagesCreate = images.map(image => createList(image));
