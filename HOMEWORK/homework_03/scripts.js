let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
 ]

 // 1.Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID
console.log(goods.filter((elem) => elem.id % 2 === 0))

//2. Посчитайте сумму всех товаров, учитывая их количество
console.log(goods.reduce((acc, elem) => acc + elem.price, 0))

//3. Найдите значение элемента массива (продукта), цена которого будет кратна 5
console.log(goods.find(elem => elem.price % 5 === 0))

//4. Найдите индекс элемента, count которого будет больше 11
console.log(goods.find(elem => elem.count > 11).id)

//5. Посчитайте количество элементов, count которых является нечетным числом
// console.log(goods.filter(elem => elem.count % 2 !== 0).length)
//вариант 2:
let count = 0
goods.forEach(elem => {
    if (elem.count % 2 !== 0)
    count++
    return count
})
console.log(`5 -` + count);

//6. Посчитайте количество элементов, имя которых начинается на “Т”
let res = goods.filter(elem => elem.title.startsWith('Т'))
let res1 = Object.keys(res).length
console.log(`6 -` + res1)

//7. Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)
console.log(goods.map(elem => elem.price * 0.65))

//8. Создайте новый массив, изменив только 1 св-во count на значение 0 для всех элементов (учитывая другие св-ва)
let a = goods.map(elem => {
    elem.count = 0
    return elem
})
console.log(a)

//9. Отфильтруйте массив по св-ву title
console.log(goods.sort((a,b) => {
    if (a.title > b.title) return 1
    if (a.title < b.title) return -1
    if (a.title === b.title) return 0
}))

// - второй вариант -
console.log(goods.sort((a,b) => {
    (a.title > b.title) ? 1 : -1
}))