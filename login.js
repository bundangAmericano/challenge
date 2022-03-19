const login = document.querySelector('.login h2');
const form = document.querySelector('.login form');
const inputName = document.querySelector('.login input');

function paintName() {
  const yourName = localStorage.getItem('name');
  login.textContent = `${(yourName) ? `Hello ${yourName}` : 'Please write your name'}`
  if (yourName) {
    form.classList.add('hide');
  } else {
    form.classList.remove('hide');
  }
}
paintName();

function saveName(event) {
  event.preventDefault();
  localStorage.setItem('name', inputName.value);
  paintName();
}
form.addEventListener('submit', saveName)


