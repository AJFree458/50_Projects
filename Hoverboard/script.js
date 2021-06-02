const container = document.getElementById('container');
const colors = ['#123456', '#8e44ad', '#3498db', 'blue', 'gold', '#ebd2d3', '#32824e', '#575d0b', '#67109a', '#df6658', '##8f393a', '#a1ac77', '#9b78e7', '#2ef5c9', '#53498a', '#b39327', '#b64cc8', '#8a224a', '#eca8aa', '#b941e0',];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
};

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
