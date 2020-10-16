// Spread operatpr 

/* ... */

let saCountries = ['Colombia', 'Venezuela', 'Bolivia']
let euCountries = ['Germany', 'Austria', 'Italy']

let allCountries = [...saCountries, ...euCountries]


// console.log(saCountries, euCountries)
// console.log(allCountries)


/* In Practice */

// BEFORE : The array was mutated
let fruits = ['apple', 'banana', 'pear']
let [last] = fruits.reverse()

console.log( last, fruits)


let vegies = ['carrot', 'lettuce', 'spinach']
let [end] = [...vegies].reverse()

console.log( end, vegies)

//  First / Rest

let cities = ['new york', 'los angeles', 'miami']
let [first, ...rest] = cities

console.log(first, ' && ' ,rest)



// n number of arguements

function directions ( ...args ) {
  let [start, ...remainder] = args
  let [finish, ...stops] = remainder.reverse()

  console.group()
  console.log(`Drive through: ${args.length} towns`)
  console.log(`start in: ${start}`)
  console.log(`the destination is: ${finish}`)
  console.log(`stopping ${stops.length} times in between`)
  console.groupEnd()
}


directions('Trukee', 'Tahoe', 'Sunnyside', 'Homewood', 'Tamoa')


// Spread also works with objects

let morning = {
  breakfast: 'oatmeal',
  lunch: 'peanut butter and jelly'
}

let dinner = 'mac and cheese'

let backpackingMeals = {
  ...morning,
  dinner
}


console.log(backpackingMeals)