// !!!!!!!!!!!!!!!!!!!!
// Написать функцию, которая получает массив и выводит в консоль инфу, массив это или нет
// arr = [1,2,3,4,5,6,7]
// function checkArray(arr) {
//     if(Array.isArray(arr)) {
//         console.log(`Yes`);
//     } else console.log(`No`);
// }
// checkArray(arr)

//==============================================================================
// !!!!!!!!!!!!!!!!!!!!!!!!
//Напишите функцию checkObj(obj), которая будет отличать объект от всех типов данных
// Если в функцию передать объект в консоль необходимо вывести ответ 'Это объект', 
// в противном случае 'Это не объект'

// function checkObj(obj) {
//     if (!Array.isArray(obj) && typeof obj == 'object') {
//         console.log(`Это объект`);
//     } else {
//         console.log(`Не объект`);
//     }
// }
// checkObj({name: `Alex`, surname: `Tk`})
// checkObj([1,2,3,4,5,6])
// checkObj('string')
// checkObj(10)

//================================================

// let arr = [1,2,3,4,5]

// arr.splice(0,2,10)
// console.log(arr);

// arr.unshift(arr.pop())
// console.log(arr);

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// arr.splice(3, 0, `a`, `b`, `c`)
// console.log(arr);

//================ slice =================================

// let array = [1,2,3,4,5]
// let result = array.slice(3)
// console.log(result);

// let arr1 = [1,2,3,4]
// let arr2 = [1,2,3,4,5,6]

// console.log(arr2.slice(-2))

//================ includes ===============================

// let array = [1,2,3,4,5]
// let result = array.includes(3)
// console.log(result);

// Задан массив array и переменая value
// Напишите программу, которая будет добавлять значение переменной value в конец массива только в том случае,
// если этого значение нет в массиве. 
// Если элемент (занчение) уже существует в массиве - его добалвять не нужно
let value = 20
let arr = [10,20,30,40,50,60]

if (!arr.includes(value)) {
    arr.push(value)
}


console.log(arr.reverse())
console.log(arr);