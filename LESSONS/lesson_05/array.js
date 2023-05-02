
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
let names = [`Steven`, `Alex`, `nina`, `John`]
// let result = names.find(elem => elem[0].toUpperCase() === `N`)
// console.log(result);

let result = names.find(elem => elem.at(-1) === `a`)
let result1 = names.find(elem => elem[elem.length-1] === `a`)
console.log(result);