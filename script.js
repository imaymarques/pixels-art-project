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
  if (event.target.classList.contains('pixel')) {
    let color = document.querySelector('.selected');
    let background = window.getComputedStyle(color).getPropertyValue('background-color');
    event.target.style.background = background;
  }
}

function click() {
  let board = document.getElementById('pixel-board');
  board.addEventListener('click', changeColor);
}
click();

function clearBoard() {
  let board = document.getElementsByClassName('pixel');
  for (index = 0; index < board.length; index += 1) {
    board[index].style.background = 'white';
  }
}

let getButton = document.getElementById('clear-board').addEventListener('click', clearBoard);
