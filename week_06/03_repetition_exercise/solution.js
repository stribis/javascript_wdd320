// Define Global variables
const circle = document.querySelector('#circle')
let count = 0;

// Add our click event for the circle
circle.addEventListener('click', e => {
  count++
  createBox()
  displayCount()
  // Challenge Mode
  changeBG()
})


// Function for box creation
function createBox(){

  const randomX = Math.floor(Math.random() * (window.innerWidth - 100))
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100))

  const box = document.createElement('div')
  box.setAttribute('class', 'box')
  document.querySelector('main').appendChild(box)
  box.setAttribute('style', `left: ${randomX}px; top: ${randomY}px;`)
}
// Function for click count
function displayCount(){
  if(!document.querySelector('.counter')){
    const counter =  document.createElement('h2')
    counter.setAttribute('class', 'counter')
    document.querySelector('main h1').after(counter)
  }
  document.querySelector('.counter').innerHTML = `Times clicked: ${count}`
}
// Function for changing BG color
function changeBG(){
  const boxes = document.querySelectorAll('.box')

  for (let i = 0; i < boxes.length && i < 255; i++){
    boxes[i].style.backgroundColor = `rgb(${i},${i} ,${i})`
  }
}
