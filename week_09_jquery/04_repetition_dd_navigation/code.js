

$(function () {
  $('#trigger').click( function () {
    // Select the parent element of the trigger and 'find' it's corresponding 'menu' 
    // and toggle the active class
    $(this).parent().find('#menu').toggleClass('active')
  })
})