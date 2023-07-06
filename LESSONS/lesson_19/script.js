const div_root = document.querySelector('#root')

const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
    'https://pictures.pibig.info/uploads/posts/2023-04/thumbs/1681211316_pictures-pibig-info-p-risunok-na-temu-priroda-krasivo-1.jpg'
]

const frame = document.createElement('div')
const cards = document.createElement('div')
const triggers = document.createElement('div')

const left_btn = document.createElement('button')
const right_btn = document.createElement('button')
left_btn.innerText = '<'
right_btn.innerText = '>'

triggers.className = 'triggers'
triggers.append(left_btn, right_btn)

cards.className = 'cards_wrapper'
frame.className = 'frame'

for (let elem of images){
    let card = document.createElement('div')
    card.className = 'card'
    card.style.backgroundImage = `url(${elem})`
    cards.append(card)
}

frame.append(cards, triggers)
div_root.append(frame)


let slider_index = 0;

const go_right = () => {
   if(slider_index < images.length - 1) {
        slider_index++;
        cards.style.left = `${-1 * slider_index *500}px`
   } else {
        slider_index = 0
        cards.style.left = `${-1 * slider_index *500}px`
   }
}
right_btn.addEventListener('click', go_right)
left_btn.addEventListener('click', go_left)

const go_left = () => {
    if(slider_index !== 0) {
         slider_index--;
         cards.style.right = `${-1 * slider_index *500}px`
    } else {
        slider_index = images.length - 1;
        cards.style.right = `${-1 * slider_index *500}px`
    }
 }

 // не работает левая кнопка - разобраться
 //дз - создать 4 кнопки, которые переключают на конкретную картинку

