// Classes

class Vacation {
 
  constructor (destination, lenght) {
    this.destination = destination
    this.lenght = lenght
  }

  print() {
    console.log(`${this.destination} will take ${this.lenght} days`)
  }

  sayHello () {
    console.log('Hello, I am Classy the class')
  }

}

const firstTrip = new Vacation('Santiago, Chile', 7)
const secondTrip = new Vacation('Zürich', 10)
firstTrip.print()
secondTrip.print()
firstTrip.sayHello()


// We can also extend classes
// the subclass will inherit the properties of the superclass (Vacation)

class Expedition extends Vacation { 
  constructor (destination, lenght, gear) {
    super(destination, lenght)
    this.gear = gear
  }

  print () {
    super.print()
    console.log(`Bring your ${this.gear}`)
  }
}

const newTrip = new Expedition('Mt. Everest', 9, 'sunblock')
newTrip.print()