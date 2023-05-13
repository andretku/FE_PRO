// 1. Напишите функцию checkString(arg), который принимает аргумент строкового типа. Функция должна вывести в консоль первую букву аргумента.
function checkString(arg) {
   console.log(arg[0]);
}
checkString(`Andrey`)

// 2. Напишите функцию checkMiddleValue(num1,num2), которая получает в качестве аргумента два числовых значения. Функция должна вернуть их среднее значение. 
//* Доп задание. доработайте функцию таким образом, чтобы выводимое значение округлялось до десятой части

function checkMiddleValue(num1,num2) {
    let a = (num1 + num2) / 2
    console.log(a.toFixed(1));
}
checkMiddleValue(10,20)

// 3. Напишите функцию changeValue(arg1, arg2), которая принимает два аргумента (булевый тип, число). Функция, в зависимости от первого аргумента (булевого типа) должна изменить число по следующему правилу: 
// В случае, если первый аргумент будет true, функция должна вернуть квадрат числа. В противном случае - его корень.

function changeValue(arg1, arg2) {
    console.log((arg1) ? arg2**2 : arg2**0.5);
}
changeValue(true, 25)

//сокращенная версия
// const changeValue = (arg1, arg2) => (arg1) ? arg2**2 : arg2**0.5;

// 4. Напишите функцию countString(arg), которая принимает в качестве аргумента строковый тип и возвращает количество букв. Функция должна игнорировать буквы: а, о, у, с
// * Доп задание. доработайте функцию таким образом, чтобы условие включало верхний и нижний регистр (А а, О о, У у, С с)


function countString(arg) {
    let a = 0;
    for (let i = 0; i < arg.length; i++) {
        let char = arg[i].toLowerCase()
        if (
            char !== 'а' 
            && char !== 'о' 
            && char !== 'у' 
            && char !== 'с') {
            a++
        }
    }
    return console.log(a);
}
countString(`БегемОт`)

// 5. Напишите функцию createQuence(num), которая получает в качестве аргумента числовое значение. Функция должна построить последовательность строк в консоле, количество которых зависит от аргумента по следующему примеру:

function createQuence(num) {
    let star = ''
    for (let i = 0; i < num; i++) {
        star += '*'
        console.log(star);
    }
}
createQuence(6)

// перенос строки, для этого второй цикл (из Summary lection)
function createQuence(num) {
    let result = '';

    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= i; j++) {
        result += '*';
      }
      result += '\n';
    }
    console.log(result);
  }

// ================== CALLBACK ======================









