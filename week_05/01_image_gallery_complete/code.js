/* Very simple thumbnail image gallery with vaniall JS */

// Declare our variables 

// current is the big image 
const current = document.querySelector('#active')
// images is all the thumbnail images
const images = document.querySelectorAll('.images img')
// Opacity is the opacity we want our selected images to have
const opacity = 0.4

// We start by adding an event listener to all the thumbnails
// Since we get an array from querySelectorAll, we need to iterate through it

// We can simply use the higher order function 'forEach' to iterate through the array
// forEach has a callback function which gives us a parameter we can use to access the current iteration
// in this case we call it img, which in a for loop would be the equivalent to images[i]

images.forEach(img =>
  // and we just add a click event listener FOR EACH of img in images
  // this event listener alos has a callback function which will be called as soon as an event takes place
  // in our case we called it imageClick and we defined it at the bottom of this js file
  img.addEventListener('click', imageClick)
)


// All this does fade our the first image in the thumbnails
// The idea being, if an image is being displayed in the big box, then it's thumbnail
// should be faded out
// Since when we load the page the first thumbnail is ALWAYS selected, we just faded it out
images[0].style.opacity = opacity


// This is the callback function which will run after the event listener is triggered
// since this is a callback function of an eventlistener, it has access to the event object 
// We can access it as the first parameter if the function and we save it in a variable 'e' (for event)
function imageClick(e) {
  // Reset the opacity of images
  // The first thing we need to do is to make sure that all the thumbnails are back to opacity 1
  // We do this using a forEach loop and FOR EACH thumbnail, we set the opacity to 1
  images.forEach(img => (img.style.opacity = 1))
  // Change current image to source of clicked image
  // remember that we can know which image was clicked, by getting the target of the event.
  // This target is also an object which contains lots of information, one of it's key/value pairs is the src 
  current.src = e.target.src
  // add fadein class to the current image
  // This line simply adds a class to the current image (the big image), this is then animated in css (check the end of the css file)
  current.classList.add('fade-in')
  // Remove fade in class after .5 seconds
  // It is important to remove the class once the fade effect has taken place, to do so we add a timer and say, after 500 ms, we remove the class
  setTimeout(() => current.classList.remove('fade-in'), 500)
  // Change the opacity to the given opacity variable value
  // last but not least we need to change the opacity of the clicked thumbnail to fade it. 
  // since we already changed all the other thumbnails opacity to 1, we know this is going to be the only thumbnail that is faded.
  e.target.style.opacity = opacity
}