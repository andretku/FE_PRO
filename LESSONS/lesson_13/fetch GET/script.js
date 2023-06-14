// let url = `https://jsonplaceholder.typicode.com/users`
// fetch(url)
//     .then((res) => {
//         if (res.status === 404) {
//             return `Не верная ссылка`;
//         } else if (res.status === 200) {
//             return res.json()
//         }
//     })
//     .then((data) => console.log(data))

    // -------------------------
// Задание 1
// Получите данные используя сетевой запрос 
// Выведите измененный массив, элементы которого содержат нечетное значение id.

// let url1 = `https://jsonplaceholder.typicode.com/posts`
// fetch(url1)
//     .then((response) => response.json())  //всегда этот метод неизменный
//     .then((data) => {
//         let result = data.filter(elem => elem.id % 2 !== 0)
//         console.log(result);
//     })

// ----------------------
// Задача 2
// Получите данные используя сетевой запрос 
// Выведите в консоль элемент массива, у которого самое большое сво-во title
// Сложная задача

//Решение 1
// let url2 = `https://jsonplaceholder.typicode.com/todos`
// fetch(url2)
//     .then((res) => res.json())  
//     .then((data) => {
//         let maxLength = Math.max(...data.map(elem => elem.title.length))
//         let findElem = data.find(elem => elem.title.length === maxLength)
//         console.log(findElem);
//     })

//Решение 2
// fetch(url2)
//     .then(res => res.json())
//     .then(data => {
//         let findElem = data.reduce((acum, value) => (acum.title.length < value.title.length) ? value : acum, {title: {length: ''}})
//         console.log(findElem)
//     })

// --------------------------
// вывести массив, чье count превышает 250
// let url = `https://fakestoreapi.com/products`
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data.filter(elem => elem.rating.count > 250)))

// ============================================================

// создали разметку, подключили css

let url = `https://fakestoreapi.com/products`

fetch(url)
    .then(res => res.json())
    .then(data => {
        let newData = data.filter(elem => elem.price % 1 === 0)
        render(newData)
    })

let div_wrapper = document.createElement(`div`)
div_wrapper.className = `product_wrapper`
let div_root = document.querySelector(`#root`)

function render(array) {
    for(let elem of array) {
        let div_product = document.createElement(`div`)
        let p_title = document.createElement(`p`)
        let p_price = document.createElement(`p`)
        let img_product = document.createElement(`img`)

        div_product.className = `product_elem`
        p_title.innerText = elem.title
        p_price.innerText = elem.price
        img_product.src = elem.image
        img_product.className = `product_image`

        div_product.append(img_product, p_title, p_price)
        div_wrapper.append(div_product)
    }
    div_root.append(div_wrapper)
}

// ====================== ASYNC / AWAIT =========================

// 1. Синтаксический сахар, который позволяет немного удобнее работать с промисами
// 2. Применяется только к функции, перед ней указывается async. Все результаты помещаются в переменные
// 3. Чтобы сохранить результат работы промиса, необходимо в каждой переменной указывать await, тогда код будет дожидаться выполнения каждого await
// 4. Возможность работы с catch отсутствует, но можно использовать try {...} catch {...} 

async function fetchUsers() {
    let url = `https://jsonplaceholder.typicode.com/users`
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);
}
fetchUsers()