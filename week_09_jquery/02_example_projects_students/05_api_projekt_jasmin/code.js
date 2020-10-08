/* 
   https://api.adviceslip.com/
*/
      
document.querySelector('#yes').addEventListener('click', advice)

document.querySelector('#no').addEventListener('click', noAdvice)



function advice(){
   fetch('https://api.adviceslip.com/advice')
   .then( response => response.json() )
   .then( data => {

      const randomAdvice = document.createElement('div')
      randomAdvice.classList.add('talk')

      const template = `
      <div>${data.slip.advice}</div>
      `
      randomAdvice.innerHTML = template
      document.querySelector('.container').appendChild(randomAdvice)
   })
}

function noAdvice(){
   const sad = document.createElement('div')
   sad.classList.add('sad')

   document.querySelector('#rock img').style.display = 'none'
   document.querySelector('.talk').style.display = 'none'

   document.querySelector('.container').appendChild(sad)
}

   
