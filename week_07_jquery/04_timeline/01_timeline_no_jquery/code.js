$(document).ready(() =>{
  $('.point').click((e)=>{
      console.log(e)
      $(e.target).toggleClass('active')
      $(e.target).siblings().removeClass('active');

   })
})



// $(document).ready(() =>{
//   $('.point').click((e)=>{
//     $('.point').removeClass('active');
//       $(e.target).toggleClass('active')
      

//    })
// })


$(document).ready(() =>{
  $('.point').click((e)=>{
    if(!$(e.target).hasClass('point-content')){
      $(e.target).toggleClass('active')
      $(e.target).siblings().removeClass('active');
    }
   })
})