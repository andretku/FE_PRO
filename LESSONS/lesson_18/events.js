// Событие - любое действие, которое было совершено пользователем на странице
// более 100 событий в JS

// на стороне разметки - они начинаются с букв on:
// div onclick = console.log(123)

// на стороне JS - событие для DOM узла:
let div_root = document.querySelector('#root');
let div_elem = document.querySelector('.elem');

//микро игра каунтер:
// let count = 0;
// div_root.onclick = () => {
//     console.log(++count);
// }

div_root.onclick = () => {
    div_root.style.backgroundColor = 'aqua';
}

// меняем цвет в зависимости от текущего - !!!
// без использования CSS toggle
// вариант 1
// div_elem.onclick = () => {
//     (div_elem.style.backgroundColor === 'red') ? 'aqua' : 'red';
//     }

// вариант 2
let isColor = true

div_elem.onclick = () => {
div_elem.style.backgroundColor = (isColor) ? 'red' : 'aqua'
isColor = !isColor
}

//---------- событие для всей страницы --------------
// событие наследует и вся страница, и отдельные дом-элементы внутри нее, что неудобно

document.onclick = () => {

}


// недостаток onclick - мы не можем два раза использовать эту функцию для одного элемента, будет срабатывать только последнее
// этот недостаток убирает addEventListener ------------------

div_root.addEventListener('click', () => {
    console.log(123);
})
div_root.addEventListener('click', () => {
    console.log(456);
})
// можно почитать дополнительно про третий аргумент для этой функции, что он делает

// ---------------------------------------------------------------
// события мыши

// onclick
// dblclick
// mouseup
// mousedown

div_root.addEventListener('mousedown', () => {
    console.log(mousedown);
})

// на один даблклик - 2 клика - 2 маусдаун - 2 маусап

// ---------------------------------------------------------------------------


// объект Event - объект, который сопровождается с любым указанным событием и хранит подробное описание события - там всё всё, слежение за пользователем

div_root.addEventListener('click', (event) => {
    console.log(event);
})

// например, если хочу, чтоб код отрабатывал с зажатой Alt, то добавляем к объекту:

div_root.addEventListener('click', (event) => {
    if (event.altKey){
    console.log('Alt!');
    }
})

// --------------- события клавиатуры ------------------------------

// любое нажатие любой клавиши
div_root.addEventListener('keydown', () => {
    console.log('key');
})

// следим, какая клавиша нажата
div_root.addEventListener('keydown', (event) => {
    console.log(event.key, event.keyCode);
})


//------------------------------------------------------------------------

// Задание
// Используя события клавиатуры, сформируйте вывод в косноль сообщения "Привет мир!"
// только в том случае, если будут нажаты клавиши shift + t (не учитывая регистр и раскладку) 
// !! создание горячей клавиши !!

document.addEventListener('keypress', (event) => {
    if(event.shiftKey && event.code === 'KeyT') {
        console.log('Hello world');
    }
})


// ------------- target в  event ----------------------------------
// позволяет получить ссылку на любой элемент, на котором была кликнута мышка!

document.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.remove()       // можно эту команду написать прямо в консоли, и удалять элементы на любой странице в интернете!
})

let inp = document.querySelector('input')

inp.addEventListener('change', (e) => {
    console.log(e.target.value);
})

// ======================= высплытие событий =============================================
// stopPropagation() - отключает событие родителя у дочернего элемента (когда присутствует вложенность элементов)

div_root.addEventListener('click', (e) => {
    console.log('root');
})
div_elem.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('elem');
})
// решение с дочерними элементами можно сделать через позициионирование, тогда тоже будет работать.


// preventDefault() - отключает дефолтное поведение браузера
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();     // страница не обновляется
    console.log('submit');
})


// погружение в событие - изучить самостоятельно
// https://learn.javascript.ru/bubbling-and-capturing

// ----------- removeEventListener ----------------------------------
// отменяет ранее указаннное собтиые для addEventListener
//  должна вызываться только для того же элемента и для того же колбэка, который указан в add... Для этого в add.. необходимо использовать внешнюю функцию (то есть колбэк выносим наружу)

let clickHandler = () => {
    console.log('click!');
}

div_root.addEventListener('click', clickHandler)
div_root.removeEventListener('click', clickHandler)

// другие события - изучить, знать: 
// https://developer.mozilla.org/ru/docs/Web/Events