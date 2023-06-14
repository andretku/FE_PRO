let url = "https://dummyjson.com/products"
let div_root = document.querySelector('.root')

getElem()

function getElem() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => render(data.products));
        // .then((data) => console.log(data.products));
}

function render(item) {
    item.forEach(elem => {
        let div_card = document.createElement('div')
        div_card.classList.add('card')
    
        let img_item = document.createElement('img')
        img_item.setAttribute('src', elem.images[0])
        img_item.setAttribute('alt', elem.title)

        let title_item = document.createElement('p')
        title_item.innerText = `Title: ${elem.title}`

        let price_item = document.createElement('p')
        price_item.innerText = `Price: ${elem.price}$`

        div_card.append(img_item, title_item, price_item, rating(elem))
        div_root.append(div_card)
    });
}


function rating(elem) {
    let star_div = document.createElement(`div`)
    let rating = Math.round(elem.rating)

    for (let i = 0; i < 5; i++) {
        let star_item = document.createElement('span')
        star_item.classList.add(`fa`, `fa-star`)
        while (i < rating) {
            star_item.classList.add(`active`)
            break;    
        }
        star_div.append(star_item)
    }   
    return star_div
}