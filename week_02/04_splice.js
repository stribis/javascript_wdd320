/**
 * The splice() method changes the contents of an array by 
 * removing or replacing existing elements and/or adding new elements.
 */

//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 3, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
