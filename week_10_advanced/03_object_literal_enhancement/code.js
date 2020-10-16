// Object Literal Enhacement (Restructuring)
// Get variables from the global scope and add them to an object

let name = 'Colombia'
let capital = 'Bogota'

//let country = {name, capital}

//console.log(country)

// This also works with object methods

let completeName = function () {
  console.log(`${this.capital} is the capital of ${this.name}`)
}

let country = {name, capital, completeName}

console.log(country)
console.log(country.completeName())