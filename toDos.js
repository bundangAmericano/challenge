const form2 = document.querySelector('.toDos form');
const input = form2.querySelector('input');
const list = document.querySelector('#list');

let toDos = [];

if (localStorage.getItem('toDos')) {
  toDos = JSON.parse(localStorage.getItem('toDos'));
  toDos.forEach(paint);
}

function saveLocalStorageToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

function deleteToDos(event) {
  const li = event.target.parentNode;
  toDos = toDos.filter(item => item.id !== parseInt(li.id));
  saveLocalStorageToDos();
  li.remove();
}

function inputHandler(event) {
  event.preventDefault();
  const toDo = { 'id': Date.now(), 'text': input.value };
  toDos.push(toDo);
  saveLocalStorageToDos();
  input.value = '';
  paint(toDo);
}

function paint(toDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btn = document.createElement('button');
  btn.textContent = 'X';
  list.appendChild(li);
  li.appendChild(span);
  li.appendChild(btn);
  span.textContent = toDo.text;
  li.id = toDo.id;
  btn.addEventListener('click', deleteToDos);
}

form2.addEventListener('submit', inputHandler)