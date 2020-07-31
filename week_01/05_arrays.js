/* Arrays */

/* Array are basically lists of values */
/* They can have strings : */
var myArr = ['popcorn', 'coke', 'candy'];
/* They can also have Numbers */
var myArr2 = [2, 3, 4];
/* They can also have Booleans */
var myArr3 = [true, true, false];
/* Basically any datatype you can think of, even objects */
var myArr4 = [{color: 'red', age: 26 },{color: 'blue', age: 90 }]
// Or you can also have arrays in arrays
// This is knowns a a multidimensional array
var multidimensional = [
  [1,2,3,4,5], 
  ['Luca', 'Reza', 'Chin'], 
  [
    [1,2,3],
    [4,5,6],
    [1,2,3],
    [1,2,
      [
      'apple',
      'banana',
      'pear'
      ]
    ]
  ]
]

// We use the index of a value in an array to select it
// Log 'coke' to the console
console.log(myArr[1])

// log first value of multidementionalArray :[1,2,3,4,5]
console.log(multidimensional[0])

// Log the third value of the first value of the multidementionalArray: 3
console.log(multidimensional[0][2])
// This can go un and on and on : 5
console.log(multidimensional[2][1][1])