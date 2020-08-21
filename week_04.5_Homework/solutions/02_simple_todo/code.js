
document.querySelector('.add').addEventListener('click', e=> {
  e.preventDefault()
  if (document.querySelector('#todo').value.length > 3){
    const li = document.createElement('li')
    li.innerHTML = `${document.querySelector('#todo').value} <span class="del">🗑️</span>`
    document.querySelector('.list').appendChild(li)
    document.querySelector('#todo').value = ''

    window.addEventListener('click', e=> {
      if ( e.target.classList.contains('del')){
        e.target.parentNode.remove()
      }
    })
  }else {
    alert('Item must have at least 3 characters')
  }
  
})

