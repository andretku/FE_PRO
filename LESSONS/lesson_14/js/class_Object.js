// Object - существующий класс с заготовленными методами

let obj = {
    name: 'Alex',
    age: 50
}

//obj.    // ошибка - нету методов у простых объектов (то, что мы пишем после точки)

let obj2 = new Object({name: 'Alex'})

//obj2.       // тут уже есть все методы класса Object

// Object.values(obj) - возвращает массив со значениями свойств этого объекта (без ключей)
// Object.keys(obj)    - возвращает массив только с ключами
// Object.entries(obj) - возвращает массив с ключами и свойствами

console.log(Object.entries(obj));

//==========================
// Задача 1
// Рассчитайте сумму всех значыений свойств

let obj4 = {
    num1: 100,
    num2: 300,
    num3: 500,
    num4: 800,
    num5: 1400,
}

let result = Object.values(obj4).reduce((acc, sum) => acc + sum)
console.log(result);

//===============================================
// Цикл по объектам

for (let i in obj4) {    // именно такая запись должна быть для объектов (in). В данном случае i - это ключи (тип string). Чтобы обратиться к свойствам, нужно написать obj[i]
    console.log(i, obj4[i]);
}
// оператора of для объектов не существует

// Для массивов существует точно такая же форма записи:
array1 = [10,20,30,40,50,60]
for(let i in array1) {
    console.log(i);      // здесь i - индекс! 
    console.log(array1[i]);  // обращаемся к значению элементов. Здесь их можно изменить, и исходный массив тоже изменится (отличие of от in). Цикл мутирует массив (если мы что-то делаем в цикле)
}

for(let i of array1) {
    console.log(i);      // здесь i - значение элементов! Элементы только считываются, их изменить нельзя внутри цикла с of
}

// ========================================
// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат  согласно примеру:
// Пример:
let someObj = {
key1: 'value1',
key2: 'value2',
key3: 'value3',
key4: 'value4',
}
// Примечание: Использовать класс Object нельзя

// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]
// получил копию метода ENTRIES
function getEntries(obj) {
    let result = []
    for (let elem in obj) {
        result.push([elem, obj[elem]])
    }
    return result
}
console.log(getEntries(someObj))

// =================================================

// Задан массив array, передающий произвольное количество элементов. 
// реализуйте функционал, который преобразует его в объект по следующему правилу:
// Ключ элемента должен содержать его порядковый номер, в качестве значения взять строку ‘keyN’, где N - это порядковый номер.
// Количество сво-тв должно быть равным количеству элементов массива
 
let array = [1,true,'3','value1',9,'key']

//  Результат: 
//  {
// key1: 1,
// key2: true,
// key3: ‘3’,
// key4: ‘value1’
// key5: 9,
// key6: ‘key’
// }

// !! создание объекта !!
let ob = {}
for (let i in array) {
    ob[`key${+i+1}`] = array[i]
}
console.log(ob);

// ========================================================
// Object.assign
// Задача метода - объединить все указанные объекты внутри аргумента в один объект. Типа concat для массивов

let obj10 = {
    name: 'Alex'
}

let obj11 = {
    age: 30,
    salary: 400
}

let res = Object.assign(obj10, obj11)
console.log(res);

// Что возвращает данный метод?
// Что он делает с аргументами? - часто спрашивают на собесах

console.log(obj10);
console.log(obj11);

// Не возвращает новый объект, а записывает результат в первый объект, мутируя его. Второй объект не изменяется.
// res и obj10 - это один и тот же объект
// как проверить, что они равны:   console.log(res === obj10) // true
// как не менять исходные объекты?: добавить пустой объект в результат:
//let res = Object.assign({}, obj10, obj11)

