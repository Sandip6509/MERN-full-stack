let todoInput = document.getElementById('todoInput')
let addTodoBtn = document.getElementById('addTodoBtn')
let todoList = document.getElementById('todoList')

addTodoBtn.addEventListener('click',addTodo)

todoInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addTodo()
    }
})

function addTodo() {
    let todoText = todoInput.value.trim()
    if(todoInput !== ''){
        let li = document.createElement('li')
        li.textContent = todoText
        todoList.appendChild(li)
        todoInput.value = ''
    }
}