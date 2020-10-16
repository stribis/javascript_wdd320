// We can use destructuring to take objects apart

let lunch = {
  bread : 'plain italian',
  meat : 'pulled pork',
  cheese: 'chedar',
  toppings: ['lettuce', 'tomato', 'cucumber']
}

// In this case we want to 'extract' the bread and meat properties

let {bread, meat} = lunch

// These new variables are independent from the main lunch object
bread = 'french'

console.log('destructured: ' , bread, meat)

console.log('in object: ', lunch.bread, lunch.meat)