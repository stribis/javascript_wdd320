// fetch Javascript (EMPFOHLEN)

document.querySelector('button').addEventListener('click', imageToGenerate) 

function imageToGenerate(e){
    e.preventDefault()
    const summImg = document.querySelector('#addinput').value

    if (summImg.length > 0){
        if (!isNaN(summImg)){

            fetch(`https://picsum.photos/v2/list?page=2&limit=${summImg}`)
            .then(response => response.json())
            .then(data => {
    
            // for each picture in data
            data.forEach(picture => {
            // create cards
            const card = document.createElement('div')
            card.classList.add('card')

            // create the template
            const template = `
            <div class="card-image"><img src="${picture.download_url}"></div>
            <div class="desc">
                <p>Author: ${picture.author}</p>
                <p><a href="${picture.url}" target="_blank">CLICK ME TO SEE THE ORIGINAL</a></p>
            </div>
            `
            // append the template
            card.innerHTML = template
            document.querySelector('.container').appendChild(card)
            });

        })
        }
        else {
            console.log('Input is not a number')
        }
    }
    else {
        console.log('You must write a number in the box')
    }
}

