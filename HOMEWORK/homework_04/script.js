// ============== 1. ===========================
//В программе задан массив, передающий строковые элементы. Напишите программу, которая которая ответит на вопрос: присутствует ли в массиве элемент, чей корень длины возвращает целое число? В качестве ответа необходимо вывести булевый тип true, false.

let arr1 = ['Велосипед','Торт','Тенис','Ракетка','Город']
let result1 = arr1.some(elem => Math.sqrt(elem.length) % 2 === 0)
console.log(result1);

// ============== 2. ===========================
// В программе задан массив, передающий числовые элементы. Напишите программу, которая сформирует новый массив из отрицательных чисел заданного массива.
let arr2 = [1,2,3,-4,5,-6,7,-8,9,10]
let result2 = arr2.filter(elem => elem < 0)
console.log(result2);

// ============== 3. ===========================
// В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.
let numbers = [10, 20, 33, 55, 100] 
let sum = 0

function numbersFn(arr) {
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (sum > 50) return i
}}
console.log(numbersFn(numbers))

// второй вариант не работает:
// let result3 = numbers.reduce((acc,elem,index) => {
//     acc + elem
//     if (acc > 50) return index
// })
// console.log(result3);

// третий вариант не работает должным образом:
// numbers.forEach(elem => {
//     sum += elem
//     if (sum > 50) return console.log(numbers.indexOf(elem))
// })

// ================= 4. ===============================
// В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. 
// Непонятно почему, но работает:
let values = ["100", "30", "Не число", "20", "Тоже не число"] 
let result4 = values.filter(elem => +elem).reduce((acc, elem) => acc + +elem, 0)
console.log(result4);

// ================= 5. ===============================
// В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию. 
let array_1 = [1, 4, 7, 8, 2] 
let array_2 = [1, 5, 11, 6, 2]

function intersection(arr1, arr2) {
    let result5 = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                result5.push(arr1[i])
                break
            }
        }        
    }
    return result5.sort((a,b) => b-a)     
}
console.log(intersection(array_1, array_2));

// второй вариант
function intersection2(arr1, arr2) {
    let arrCommon = arr1.concat(arr2).sort((a,b) => b-a)
    let result6 = []
    for (let i = 0; i < arrCommon.length; i++) {
        if(arrCommon[i] === arrCommon[i+1]) result6.push(arrCommon[i])
    }
    return result6
}
console.log(intersection2(array_1, array_2));