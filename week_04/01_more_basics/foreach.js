// simple way of making quick loops

let students = [
  'Stephanie',
  'David', 
  'David', 
  'David',
  'Natanja', 
  'Julian', 
  'Joel', 
  'Simon', 
  'Michael', 
  'Nicole',
  'Cyril',
  'Renato',
  'Denny',
]





students.forEach(student => {
  console.log('My name is ' + student +' and I am in WDD918')
})

// There is no iterator!


/**
 * MORE LOOPS !
 * 
 * for in and for of
 */

const objt = {
  foo: 'one',
  bar: 'two',
  baz: 'three'
}
const arr = [3, 5, 7];

for (var i in objt) {
   console.log(i); // logs foo bar baz
}

for (var i of arr) {
   console.log(i); // logs 3, 5, 7
}