// 1. Пытаемся достать число из localStorage при загрузке
// Мы используем Number(), так как localStorage всегда хранит данные как текст
let savedCount = localStorage.getItem('cartCount');
let itemCount = savedCount ? Number(savedCount) : 0;

const countDisplay = document.getElementById('count');
const addButton = document.getElementById('add-btn');
const clearButton = document.getElementById('clear-btn');

// Сразу обновляем текст на экране значением из памяти
countDisplay.innerText = itemCount;

// 2. Функция добавления
addButton.addEventListener('click', (e) => {
  itemCount++;
  countDisplay.innerText = itemCount;
  
  // Сохраняем новое значение в память
  localStorage.setItem('cartCount', itemCount);
  
// Обновляем экран
});
addButton.addEventListener('click', (e) => {

  // Новая логика: создаем элемент +1
  const plusOne = document.createElement('span');
  plusOne.innerText = '+1';
  plusOne.className = 'plus-one';
  
  // Помещаем его там, где был клик (или внутри карточки)
  document.body.appendChild(plusOne);
  plusOne.style.left = e.pageX + 'px';
  plusOne.style.top = e.pageY + 'px';

  // Удаляем элемент после анимации, чтобы не мусорить в коде
  setTimeout(() => plusOne.remove(), 3800);


});

// 3. Функция сброса
clearButton.addEventListener('click', () => {
  itemCount = 0;
  countDisplay.innerText = itemCount;
  
  // Обновляем память значением 0
  localStorage.setItem('cartCount', itemCount);
});