/**
 * This day was all about event's and getting values from input fields
 */

// We have a form, and we wish to read inputs from this form once a user has clicked on the submit button
// First we select the button 
const myButton = document.querySelector('#submit')
// We can now use this selection and add an Event Listener to it. This basically waits for an event to happen
// Event listeners have the following syntax :
// element.addEventListener('event' function(){
// This function will be called when the event takes place!
//})
myButton.addEventListener('click', function(e){
// We can also add a parameter to the callback function in the event listener
// Doing this will give us access to different properties of the event 
// For example, where was the cursor when the button was clicked, and many others
// we called it 'e' for event, but it is up to you how you call it

// We need access to this event object in order to stop the default behaviour of the submit button which is: refreshing the page
// so by accessing the event object and adding the preventDefault() method, we stop this default behaviour from happenning
  e.preventDefault()

  // When the user has clicked the button we can get the values of the input, we can save the selections in as variables
  const firstName = document.querySelector('#firstName')
  const lastName = document.querySelector('#lastName')

  // To get the values we just need the input and the .value property ( inputElement.value )
  console.log('first name: ', firstName.value)
  console.log('last name: ', lastName.value)
})

// A different type of event is the input event. This event takes place the value of an input is placed
// This could be very usefull for autocomplete forms for example

// Let's select the email input field
const userEmail = document.querySelector('#email')

// Now lets add an event listener to that field, and lets specify it is an input event listener
// As with other event's we need a callback method which will be called when an event takes place
// We also have access to the event object ( I called it event in this example ) which is a parameter of the callback function
userEmail.addEventListener('input', function(event){
  console.log(this.value)
  console.log(event)
})




