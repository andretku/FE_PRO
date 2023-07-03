const productsContainerEl = document.querySelector('.products-container');

let url = `https://fakestoreapi.com/products`;

let productsDataSource = []

fetch(url)
    .then(res => res.json())
    .then(data => {
        productsDataSource = [...data]; // !!! так лучше всего передавать промис в переменную!!! нельзя сразу присвоить фетч в переменную
        console.log(productsDataSource);
        renderProducts(productsDataSource);
    })


function renderProduct(product) {
    let productsContainerEl = document.createElement('div')
    productsContainerEl.classList.add('product-card')

    let product_title = document.createElement('h3')
    product_title.classList.add('product-title')
    product_title.innerText = product.title

    let p_description = document.createElement('p')
    p_description.classList.add('product-description')
    p_description.innerText = product.description

    let p_price = document.createElement('p')
    p_price.classList.add('product-price')
    p_price.innerText = product.price

    productsContainerEl.append(product_title, p_description, p_price)

    return productsContainerEl
}

function renderProducts(products) {
    while (productsContainerEl.firstChild) {
        // и здесь нам нужно из контейнера удалить этот элемент
        productsContainerEl.removeChild(productsContainerEl.firstChild);
    }
    products.forEach(product => {
        const productEl = renderProduct(product);
        productsContainerEl.append(productEl)
    });
}

// 5.Сортировка - как организовать через select, универсальная функция !!! 

function sortProducts(sortRule) {
    const rules = sortRule.split('_')
    productsDataSource.sort((product1, product2) => {
        if (rules[1] === 'asc') {
            return product1[rules[0]] < product2[rules[0]] ? -1 : 1
        } else {
            return product1[rules[0]] < product2[rules[0]] ? 1 : -1
        }
    })
}

const selectEl = document.querySelector('.select')
selectEl.addEventListener('change', (event) => {
    sortProducts(event.target.value);
    renderProducts(productsDataSource);
})

// 7. решить через метод filter


