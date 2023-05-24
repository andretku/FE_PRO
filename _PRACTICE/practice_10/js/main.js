// Просто селектор - под него предстоит добавлять инпут
const contactUsButton = document.querySelector('#contactUsButton');
// Задел на задачу с показом модального окна
const modalElement = document.querySelector('.modal');
const modalContainer = document.querySelector(`.modal-container`)

function renderForm() {
    /** Здесь нам предстоит создать и добавить в DOM-дерево элементы:
     *  - контейнер формы (добавьте ему класс form-container)
     *  - инпут для Фамилии
     *  - инпут для Имени
     *  - инпут для Телефона
     *  - инпут для Электронной почты
     * Всем инпутам нужно добавлять CSS-класс input.
     * ----------------------------------------------
     * Также, инпутам нужно добавить "подсказку". Это атрибут placeholder.
     * ----------------------------------------------
     * Нужно также добавить 2 кнопки:
     *  - Отправить (добавьте ей класс button)
     *  - Отмена (ей нужно добавить классы button, button-cancel)
     * ----------------------------------------------
     * Все вышеизложенное добавить в контейнер формы.
     * После этого, контейнер формы добавить ПОСЛЕ элемента contactUsButton
     */

    const divElem = document.createElement(`div`)
    divElem.classList.add(`form-container`)

    const inputSurname = document.createElement(`input`)
    const inputName = document.createElement(`input`)
    const inputPhone = document.createElement(`input`)
    const inputMail = document.createElement(`input`)
    inputSurname.classList.add(`input`)
    inputName.classList.add(`input`)
    inputPhone.classList.add(`input`)
    inputMail.classList.add(`input`)
    inputSurname.setAttribute(`placeholder`, `Surname`)
    inputName.setAttribute(`placeholder`, `Name`)
    inputPhone.setAttribute(`placeholder`, `Phone`)
    inputMail.setAttribute(`placeholder`, `Mail`)
    
    const sendButton = document.createElement(`button`)
    const cancelButton = document.createElement(`button`)
    sendButton.classList.add(`button`)
    cancelButton.classList.add(`button`, `button-cancel`)
    sendButton.innerText = `Send`
    cancelButton.innerText = `Cancel`

    divElem.append(inputSurname, inputName, inputPhone, inputMail, sendButton, cancelButton)

    modalContainer.append(divElem)

    // добавить обработчик на кнопку "Отмена", скрыть модалку
    cancelButton.addEventListener(`click`, () => {
        modalElement.style.display = `none`
    })

}
renderForm();

/*********************************** Этот блок - для задания №2 ********************************/
// Обработчики событий кликов по кнопкам
contactUsButton.addEventListener('click', (event) => {
    // Тут мы должны показать нашу модалку
    modalElement.style = `display:block`
});

modalElement.addEventListener('click', (event) => {
    // А тут нам надо проверить, на чем мы конкретно кликнули. Если именно на модалке - то спрячем модалку.
    if (event.target === modalElement) {
        modalElement.style.display = `none`
    }
});


//=====================================
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

