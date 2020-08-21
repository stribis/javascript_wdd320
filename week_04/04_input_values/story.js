// Get the value AFTER the button is clicked and not before
// Otherwise the value will always be empty by default when the page loads
document.querySelector('#submit').addEventListener('click', function(e){
  // Prevent the page from reloading 
  // If the page reloads the script resets and starts from the beginning
  e.preventDefault()
  // Save the value from the input you want to select
  const enemy = document.querySelector('#enemy').value

  // For this example, lets create an element and insert the value as text
  let p = document.createElement('p')
  p.innerText = enemy
  // Lets then append the element in the body
  document.querySelector('body').appendChild(p)
  

})