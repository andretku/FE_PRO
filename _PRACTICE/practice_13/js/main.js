const productsContainerEl = document.querySelector('#productsContainer');

const categorySelect = document.querySelector('#categorySelect');

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

    nameEl.innerText = product.title;
    categoryEl.innerText = product.category;
    priceEl.innerText = product.price;

    productElement.append(nameEl, categoryEl, priceEl);
    return productElement;
};

// отрендерить список товаров
function renderProducts( productsArray ) {
    productsArray.forEach( (product) => {
        const productEl = renderProduct(product);
        productsContainerEl.append(productEl);
    });
};

// очистить контейнер товаров
function clearProducts() {
    productsContainerEl.childNodes.forEach( child => child.remove() );
};

const loadingEl = document.querySelector('#loadingMessage');

const fakeProducts = [
    {
        id: 1,
        title: 'Hammer',
        price: '100',
        category: 'Tools',
        description: 'Very useful: sometimes can help to convince somebody'
    },
    {
        id: 2,
        title: 'Saw',
        price: '200',
        category: 'Tools',
        description: 'Also very useful: can separate something'
    },
    {
        id: 3,
        title: 'Ball',
        price: '50',
        category: 'Sport',
        description: 'Nothing to say here'
    },
    {
        id: 4,
        title: 'Jeans',
        price: '150',
        category: 'Clothing',
        description: 'Just a jeans'
    },
];

/**
 * Имитация результата успешного запроса - т.е. бэк вернул нам результат, где содержатся нужные нам данные
 */
const successResponse = {
    ok: true,
    status: 200,
    json: function() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(fakeProducts);
            }, 1500);
        } )
    }
};

/**
 * Имитация неуспешного запроса - сам запрос нормальный, а вот разобрать результат не удается.
 */
const faieldResponse = {
    ok: true,
    status: 200,
    json: function() {
        throw new Error('Failed to parse!')
    }
};

//1.2. написать функцию `makeRequest`, которая имитирует загрузку данных товаров с "бэка". Функция должна вернуть промис, который будет зарезолвлен массивом фейковых товаров `fakeProducts` с задержкой в 3 секунды. Результат вывести в консоль.

function makeRequest() {
    return fetch(`https://fakestoreapi.com/products`)
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(faieldResponse)
    //     }, 3000)
    // })
}

//3.4.5.
makeRequest()
    .then(result => result.json())
    .then(res => {
        let arr = res.filter(elem => elem.price < 50)
        console.log(arr);
    })
    // .catch(error => console.log(error.message))
    // .finally(() => console.log("Запрос отправлен:" + Date.now()))






