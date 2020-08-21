

// Create a script that will generate a div in the document when a button is clicked
// You can use CSS to style your boxes
// 1: If the button is clicked, you should
  // a. create a div
  // b. insert it in the .container element
// BONUS 1 : Each generated box should get a random background color
  // You can use monochrome colors if you want
// BONUS 2 : When clicking an existing box, it should be removed from the document


// 1: select the button and add click event handler to it
document.querySelector('button').addEventListener('click', e => {
  //2: Create  a div
  const box = document.createElement('div')

  // BONUS 1.a: create a random value between 0 and 255
  const randomValue = Math.floor(Math.random() * 256)
  // BONUS 1.b: use the number as part of the rgb value for the background color
  box.style.backgroundColor = `rgb(${randomValue},${randomValue},${randomValue})`
  //3: add the div to the container
  document.querySelector('.container').appendChild(box)

  // BONUS 2: Add an event listener too all the boxes
  // Iterate thought all the boxes (divs)
  document.querySelectorAll('div').forEach(box => {
    // Add an event listener to ALL the boxes
    box.addEventListener('click', e => {
      // remove the clicked box
      e.target.remove()
    })
  })
})


