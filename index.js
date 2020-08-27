import FlexMasonry from './FlexMasonry.js';
import { arrayOfObjectsGenerator } from './utils.js';

const masonryContainer = document.querySelector('.masonry-container');

const arrayOfObjects = arrayOfObjectsGenerator(28);

let cards = [];

for (let i = 0; i < arrayOfObjects.length; i++) {
  const cardElement = document.createElement('div');
  const cardContent = `
    <h1>${arrayOfObjects[i].id}</h1>
    <p>${arrayOfObjects[i].string}</p>
  `;
  cardElement.innerHTML = cardContent;
  cardElement.classList.add('card');
  cards.push(cardElement);
}

cards = FlexMasonry.prepareElements(cards);

/** 
В конструктор FlexMansory пeредаются:
1. DOM элемент, куда рендерить массив элементов;
2. Сам массив элементов;
3. Количество колонок кладки.
*/ 
const masonry = new FlexMasonry(masonryContainer, cards, 4);

masonry.render();