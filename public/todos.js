const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

const todos = [
    'Fazer Café',
    'Estudar Javascript',
    'Trabalhar',
]

function renderTodos() {
    for (const todo of todos) {
        let todoElement = document.createElement('li')
        let todoText = document.createTextNode(todo)

        todoElement.appendChild(todoText)
        listElement.appendChild(todoElement)
        
    }
}

renderTodos();