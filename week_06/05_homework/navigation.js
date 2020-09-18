

document.querySelector('.burger .icon i').addEventListener('click', function (e) {
  this.classList.toggle('fa-bars')
  this.classList.toggle('fa-times')
  document.querySelector('.burger ul').classList.toggle('active')
})