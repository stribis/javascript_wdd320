$(document).ready(() =>{

  $('.point-content').hide()

  $('.point').click((e) => {
    const content = $(e.target.children[1])
    content.fadeToggle('slow')
    if( $(e.target).hasClass('point') ){
      $(e.target).toggleClass('selected')
    }
  })

  $('.point-content').click((e) => {
    $(e.target).fadeToggle('slow')
    if( $(e.target.parentElement).hasClass('point') ){
      $(e.target.parentElement).toggleClass('selected')
    }
  })


})