document.querySelector('button').addEventListener('click', showGames)

function showGames(e) {
    e.preventDefault()

    document.querySelector('button').innerHTML = 'Enjoy'
    document.querySelector('.container').style.display = 'grid'    




    fetch('https://www.scorebat.com/video-api/v1/')
        .then(response => response.json())
        .then(data => {
            // console.log(data)

            data.forEach(video => {
                const card = document.createElement('div')
                card.classList.add('card')

                // Erstellung eines Templates mit allen Infos zum Soccer-Match
                const template =
                    `<h2>${video.competition.name}</h2>
            <h3>${video.title}</h3>
            <p class="date">${video.date}</p>
            <div class="thumbnail"><img src="${video.thumbnail}"></div>
            <div class="line"></div>
            <div><h4>Highlights<i class="fas fa-plus"></i></h4><div class="highlights_video">
            ${video.embed}</div></div>
            <div class="line"></div>
            <h4 class="liveResultat">Click here for all Results: <a href = '${video.competition.url}'>⚽ All Live Resultats</a></h4>
            `
                card.innerHTML = template

                document.querySelector('.container').appendChild(card)


            })
            // Funktion für das Akkordeon, das das Highlight-Video erscheinen bzw. verschwinden lässt
            $('.fas').click(function () {
                // Reset all info boxes except the one activated
                $('.hightlights_video').not($(this).parent().siblings()).slideUp()
                // Reset all icons to a plus, of all icons except this
                $('.fa-minus').not($(this)).removeClass('fa-minus').addClass('fa-plus')
                // Toggle Icon classes
                $(this).toggleClass('fa-plus')
                $(this).toggleClass('fa-minus')
                // Slide Down
                $(this).parent().siblings().slideToggle()
            })

            // Funktion für Drobdown-Auswahl
            $(function () {
                $('.filter p').click(function () {
                    $('.filter li').slideToggle()
                })
            })
        })

}








