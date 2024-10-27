'use strict';

const modal = document.querySelector('.modal'); // x = modal.textContent;
// all the text under "modal" is now stored in modal
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal); //use a method (text content) so it doesn't show all the weird stuff!

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log(`button clicked! button ${i + 1} `);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', close);
overlay.addEventListener('click', close);

function close() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape') close();
});
