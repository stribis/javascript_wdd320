
console.log('I am loggin a string');
console.log('first', 'second', 'third')


console.group('Fruits')
console.log('apple')
console.log('pear')
console.log('banana')
console.log('orange')
console.groupEnd()


console.group('Numbers')
console.log(1)
console.log(2)
console.log(3)
console.log(5)
console.groupEnd()

console.group('Students')
console.group('WDD 919')
console.log('Arno')
console.log('Simon')
console.groupEnd()
console.group('WDD 320')
console.log('Henry')
console.log('Harry')
console.groupEnd()
console.groupEnd()

// Errors

console.error('Something went wrong')

// Info

console.info('The value of x is 20')

// Warnings

console.warn('Warning: failed to load entire image')

const myObj = {
  cost: 'chf 2.33',
  weight: '6 kg',
  availability: '10 units'
}

console.table(myObj)

const names = [['jane', 'doe'],['john', 'smith'], ['james', 'bond']]

console.table(names)


// timer

let x = 0

console.time()
for (let i = 0; i < 1000000000; i++) {
  x = i
}
console.timeEnd()

