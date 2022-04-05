'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('overlay');
const btnCloseModal = document.querySelector('.close-modal');

//use querySelectorAll to select all the element with the same class name
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remote('hidden');
  overlay.classList.remote('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
