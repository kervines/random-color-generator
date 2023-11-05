const backgroundCard = document.querySelectorAll('.card');

function colorGenerator() {
  const hexRed = Math.floor(Math.random() * 255).toString(16);
  const hexGreen = Math.floor(Math.random() * 255).toString(16);
  const hexBlue = Math.floor(Math.random() * 255).toString(16);

  return `#${hexRed}${hexGreen}${hexBlue}`;
}

backgroundCard.forEach((color) => {
  const hexCode = colorGenerator();
  color.style.backgroundColor = hexCode;
  color.innerHTML = `<h2>${hexCode}</h2>`;
});
