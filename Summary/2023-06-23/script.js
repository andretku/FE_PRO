// объект можно создавать двумя способами:
// user.age = 30
// user['age'] = 30 
//второй способ - динамический, т.к. мы можем менять свойство age

function getName(key, value) {
    let data = {};
    data[key] = value;
    return data;
}

console.log(getName('name', 'Alex'));

//обращение также лучше делать через квадратные скобки:
let user = {
    0: 'Alex',
    1: 'John',
    name: 'Tisha',
    surname: 'Tkachuk'
}
console.log(user[1], user['1']);

delete user['0'];  // удаление внутри объекта
delete user.name;  // можно и так


//Object.assign(куда?, что?)

// проверка на наличие поля:    !!!
// 1. Можно поставить if
if (user.surname) {
    console.log(user.surname);
}
// 2.  Можно проверять прямо в консоли:
console.log(user?.surname);         // выведет фамилию или undefined, если поле будет остуствовать !!!

