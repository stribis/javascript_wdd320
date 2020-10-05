$(function() {
  
  $('.fas').click( function () {
    // Reset all info boxes except the one activated
    $('.item-info').not($(this).parent().siblings()).slideUp()
    // Reset all icons to a plus, of all icons except this
    $('.fa-minus').not($(this)).removeClass('fa-minus').addClass('fa-plus')
    // Toggle Icon classes
    $(this).toggleClass('fa-plus')
    $(this).toggleClass('fa-minus')
    // Slide Down
    $(this).parent().siblings().slideToggle()
  })

});