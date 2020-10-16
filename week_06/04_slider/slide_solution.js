
// Select the elements we wish to manipulate in advance
const slider = document.querySelector('.slider')

// We only need two event listeners
// One for our left arrow
// the other one for the right arrow
document.querySelector('.left').addEventListener('click', moveLeft)
document.querySelector('.right').addEventListener('click', moveRight)

// We will implement a current slide display
// this variable will be changed every time we move the slider
// it will get increment or decrement by one
let currentslide = 1

// the function is called by one of our two event listeners
// since we are moving right we need to get the first slide and put it at the end of the slider
// slider.append (put at the end of slider) 
// document.querySelectorAll('.slide')[0] (first slide)
function moveRight () {
  slider.append(document.querySelectorAll('.slide')[0])
  updateDescription()
  displayCurrent('right')
}

// this function is a copy of the moveright function but we invert its functionality
// meaning that we prepend (put at the start) the last slide
function moveLeft () {
  slider.prepend(document.querySelectorAll('.slide')[4])
  displayCurrent('left')
  updateDescription()
}

// every time we move the slide we also change the display and update the corresponding description

// The display is the little counter being display which tells us which we currently have selected
// to update it we have this function which takes in a direction parameter (left or right)

// depending on the arguement given the function will either increment or decrement the currentslide variable value
function displayCurrent (direction) {
  // we also have to prevent the counter from going above the maximum or minimun number of slides
  if (direction === 'right'){
    currentslide === 5 ? currentslide = 1 : currentslide++
  }
  if (direction === 'left'){
    currentslide === 1 ? currentslide = 5 : currentslide--
  }
  
  // once the variable has been changed to the correct value, 
  // then we can update the text of the html element
  document.querySelector('.controls-container h2').innerText = `CURRENT SLIDE: ${currentslide}`
}

// this function updates the description of each slide
// In this case we will just use the alt attribute of the current first image
// we then update the text of the description p tag
function updateDescription() {
  const description =  document.querySelectorAll('.slide')[0].querySelector('img').alt
  document.querySelector('.controls-container p').innerText  = description
}

// update the description when the page loads (not only with the event listeners)
updateDescription()