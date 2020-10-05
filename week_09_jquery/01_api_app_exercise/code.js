fetch('https://open.exchangerate-api.com/v6/latest')
  .then(response => response.json())
  .then(data => {
    const rates = data.rates

    // Iterate through both select elements

    document.querySelectorAll('select').forEach(element => {
      // now iterate through all properties in the rates object
      for (const currency in rates) {
        const option = document.createElement('option')
        option.innerText = currency
        element.appendChild(option)

        // console.log(currency + ' is: ' + rates[currency])
        // add the current currency as an <option> of our <select>


      }
    })
    // add the current currency as an <option> of our <select>
    document.querySelector('button').addEventListener('click', e => {
      const userInput = document.querySelector('.input_value').value
      // TODO: add error message if input isNaN

      const startCurrency = document.querySelector('#start_currency').value
      const endCurrency = document.querySelector('#end_currency').value

      //console.log( rates[startCurrency]/)
      const newRate = 1 / rates[startCurrency]
      //const result = rates[firstCurrency] * userInput
      const usdVal = userInput * newRate
      // console.log(usdVal)

      const result = usdVal * rates[endCurrency]
      //console.log(result)
      document.querySelector('.result').innerHTML = `You get: <span .result_currency>${Math.round(100*result)/100} ${endCurrency} </span>`

    })

  })