// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11];

// Массив строк в одинаковом регистре
const sameCaseStringsArray = ["these", "strings", "have", "the", "same", "case"];

// Массив строк в разных регистрах
const differentCaseStringsArray = ["This", "is", "an", "Array", "of", "strings"];

// Объекты для массива объектов
const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "HomeStuff",
    img: "./assets/shark.jpeg",
    price: 45
};

// Массив объектов
let products = [ball, shark, gloves, hammer, shoes, saw];

//=====================================================
//1. Разворот строки. Вывести строку в обратном порядке. Пример: reverseString("timon"); Ожидаемый результат - nomit.
// function reverseString(string) {
//     return string.split(``).reverse().join(``)
// }
// console.log(reverseString(`samsung`))

//2. Проверка, является ли строка палиндромом. Нужно проверить, читается ли строка в обеих направлениях одинаково, БЕЗ учета регистра. Например, слово Anna - это палиндром. Слово Hanna - нет.
/*
function palindrom(str) {
    let b = str.toLowerCase()
    let a = b.split(``).reverse().join(``)
    return (a === b) ? `yes` : `no`
}
console.log(palindrom(`Anna`));
*/
// 3. Посчитать количество гласных в строке, без учета регистра. 
// function countvovels(str) {
//     let count = 0
//     const vovels = [`a`, `o`, `e`, `u`, `i`, `y`]
//     let letters = str.toLowerCase().split(``)
//     letters.forEach(elem => {
//         if (vovels.includes(elem)) count+=1
//     })
//     return count
// }
// console.log(countvovels(`Andrey`));

//4. Переформатирование даты. Написать функцию, которая на вход принимает строку, которая содержит дату в формате ГГГГ-ММ-ДД. Функция должна вернуть дату в формате ДД.ММ.ГГГГ
// function dateTransform(date) {
//     return console.log(date.split(`-`).reverse().join(`.`));
// }
// dateTransform(`2023-05-15`)

// 5. Вывести результат сортировки массива numbers по убыванию. При этом, нужно сделать это так, чтобы исходный массив остался неизменным. Подсказка - нужно скопировать исходный массив.
// let newNum = [...numbers]
// console.log(newNum.sort((a,b) => b-a));

// 6. Отсортировать массив товаров по наименованию товара, вывести в консоль результат (закрепление пройденного ранее).
// console.log(products.sort((a,b) => {
//     if (a.name > b.name) return 1
//     if (a.name < b.name) return -1
//     if (a.name === b.name) return 0
// }))

// 7. Создать глубокую копию первого товара из массива товаров. Нужно гарантировать, что изменение в этой копии не затронет элемент в массиве.
// console.log(JSON.parse(JSON.stringify(products[0])));

// 8. Вывести в консоль результат сортировки массива товаров по наименованию товара. При этом, не изменять исходный массив. Для этого тоже нужно скопировать массив - но учитывать, что здесь мы работаем с объектами (нужно глубокое копирование).

// let newArr = JSON.parse(JSON.stringify(products))
// console.log(newArr.sort((a,b) => {
//     if (a.name > b.name) return 1
//     if (a.name < b.name) return -1
//     if (a.name === b.name) return 0
// }))

// 9. C помощью метода reduce, получить массив с названиями товаров
// const result = products.reduce((acc, elem) => {
//     acc.push(elem.name);
//     return acc;
// }, []);
// console.log(result)

//10.1 C помощью метода reduce, получить объект, в котором ключами будут наименования товаров, а значениями - цены этих товаров.

// let result = products.reduce((acc, elem) => {
//     acc[elem.name] = elem.price;
//     return acc
// }, {})
// console.log(result);

// --------- нету решения 10.2 -----------------
// с помощью метода reduce, на основе списка товаров получить объект, в котором ключами будут категории, а значениями - количество товаров в этой категории

let result = products.reduce( (acc, val) => {
    if (acc[val.category]) {
        acc[val.category] += 1;
    }
    else {
        acc[val.category] = 1;
    }
    return acc;
}, {});

console.log(result);



// let result = 
// for (let i = 0; i < products.length; i++) {
//     result1[products[i].category] = products[i].price
// }
// console.log(result1);


//11. Найти среднее арифметическое массива чисел (использовать метод reduce). Подсказка - имеет смысл вспомнить про 3-й аргумент функции-колбэка.
// console.log(numbers.reduce((acc, elem) => acc + elem / numbers.length, 0))

//12. Проверить, есть ли в массиве чисел числа, кратные 3
// let res = numbers.find(elem => elem % 3 === 0)
// let a = (res > 0) ? `yes` : `no`
// console.log(a);
// console.log(numbers.includes(elem => elem % 3 === 0)) - почему includes не работает? можем ли мы писать callback?

//13. Проверить, есть ли в массиве строк sameCaseStringsArray такие строки, длина которых - 4 символа
// let res = sameCaseStringsArray.find(elem => elem.length === 4)
// let a = (typeof res === `string`) ? `yes` : `no`
// console.log(a);

// 14. Проверить, есть ли в массиве товаров такие товары, у которых цена меньше 100.
// 15. Проверить, все ли элементы в массиве строк sameCaseStringsArray имеют длину больше 3.
// 16. Проверить, все ли товары в массиве имеют цену меньше 200.
// 17. Получить массив из товаров категории Sport.
// 18. Получить массив из товаров с ценой в диапазоне от 70 до 150.
