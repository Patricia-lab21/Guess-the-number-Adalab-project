'use strict';
const input = document.querySelector('#input-number');
const button = document.querySelector('#button');
const pista = document.querySelector('#pista');
const attemps = document.querySelector('#attemps');
const quantity = document.querySelector('#quantity');
const icon = document.querySelector('#icon');



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

const randomNumber = getRandomNumber(100)
console.log(randomNumber);

function increaseQuantity(){
   let finalQuantity = parseInt(quantity.innerHTML);
      finalQuantity = finalQuantity +=1;
      quantity.innerHTML = finalQuantity;
      if(finalQuantity >10){
         quantity.classList.remove('blue');
         quantity.classList.add('red');
      }

}

function getResults(){
increaseQuantity();
console.log(input.value);
    if(input.value>randomNumber){
       pista.innerHTML = 'Demasiado alto';

    }
    if(input.value<randomNumber){
        pista.innerHTML = 'Demasiado bajo';
     }
     else if(input.value==randomNumber){
        pista.innerHTML = '¡Has ganado campeona!🤟🏾';
        pista.classList.remove('loser');
        pista.classList.add('winner');

     }
     else if(input.value<0 || input.value>100 || input.value===''){
        pista.innerHTML = 'El número debe estar entre 1 y 100';
     }
}


button.addEventListener('click', getResults);