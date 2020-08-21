// The main difference between the do.. while and the while loops is 
// that the do while loops executes before the condition is checked

// The main syntax looks like this: 
let condition = false;
do{
  // do something
}while( condition )


// remember to always have a way to get out of the loop
// lets do some logs to understand what is happenning


let n = 0
console.log('Our variable n starts: ' + n)
do{
  console.log( 'We are in the do statement - Our variable n is : ' + n )
  n++
}while( n < 5)
console.log( 'Our loop is finished - Our variable n is : ' + n )