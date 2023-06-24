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
        } else {
            this.#purchasePrice = arg;
        }
    }

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
const hammer = new Tool(2, 'Hammer', 55, 'Steel hammer', 55);
const drill = new PowerTool(3, 'Drill', 120, 'Bosch Drill', 2000, 2);
const shovel = new Tool(4, 'Shovel', 80, 'Steel Shovel', 50);

const orders = {
    'user1': [saw, hammer],
    'user2': [hammer],
    'user3': [drill, shovel],
    'user4': [shovel]
}

let powertool1 = new Object(1, 'Saw', 250, 'Electric Saw', 2500, 3)
powertool1.