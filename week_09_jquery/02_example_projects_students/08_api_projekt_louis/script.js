fetch('http://transport.opendata.ch/v1/stationboard?station=Flawil')
.then( response => response.json() )
.then( data => {
  console.log(data)

  // Click Events
  document.querySelector('a.toSG').addEventListener('click', e => filterTrain(e))
  document.querySelector('a.toWIL').addEventListener('click', e => filterTrain(e))

  // Filter function
  function filterTrain(e) {
    e.preventDefault

    // Reset Class of Buttons
    document.querySelectorAll('a.direction-link').forEach( btn => btn.classList.remove('active'))
    e.target.classList.add('active')
    
    updateList(e.target.innerText)
  }

  // Add list items - update list
  function updateList (direction) {
    let resultList = new Array

    // Clear list
    document.querySelectorAll('#table-body>div.row').forEach( row => row.remove())

    // Filter set to SG
    if (direction === 'St. Gallen') {
      data.stationboard.forEach( train => {
        if (train.passList[1].station.name === 'Gossau SG') {
          resultList.push(train)
        }
      })
    } 

    // Filter set to WIL
    if (direction === 'Wil') {
      data.stationboard.forEach( train => {
        if (train.passList[1].station.name === 'Uzwil') {
          resultList.push(train)
        }
      })
    }

    // Create a row for each train leaving flawil
    resultList.forEach( item => {
      const row = document.createElement('div')
      row.classList.add('row')

      let train = item.name,
          platform = item.stop.platform,
          delay = item.stop.delay,
          departure = item.stop.departure

      // Slice departure to only show the time
      departure = departure.slice(11, 16)
      
      // Checking if there is any delay
      if (delay == null) {
        delay = 'Keine Verspätung'
      } else {
        row.classList.add('alert')
      }

      // HTML Template (inside .row)
      const template = `
      <div class="first-col">${train}</div>
      <div class="second-col">${departure}</div>
      <div class="third-col">${platform}</div>
      <div class="fourth-col">${delay}</div>
      `

      row.innerHTML = template
      document.querySelector('#table-body').appendChild(row)
    })
    
  }
  
} )