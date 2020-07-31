/* Follow the guidelines in the comments */
/* Some code is incorrect and needs fixing */

/* 1. Define a string called name and make it equal to your own name  */

// Use the assignment (=) operator to assign a value to a variable
var name = 'Martin'
/* 2. Define a number called age and make it equal to your own age */
var number = '28'
/* 3. Define a string called hobby and make it equal to your favorite hobby */
var hobby = ' baseball'
/* 4. Fix this console log so that it correctly concatenates your string */

// Concatenate the strings using the + operator.
// Remember that variables do not have '' 
console.log('My name is ' + name +', I am '+ number +' years old and love '+ hobby +'!')


/* 5. This console.log should be printing out 25 */

// When assigning we use the = operator
var numb = 25;

// When comparing we use the === or == operators
// Make sure your variable names are correct
if( numb === 25 ){
  console.log(numb);
}


/* 6. Something is wrong with this shopping list */

// This array consists of strings, not undefined variables.
// All the values need to be encased in '' 
var shoppingList = ['apples', 'bananas', 'pears', 'oranges'];

console.log(shoppingList);


/* 7. Now that you have fixed the shopping list, lets print out each individual item */

/* Remember a for loop requires an iterator that will
   increase every loop until a condition is no longer met */
for(var i = 0; i < shoppingList.length; i++){
  console.log(shoppingList[i])
}
