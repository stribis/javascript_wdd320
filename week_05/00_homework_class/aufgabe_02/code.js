
document.querySelector('.add').addEventListener('click', e => {
  e.preventDefault()

  const todo = document.querySelector('#todo').value
  
  if ( todo.length > 3 ){
    // Create an LI
    const li = document.createElement('li')
    // Give the LI content
    li.innerHTML = `${todo} <span class="del">🗑️</span>`
    // Insert LI to page
    document.querySelector('ul').appendChild(li)
    document.querySelector('#todo').value = ''

    window.addEventListener('click', e => {
      if( e.target.classList.contains('del') ){
        e.target.parentNode.remove()
      }
    })


  } else {
    alert('Item must have at least 4 characters')
  }
})