
// Create an array for the todo list

let todoList = new Array
getTodos()
function getTodos () {

  // If there are items in the local storage
  if ( localStorage.getItem('todos')){
    todoList = JSON.parse(localStorage.getItem('todos'))
    populateList()
  } else {
    // There are NO items in the local storage
    return 'You do not have any todos in storage'
  } 

}

function addTodo () {
 
  // Only add a todo if there is a value in the input
  const newTodo = document.querySelector('#addinput').value

  if (newTodo){
    // create an object with text and status
    const todoObj = {
      text: newTodo,
      complete: false
    }
   
    // Insert new object in the array
    todoList.push(todoObj)

    // update local storage
    localStorage.setItem('todos', JSON.stringify(todoList))

    // Change the HTML
    populateList()
  } else {
    // display error, input is empty
    return 'You must write something in the box'
  } 
}


// Populate the list in the HTML
function populateList () {
  // Delete the current list
  const list = document.querySelector('#list')
  list.innerHTML = ''

  // Create a new item in the list for every ite in the array
  if (todoList) {
    todoList.forEach( todo => {
      const todoWrapper = document.createElement('div')
      todoWrapper.classList.add('todoWrapper')
      todoWrapper.innerHTML = `
      <div class="todoText" >${todo.text}</div>
      <div class="todoCheck ${todo.complete == false ? 'false': ''}"></div>
      `

      list.appendChild(todoWrapper)
    } )
  }
  updateBoxes()
}


function updateBoxes () {
  let boxes = document.querySelectorAll('.todoCheck')
  boxes.forEach( (box, i) => {
    box.addEventListener('click', e => {
      box.classList.toggle('false')

      if( box.classList.contains('false')){
        todoList[i].complete = false
      }else {
        todoList[i].complete = true
      }

      localStorage.setItem('todos', JSON.stringify(todoList))
    })
  })

}


document.querySelector('#addbutton').addEventListener('click', e => {
  e.preventDefault()
  addTodo()
})

document.querySelector('#clearCompleted').addEventListener('click', e => {
  e.preventDefault()
  todoList = todoList.filter( todo => todo.complete == false)
  // Update Local Storage
  localStorage.setItem('todos', JSON.stringify(todoList))
  populateList()
})
