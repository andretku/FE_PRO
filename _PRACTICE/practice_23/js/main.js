const productsContainerEl = document.querySelector('#productsContainer');
let productsArray = [];

let cart = [];

// отрендерить товар - в виде карточки
function renderProduct(product) {
    let productElement = document.createElement('div');
    productElement.classList.add('product-card');
    let nameEl = document.createElement('p');
    nameEl.classList.add('product-name');
    let categoryEl = document.createElement('p');
    categoryEl.classList.add('product-category');
    let priceEl = document.createElement('p');
    priceEl.classList.add('product-price');
    let descriptionEl = document.createElement('p');
    descriptionEl.classList.add('product-description');

    let buttonsContainerEl = document.createElement('div');
    buttonsContainerEl.classList.add('buttons-container');
    let addToCartBtn = document.createElement('button');
    addToCartBtn.innerText = 'Add';
    addToCartBtn.addEventListener('click', (event) => {
        addToCart(product.id, product.title)
        console.log(cart);
    });
    addToCartBtn.classList.add('button', 'button-cart');

    let dropFromCartBtn = document.createElement('button');
    dropFromCartBtn.innerText = 'Drop';
    dropFromCartBtn.addEventListener('click', (event) => {
        removeFromCart(product.id)
        console.log(cart);
    });
    dropFromCartBtn.classList.add('button', 'button-cart-drop');
    buttonsContainerEl.append(addToCartBtn, dropFromCartBtn);

    descriptionEl.innerText = product.description;
    nameEl.innerText = product.title;
    categoryEl.innerText = product.category;
    priceEl.innerText = product.price;

    productElement.append(nameEl, categoryEl, priceEl, descriptionEl, buttonsContainerEl);
    return productElement;
};

function renderProducts(products) {
    productsContainerEl.innerHTML = '';
    products.forEach( (product) => {
        const productEl = renderProduct(product);
        productsContainerEl.append(productEl);
    });
};

// запросить и отрендерить список товаров
async function requestProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonData = await response.json();
    productsArray = jsonData;
    renderProducts(jsonData);
};

requestProducts();

//2. Пишем функцию добавления в корзину (`addToCart`). Функция в качестве аргумента будет принимать ИД и название товара. Она должна проверить наличие в корзине такого товара (с таким ИД). Если такой товар уже есть - увеличить кол-во на 1. Если нет - добавить объект с данными об этом товаре (ИД, название и количество, в данном случае 1).



function addToCart(productId, productName) {
    const existingProduct = cart.find(product => product.id === productId) // проверяем наличие в корзине

    if(existingProduct) {
        existingProduct.count++;
    } else {
        cart.push( {
            id: productId,
            name: productName,
            count: 1
        })
    }
}

// 3. Пишем функцию удаления из корзины (`removeFromCart`). Функция принимает ИД товара. Задача - если в корзине такого товара нет, то ничего не делаем. Иначе - уменьшаем кол-во товара на 1. ВАЖНО! Нам не особо нужны товары с нулевым/отрицательным количеством.

function removeFromCart(productId) {
    let existingProductIndex = -1;
    const existingProduct = cart.find((product, index) => {
        if( product.id === productId) existingProductIndex = index;
        return product.id === productId;
    }) 

    if(existingProduct) {
        if(existingProduct.count > 1) existingProduct.count--;
        else cart.splice(existingProductIndex, 1);
    } 
}

// 4. Теперь пора показать корзину. Корзину мы будем показывать как модальное окно.

const modal = document.querySelector('.modal');
const showCartBtn = document.querySelector('#showCart');

showCartBtn.addEventListener('click', (event) => {
    modal.style.display = 'block';
})

modal.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none'
    }
})





