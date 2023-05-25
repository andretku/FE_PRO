// LOCAL STORAGE

// Task 1
// Создать кнопку, которая переключает значение LS из 1 в 0 и обратно

let btn_elem = document.querySelector(`button`)

btn_elem.onclick = () => {
    if(localStorage.getItem(`num`) === `1`) {
        localStorage.setItem(`num`, 0)
    } else {
        localStorage.setItem(`num`, 1)
    }
}

// let inp_elem = document.querySelector(`input`)
// inp_elem.onchange = (event) => {
//     console.log(event.target.value);
// }

// Task 2
// Напишите процесс, который по событию onchange будет сохранять значение инпут-поля в localStorage

// let inp_elem = document.querySelector(`input`)
// inp_elem.onchange = () => {
//     localStorage.setItem(`input`, inp_elem.value);
// }

// Сохранение по кнопке
let inp_elem = document.querySelector(`input`)
let btn1_elem = document.querySelector(`#btn1`)
btn1_elem.onclick = () => {
    localStorage.setItem(`input`, inp_elem.value)
}

// Task 2.2
// Доработайте решение. Реализуйте дополнительную кнопку которая будет помещать в input поле ранее сохраненное значение localStorage
let btn2_elem = document.querySelector(`#btn2`)
btn2_elem.onclick = () => {
    inp_elem.value = localStorage.getItem(`input`)
}

// Task 2.3
// Доработайте решение. Добавьте новую кнопку, которая будет очищать (удалять) только ключ input в localStorage
let btn3_elem = document.querySelector(`#btn3`)
btn3_elem.onclick = () => {
    localStorage.removeItem(`input`)
}

// =========================================================
// переключение цвета по кнопке

// как сделать переключатель 
// https://www.w3schools.com/howto/howto_css_switch.asp

let switch_elem = document.querySelector(`#checkbox`)

// здесь просто присваиваем значение из хранилища
document.body.className = localStorage.getItem(`bodyColor`)

// здесь ставим условие: присваиваем значение из хранилища, а если в хранилище ничего нету (null), то присваиваем `light`
document.body.className = localStorage.getItem(`bodyColor`) ?? `light`

// это же можно было записать через обычный тернарный оператор:
document.body.className = (localStorage.getItem(`bodyColor`) === null) ? `light` : localStorage.getItem(`bodyColor`)


switch_elem.checked = (localStorage.getItem(`bodyColor`) === `dark`) ? true : false   // делаем, чтоб переключатель менял дефолтное состояние

switch_elem.onclick = () => {
    if(document.body.className === `light`) {
        document.body.className = `dark`
        localStorage.setItem(`bodyColor`, `dark`)
    } else {
        document.body.className = `light`
        localStorage.setItem(`bodyColor`, `light`)
    }
}
// через тернарный оператор:
// switch_elem.onclick = () => {
//     document.body.className = (switch_elem.checked) ? `dark` : `light`
// }

// Задача: сделать так, чтобы при обновлении страницы тема сохранялась.
// добавил решение в код, занес данные в localStorage
