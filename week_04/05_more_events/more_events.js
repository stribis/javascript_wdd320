//There are a lot more events to discover in Javascript: Here are some of them

// The windown onload event -> More to this on a later lesson, but it activates when the Dom and relevant files have loaded.
window.onload = function (){
  console.log('Window loaded')
}



// onmouseover
// This event acts in a similar way to hover in CSS

document.querySelector('label').addEventListener('mouseover', function(){
  console.log('Label is being hovered')
})

// onmousemove
// This event activates every time you move your cursor

document.addEventListener('mousemove', function(event){
  console.log(event.x , event.y)

})

// onmouseout
// onmousein

// You can be more specific than just mouse over, you can access the entering and the exit of the cursor over an element
document.querySelector('label').addEventListener('mouseenter', function(){
  console.log('My mouse is in')
})
document.querySelector('label').addEventListener('mouseout', function(){
  console.log('My mouse is out')
})


// onkeydown
// You can track if a key was pressed, and even find out WHICH key was pressed by accessing the event object
document.querySelector('input').addEventListener('keydown', function(e){
  console.log(e)
})

