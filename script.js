import { copiarTexto } from './copy.js';

const mainEl = document.querySelector('main');
const backgroundCard = document.querySelectorAll('.card');
const animationIcon = document.querySelector('.title-header i');

// function createCard() {
//   for (let i = 0; i <= 30; i++) {
//     const div = document.createElement('div');
//     div.classList.add('card');
//     mainEl.appendChild(div);
//   }
// }
// createCard();

animationIcon.addEventListener('click', () => {
  animationIcon.classList.add('animation-icon');
  location.reload();
});

function colorGenerator() {
  const randomColor = Math.round(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, 0);
  return `#${randomColor}`;
}

backgroundCard.forEach((codeColor) => {
  const hexCode = colorGenerator();
  codeColor.style.backgroundColor = hexCode;
  codeColor.innerHTML = `<h2>${hexCode}</h2>
  <i class="fa-regular fa-copy"></i>`;
});

backgroundCard.forEach((copyItem) => {
  copyItem.addEventListener('click', (e) => {
    copiarTexto(e.target.innerText);
  });
});
