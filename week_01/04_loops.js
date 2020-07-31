// Loops
/* This is just a small introduction to loops */
/* A lot more about loops in the future */

var counter = 10;

console.log(counter);

// For loops 
// A for loop iterates as long as a condition is met
/* Syntax:

for(  starting point of your iterator;
      condition that needs to be met in order to continue;
      What you add to your iterator after a successful loop ){
        code to execute every loop.
        The cool part about for loops is that we can use the iterator value which will be 
        different every repetition
      }

*/

for( var i = 0; i < 10; i++){
  counter++
  console.log(counter);
}
console.clear()
var myArr = ['apple', 'banana', 'pear'];

//console.log(myArr)

for( var j = 0; j < 3; j++){
  
  console.log(myArr[j]);
}

console.clear();

var cars = ['BMW', 'Audi', 'Volkwagen', 'Ford', 'Fiat'];
console.log(cars)
for( var n = 0; n < cars.length; n++){
  // cars[n]
  if(cars[n] == 'BMW'){
    console.log('There is a bmw in the array');
  }
}

