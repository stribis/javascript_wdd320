// break statements do not just work with switch, they also terminate loops

const students917 = [
  'Marc',
  'Daniel', 
  'Andreas', 
  'Sarah', 
  'Diana'
]

for (let i = 0; i < students917.length; i++) {
 if (students917[i] == 'Sarah') {
   break;
 }
 console.log(students917[i] + ' is a male student in a web class')
}


// continue statements let you skip an iteration in a loop

const students918 = [
  'Stephanie',
  'David', 
  'Daniel', 
  'Natanja', 
  'Calvino', 
  'Joel', 
  'Simon', 
  'Alban', 
  'Nicole'
]

for (let i = 0; i < students918.length; i++) {
 if (students918[i] == 'Alban'|| students918[i] == 'Calvino'|| students918[i] == 'Daniel') {
   continue;
 }
 console.log(students918[i] + ' is a student in WDD918')
}

