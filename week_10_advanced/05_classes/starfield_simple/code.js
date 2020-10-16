
class Star {

  constructor () {
    this.size = Math.floor(Math.random() * (15 - 2 + 1) + 2)
    this.x = Math.floor(Math.random() * (window.innerWidth  + 1) - 15)
    this.y = Math.floor(Math.random() * (window.innerHeight  + 1) - 15)
  }

  create () {
    const container = document.querySelector('body')
    const starElement = document.createElement('div')
    starElement.style.width = this.size + 'px'
    starElement.style.height = this.size + 'px'
    starElement.style.left = this.x + 'px'
    starElement.style.top = this.y + 'px'
    starElement.classList.add('star')
    container.appendChild(starElement)
  }


}

let stars = []

for (let i = 0; i < 500; i++) {
  stars.push( new Star())
  stars[i].create()
  
}


console.log(stars[200])


document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', function (){
    star.style.backgroundColor = 'hotpink'
  })
})