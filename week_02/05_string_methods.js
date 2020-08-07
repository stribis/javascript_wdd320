/**
 * We've already looked at the .length property as well as interating
 * through the different indexes of a string
 * Here are some other important methods we use with strings,
 */

/**
 * indexOf() - allows us to find a string in a string
 * We call this a substring
 */

var notice = 'Important!: Remember to pay your taxes'
console.log(notice.indexOf('Important!'))

// If the word you are looking for is currently in the string, then you will get a number value
// between 0 and the length of the string, indicating the index
// Otherwise, if the word is not in the string, you will get a -1

word = 'Important!'
if(notice.indexOf(word) < 0){
  // the word is not in the notice string
  console.log('The word you are looking for is not in the string.')
}else{
  // the word is in the string
  console.log('The word you are looking for is in the '+ notice.indexOf(word) + ' index of the string')
}

/**
 * slice() - Let's use get a character or multiple characters using indices
 * Warning! slice() and splice() are not the same !
 */

console.log(notice.slice(11))
console.log(notice.slice(11, 20))

/**
 * toUpperCase()
 * toLowerCase()
 * Not much to say here, we can transform a string and make it's letters upper case or lower case
 */

var sentence = 'thE qUiCk bRoWn fOx juMps Over tHE LAzy doG'

console.log(sentence.toUpperCase())
console.log(sentence.toLowerCase())

/**
 * We do not have a capitalization method for strings
 * However we can transform the first letter of a string to upper case and attach
 * the rest of the string to it, and store it in a variable
 */

capt = sentence[0].toUpperCase() + sentence.slice(1)
console.log(capt)
// Outputs: The quick brown fox jumps over the lazy dog


/**
 * Replace
 * Replace looks for a substring in a string and changes it for another substring
 * In this example we are replacing the substring 'devils' to the substring 'unicorns'
 */

var evil = 'We love devils'

// The first parameter is the substring we wish to replace,
// The second parameter is the substring we want to replace the first parameter with!
evil = evil.replace('devils','unicorns')

console.log(evil)
// Expected output is: 'We love unicorns'

