// Создание, удаление и перемещение объектов по DOM-узлам

// СОЗДАНИЕ

// let elem = document.createElement(`div`)
// elem.innerText = `Hello`
// document.body.append(elem)
// document.body.after(elem)

//Вставить DIV элемент с текстовым сво-вом «Hello», между p и script

// let pElem = document.querySelector(`#elem`)
// pElem.after(elem)


// 1. Создайте ul список внутри div#root и поместите туда 3 li элемента с текстовым сво-вом (1,2,3)

// правильное, но много кода
// let div_root = document.querySelector(`#root`)
// let ulElem = document.createElement(`ul`)
// let liElem1 = document.createElement(`li`)
// let liElem2 = document.createElement(`li`)
// let liElem3 = document.createElement(`li`)
// liElem1.innerText = 1
// liElem2.innerText = 2
// liElem3.innerText = 3

// div_root.append(ulElem)
// ulElem.append(liElem1, liElem2, liElem3)


//правильное короткое
let div_root = document.querySelector(`#root`)
let ulElem = document.createElement(`ul`)
div_root.append(ulElem)

for (let i = 1; i < 4; i++) {
    let liElem = document.createElement(`li`)
    liElem.innerText = i
    ulElem.append(liElem)
}

// ---------------------------
// МИНИ - ДЗ
// В разметке заданы теги

// <div id="root">
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
// </div>

// Замените все теги li на полужирный шрифт сохранив текствое сво-во
