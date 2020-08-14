
// Square function
// function square (n) {
//   return n * n;
// }

// console.log( square(5) );

var username = prompt("What's your name?");
var location = prompt("Where do you come from?");

function lordify (name, city) {
  return name + ' of ' + city;
}

console.log(lordify(username, location ));


// Arrow Functions 

// function double (zahl) {
//   return zahl * 2
// }

// One parameter with single line return statement
var double = zahl => zahl * 2;
// multiple parameters single line return
var lordifyArrow = (name, city) => name + ' of ' + city;
// multiple parameter, multiple line statement
var lordifyMultiple = (name, city) => {
  if (name == 'Piranha') {
    return 'You are a bad person';
  } else {
    return name + ' of ' + city;
  }
}


// console.log(double (2) )
// console.log(double (4) )
// console.log(double (5) )
// console.log(double (9) )


// Function expressions 

var lordify2 = function ( name ) {
  return name + ' of Zürich';
}

// Function Scope 
var foo = 'foo'
function square ( num ) {
  console.log(foo)
  return num * num
}

console.log(foo)