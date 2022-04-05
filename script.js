'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('overlay');
const btnCloseModal = document.querySelector('.close-modal');

//use querySelectorAll to select all the element with the same class name
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
}
