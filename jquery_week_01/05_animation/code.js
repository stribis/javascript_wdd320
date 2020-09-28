

// $('button').click( e => {
  //$('div').show()
  //$('div').hide('slow')
  //$('div').toggle(8000)
  //$('div').slideDown(8000)
  //$('div').slideUp(8000)
  // $('div').slideToggle(500)
  // $('div').fadeIn(500)
  // $('div').fadeOut(500)
  // $('div').fadeToggle(5000)


  // $('div').slideDown(500, function () {
  //   $('body').append('<p>Animation is done</p>')
  // })
// })

  // $('#firstButton').hover(
  //   function () {
  //     console.log('hi')
  //     $('#topBox').fadeOut('fast')
  //   }, 
  //   function () {
  //     $('#topBox').fadeIn('fast')
  //   }
  // )

  // $('#secondButton').click( e=> {
  //   $('#bottomBox').toggle(500)
  // })

$('button').click( e => {
  $('div').animate({
    width : 'toggle',
    opacity: 0.5
  }, 
  1000
  )
})