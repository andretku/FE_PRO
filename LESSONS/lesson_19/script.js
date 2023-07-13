const div_root = document.querySelector('#root')

const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
    'https://pictures.pibig.info/uploads/posts/2023-04/thumbs/1681211316_pictures-pibig-info-p-risunok-na-temu-priroda-krasivo-1.jpg',
    
    
]

let slider_index = 0;

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

//Кружочки, которые переключают на конкретную картинку

let slider_btns = document.createElement('div')
slider_btns.className = 'slider_btn_wrapper'

for (let index in images) {
    // если переменная elem в 'let elem of images' не используется в теле цикла, то его заменяют на _, таким образом обходя ошибку !!
    const button = document.createElement('button')
    button.className = 'slider_elem_btn'

    if(+index === slider_index) {
        button.classList.add('active')  // меняем цвет активной кнопочки
    }

    button.onclick = () => {
        slider_index = +index
        cards.style.left = `${-1 * slider_index * 500}px`
        const all_btns = document.querySelectorAll('.slider_elem_btn')
        all_btns.forEach(elem => elem.classList.remove('active'))
        button.classList.add('active')
    }

    slider_btns.append(button)

}

//-----------------


frame.append(cards, triggers, slider_btns)
div_root.append(frame)

const all_btns = document.querySelectorAll('.slider_elem_btn')


const go_right = () => {

    move_slider('right')
    //вынесли в отдельную функцию все действия
//    if(slider_index < images.length - 1) {
//         slider_index++;

//         //играемся с цветом кружочка при переключении - 4 раза похожий код
//         all_btns[slider_index - 1].classList.remove('active'); //у предыдущего удаляем класс
//         all_btns[slider_index].classList.add('active'); // у текущего добавляем класс


//         cards.style.left = `${-1 * slider_index *500}px`    // картинка прячется слева за экран: -500, -1000
//    } else {
//         slider_index = 0

//         all_btns[all_btns.length - 1].classList.remove('active');
//         all_btns[slider_index].classList.add('active');


//         cards.style.left = `${-1 * slider_index *500}px`
//    }
}

const go_left = () => {
    move_slider('left')
    //вынесли в отдельную функцию все действия
    // if(slider_index !== 0) {
    //     slider_index--;

    //     all_btns[slider_index + 1].classList.remove('active');
    //     all_btns[slider_index].classList.add('active');


    //      cards.style.left = `${-1 * slider_index *500}px`
    // } else {
    //     slider_index = images.length - 1;

    //     all_btns[0].classList.remove('active');
    //     all_btns[slider_index].classList.add('active');


    //     cards.style.left = `${-1 * slider_index *500}px`
    // }
 }

right_btn.addEventListener('click', go_right)
left_btn.addEventListener('click', go_left)


// ------------------------------------
// выносим одинаковые действия, которые были выше, в одну функцию

function move_slider(side){
    const all_btns = document.querySelectorAll('.slider_elem_btn')
    if (side === 'left'){
        if (slider_index !== 0){
            slider_index--
            all_btns[slider_index + 1].classList.remove('active')
        } else {
            slider_index = images.length - 1
            all_btns[0].classList.remove('active')
        }
        all_btns[slider_index].classList.add('active')
    } else if (side === 'right'){
        if(slider_index < images.length -1){
            slider_index++
            all_btns[slider_index - 1].classList.remove('active')
        } else {
            slider_index = 0 
            all_btns[all_btns.length-1].classList.remove('active')
        }
        all_btns[slider_index].classList.add('active')
    }
    cards.style.left = `${-1 * slider_index * 500}px`
}


// не все работает, посмотреть код на gitHub





