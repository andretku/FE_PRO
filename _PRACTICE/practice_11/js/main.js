// Просто селектор - под него предстоит добавлять инпут
const contactUsButton = document.querySelector('#contactUsButton');
// Задел на задачу с показом модального окна
const modalElement = document.querySelector('.modal');

const modalContainer = document.querySelector('.modal-container');

/*************** Этот блок - для задания по показу/закрытию модального окна ******************/
// Обработчики событий кликов по кнопкам
contactUsButton.addEventListener('click', (event) => {
    modalElement.style.display = 'block';
    restoreInputsData()
    saveAllInputsData()
});

modalElement.addEventListener('click', (event) => {
    if (event.target === modalElement) {
        modalElement.style.display = 'none';
    }
});

/*************** Этот блок - для задания по работе со списком товаров ***********************/

const ball = {
    name: "Ball",
    category: "Sport",
    price: 100
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    price: 140
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: 0.1,
    price: 320
};
const hammer = {
    name: "Hammer",
    category: "Tools",
    price: 40
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: 0.15,
    price: 75
};
const shark = {
    name: "Shark toy",
    category: "Other",
    price: 45
};
const drill = {
    name: "Drill",
    category: "Tools",
    discount: 0.05,
    price: 85
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, drill, shark];

const productsContainer = document.querySelector('.products-container');


const basket = {};

// отрендерить товар - в виде карточки
function renderProduct(product) {
    // товар рендерим так:
    /**
     * Название товара (шрифт 16рх)
     * Категория (шрифт 14рх)
     * Цена (шрифт 14рх)
     */
    let productElement = document.createElement('div');
    productElement.classList.add('product-card');
    let nameEl = document.createElement('p');
    nameEl.classList.add('product-name');
    let categoryEl = document.createElement('p');
    categoryEl.classList.add('product-category');
    let priceEl = document.createElement('p');
    priceEl.classList.add('product-price');

    nameEl.innerText = product.name;
    categoryEl.innerText = product.category;
    priceEl.innerText = product.price;

    productElement.append(nameEl, categoryEl, priceEl);
    productsContainer.append(productElement);
}

products.forEach( (product) => {
    renderProduct(product);
});

// ================= работаем здесь 2023-05-30 =====================

let firstName = document.querySelector(`#firstName`)
let lastName = document.querySelector(`#lastName`)
let phone = document.querySelector(`#phone`)
let email = document.querySelector(`#email`)
let cancelBtn = document.querySelector(`#cancelContactsForm`)
let sendBtn = document.querySelector(`#sendContactsForm`)

function saveInputsData() {
    let objUser = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        email: email.value
    }
    localStorage.setItem(`contactsData`, JSON.stringify(objUser))
}

// cancelBtn.onclick - лучше не использовать
// сохраняем данные по отмене
cancelBtn.addEventListener(`click`, () => {
    saveInputsData()
    modalElement.style.display = 'none';
})

//восстанавливаем данные в полях, если они уже есть в ЛС
function restoreInputsData() {
    let stored = localStorage.getItem(`contactsData`)
    if (stored) {
        let parsed = JSON.parse(stored)
        firstName.value = parsed.firstName
        lastName.value = parsed.lastName
        phone.value = parsed.phone
        email.value = parsed.email
    }
}

// очищение ЛС по нажатию кнопки Отправить
sendBtn.addEventListener(`click`, (event) => {
    localStorage.removeItem(`contactsData`)
    modalElement.style.display = 'none';
})

// перебираем все input на странице, если у них есть id, то добавляем его данные в ЛС
function saveAllInputsData() {
    const inputs = document.querySelectorAll(`input`)
    let inputsData = {}
    for(let i=0; i < inputs.length; i++) {
        if(inputs[i].id) {
            inputsData[inputs[i].id] = inputs[i].value
        }
    }
    localStorage.setItem(`inputsData`, JSON.stringify(inputsData))
}
