
let foo = 'foo'

if ( foo ) {
  let foo = 'bar'
  console.log('inside if', foo)
}

console.log('outside if', foo)


const color = 'red'
color = 'blue'
console.log(color)