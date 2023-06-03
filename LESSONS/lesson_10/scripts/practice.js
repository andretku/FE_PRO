// Реализовать форму которая позволяет добавить новый элемент в список продуктов в массив. 
// Данные из массива должно отображться в интерфейсе при добавлении нового товара. 

//обращаемся изначально к ЛС, используем оператор нулевого слияния, если он пустой
let products = JSON.parse(localStorage.getItem(`products`)) ?? []

let form_elem = document.querySelector(`form`)
let div_root = document.querySelector(`#root`)
let div_wrapper = document.createElement(`div`)
let rem_btn = document.querySelector(`#rem_btn`)

div_wrapper.className = `product_wrapper`

form_elem.onsubmit = (event) => {
    event.preventDefault()
    let form_data = new FormData(event.target)  
    let data = Object.fromEntries(form_data)    //автоматическое создание объекта по данным из form
    data.id = Date.now()           //добавляем уникальный ID по дате - так лучше не делать, потому что получаем длинное число
    products.push(data)
    rerender(products)
    
    form_elem.reset()
}

//очищает и вызывает функцию отрисовки
//автоматически сохраняет любые изменения в ЛС
function rerender(array) {      
    localStorage.setItem(`products`, JSON.stringify(array))
    div_wrapper.innerHTML = ``
    render(array)
}

// функция отрисовки карточек:
function render(array){
    for (let elem of array){
        let div_elem = document.createElement('div')
        let p_price = document.createElement('p')
        let p_name = document.createElement('p')

        div_elem.ondblclick = () => {
            removeElem(elem.id)
        }

        div_elem.className = `product`
        p_name.innerText = elem.name
        p_price.innerText = elem.price

        div_elem.append(p_name,p_price)
        div_wrapper.append(div_elem)
    }
    div_root.append(div_wrapper)
}

//вызов функции
render(products)

// ДЗ
// 1. сделать красивую стилизацию

// Очищает данные на стороне интерфейса и LS 
rem_btn.onclick = () => {
    localStorage.removeItem(`products`)
    products = []
    rerender(products)
}

// --- !!! --- УДАЛЕНИЕ ЧЕРЕЗ FILTER --- очень часто использ -----
//удаление одного элемента (по двойному клику в функции отрисовки карточек)
function removeElem(id) {
    products = products.filter(elem => elem.id !== id)
    rerender(products)
}



