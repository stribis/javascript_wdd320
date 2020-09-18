const slider = document.querySelector('.slider')

document.querySelector('.left').addEventListener('click', moveLeft)
document.querySelector('.right').addEventListener('click', moveRight)

let currentslide = 1

function moveRight () {
  slider.append(document.querySelectorAll('.slide')[0])
  updateDescription()
  displayCurrent('right')
  
}

function moveLeft () {
  slider.prepend(document.querySelectorAll('.slide')[4])
  displayCurrent('left')
  updateDescription()
}

function displayCurrent (direction) {
  if (direction === 'right'){
    currentslide === 5 ? currentslide = 1 : currentslide++
  }
  if (direction === 'left'){
    currentslide === 1 ? currentslide = 5 : currentslide--
  }
  
  document.querySelector('.controls-container h2').innerText = `CURRENT SLIDE: ${currentslide}`
}

function updateDescription() {
  const description =  document.querySelectorAll('.slide')[0].querySelector('img').alt
  document.querySelector('.controls-container p').innerText  = description
}

updateDescription()