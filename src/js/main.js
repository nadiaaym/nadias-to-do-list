let todos = [];
let doneTodos = [];

const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const sections = document.querySelector(".todo-sections");

todoInput.addEventListener("keyup", function (e) {
    if (todoInput.value && e.keyCode == 13) {
        var item = {
            id: ("todo_" + Date.now()),
            content: todoInput.value
        }
        todos.push(item);
        var todoList = document.querySelector('.todo-list');
        todoList.appendChild(createTodoItem(item));
        todoInput.content = '';
    }
})

function createTodoItem(item) {
   var todo = document.createElement('div');
   todo.classList.add('todo-item');
   todo.classList.add('todo-' + item.id);
   todo.innerHTML = `<span>${item.content}</span> 
            <button class="todo-remove"${item.id}>REMOVE</button>
            <button class="todo-change-action"${item.id}>DONE</button>`
            return todo;
}

// button - DONE- push to donetodo[] & filter others in todos[]
// button - REMOVE - filter others in todos[];
// choose the section to show - ACTIVE - shows todos[], DONE shows donetodo[]

var todoRemove = document.querySelector(".todo-remove");
todoRemove.addEventListener('click', function (e) {
    todos = todos.filter()
}

function test() {
    console.log(todos);
}

test();