
// let arr = [10,20,30,40,50,60]

// let newArr = []
// arr.forEach(elem => newArr.push(elem))
// console.log(newArr);

//================== filter ========================================
// let result = arr.filter(elem => elem > 25)
// console.log(result);

//точно такое же действие, но предположим, что мы не знаем метод filter. Получаем 10 строк кода. А в методе filter - 1 строка
// function filterOld(array) {
//     let newArray = []
//     for (let elem of array) {
//         if (elem > 25) {
//             newArray.push(elem)
//         }
//     }
//     return newArray
// }
// let result2 = filterOld(arr)

//======================================================================
//Задача: отфильтруйте массив таким образом, чтобы остались только числовые элементы

// let a = [10, `string`, true, 101, 50, `10l`]
// let result = a.filter(elem => typeof elem === `number`)
// console.log(result);

//=================================================================
//Задача: отфильтруйте массив таким образом,  чтобы остались только те элементы, которые начинаются на букву В
// let products = ['Велосипед', 'Самокат', "Тренажер", "Велотренажер", "Ворота", "Ракетки"]
// let result = products.filter(elem => elem[0] === 'В')
// console.log(result);
//обращение к первому символу строки - elem[0]

//================================================================
//Отфильтруйте массив таким образом, чтобы в новом массиве оказались элементы, у которых без остатка вычисляется квадратный корень
// let numbers = [4,16,10,15,25,29,100]
// вариант 1:
// let result = numbers.filter(elem => Math.sqrt(elem) % 1 === 0)
// let result = numbers.filter(elem => Number.isInteger(Math.sqrt(elem)))
// console.log(result);

//=========================== map ===============================
// prices = [100,200,300,400,500]
// let result = prices.map(elem => elem + 50)
// console.log(result);

// let names = [`Steven`, `Alex`, `Nina`, `John`]
// let result2 = names.map(elem => elem + `!`)
// console.log(result2);
// Магазин обяъвил скидки. Необходимо умеьншить цены на 20% в массиве prices
// prices = [100,200,300,400,500]
// let result = prices.map(elem => elem - elem * 0.2)
// console.log(result);

// Задача: необходимо изменить строки таким образом, чтобы первая буквы была заглавной
// let words = ['велосипед', 'самокат',"ролики", "ракетки"]

// let result = words.map(elem => elem[0].toUpperCase() + elem.slice(1))
// let result = words.map(elem => elem.replace(elem[0], elem[0].toUpperCase()))
// console.log(result);

//==================== find =========================================
//ищем имя, которое начинается и с маленькой, и с большой N
// let names = [`Steven`, `Alex`, `nina`, `John`]
// let result = names.find(elem => elem[0].toUpperCase() === `N`)
// console.log(result);

// let result = names.find(elem => elem.at(-1) === `a`)
// let result1 = names.find(elem => elem[elem.length-1] === `a`)
// console.log(result);

// =======================================================================
// ======================= LESSON_07 =====================================

// ---------------------- findIndex --------------------------------------
// let names = [`Steven`, `Alex`, `nina`, `John`]
// let result1 = names.findIndex((elem) => elem[0] === 'n')
// let result2 = names.findIndex((elem) => elem[0] === 'x')
// console.log(result1, result2);

// Задача: найдите индекс элемента массива, который заканчивается на букву "и"
// let a = ['велосипед', "самокат", "ролики"]
// let result = a.findIndex((elem) => elem[elem.length-1] === 'и')
// console.log(result);

// ------------------------ sort -----------------------------------------
// let a = [`c`,4,5,6,`b`,1,2,`a`,3,7,8,9,10,100]
// a.sort()
// console.log(a);

//Как sort понимает, как нужно отсортировать массив
// a.sort((crElem, nxElem) => crElem - nxElem)
// console.log(a);

// ---------- пример 1 ------------

// let employees = [
//     {id: 4, name: 'Steven'},
//     {id: 2, name: 'Neena'},
//     {id: 1, name: 'John'},
//     {id: 3, name: 'King'},
// ]

// employees.sort((a, b) => a.id - b.id)
// console.log(employees);

// для строковых значений - только длинный вариант

// employees.sort((a, b) => {
//     if (a.name > b.name) return 1
//     if (a.name < b.name) return -1
//     if (a.name === b.name) return 0
// })
// console.log(employees);

// ------------------ пример 2 -----------------------
// let employees1 = [
//     {id: 4, name: 'Steven'},
//     {id: 2, name: 'Neena'},
//     {id: 1, name: 'Johnie'},
//     {id: 3, name: 'Kingsman'},
//     {id: 5, name: 'Anna'},
// ]

// employees1.sort((l, m) => {
//     if (l.name.length > m.name.length) return 1
//     if (l.name.length < m.name.length) return -1
//     if (l.name.length === m.name.length) return 0
// })
// короткий способ:
// employees1.sort((l, m) => l.name.length - m.name.length)
// console.log(employees1);

// ------------------------ reduce ------------------------------------------

// найти сумму всех элементов массива
// let a = [10,50,30,40,50,10]

// let result = 0
// for (let i = 0; i < a.length; i++) { result = result + a[i] }
// console.log(result);

// решение через reduce
// let result2 = a.reduce((summ, elem) => summ + elem)
// console.log(result2);

// --------------- пример ------------------
// найти среднее значение цены в массиве объектов
let goods = [
    {id: 1, title: 'велосипед', price: 500},
    {id: 2, title: 'самокат', price: 200},
    {id: 3, title: 'ролики', price: 300},
    {id: 4, title: 'ракетки', price: 900},
]

let result = goods.reduce((summ, elem) => summ + elem.price / goods.length, 0) 
console.log(result);

// найти среднее значение цены только у тех, кто начинается на `р`

let result1 = goods.reduce((summ, elem) => (elem.title[0] == 'р') ? summ + elem.price : summ, 0)
console.log(result1);
