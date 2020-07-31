//Lets predifine some variables
var a = 10;
var b = 15;
var c = 20;

// Conditionals 
// Is basically code that will execute if a condition is true

/* Here is your syntax

if( condition that has to be true ){
  code that I want to execute if the condition is true
}

*/

/*
 if statement
*/
// Here are some simple examples of if statements using comparison operators
if( a < b ){
  console.log("a is smaller than b")
}

// AND operator
if( a < b && b < c ){
  console.log("a is smaller than b and b is smaller than c")
}

// OR operator
if( a < b || b > c){
  console.log( 'either b is larger than c OR a is smaller than b ')
}

/* 
  If ... else 
*/

/* The IF part of the statement will execute if the condition is true just as before  */
/* The else part of the statement will execute if the condition is false  */
/* Here is you syntax: */

/*
if( condition ){
  code that executes if the condition is TRUE
}else{
  code that executes if the condition is false
}
*/

if( b < a ){
  console.log(" b is smaller than a")
}else{
  console.log("if statement was false")
}

/* else if */
/* With else if you can have multiple conditions tested one after the other */
/* The FIRST condition to be true will be executed */

if( b < a ){
  console.log(" b is smaller than a")
}else if( c < a ){
  console.log(" c is smaller than a")
}else{
  console.log("b and c are larger than a")
}

/* if inside if  */
/* You can nest conditionals inside conditional ( this is actually very common ) */

if( b > a ){
  //console.log(" b is smaller than a")
  if (a != 10) {
    console.log('a is not 10')
  }else{
    console.log("else")
  }
}else if( c > a ){
  //console.log(" c is smaller than a")
  if (a == 10){
    console.log('a is 10')
  }
}else{
  console.log("b and c are larger than a")
}

// booleans in conditionals
/* Remember conditional will execute if the value is true. */
/* Putting a variable = true inside the conditional it will execute! */

var hamburger = true;
var popcorn = false;

if( !popcorn ){
  console.log('I love popcorn')
}
console.clear()


var counter = 0;

console.log(counter)

// the ++ operator adds 1
if(counter < 1){
  counter++;
  /*
  Other ways of writing this are:
  counter = counter + 1;
  counter += 1;*/
}


/* THe order of your code MATTERS */
console.log(counter)

var counter = 10;
/*   */
console.log(counter)

// You can also substract one with --
if(counter < 11){
  counter--;
}

console.log(counter)