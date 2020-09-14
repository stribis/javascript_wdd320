const display = document.querySelector('.display')
let firstNumber
let secondNumber
let operator
let numbEntered = false

document.querySelectorAll('.key').forEach( key => {
  key.addEventListener('click', e => {
    const clicked = e.target

    // Is the key a number? 
    if (clicked.classList.contains('num')){
      display.innerText += clicked.innerText
      numbEntered = true
    }

    // if the key is an operator
    if (clicked.classList.contains('ope') && numbEntered == true){
      firstNumber = parseFloat(display.innerText)
      display.innerText = clicked.innerText
      operator = clicked.innerText
    }

    // if the key is "enter"
    if (clicked.classList.contains('enter') && firstNumber != undefined){
      secondNumber = parseFloat(display.innerText.slice(1))
      console.log(secondNumber)

      // Test operator
      if ( operator == 'x'){
        display.innerText = firstNumber * secondNumber
      }

      if ( operator == '/'){
        display.innerText = firstNumber / secondNumber
      }

      if ( operator == '-'){
        display.innerText = firstNumber - secondNumber
      }

      if ( operator == '+'){
        display.innerText = firstNumber + secondNumber
      }
    }


    if ( clicked.classList.contains('clear')){
      firstNumber = undefined
      secondNumber = undefined
      operator = undefined
      numbEntered = false
      display.innerText = ''
    }
    
  })
})