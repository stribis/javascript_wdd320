/**
 * Handing arrays is a very important part in JavaScript
 * We need to be able to add items to or remove items from an array
 */

/**
* Sample array
*/

var shoppingList = [
  'bananas',
  'apples',
  'pears',
  'oranges',
  'pork',
  'chicken'
]

// One item

var additionalItem = 'lettuce'

shoppingList.push(additionalItem);
console.log(shoppingList)
// .push() inserts an item at the end of an array


// There are a few items we wish to add to this array

var additionalItems = [
  'sauce',
  'water'
]

// if we try to push an array in array, the whole array will be inserted and not only the values.
/*shoppingList.push(additionalItems);
console.log(shoppingList)*/

// we can loop throught the second array and push each individual item

for(let i = 0; i < additionalItems.length; i++){
  shoppingList.push(additionalItems[i]);
}
console.log(shoppingList)


// unshift()
//unshift() adds to the beginning of an array, returning length
var resu2 = shoppingList.unshift({color: 'red'})

console.log(shoppingList)