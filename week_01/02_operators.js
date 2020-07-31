// There are many operators in Javascript that help us control and manipulate variables in many ways
// Here are the most important ones


// The assigment operator ( = )
var myNum = 24;
/*
  We use this operator to asign values to variables
*/

// The + or addition operator
// Can be used to add 2 numbers together or to concatenate 2 strings

// with number ( adds )
// with String ( Concatenation )

var myStr1 = "Hello";
var myStr2 = "World";
var separator = " ";

var conc = myStr1 + separator + myStr2;
console.log(conc)

// The - or Substraction operator
// Is used to substract a value from a number

var otherNum = 100;

console.log(otherNum - myNum);


// The greater than (>), less than (<) and equal to (==) operators
// >, <, ==

// Greater than tests if a value is greater than another value
// If that is the case, it returns true, otherwise it returns false
if (otherNum > myNum){
  console.log( 'Othernum is greater than mynum' )
}
// Less than tests if a value is less than another value,
// If that is the case, it returns true, otherwise it returns false
if (otherNum < myNum){
  console.log( 'Othernum is greater than mynum' )
}
// Equal to tests if a value equal to another value,
// If that is the case, it returns true, otherwise it returns false
if (myNum == myNum){
  console.log( 'Mynum is the same as mynum' )
}
// The equal value and equal type operator
// ===
// Checks is a value is equal to another value AND has the same type, 
// i.e if the first value is a string, then the second one HAS TO be a string
// If that is the case, it returns true, otherwise it returns false
var notanum = '24';

if( myNum = notanum){
  console.log( 'success' );
}

if( myNum === notanum){
  console.log( 'Another Success' );
}

// The modulus operator (division remainder)
// %
// It divides a number by another number and returns the remainder.
// Example, when dividing a number by 2, if the remainder is not zero, that number is odd!
console.log(7 % 2)
if( 6 % 2 === 1){
  console.log('Modulo!')
}
// The less than or equal to and greater than or equal to
// <=  >= 
// Combines the less/greater than  (<, >) operators with the equal to operator (==)

var bar = 10;

var bat = 9;

if( bar >= bat){
  console.log('Yooohoo!')
}

// Logical operators
// The NOT operator ( ! )
var first = 1;
var second = 2;

console.log(first != second)
// Returns true, becuase first is not equal to second

// The AND operator ( && )
console.log( first === 1 && second === 2)
// Returns true because first is 1 AND second is 2

// The OR operator ( || )
console.log( first === 1 || second === 1)
// Returns true because first is 1. Only one of the expressions needs to be correct with OR.