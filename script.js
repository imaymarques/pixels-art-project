function changeClass(event) {
  let select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}
let palet = document.querySelectorAll('.color');
for (let index = 0; index < palet.length; index += 1) {
  palet[index].addEventListener('click', changeClass);
}
