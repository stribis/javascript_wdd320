// API: https://docs.magicthegathering.io/

fetch('https://api.magicthegathering.io/v1/cards')
  .then(response => response.json())
  .then(data => {
    // console.log(data.cards);

    data.cards.forEach(card => {

      if (card.imageUrl !== undefined) {

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card');

        const template = `
        <img src="${card.imageUrl}" title="${card.name}">
      `;

        cardContainer.innerHTML = template;
        document.querySelector('.container').appendChild(cardContainer);

      }

    });

    $('.card img').on('click', function(e) {

      $('.card img').not($(this)).animate({
        width: '50px'
      }, 500).not($(this)).removeClass('zoomed');
      $('.card img').not($(this)).parent().animate({
        top: '',
        left: ''
      }).css('position', 'unset')

      $(this).toggleClass('zoomed');

      $(this).animate({
        width: '200px'
      }, 1000);

      $(this).parent().css('position', 'absolute').animate({
        top: '50vh',
        left: '50%'
      })

    });

  });



