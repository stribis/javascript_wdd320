/**
 * You are in charge of managing social channels for your company.
 * One of your tasks is to get go over user messages and change any negative 
 * comments to possitive comments.
 * You have grown tired of doing this and want to automate the process.
 * 
 * You have already prepared a bit and created 2 dictionaries.
 * The first one: goodwords, is a list of possitive words that you can use to replace negative words with
 * The second one: evilwords, is a list of words that you know are negative and need to be removed.
 */

var goodwords = ['amazing', 'intriguing', 'versatile']
var evilwords = ['boring', 'useless', 'obsolete']

var messages = [
  'Learning to code is very important in the modern age',
  'JavaScript is an obsolete and useless programming language',
  'There is nothing more useless than programming',
  'I think writing code is boring', 
  'I absolutely love js'
]

/* Think about this logically first, what do we need to do? */
/**
 * 1. We are going to need to go through every sentence in 'messages'
 *  - This means we are going to need to loop throught messages
 * 2. We are going to need to go through all the evilwords
 *  - This means we are going to need to loop through evilwords
 * 
 * This puts us in a position where we need to create a loop in a loop
 * Out first loop goes through every sentence and then for every single sentence we need to go
 * through all the evil words, to check if there is an evil word in it
 */

// filteredMessages is just an empty array where we will put all of our filtered messages, once they have been processed
var filteredMessages = [];
// Our first loop (lets call it L1): This will iterate through all the messages
for( let i = 0; i < messages.length ; i++ ){
  // We temporarily save the current message we are iterating in L1 to a variable
  // this step is not necessary, but makes the whole thing more readable 
  var newMessage = messages[i];
  // Our second loop (L2): goes through all the words in the evilwords dictionary
  for( let j = 0; j < evilwords.length; j++){
    // in this loop we just replace an evilword with a good word if any is present, then save the new string to a variable
    // which we will push to our filteredMessages array
    newMessage = newMessage.replace(evilwords[j] ,goodwords[j] )
  }
  // we push to filltered messages here
  filteredMessages.push(newMessage)
}

console.log(filteredMessages)

