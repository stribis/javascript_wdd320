
// The old way

function activityLog ( name, activity) {
  console.log(`${name} loves ${activity}`)
}

activityLog('Martin', 'Baseball')

// Default Parameter

function logActivity ( name = 'Princess Zelda', activity = 'Archery') {
  console.log(`${name} loves ${activity}`)
}

logActivity('Mario', 'Mushrooms') 

// These values, can also be objects

let defaultPerson = {
  name: {
    first: 'Princess',
    last : 'Zelda'
  },
  activity: 'Archery'
}

function objectLog ( person = defaultPerson) {
  //let {name, activity} = person

  console.log(`${person.name.first} ${person.name.last} loves ${person.activity}`)
  //console.log(`${name.first} ${name.last} loves ${activity}`)
}