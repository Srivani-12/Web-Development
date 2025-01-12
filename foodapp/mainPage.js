import {dishes} from './data.js';

const container = document.getElementById('popular-dishes-container');
dishes.forEach(dish=>{
    const card = document.createElement('div');
    card.cardList.add('dish-card');

    card.innerHTML=`
    <img src="${dish.image}" alt="${dish.name}" class="dish-image" />
    <div class="dish-title">${dish.name}</div>
    <div class="dish-price">${dish.price}</div>
    <div class="dish-rating">Rating: ${dish.rating}</div>
  `;

 
  container.appendChild(card);

});