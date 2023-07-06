const productsContainerEl = document.querySelector('.products-container');

function renderProduct(product) {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-card');
    // title
    const productTitle = document.createElement('h3');
    productTitle.classList.add('product-title');
    productTitle.innerText = product.title;
    // price
    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.innerText = product.price;
    // description
    const productDescription = document.createElement('p');
    productDescription.classList.add('product-description');
    productDescription.innerText = product.description;
    // add all into the contaoner
    productContainer.append(productTitle, productDescription, productPrice);
    // and return the DOM element we've created
    return productContainer;
};

function renderProducts(products) {
    while (productsContainerEl.firstChild) {
        // и здесь нам нужно из контейнера удалить этот элемент
        productsContainerEl.removeChild(productsContainerEl.firstChild);
    }
    products.forEach( product => {
        const productEl = renderProduct(product);
        productsContainerEl.append(productEl);
    });
};

// 1. можно несколькими смособами, но лучше почитать на лерн джаваскрипт
// событие загрузки документа: 'DOMContentLoaded'

document.addEventListener('DOMContentLoaded', (event) => {
    console.log(new Date());
    requestProducts();
})

//менне гибкая, потому что два раза нельзя написать одну и ту же функцию
// window.onload = () => {
//     console.log(new Date());
// }

// 2. 
async function requestProducts() {
    let res = await fetch(`https://fakestoreapi.com/products`);
    let data = await res.json();
    renderProducts(data);
}

// 4.

let input = document.querySelector('#testInput');

// input.addEventListener('keypress', (event) => {
//     console.log(event.charCode);
//     validateInput();
// })

// 5. !!! валидация нажатых клавиш !!! очень крутая штука

// function validateInput(event) {
//     if (event.charCode > 57 || event.charCode < 48) {
//         event.preventDefault()  //предотвращает поведение по умолчанию! в зависимости от события
//     }
// }
// если мы хотим проверить определенные символы, то собираем их в массив, и используем методы массивов find, includes и другие

// input.addEventListener('keypress', validateInput)   // вынесли функцию отдельно вверх, чтобы можно было ее использовать для любого инпута

// обработчик событий - антипод:
// input.removeEventListener('keypress', validateInput)
// должны указывать вторым параметром ту же функцию, которая использовалась в addEvent
// можно ставить на таймер:

// setTimeout(() => {input.removeEventListener('keypress', validateInput)}, 5000)
// тут все ограничения удалятся через 5 секунд


// 6. проверка при уходе фокуса с текстового поля

input.addEventListener('focusout', (event) => {
    if (isNaN(event.target.value)) {
        event.target.focus();
        event.target.classList.add('error-input')
    } else {
        event.target.classList.remove('error-input')
    }

})