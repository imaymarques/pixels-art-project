function changeClass(event) {
  let select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}
let palet = document.querySelectorAll('.color');
for (let index = 0; index < palet.length; index += 1) {
  palet[index].addEventListener('click', changeClass);
}

function changeColor(event) {
  let color = document.querySelector('.selected');
  let background = window.getComputedStyle(color).getPropertyValue('background-color');
  event.target.style.background = background;
}

function click() {
  let board = document.getElementById('pixel-board');
  board.addEventListener('click', changeColor);
}
click();
