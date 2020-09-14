
// Add event listener to button
document.querySelector('button').addEventListener('click', validateForm )


function validateForm (e) {
  e.preventDefault()

  if (document.querySelector('form span')){
    document.querySelectorAll('form span').forEach(element =>{
      element.remove()
    })
  }


  // Input Data 
  let data = {}
  // Error Messages
  let validationErrors = {}

  // Create properties for data object
  data.firstName = document.querySelector('#first-name').value
  data.lastName = document.querySelector('#last-name').value
  data.email = document.querySelector('#email').value
  data.message = document.querySelector('textarea').value


  // First Name
  if (!data.firstName){
    console.error('No first name' + data.firstName)
    validationErrors.firstName = 'No first name provided'
  }else{
    console.info('First name: ' + data.firstName )
  }

  // Last Name
  if (!data.lastName){
    console.error('No last name' + data.lastName)
    validationErrors.lastName = 'No last name provided'
  }else{
    console.info('Last Name: ' + data.lastName )
  }

  // Email
  if (!data.email){
    console.error('No email' + data.email)
    validationErrors.email = 'No email provided'
  }else{
    console.info('Email: ' + data.email )
    let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // Test if email is an email
    if(!emailRegExp.test(data.email)){
      // email is not a match
      validationErrors.email = 'Invalid Email Adress'
    }else{
      console.info('Email is valid')
    }
    
  }

  // message
  // Test if message has enough characters (min 30)
  // Message
  if (!data.message){
    console.error('No message' + data.message)
    validationErrors.message = 'No message provided'
  }else{
    console.info('message: ' + data.message )
    if (data.message.length < 31){
      validationErrors.message = 'Not enough characters (min 30)'
    }else{
      console.info('message has enough characters')
    }
  }



  // If there are errors
  if (Object.keys(validationErrors).length > 0){
    // Display Error messages
    displayErrors(validationErrors)
  }else{
    // Send Form to backend
    console.log('sending form data')
  }

}


function displayErrors (validationErrors) {
  // Function that will show errors in the page

  
  if ( validationErrors.firstName){
    const errorContainer = document.createElement('span')
    errorContainer.innerHTML = validationErrors.firstName
    document.querySelector('#first-name').after(errorContainer)
    
  }

  if ( validationErrors.lastName){
    const errorContainer = document.createElement('span')
    errorContainer.innerHTML = validationErrors.lastName
    document.querySelector('#last-name').after(errorContainer)

  }

  if ( validationErrors.email){
    const errorContainer = document.createElement('span')
    errorContainer.innerHTML = validationErrors.email
    document.querySelector('#email').after(errorContainer)
  }


  if ( validationErrors.message){
    const errorContainer = document.createElement('span')
    errorContainer.innerHTML = validationErrors.message
    document.querySelector('textarea').after(errorContainer)
  }


}



// Event for input in textarea

document.querySelector('textarea').addEventListener('input', e => {
  //console.log(e.target.textLength)

  if(!document.querySelector('.counterBox')){
    const counterBox = document.createElement('span')
    counterBox.setAttribute('class', 'counterBox')
    counterBox.innerHTML = e.target.textLength
    e.target.after(counterBox)
  } else {
    document.querySelector('.counterBox').innerHTML = e.target.textLength
  }

  if(e.target.textLength < 31){
    document.querySelector('.counterBox').style.color = 'red'
  }else{
    document.querySelector('.counterBox').style.color = 'lime'
  }

})