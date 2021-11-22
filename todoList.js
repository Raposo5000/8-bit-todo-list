var todoList = [];

const CloseItem = ``;
const DeleteItemButton = `<button class="nes-btn is-error">✖</button>`;
const restaureItem = `<button class="nes-btn is-primary">↺</button>`;

const renderListCompleted = () => {
  renderList(true);
};
const renderListToDo = () => {
  renderList(false);
};

const addItem = () => {
  const input = document.getElementById("todo-input");
  todoList.push({ text: input.value, completed: false });
  input.value = "";
  renderListToDo(false);
};

const deleteItem = (str) => {
  const index = todoList.findIndex((todo) => todo.text === str);
  todoList.splice(index, 1);
  renderListToDo(false);
};

const completeItem = (str) => {
  const index = todoList.findIndex((todo) => todo.text === str);
  todoList[index].completed = true;
  renderListToDo(false);
};

const restoreItem = (str) => {
  const index = todoList.findIndex((todo) => todo.text === str);
  todoList[index].completed = false;
  renderListToDo(false);
};

const renderList = (isCompleted) => {
  const divList = document.getElementById("list");
  divList.innerHTML = todoList
    .filter((todo) => todo.completed === isCompleted)
    .map((todo, index) => {
      const completeBtn = `<button class="nes-btn is-success" onclick="completeItem('${todo.text}')">✔</button>`;
      const delBtn = `<button class="nes-btn is-error" onclick="deleteItem('${todo.text}')">✖</button>`;
      const restaureBtn = `<button class="nes-btn is-primary" onClick="restoreItem('${todo.text}')">↺</button>`;

      return `
      <div class="todo-item">
        <span>${todo.text}</span>
        <div>
          ${!todo.completed ? completeBtn : restaureBtn}
          ${delBtn}
        </div>
      </div>`;
    })
    .join("");
};
renderList(false);
