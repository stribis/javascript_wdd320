// JavaScript Objects


// empty object
let studentObj = {};


// let student = {
//   name: 'Martin',
//   age: 28,
//   eyeColor : 'green'
// }

// console.log(student.name)
// console.log(student['name'])

let student = {
  name: {
    firstName : 'Martin',
    lastName : 'Hutchings' 
  },
  age : 28,
  eyeColor: 'green',
  message: function () {
    //alert('Hello my name is ' + this.name.firstName + ' ' + this.name.firstName + ', and I am ' + this.age +' years old')
    alert(`Hello my name is ${this.name.firstName} and I am ${this.age} years old!`)
  }
}

student.message()
student.eyeColor = 'red'

let myArray = new Array
console.log(myArray)