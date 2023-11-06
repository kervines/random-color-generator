import { copiarTexto } from './copy.js';

const backgroundCard = document.querySelectorAll('.card');
const animationIcon = document.querySelector('.title-header i');

animationIcon.addEventListener('click', () => {
  animationIcon.classList.add('animation-icon');
  location.reload();
});

function colorGenerator() {
  const hexRed = Math.round(Math.random() * 0xff)
    .toString(16)
    .padStart(2, 0);
  const hexGreen = Math.round(Math.random() * 0xff)
    .toString(16)
    .padStart(2, 0);
  const hexBlue = Math.round(Math.random() * 0xff)
    .toString(16)
    .padStart(2, 0);
  return `#${hexRed}${hexGreen}${hexBlue}`;
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
