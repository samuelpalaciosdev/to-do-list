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

const deleteToDoItem = (e) => {
  // Selects the element being clicked (we want the trash-btn)
  const item = e.target;
  // Selects span
  const span = e.target.parentElement;

  // Delete Todo, if the elem being clicked contains the class trash-btn
  if (item.classList.contains('trash-btn')) {
    // Removing li
    const todo = span.parentElement;
    todo.remove();
  }
};
