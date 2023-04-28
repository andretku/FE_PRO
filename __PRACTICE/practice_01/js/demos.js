// const numbers  = [5,9,8,10,2,1,11,15,22,23]

//========= найти макс элемент в массиве ================
// let result = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > result) {
//         result = numbers[i]
//     }    
// }
// console.log(result);

//========== найти среднее арифметическое ================
// for (let i = 1; i < numbers.length; i++) {
//     result += numbers[i]
// }
// console.log(result / numbers.length);

//========== нати первое четное число =================
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0){
//          console.log(numbers[i]);
//          break
//     }
// }

//=========== ФУНКЦИИ ===============================
//
// function helloUser(user) {
//     return `Hello ${user}`
// }
// console.log(helloUser('Petr'))

//функция обратного вызова:
//===== написать функцию, которая принимает 2 аргумента: первый - число, второй - другая функция, которая будет применена к этому числу ===============

// function square(x) {
//     return x * x 
// }
// function callback(x, func) {
//     return func(x)
// }
// callback(3, square)

// ============== вернуть новый массив, который будет состоять из результатов применения функции callback к элементам массива array ==========================
// function map(array, callback) {
//     let result = []
//     for (let i = 0; i < array.length; i++) {
//             result[i] = callback(array[i])
//     }
//     return result
// }

// function double(x) {
//     return x * 2
// }

// const numbers = [1,2,3,4,5]

// let result = map(numbers, double)
// console.log(numbers);
// console.log(result);


//=========== вернуть первый элемент массива, для которого функция callback вернет true ================
function find(array, callback) {
    let result;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            result = array[i];
            break;
        }
    }
    return result;
}

let numbers = [1,7,10,12,5,9]

function divThree(x) {
    return x % 3 === 0;
}

console.log(find(numbers, divThree));

//мы можем написать по другому, чтобы было понятнее (без объявления названия функции, если там мало строчек):
console.log(find(numbers, function(x) {
    return x % 3 === 0;
}));