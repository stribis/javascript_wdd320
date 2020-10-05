// To get the data from an API we usually have to make an HTTP request to 
// a server which will give us some sort of Data in return

// Now a days this data is usually formatted in JSON, however it can also be XML, CSV or even text


// Making HTTP requests with modern JS is fairly simple due to the introduction of the Fetch API
// With fetch we can make simple GET HTTP requests without having to do much in terms of setting up the request.

// Fetch is asynchronous and uses promises. Imagine the whole thing takes place in the background.
// We tell fetch to get us a file from xyz location (the url), fetch then gives us a promise, meaning we have 
// to wait until the promise is resolved ( the request has to take place, and the response from the server takes some time )
// when the promise is resolved (.then), then we can do something with the data we get from the server
// then we can get the content (body) of the response and parse it (convert it) into readable JS

// Lets go through it step by step

// 1. We tell fetch to get us the content of this URL 
fetch('https://open.exchangerate-api.com/v6/latest')
// 2. Fetch will respond with an unfulfilled promise, but once the promise is fulfilled, then we can save the 
// whole response in the 'response' object
.then( response => response.json() )
// 3. We have to get the body (content) of the response and convert it (parse it) from JSON to JS
// 4. Once that is done (the promise is resolved) then we save the parsed JS in the 'data' object
.then( data => {

  // inside this block we have access to data
  console.log(data.rates)
  
  for ( x in data.rates){
    console.log(x)
    $('select').append(`<option>${x}</option>`)
  }
 
  
})

// AJAX requests can also be done with jQuery using jQuery AJAX

// To GET simple JSON data use this
// notice the response is parsed automatically 

// $.getJSON('https://jsonplaceholder.typicode.com/users', data => {
//   console.log(data)
// })

// This is the more complex way
// with this way you can have more specific settings

// $.ajax({
//   url : 'https://jsonplaceholder.typicode.com/users'
// }).done( data => {
//   console.log(data)
// })