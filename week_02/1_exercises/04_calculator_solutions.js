/* Calculator Sultion:  */

/**
 * Our first step is to make 3 prompts and save the inputs into separate variables
 */


// Prompt for the first number
var first = prompt('first number')
// Prompt for the operator
var operat = prompt('operator (+,-,*,/)')
// Prompt for the second number
var second = prompt('second number')

// We need to make sure the numbers we are getting are actually numbers
// since the user can freely write letters or words

// for this we use isNaN which ask if a value is NOT a number and returns true or false
if(isNaN(first) || isNaN(second)){
  // If a value is NOT a number then we alert a user saying that one of the values 
  // they inputed, was not a number
  alert('This calculator only works with Numbers !')
}else{
  // else in this case means that the values inputed in the first and second 
  // variables were indeed numbers so we can go on with the calculation

  // if the operator given is a + then we need to add first and second
  if(operat == '+'){
    alert( parseInt(first) + parseInt(second))
  // if the operator given is a - then we need to substract first by second
  }else if(operat == '-'){ 
    alert( parseInt(first) - parseInt(second))
  // if the operator given is a * then we need to multiply first by second
  }else if(operat == '*'){
    alert( parseInt(first) * parseInt(second))
  // if the operator given is a / then we need to divide first by second
  }else if(operat == '/'){
    alert( parseInt(first) / parseInt(second))
    // We always use parseInt, otherwise we would be working with strings which
    // is will concatenate the values instead of adding them for example.
  }else{
    // else in this case means that operat was neither +, -, * or / which basically
    // means that the user typed the wrong thing in the prompt box
    alert('You did not write the correct operator')
  }
}

