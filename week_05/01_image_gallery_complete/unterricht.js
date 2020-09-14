// Declare our variables:

// current big image
const current = document.querySelector('#active')
// small thumbnail images
const images = document.querySelectorAll('.images img')
// Opacity for selected images 
const opacity = 0.4

// Now we start with our event listener

images.forEach(img =>{
  img.addEventListener('click', imageClick)
})

images[0].style.opacity = opacity

function imageClick (e) {

  // Set all images to full opacity
  images.forEach(img=>{
    img.style.opacity = 1
  })

  // Change the source of CURRENT image 
  current.src = e.target.src

  // Add fade class for fadeIn effect on current
  current.classList.add('fade-in')

  // remove the fade class when animation is over
  setTimeout(function(){
    current.classList.remove('fade-in')
  }, 500)

  //reduce opacity of clicked thumbnail
  e.target.style.opacity = opacity


}
