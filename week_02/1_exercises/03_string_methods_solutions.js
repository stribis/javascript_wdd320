/**
 * Fix this list
 * 
 * The names in this list should be all lowercase except for their first letter which
 * should be capitalized
 * Create a new array with the correct data
 */

var students = ['luCa', 'rEZa', 'ChiN', 'meliSSA', 'NoAH']
// This is the variable that will contain all our processed words
var result = []

// We need to iterate through the list
for (let i = 0; i < students.length; i++) {
  // Each iteration we will change the whole word to lower case and save it in the variable smallStudents
  var smallStudents = students[i].toLowerCase();
  // Then we will change the first letter to upper case and concatenate it with the rest of the word and push it into 'result'
  result.push(smallStudents[0].toUpperCase() + smallStudents.slice(1))
}
// We print the result array to the console
console.log(result)


/**
 * The following data is corrupted
 * We know that the data we need is correct after the ;
 * Create a new array with the correct data
 */

var cities = ['MAN675847583748sjt567654;London',
'GNF576746573fhdg4737dh4;New York',
'LIV5hg65hd737456236dch46dg4;Madrid',
'SYB4f65hf75f736463;Cairo',
'HUD5767ghtyfyr4536dh45dg45dg3;Tokyo'];
// This is the array where we will push our processed string 
var result1 = []
// We need to iterate through the list
for (let i = 0; i < cities.length; i++) {
  // First we need to find the position of the word ( we know it is always the one adjacent to the ;)
  // So technically it is the idex of ; + 1
  var wordPos = cities[i].indexOf(';') + 1
  // with this position, we know where to make our slice
  var city = cities[i].slice(wordPos)
  // we can the push our sliced word to the new array
  result1.push(city)
}
// We print the result array to the console
console.log(result1)