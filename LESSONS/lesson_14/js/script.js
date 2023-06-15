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

// выносим универсальную функцию в прототип, чтобы любой объект с классом new Person() может к нему мог обратиться
Person.prototype.getUserName = function () {
    document.write(`<h1> Username: ${this.username}</h1>`);
}

person1.getUserName()
person2.getUserName()

// проверка, можем ли мы вызвать функцию для этой переменной - выдаст true либо false
console.log('getUserName' in person2);

// проверка, есть ли функция внутри объекта
console.log(person2.hasOwnProperty('getUserName'));

// -----------------------------------------------------
// Классы EC-6 стандарта

class Student {
    constructor(username, surname, rating) {
        this.username = username;
        this.surname = surname;
        this.rating = rating;
    }
    //считаем среднее значение балла у студента. Но эта функция будет внутри Prototype
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
// Статические классы
// --------------------------------------------------

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
// Пример (div в html)

let userStore = {};

class User {
    constructor(username, surname, url) {
        this.username = username;
        this.surname = surname;
        this.url = url;
    }
}
let formInput = document.querySelectorAll(".form-input");

let btn = document.querySelector(".btn");
formInput.forEach(elem => {
    elem.onkeyup = handlerChange;

})

btn.onclick = saveForm;

function handlerChange(e){
    userStore[e.target.name] = e.target.value;
}

function saveForm(){
    let user = new User(userStore.username, userStore.surname, userStore.url)

    console.log(user);
}