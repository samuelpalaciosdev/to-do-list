// Selectors
const input = document.querySelector('#addToDo');
const todoList = document.querySelector('ul');

// Functions

const addToDoItem = (inputField) => {
  const newTodo = document.createElement('li');
  // Set newToDo text to the input text
  newTodo.innerText = ' ' + input.value;
  todoList.appendChild(newTodo);
  const span = document.createElement('span');
  const trashBtn = document.createElement('i');
  trashBtn.classList.add('fa', 'fa-trash', 'trash-btn');
  // Add span to the li before the innerText of the li
  newTodo.prepend(span);
  span.appendChild(trashBtn);
  // Clear Todo Input Value
  input.value = '';
};
