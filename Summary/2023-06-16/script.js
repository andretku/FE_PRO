// создаем карточки с пользователями

let userStore = {};

class User {
    constructor(username, surname, url) {
        this.username = username;
        this.surname = surname;
        this.url = url;
    }
}
let formInput = document.querySelectorAll(".form-input");
let btn = document.querySelector(".btn");

formInput.forEach(elem => {
    elem.onkeyup = handlerChange;
})

btn.onclick = saveForm;

function handlerChange(e) {
    userStore[e.target.name] = e.target.value;
}

function saveForm() {
    let user = new User(userStore.username, userStore.surname, userStore.url)

    let div = document.createElement('div');
    div.classList.add('user__item');

    let img = document.createElement('img');
    img.setAttribute('src', user.url);

    let h6 = document.createElement('h6');
    h6.innerText = `${user.username} ${user.surname}`;

    div.append(img, h6);

    document.querySelector('.user').append(div)

}

// универсальное создание прототипа для инпут полей:

class Element {
    constructor(type, className) {
        this.type = type;           //сюда приходит 'text'
        this.className = className; //сюда приходит 'elements'
        this.styles = {};           //сюда придут стили
    }

    create() {
        //создаем объект с переменными, т.е как бы выносим this за скобочки, потому что мы его используем несколько раз - деструктуризация
        let { type, className, styles } = this;
        console.log(styles);
        let elem = document.createElement('input');
        elem.setAttribute('type', type);

        //цикл, который заполняет стили для elem
        for (let key in styles) {
            elem.style[key] = styles[key];
        }

        let div = document.createElement('div');
        div.append(elem)

        document.querySelector(`.${className}`).append(div)
    }

    addStyle(styles) {
        this.styles = styles;
    }
}

// let textElem = new Element('text', 'elements')
// textElem.create()

//пример наследования, когда мы данные передаем прямо в классе:
class TextElement extends Element {
    constructor(type, className) {
        super(type, className);

        this.type = 'text';
        this.className = 'elements';
    }
}

class NumberElement extends Element {
    constructor(type, className) {
        super(type, className);

        this.type = 'number';
        this.className = 'elements';
    }
}
//заполняем поля
let p2 = new NumberElement();
p2.addStyle({ color: 'red', border: '3px solid green' })
p2.create();

let p3 = new TextElement();
p2.addStyle({ 
    color: '#000', 
    border: '2px solid red',
    backgroundColor: '#ccc',    //слова с дефисом можно писать в виде camelStyle
    'font-size': '18px',     //а можно их писать в кавычках
    padding: '8px 16px'
})
p2.create();