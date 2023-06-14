
// ======================= GET ЗАПРОС =============================

// Задача 1. 
// Напишите функцию getProducts(url), которая в качестве аргумента будет принимать ссылку
// Функция должна осуществить GET запрос к источнику. Данные необходимо вывести в консоль

// let url = 'https://api.escuelajs.co/api/v1/products/400'

// function getProducts(url) {
// fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }

// getProducts(url)

//========================== POST ЗАПРОС ================================

// let url = 'https://api.escuelajs.co/api/v1/products/'

// let data = {
//     title: `Andrey 06-13`,
//     price: 10,
//     description: `TEST`,
//     categoryId: 1,
//     images: ["https://placeimg.com/640/480/any"]
// }

// fetch(url, {
//     method: `POST`,      // метод данных
//     headers: {'Content-Type': 'application/json'},  // заголовок и способ передачи данных
//     body: JSON.stringify(data)       // указываем, как передавать данные
// })
//     .then((res) => res.json())       // используем, чтобы увидеть, что мы передали
//     .then((data) => console.log(data))   // выведет только что созданную запись

// --------------------------------------
// Задача 2.
// Напишите функию createProduct(obj), которая принимает JS объект в качестве аргумента и осуществляет POST запрос с данными, которые указаны в качестве параметров функции

// let data = {
//     title: `Andrey 06-13`,
//     price: 10,
//     description: `TEST`,
//     categoryId: 1,
//     images: ["https://placeimg.com/640/480/any"]
// }

function createProduct(obj) {
    let url = 'https://api.escuelajs.co/api/v1/products/'
    fetch(url, {
        method: `POST`,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    })
}

function getProducts(){
    let url = 'https://api.escuelajs.co/api/v1/products/'
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

// createProduct(data)
// getProducts()

//======================== onSubmit =====================================

let form_elem = document.querySelector(`form`)
//спец событие по нажатии на кнопку submit:
// !!! универсальный код, который работает со всеми формами !!!
// записать его себе и запомнить
form_elem.onsubmit = (event) => {
    event.preventDefault();                //чтоб не обновлялась страница
    let form_data = new FormData(form_elem)     //формирует экземпляр объекта с данными из всей формы, которую мы выбрали выше
    let data = Object.fromEntries(form_data)    //из массива данных - превращает в объект. Обратный процесс: Object.entries()
    console.log(data);

    // задание 1.
    data.images = ["https://placeimg.com/640/480/any"]  // добавляем недостающее поле - обязательно!
    createProduct(data)
}

console.log(form_elem);

// Задание 1. 
// Допишите к форме процесс, который будет формировать POST запрос. 
// Примечание: перепровьте, все ли данные в форме определяется для POST запроса


// Задание 2. 
// Создайте на разметке кнопку, которая будет в консоль формировать GET запрос

let button_elem = document.querySelector(`button`)
button_elem.onclick = () => getProducts()   // получаем весь список по кнопке
// можно добавить уникальный ключ, по которому искать только те поля, которые мы добавили. В фэйк-базе это можно сделать вместо одного из полей
//https://fakeapi.platzi.com/doc/products - инструкция, какие команды можно использовать в этой базе