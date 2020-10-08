fetch('https://ghibliapi.herokuapp.com/films')
.then( response => response.json())
.then( data => {
    data.forEach(movie => {
    $('button').on('click', e => {
        e.preventDefault()

        const updateInput = $('input').val()
        if (updateInput === movie.title) {
            const card = document.createElement('div')
            card.classList.add('card')
        
            const template = `
            <div class="title"> ${movie.title}</div>
            <div class="date"> ${movie.release_date}</div>
            <div class="description"> ${movie.description}</div>
            `
        
            card.innerHTML = template
            document.querySelector('.container').appendChild(card)  
        }
        /* console.log($('input').val()) */
    })
    })
})