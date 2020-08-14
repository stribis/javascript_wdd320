const report = [
  {
    client :{
      firstName: 'Harry',
      lastName : 'Potter',
      title: 'Mr.'
    },
    purchases:[
      {
        item: 'Polyjuice Potion',
        price: 50,
        quantity: 3
      },{
        item: 'Book of Monsters',
        price: 34,
        quantity: 1
      },{
        item: 'Nimbus 2020 Deluxe',
        price: 2999,
        quantity: 1
      }
    ],
    shop: 'ShopItAll - Diagon Alley',
    date: '15 Aug 1996'
  },
  {
    client :{
      firstName: 'Hermiony',
      lastName : 'Granger',
      title: 'Ms.'
    },
    purchases:[
      {
        item: 'Pixie Hair Wand',
        price: 89,
        quantity: 1
      },{
        item: 'History of Hogwarts',
        price: 35,
        quantity: 1
      },{
        item: 'Hair Pin',
        price: 0.89,
        quantity: 5
      },{
        item: 'Gryffindor Scarf',
        price: 3.97,
        quantity: 5
      }
    ],
    shop: 'ShopItAll - Hogsmeade',
    date: '21 Aug 1996'
  },
  {
    client :{
      firstName: 'Luna',
      lastName : 'Lovewood',
      title: 'Ms.'
    },
    purchases:[
      {
        item: 'Butterbeer',
        price: 1.25,
        quantity: 5
      },{
        item: 'Lion Hat',
        price: 89.99,
        quantity: 1
      },{
        item: 'Spectrespecs',
        price: 23,
        quantity: 1
      },{
        item: 'Quibbler',
        price: 2.14,
        quantity: 4
      }
    ],
    shop: 'ShopItAll - Diagon Alley',
    date: '20 Sep 1996'
  },
]

let completeReport = '';


report.forEach(receipt => {
  
  let template =`
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Dear ${receipt.client.title} ${receipt.client.firstName} ${receipt.client.lastName}
  Thank your for visiting us at ${receipt.shop}

  Here is your online receipt : 
  `
  let total = 0;
  receipt.purchases.forEach(purchase => {
    template += `
          ${purchase.quantity}x ${purchase.item} for ${purchase.price}G each. Total : ${purchase.quantity * purchase.price}G
    `
    total += (purchase.price * purchase.quantity)
    
  });
  
  template += `
  ------------------------------------------
  TOTAL: ${total}G
  ------------------------------------------
  Please do not hessitate to contact us if you have any questions
  ${receipt.date}
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  `
  
  completeReport += template
  console.log(template)
});

console.log(completeReport)
let blob = new Blob([completeReport],{type: "text/plain"});
// download the file:
download(blob,"completeReport.txt");

function download(blob,name) {
  let url = URL.createObjectURL(blob),
    div = document.createElement("div"),
    anch = document.createElement("a");

  document.body.appendChild(div);
  div.appendChild(anch);

  anch.innerHTML = "Download";
  div.style.width = "0";
  div.style.height = "0";
  anch.href = url;
  anch.download = name;
  
  
}



report.forEach( receipt => {
  console.log(receipt)

  let template = 'Dear ' + receipt.client.title + ' ' + receipt.client.firstName + ' ' + receipt.client.lastName + ', popcorn'

  console.log(template)
})

