// Контекст this.
// Является динамическим параметром, определяется в момент вызова

let pet1 = {
    name: 'Sharik',
    getName() {
        console.log(this);
    }
}
let pet2 = {
    name: 'Puhlik',
    getName() {
        console.log(this);
    }
}
// pet1.getName()      // покажет весь объект
// pet2.getName()

//------------------------------------

let pet3 = {
    name: 'Sharik',
}
let pet4 = {
    name: 'Puhlik',
}

function getName() {           // вынесли функцию отдельно
    console.log(this.name);
}

pet3.get = getName      // соединили функцию и объект
pet4.get = getName

pet3.get()              // вызвали функцию
pet4.get()

//--------------------------------------

    // создали универсальный метод-прототип, который теперь доступен у всех экземпляров классов массивов. Теперь нам не нужно передавать переменную каждый раз при вызове метода. Фактически, можно писать любой свой метод с помощью prototype
Array.prototype.double = function() {
    return this.map(elem => elem ** 2)
}

numbers = [1,2,3,4,5,6]
numbers2 = [5,6,4,5,6,5]

console.log(numbers.double());
console.log(numbers2.double());


// ============= Утеря контекста ========================

// 1. Если вызвать метод, который использует this не в контексте объекта, тогда this будет объектом window
// 2. Контекст this теряется при использовании стрелочной функции - спрашивают на собесах, в чем отличие обычной от стрелочной функции

let user = {
    name: 'Alex',
    age: 30,
    // getAge() {
    //     console.log(this.age);      // = 30
    // }
    // getAge: function() {
    //     console.log(this.age);      // = 30
    // }
    // getAge: () => {
    //     console.log(this.age);      // = undefined
    // }
}
user.getAge()


// ================== Методы функции - bind, call, apply =====================

// -------------- bind --------------------
// bind - позволяет явно привязать контекст this для указанного обекта
// bind возвращает новую функцию

let car = {
    model: 'Tesla',
    color: 'red',
    milage: 1000
}

let getKm = function() {
    console.log(this.milage * 1.6);     // пишем общую функцию: перевод мили в км
}

// 1.
car.andrey = getKm
car.andrey()

//или 2.
getKm.bind(car)()

//или 3.
let newFn = getKm.bind(car)
newFn()

// Можно не присваивать переменной, а обращатья напрямую к функции, еслм функция имеет имя

// --------------- call ----------------------

//делает то же самое, что и bind, только сразу же вызывает саму функцию, в то время как bind просто возвращает новую функцию

getKm.call(car)     // пишется без вторых скобочек. Второй аргумент можно передать через запятую

// ---------------- apply ---------------------

// делает то же самое, что и call

let getKm2 = function(valueKm, prop) {
    console.log(`${this[prop]} проехал ${this.milage * valueKm} км`);
}
getKm2.call(car, 1.6, 'model')      // статичное количество аргументов

getKm2.apply(car, [1.6, 'model'])   // аргументы передаются в качестве массива - можно подставить другую функцию или переменную