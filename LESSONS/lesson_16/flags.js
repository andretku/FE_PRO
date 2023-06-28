// Флаги и дескрипторы свойств объектов

let user = {
    name: 'Steven',
    salary: 1000
}

// флаги каждого объекта:

// KEY          - name
// VALUE        - 'Steven'
// WRITABLE     - true      | право на изменение свойства, но можно удалить
// ENUMERABLE   - true      | право на участие в циклах и в любых других методах объектов (в том числе в лог)
// CONFIGURABLE - true      | право на удаление свойства (но можно изменить) и право на изменение этого же флага - если изменим на false, то обратно на true изменить не даст!

// Метод, который позволяет получить полную информацию о свойстве объекта:
let a = Object.getOwnPropertyDescriptor(user, 'name')   //   выводит описанные выше свойства
console.log(a);

// Метод, который позволяет менять дескрипторы:
Object.defineProperty(user, `name`, {writable: false, value: 'Bombus'})

// проверка:
let b = Object.getOwnPropertyDescriptor(user, 'name')
console.log(b);
// теперь не можем изменить значение name, но можем его удалить и создать еще раз, тем самым обойдя защиту writable

// -------------
Object.defineProperty(user, `name`, {enumerable: false})
console.log(user);      // = выведет только { salary: 1000 }

// -------------
Object.defineProperty(user, `name`, {configurable: false})
console.log(user);

delete user.name
user.name = 'Tristan'
console.log(user);

Object.defineProperty(user, `name`, {configurable: true})   // выдаст ошибку