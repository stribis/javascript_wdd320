$(function() {
  // 0: Wait for DOM to be loaded

  // 1: Define Global Variables

  // Control Elements
  let prevBtn = $('a.button_zurueck'),
  nextBtn = $('a.button_weiter'),
  checkbox = $('#toggle_animation');

  // Slideshow Elements
  let slider = $('#slideshow'),
  sliderUl = slider.children('ul'),
  slides = sliderUl.children('li'),
  slideCount = slides.length,
  slideWidth = slides.width(),
  slideHeight = slides.height(),
  sliderUlWidth = slideCount * slideWidth,
  sliderInterval;

  // Shrink the slide, making it as big as a slide

  slider.css({
    width: slideWidth,
    height: slideHeight
  })

  // fit the row of slides

  sliderUl.css({
    width: sliderUlWidth,
    marginLeft: - slideWidth
  })

  // Take the last slide and prepend it to the row of slides

  slides.last().prependTo(sliderUl)

  // 2: Events

  prevBtn.on('click', moveLeft)
  nextBtn.on('click', moveRight)
  checkbox.on('click', onSliderToggle)

  // 3: Functions

  function moveLeft (e) {
    // Prevent Default Behaviour
    e.preventDefault()

    // Animate Slide
    // has 3 parameters 
    // 1. { } -> Properties to be animated
    // 2. Duration is MS
    // 3. Callback function (runs after animation is complete)

    sliderUl.animate({
      left: + slideWidth
    }, 200,
    function () {
      // We take te last li in the ul and prepend it to the ul
      $(this).children('li').last().prependTo(sliderUl)
      // We reset the left value which we changed in the animation
      $(this).css('left', '')
    })
    


  }

  function moveRight (e) {
    // Prevent Default Behaviour
    if ( e ){
      e.preventDefault()
    }
    

    // Animate Slide
    // has 3 parameters 
    // 1. { } -> Properties to be animated
    // 2. Duration is MS
    // 3. Callback function (runs after animation is complete)

    sliderUl.animate({
      left: - slideWidth
    }, 200,
    function () {
      // We take te last li in the ul and prepend it to the ul
      $(this).children('li').first().appendTo(sliderUl)
      // We reset the left value which we changed in the animation
      $(this).css('left', '')
    })
  }

  function onSliderToggle (e) {
    // Check if checkbox is checked
    let check = $(e.currentTarget)
    if( check.is(':checked')){
      sliderInterval = setInterval(moveRight, 3000)
    } else {
      // Stop interval
      clearInterval(sliderInterval)
    } 
  }



})