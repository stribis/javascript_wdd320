
// Selection by ID
console.log(document.getElementById('baz'));
document.getElementById('baz').style.background = 'pink';

//const baz = document.getElementById('baz');

// Selection by Class
console.log(document.getElementsByClassName('golden'));
console.log(document.getElementsByClassName('foo')[0]);

// Selection by Tag name

console.log(document.getElementsByTagName('li'))

// Query Selector
console.log(document.querySelector('li'))

// Query Selector All
console.log(document.querySelectorAll('li'))