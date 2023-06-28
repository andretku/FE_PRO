// Геттеры и сеттеры - это методы, которые мы определяем внутри объекта

// Нужны для чтения или переопределения свойств. Это можно сделать и без ГС, но проще делать именно через них
// Технически - это свойства-"аксессоры"

// Геттер - это метод, который позволяет прочитать свойство объекта
// Особенности:

// 1) Обращение к геттеру происходит как и к свойству (так же, как и к name, breed - одинаково, без скобок)
// 2) Свойство, определенное через геттер, может меняться динамически (даже после определения переменной). Например, мы можем указать другой pet.name = 123
// 3) Геттер не может получать аргумент (пустые скобочки)
// 4) Геттер невозможно перезаписать (в отличие от свойств). Например, мы не можем указать pet.nameBreed = 123
// 5) наличие слова return обязательно

//Пример 1:
let pet = {
    name: 'Sharik',
    breed: 'Pudel',

    get nameBreed() {
        return `His name is ${pet.name} - it is ${pet.breed}`
    }
}
console.log(pet.nameBreed); 
// Можно ли реализовать такое же действие без get? Нет, через this не работает

// На геттер очень похоже свойство .length - меняется динамически и идет без скобочек

// Пример 2:

let obj = {
    numbers: ['one', 'two', 'three', 'four'],
    get lastValue() {
        return obj.numbers[obj.numbers.length - 1]  //всегда возвращает посл элемент массива
    }
}
obj.numbers.push('five')        //динамически добавляем новый элемент
console.log(obj.lastValue);     // = five


//Пример 3:

let obj1 = {
    number: 5,
    get dbl() {
        return obj1.number ** 2
    }
}
console.log(obj1.dbl);

// --------------------------------------------
// Задача 1
// задан объект obj2. Определите новое св-во, которое будет хранить 
// разницу первого и последнего элемента массива array

let obj2 = {
    array: [10,20,30,40],
    get result() {
        return Math.abs(obj2.array[0] - obj2.array[obj2.array.length-1])
        // модуль числа
    }
}
console.log(obj2.result);

//=================================================
//Свойство set

// Позволяет переопределить свойство объекта
// Особенности:
// 1) Сеттер явно получает только один объект
// 2) Сеттер так же является сво-вом. Аргумент передается через присвоение
// 3) В сеттере указывается процесс переопределения св-ва объекта. Внутри return не используется

let setter = {
    numbers: ['one', 'two', 'three', 'four'],
    get lastValue() {
        return obj.numbers[obj.numbers.length - 1] 
    },
    set setArray(arg) {
        setter.numbers = arg.split(' ') // переопределяем numbers
    }
}

setter.setArray = '5 4 3 2 1'

console.log(setter);                // выведет весь объект
console.log(setter.numbers);        // = [ '5', '4', '3', '2', '1' ]
console.log(setter.setArray);       // = undefined

// ----------------------------------------------

//Пример 2

let obj4 = {
    name: 'Alex',
    lastName: 'Willyam',

    set fullName(arg) {
        let [newName, newLastName] = arg.split(' ')
        obj4.name = newName
        obj4.lastName = newLastName
    }
}

obj4.fullName = 'Steven King'
console.log(obj4);

// ----------------------------------------------
// Задача 3. 
// Напишите сеттер, который позволит переопределить значение сво-ва phone с проверкой
// Если номер телефона будет указан без кода +7 (то есть начиная с 8), тогда необходимо будет заменить 8 на +7

let contact = {
    phone: '+712345678',

    set newPhone(arg) {
        if (arg.startsWith('8')) {
            contact.phone = '+7'+ arg.slice(1)
        } else if (arg[0] !== '8' && arg[0] !== '+') {
            contact.phone = arg
        }
        
    }
}
contact.newPhone = '888445556'
console.log(contact.phone);

// =====================================================
// Геттер и Сеттер внутри класса
// Пример

class User{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get getName() {
        return this.name + ', ' + this.age
    }

    set setAge(num) {
        this.age = num ** 2
    }
}

let user1 = new User('Alex', 30)
user1.setAge = 5

console.log(user1);
console.log(user1.getName);

//=====================================================
// Приватные свойства
// Геттеры и сеттеры являются исключениями для приватных свойств
 // через геттер можно получить доступ к приватному свойству

 // пример для банковских карточек, именно так прячут номер карточки.

class Card {
    #card_num

    constructor(card) {
    this.#card_num = card
    }

    get readCard() {         
        return '**** ' + this.#card_num.slice(5,9) + ' ****';
    }

    set setCard(card) {
        this.#card_num = card
    }
}

let card1 = new Card()

card1.setCard = '3333 3333 3333'
console.log(card1.readCard);

