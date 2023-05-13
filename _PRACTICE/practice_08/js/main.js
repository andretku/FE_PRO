// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11];

// const sort1 = numbers.sort((a, b) => a - b)
// console.log(sort1);

// Массив строк в одинаковом регистре
const sameCaseStringsArray = ["these", "strings", "have", "the", "same", "case"];

// const res = sameCaseStringsArray.sort()
// console.log(res);

//сортировка по цене назад
// const resNazad = sameCaseStringsArray.sort((a,b) => b.length - a.length)
// console.log(resNazad);

// Массив строк в разных регистрах
// const differentCaseStringsArray = ["This", "is", "an", "Array", "of", "strings"];

// const res2 = differentCaseStringsArray.sort((a,b) => {
//     if (a.toLowerCase < b.toLowerCase) return -1
//     else return 1
// })
// console.log(res2);

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
let products = [ball, gloves, shoes, hammer, saw, shark];

//-----------сортировка по цене
// products.sort((a,b) => a.price - b.price)
// console.log(products);

//------------сортировка по цене и категории
// products.sort((a,b) => {
//     if (a.category === b.category) return a.price - b.price
//     else {
//         return (a.category < b.category) ? -1 : 1               // тернарный оператор
//     }
// })
// console.log(products);

//---------------сортировка по цене и названию
// products.sort((a,b) => {
//     if (a.category === b.category) {
//         return (a.name < b.name) ? -1 : 1    
//     }
//     else {
//         return (a.category < b.category) ? -1 : 1               // тернарный оператор
//     }
// })
// console.log(products);

// =================== reduce ========================

// --------------- найти суммарную длину всех строк в массиве sameCaseStringsArray
// const summ = sameCaseStringsArray.reduce((acc, elem) => acc + elem.length, 0)
// console.log(summ);
// -------------- второй вариант через объединение строк:
// console.log(sameCaseStringsArray.join(``).length);

//-------------- из массива строк получить объект, в котором ключами будут строки из массива, 
// -------------- а значениями - длины этих строк. Пример в README. Часто используется
// let res = sameCaseStringsArray.reduce((acc, val) => {
//     acc[val] = val.length
//     return acc
// }, {})
// console.log(res);

// ------------------ с помощью метода reduce, получить массив с названиями товаров
// let names = products.reduce((acc, elem) => {
//     acc.push(elem.name)
//     return acc
// }, [])
// console.log(names);

// ------------- с помощью метода reduce, получить из массива товаров объект, 
// ---------- в котором ключами будут наименования товаров, а значениями - цены этих товаров.
let obj = products.reduce((acc, elem) => {

}, []);
console.log(obj);




