//const productsContainerEl = document.querySelector('#productsContainer');

// const productsArray = [
//     new PowerTool(1, 'Electric Saw', 200, 'Druzhba forever!', 2.2, 2),
//     new PowerTool(2, 'Drill', 150, 'Bosch drill', 1.4, 3),
//     new Tool(3, 'Hammer', 80, 'Super hammer', 55 ),
// ];

// productsArray.forEach(product => {
//     const productEl = product.render();
//     productsContainerEl.append(productEl);
// })

class Product {

    #purchasePrice;     // приватное свойство - инкапсуляция - это свойство недоступно снаружи класса, к нему нельзя обратиться непосредственно. Но можно добавить в тот же print(), и тогда оно будет выведено

    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.#purchasePrice = 0.7 * price;
    }
    print() {
        console.log(`Товар ${this.name}, цена - ${this.price}`);
    }

    render() {
        let productElement = document.createElement('div');
        productElement.classList.add('product-card')
        let nameEl = document.createElement('h3')
        nameEl.classList.add('product-name')
        let priceEl = document.createElement('p')
        priceEl.classList.add('product-price')
        nameEl.innerText = this.name;
        priceEl.innerText = this.price;
        productElement.append(nameEl, priceEl);
        return productElement;
    }

};

class PowerTool extends Product {
    constructor (id, name, price, description, power, warranty) {
        super(id, name, price, description);
        this.power = power;
        this.warranty = warranty;
    }
    print() {
        super.print()       // переопределение print() !! - отсылка к родителю
         console.log(`Мощность - ${this.power} Вт`);
    }
}

class Tool extends Product {
    constructor (id, name, price, description, strength) {
        super(id, name, price, description);
        this.strength = strength;
    }
}

const prod = new Product(1, 'Product name', 10, 'Test product')
prod.print();

let electricSaw = new PowerTool(1, "Electric Saw", 250, "Makita forewer!", 2.2, 1);
electricSaw.print();




