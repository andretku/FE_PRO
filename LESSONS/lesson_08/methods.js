// =================== СРАВНЕНИЕ ОБЪЕКТОВ ==================================

// let obj1 = {name: `Andrey`}
// let obj2 = {name: `Andrey`}
// console.log(obj1 === obj2);  // - будет false

// копия массива:
// let a = [1,2,3,4,5]
// let b = [...a]

// let c = [].concat(a)
// console.log(c);

let data = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Steven'},
    {id: 3, name: 'Neena'},
]

let users = JSON.parse(JSON.stringify(data));
