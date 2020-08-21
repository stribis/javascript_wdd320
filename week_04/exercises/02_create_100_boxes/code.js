

// Write code that will create 100 boxes in the page
// 1: Each box should be 100 x 100 px
// 2: Even and odd boxes should have different colors (evens blue, odds red)

// STEP BY STEP
// 1: Create a loop that iterates 100 times
for (let i = 1; i < 101; i++) {
  
  // Create div and save it in a variable ( I call it box )
  const box = document.createElement('div')
  // Set the styles for all boxes (all boxes have the same width and height)
  box.style.width = '100px'
  box.style.height = '100px'
  // Check if the current i value is even or odd using modulo
  if (i % 2 === 0) {
    // if the current iteration / 2 has no rest (=== 0)  
    // (meaning it is even : 2, 4, 6 ...)
    box.style.backgroundColor = 'red'
  }else {
    // OTHERWISE
    // if the current iteration / 2 HAS A rest (!== 0)  
    // (meaning it is even : 1, 3, 5 ...)
    box.style.backgroundColor = 'blue'
  }

  // Add the element to the page
  document.querySelector('.container').appendChild(box)

}

