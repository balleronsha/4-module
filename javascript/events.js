// тыкалка для появления меню
document.querySelector('.menubtn1').addEventListener('click', function () {
  this.classList.toggle('active');
  document.getElementById('menu').classList.toggle('show');
});
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}
//
