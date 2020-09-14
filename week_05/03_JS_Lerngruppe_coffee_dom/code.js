

//default values when the page loads
let elec = false
updateDisplay() 
document.querySelector('.water-container').addEventListener('click', e => {
  refill('water')
})
document.querySelector('.beans-container').addEventListener('click', e => {
  refill('beans')
})
document.querySelector('.plug').addEventListener('click', e => {
  plugUnplug()
})
document.querySelector('.getCoffee').addEventListener('click', e => {
  pourCoffee()
})

pourCoffee

function refill(resource) {
  container = document.querySelector(`.${resource}`)
  
  if ( container.offsetHeight < 286 ) {
    // we can go on    
    container.style.height = container.offsetHeight + 150 + "px";
  } else {
    // container is full
    alert('container is full')
  }
  updateDisplay()
}


function plugUnplug() {
  if(elec == false){
    elec = true
    document.querySelector('.plug').style.left = '50%'
  }else if (elec == true){
    elec = false
    document.querySelector('.plug').style.left = '150%'
  }
  updateDisplay()
}

function updateDisplay() {
  let water = document.querySelector(`.water`).offsetHeight
  let beans = document.querySelector(`.beans`).offsetHeight
  let display = document.querySelector('.display');
  if (!elec){
    display.innerHTML = 'Machine is not plugged in ...'
  }else{
    console.log('pluged in')
    display.innerHTML = `
    <p>Current Water Level: ${water} ml</p>
    <p>Current Beans Level: ${beans} grams</p>
    `
  }
}

function pourCoffee () {
  
  let water = document.querySelector(`.water`).offsetHeight
  let beans = document.querySelector(`.beans`).offsetHeight
  if (water > 105 && beans > 105 && elec == true) {

    console.log('success')
    // substract the values
    document.querySelector(`.water`).style.height = container.offsetHeight - 100 + "px";
    document.querySelector(`.beans`).style.height = container.offsetHeight - 100 + "px";
    document.querySelector('.steam').style.display = 'block'
    updateDisplay()
  }else {
    // machine is not ready
    alert('Machine is not ready')
  }
}
