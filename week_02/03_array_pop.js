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


// We are vegetarians and there are certain items in our shopping list we do want to eat
// to remove the last items in an array we use pop()

var lastItem = shoppingList.pop()

// pop will return and remove the last item in an array
console.log( shoppingList[shoppingList.length - 1])
console.log(lastItem)
console.log(shoppingList)



//shift() removes the first value of an array, returning the value and changing it's length
// shift()
var resu1 = shoppingList.shift()
 
console.log(resu1)



