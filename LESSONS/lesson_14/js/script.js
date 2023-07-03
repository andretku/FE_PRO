const car1 = {
    name: 'BMW',
    model: 'X6',
    year: 2023
}

console.log(car1.name);
console.log(car1['name']);

let customYear = `year`
console.log(car1[customYear])

// ------------------------------

let store = {}

let inputElement = document.querySelectorAll(".inputElement")
for (let i = 0; i < inputElement.length; i++) {
    inputElement[i].onkeyup = function (event) {
        // console.log(event.target.name, event.target.value);

        // if(event.target.name === "username"){
        //     store.username = event.target.value;
        // }

        // if(event.target.name === "email"){
        //     store.email = event.target.value;
        // }

        store[event.target.name] = event.target.value;
    }
}

function save() {
    console.log(store);
}

// ------------------------------------
// кроме свойств, объект может иметь методы
// this мы вызываем свойства внутри объекта. Эту функцию можно вынести наружу, чтоб каждый раз не писать одно и то же
const car2 = {
    name: 'Mercedes',
    model: 'GLE 450',
    year: 2022,
    getCarInfo: function () {
        // document.write(`<h1> This is Mercedes </h1>`)
        document.write(`<h1> This is ${this.name} ${this.model}</h1>`)
    }
}

car2.getCarInfo()

// -------------------------------------------
// Классы (пишутся с большой буквы)
// создаем класс через функцию

function Car(name, model, year) {
    let temp = {};

    temp.name = name;
    temp.model = model;
    temp.year = year;
    temp.getCarYear = function () {
        document.write(`<h1> Year: ${this.year}</h1>`)
    }
    return temp;
}

let car4 = Car('BMW', '5 series', 2022)
car4.getCarYear()

//-----------------------------------------------
// Классы конструкторного вида

function Person(username, surname, age) {
    this.username = username;
    this.surname = surname;
    this.age = age;
    this.getUserInfo = function () {
        document.write(`<h1> Username: ${this.username}, 
            <br> Surname: ${this.surname}, 
            <br> Age: ${this.age}</h1>`);
    }
}

// let person1 = Person('John', 'Done', 30)
// console.log(person1);  // - undefined
// конструкторные классы должны вызываться через слово new:

let person1 = new Person('John', 'Done', 30)
console.log(person1);
person1.getUserInfo()

let person2 = new Person('Andrey', 'Smith', 39)

// выносим универсальную функцию в прототип, чтобы любой объект с классом new Person() мог к нему мог обратиться
Person.prototype.getUserName = function () {
    document.write(`<h1> Username: ${this.username}</h1>`);
}

person1.getUserName()
person2.getUserName()

// проверка, можем ли мы вызвать функцию для этой переменной - выдаст true
console.log('getUserName' in person2);

// проверка, есть ли функция внутри объекта
console.log(person2.hasOwnProperty('getUserName'));

// -----------------------------------------------------
// Классы ES6 стандарта

class Student {
    constructor(username, surname, rating) {
        this.username = username;
        this.surname = surname;
        this.rating = rating;
    }
    //считаем среднее значение балла у студента. Но эта функция будет внутри Prototype. Давид называет это МЕТОД, потому что не используется слово function, и каждый элемент контсруктора может к нему обратиться
    average() {
        if (!this.rating) return 0;
        return this.rating.reduce((acc, sum) => acc + sum) / this.rating.length
    }
}

let student1 = new Student('John', 'Done', [5, 8, 7, 10, 6, 8])
console.log(student1);
console.log(student1.average());

console.dir(Student);

// --------------------------------------------------
// Статические свойства и методы
// --------------------------------------------------
//Пример изменения свойства внутри метода. Speed по умолчанию 0, но мы его меняем внутри метода driving.
// В скобках конструктора передаем СВОЙСТВО, не ключ
class Car{
    constructor(model, year) {
        this.model = model
        this.year = year
        this.speed = 0
    }
    driving(speed) {
        let newSpeed = this.speed
        this.speed = speed
        console.log((`${this.model} едет со скоростью ${this.speed} км/ч`))
        return newSpeed
    }
}
let car3 = new Car('Tesla', 2020)

// Если мы добавляем новую переменную и возвращаем ее через return, то при каждом новом вызове метода, значение будет меняться

let a = car3.driving(100)   // =0
let b = car3.driving(80)    // =100
let c = car3.driving(88888) // =80


// Статическое свойство - это свойство, которое будет доступно только классу. Оно определяется вне конструктора
// Статические методы - методы, которые доступны только внутри класса. Экземпляры класса не имеют доступ к этим методам

class Route {
    constructor(name) {
        this.name = name
    }
    static job = 'IT'           // - стат свойство

    static sayHi() {            // - стат метод
        console.log('Hello!');
    }
}
let k = new Route('Alex')
console.log(k.job);         // undefined - экземпляры класса не имеют доступа к статическим свойствам
console.log(Route.job);     // IT

k.sayHi()       // is not a function
Route.sayHi()   // Hello!


//-----------------------------------------------

// Счетчик, который считает количество обращений к методу


class Count {

}


// --------------------------------------

// Пример: как создать массив - классически или с помощью класса
let arr = [1,2,3,4]
let arr2 = Array(1,2,3,4)
// почти все методы массива не являются статичными
Array.isArray()   // единственный статический метод в Array





//console - это класс
//log - это метод

//создали новый класс и его использовали
class Math2 {
    static add(a, b) {  //определили статичный метод, который может быть использован во всём JS
        return a + b
    }

    constructor() {
        throw new Error('Math is not Error constructor')
    }
}

console.log(Math2.add(5,6));    // покажет 11

Math2.minus = function(a,b) {
    return a - b
}

console.log(Math2.minus(5,6)); 

// поигрались с консолью
console.hello = function(a) {
    console.log(a);
}
console.hello('Hello world')

// ----------------------------------------------
// Пример

class Employee {
    constructor(username, surname, company) {
        this.username = username;
        this.surname = surname;
        this.company = company;
    }
    getName() {
        return this.username
    }
}

let user1 = new Employee('John', 'Dohn', 'Apple')

class Developer extends Employee {
    constructor(username, surname, company, skills) {
        super(username, surname, company);    //наследует все свойства у предыдущего класса
        this.skills = skills;
    }
}

//два варианта вставки:
// let user2 = new Developer('John', 'Dohn', 'Apple', ['HTML', 'CSS', 'JS'])
let user2 = new Developer(user1.username, user1.surname, user1.company, ['HTML', 'CSS', 'JS'])

//=============================================================
