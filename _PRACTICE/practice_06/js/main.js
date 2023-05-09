// Развернуть текст наоборот по словам тремя методами:
// function getReverse(string) {
//     let res = string.split(` `).reverse().join(` `)
//     console.log(res);
// }
// getReverse(`This is a string`)


// let getReverse = function(string) {
//     console.log(string.split(` `).reverse().join(` `))
// }

// let getReverse = string => console.log(string.split(` `).reverse().join(` `))

//--------------------------------------------------------------------------------------
// Написать интерпретацию .map()
// const arrStart = [1,2,3,4,5]

// const myMap = (array, callback) => {
//     let arr = []
//     for (let i = 0; i < array.length; i++) {
//         arr.push(callback(array[i]))
//     }
//     return arr
// }

// console.log(myMap(arrStart, item => item*2))

//====================== DOM =======================================================


const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const input = document.querySelector('.input');

button.addEventListener('click', (e) => {
    // alert(input.value)
    let text = input.value;
    let textContainer = document.querySelector(`.modal-content-text`)
    textContainer.innerText = text;
    modal.style.display = `block`;
    // здесь нужно написать обработчик для открытия модального окна
});

// здесь нужно написать обработчик для закрытия модального окна
modal.addEventListener(`click`, (event) => {
    if (event.target === `modal`) {
    modal.style.display = `none`
    } })