/**
 * 1.
 * Fix this list
 * 
 * The names in this list should be all lowercase except for their first letter which
 * should be capitalized
 * Create a new array with the correct data
 * Log the new array the console
 */

var students = ['luCa', 'rEZa', 'ChiN', 'meliSSA', 'NoAH'];

// expected output: 
// 'Luca', 'Reza', 'Chin', 'Melissa', 'Noah'

/*
  TIPS:
  - There are multiple items! We need a loop!!
  - You will need to change everything to lower case using the toLowerCase() Method 
  and change ONLY the first letter of each word to upper case using the toUpperCase() Method

  - Remember to push each new word (every iteration to your new array)
*/

var results = [];


/**
 * 2.
 * The following data is corrupted
 * 
 * We know that the data we need is correct after the ;
 * Create a new array with the correct data
 * Log the new array the console
 */

var cities = ['MAN675847583748sjt567654;London',
'GNF576746573fhdg4737dh4;New York',
'LIV5hg65hd737456236dch46dg4;Madrid',
'SYB4f65hf75f736463;Cairo',
'HUD5767ghtyfyr4536dh45dg45dg3;Tokyo'];

// expected output:
// London, New York, Madrid, Cairo, Tokyo

/*
  TIPS:

  - Multiple items, so you'll need a loop again
  - Use indexOf to find the substring in the string, remember it is ALWAYS after a ';'
  - Then use slice to cut the substring out of the string and push it to the new array
*/

var results1 = [];

