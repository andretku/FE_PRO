class Product {
    #purchasePrice

    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.#purchasePrice = 0.75 * price;
    }

    get purchasePrice() {
        return this.#purchasePrice;
    }

    set purchasePrice(arg) {
        if (arg > this.price) {
            throw new Error ('Закупочная цена больше цены товара!')
        } 
        this.#purchasePrice = arg;
    }

    //5.
    get shortDescription() {
        return `Товар ${this.name}, цена - ${this.price}`
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

const saw = new PowerTool(1, 'Saw', 150, 'Saw. Just the saw', 1500, 3);

// 6. !!!
// 1 вариант решения
for(let key of Object.keys(saw)) {
    console.log(key, saw(key));
}
// 2 вариант решения
for(let entry of Object.entries(saw)) {
    console.log(`свойство ${entry[0]}, значение ${entry[1]}`);
}
// 3 вариант - улучшенный второй:
// деструктурирующее присваивание !!!
for(let [key, value] of Object.entries(saw)) {
    console.log(`свойство ${key}, значение ${value}`);
}


const hammer = new Tool(2, 'Hammer', 55, 'Steel hammer', 55);
const drill = new PowerTool(3, 'Drill', 120, 'Bosch Drill', 2000, 2);
const shovel = new Tool(4, 'Shovel', 80, 'Steel Shovel', 50);

const orders = {
    'user1': [saw, hammer],
    'user2': [hammer],
    'user3': [drill, shovel],
    'user4': [shovel]
}

let product1 = new Object(1, 'Saw', 250, 'Electric Saw', 2500, 3)

// внештатная задача: для объекта drill вывести только те свойства, значения которых являются строками
for(let entry of Object.entries(drill)) {
    if(typeof entry[1] === 'string') {
        console.log(`${entry[0]}, value = ${entry[1]}`);
    }
}
