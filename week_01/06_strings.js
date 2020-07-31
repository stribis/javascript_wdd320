/* Strings */

// To get a letter of a word we need to know what it's index (position) is 

var word = 'JavaScript'
/*
You can this of this word as the following

0 -> J
1 -> a
2 -> v
3 -> a
4 -> S
5 -> c
6 -> i
7 -> p
8 -> t

So if we want to get the first letter of the variable word we need to select
  word[0]
and in this case the last letter would be 
  word[8]
*/

wordLength = word.length;

/* 
  The length of a word is how many characters it has.
  in the case of our variable 'word', it's length is 9
*/

// ABC, XYZ Exercise
/* The goal of this exercise is to create code that will test if a word in an array starts
with the letter a, b or c or ends with the letter x, y or z */
var myArray = ['Popcorn', 'Acorn', 'Lolzz', 'Ant', 'Fish']

// First we need to iterate through this array so that we can go through all the words inside it
for(var i = 0; i < myArray.length; i++){
  // i starts at 0 and goes all the way to 4
  // when i is 0 then myArray[i] is the first item in our array
  // when i is 1 in the next iteration, then myArray[i] is going to be the second item in the array
  // and so on ... 
  
  // Thus myArray[i][0] is the first letter of the currently selected word in the array
  var firstLetter =  myArray[i][0];
  // And myArray[i][myArray[i].length - 1] is the last letter of the currently selected word of the array
  var lastLetter = myArray[i][myArray[i].length - 1];

  // We want to test if something is equal to somthing else, so we need a conditional statement.
  // Our condition in this statements is that the firstLetter needs to be either A, B or C
  // OR lastLetter needs to be either x, y or z
  if( firstLetter == 'A' || firstLetter == 'B' || firstLetter == 'C' || lastLetter == 'x' || lastLetter == 'y' || lastLetter == 'z' ){
    // If the condition is met then we print out the current word to the console.
    console.log(myArray[i])
  }
}


// String Immutability
/*
Strings are immutable.
This basically means that we CAN'T change single letters in a string.

*/
// So this won't work: 
var word = 'JavaScript'

word[5] = 'X'

console.log(word)

// We need to redifine the whle variable
word = 'JavaSXript'
console.log(word)

// Escaping
/* We can escape special characters that we want to be interpreted as text and not js code */
/* A common example is escaping quotes "" */
var string = "And he said \"Hello!\""
// An alternative would be to use different types of quotes, but this can get complicated
var alternative = 'And he said "Hello"';