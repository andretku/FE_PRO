// function double(num) {
//     return num**2
// }
// console.log(double(2))

// ================= задача ===============================================
// 1) Напишите функцию getLastFirstChar(string), которая получает 
// строковый тип и возвращает конкатенацию первой и последней буквы
// 2) Переписать эту функцию используя все 3 вида функции (обычная, анонимная, стрелочная)


// function getLastFirstChar(str) {
//     return str.charAt(0) + str.charAt(str.length-1)
// или return str[0] + str[str.length-1]
// }

// let getLastFirstChar = function(str) {
//     return str.charAt(0) + str.charAt(str.length-1)
// }
// let getLastFirstChar = str => str.at(0) + str.at(-1)
// console.log(getLastFirstChar(`string`))

//--------------------------------------------------------
// Напишите функцию getAvg(num1,num2), которая вернет среднее значение двух параметров
// Реализовать функцию используя все три подхода

// function getAvg(num1, num2) {
//     return (num1 + num2) / 2
// }
// let getAvg = function(num1, num2) {
//     return (num1 + num2) / 2
// }
// let getAvg = (num1, num2) => (num1 + num2) / 2
// console.log(getAvg(5,7));

//---------------------------------------------------------
//Создать анонимную функцию, которая будет вызвана не через ее имя
// (function() {    console.log(123);  })()
// ((a) => console.log(122))()


//===================== CALLBACK ============================================

//самый простой пример
// function double() {
//     return `hello!`
// }
//     //отличие в том, что callbackfn в теле функции в какой то момент вызывается
// function handle(callbackfn){
//     let a = callbackfn()
//     console.log(a);
// }
// handle(double);

// //вместо функции double мы можем указать безымянную функцию в качестве аргумента
// handle(() => `test`)
// handle(() => `1234`)

//-------------------------------------------------------------
//
// function handle1(callback) {
//     let a = callback(10)
//     console.log(a);
// }
// handle(num => num **2)

//-----------------------  задача ----------------------------
// в зависимости от знака выполнить действие:

// function calc(a, b, sign) {
//     if (sign === `+`) {
//         console.log(a + b);
//     } else if (sign === `-`) {
//         console.log(a - b);
//     } else if (sign === `*`) {
//         console.log(a * b);
//     } else if (sign === `/`) {
//         console.log(a / b);
//     } else {
//         console.log(`неизвестный знак`);
//     }
// calc (20, 20, `*`)

// function calc(callback) {
//     let a = callback()
//     console.log(a);
// }
// calc(() => 50 - 50)

//---------------------------------------------------------
// в зависимости от знака сравнить два значения.
// можно сделать через if, перебирая все возможности - будет 8 или больше вариантов

// function getCondition(callback) {
//     if (callback()) {
//         console.log(`Правда`);
//     } else {
//         console.log(`Ложь`);
//     }
// }
// можно упросить функцию с помощью тернарного оператора:
function getCondition(callback) {
    console.log(callback() ? `Правда` : `Ложь`);
}
//должно быть булевое значение
getCondition(() => 10 < 20)
getCondition(() => [1,2,3].includes(2))
getCondition(() => 100 > 200)

//===========================================================
//повторить метод filter

let a = [1,2,3,4,5,6,7,8]
//как работает метод:
a.filter((elem) => elem > 5)


function filter2(array, callback) {
    let newArray = []
    for (let elem of array) {
        if (callback(elem)) {
            newArray.push(elem)
        }
    }
    return newArray
}
console.log(filter2(a, (elem) => elem > 3));