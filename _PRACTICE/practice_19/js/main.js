class Product {

    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

class PowerTool extends Product {
    constructor(id, name, price, description, power, warranty) {
        super(id, name, price, description);
        this.power = power;
        this.warranty = warranty;
    }
}

class Tool extends Product {
    constructor(id, name, price, description, strength) {
        super(id, name, price, description);
        this.strength = strength;
    }
}



const weirdArray = {
    length: 2,
    0: 'Saw',
    1: 'Hammer'
}

const veryWeirdArray = {
    0: 'Drill',
    1: 'Axe',
    2: 'Nails',
};


// 1. отдельно создаем новое свойство - функцию! И в ней можно использовать this, как будто она уже находится внутри объекта

const prod = new Product (1, 'Product', 100, "Simple product description")
prod.addDiscount = function(discount) {
    this.price = this.price * discount * 0.01
}

prod.addDiscount(200)
console.log(prod);

// 2. Пишем функцию `showProductInfo()`

function showProd() {
    let a = `Товар ${this.name}, цена - ${this.price}`
    console.log(a);
}

// 3. Зовем функцию 
showProd.call(prod)

// !!! 4.нужно сделать так, чтобы функция была доступна для ВСЕХ объектов класса `Product`
Product.prototype.showProductInfo = showProd;

// 5. 

function customMap(elem) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result[i] = elem(this[i]);
    }
    return result;
}

let numbers = [1,2,3,4,5]

// решение. 
// Привязываем контекст методом call
// теперь наш customMap будет вызван в контексте numbers
// вторым аргументом метода call передаем аргумент, который будет передан в функцию customMap, к которой привязываем контекст
// вызываем функцию customMap в контексте numbers

const square = (num) => num * num

const newNumbers = customMap.call(numbers, square);

// this - одна из самых сложных тем в js!

