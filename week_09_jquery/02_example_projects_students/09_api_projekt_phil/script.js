fetch('http://ddragon.leagueoflegends.com/cdn/10.19.1/data/en_US/champion.json')
.then(response => response.json())
.then(data => {
    console.log(data.data)

    const champions = data.data

    for (const name in champions) {
        console.log(champions[name])
        const card = document.createElement('div')
        card.classList.add('card')
        
        const template = `
        <div class='card-img'><img src='http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions[name].id}_0.jpg'></div>
        <div class='info'>Name: ${champions[name].id}</div>
        <div class='info'>Title: ${champions[name].title}</div>
        <div class='info'>Lore:${champions[name].blurb}</div>
        <button>Give me more!</button>
        `
        card.innerHTML = template
        document.querySelector('.container').appendChild(card)
      }

      $(function() {
        $('button').click( e => {
            $(e.target).siblings().slideToggle('slow')
        })
    })
})





