
// const btn = document.getElementById('btn');

// функция, которая работает на действие onClick в button
// const counter = () => {
//     console.log('ok')
// }

// btn.onclick = function() {

// }
// ================ СЧЕТЧИК =================================

// const prev = document.querySelector(`.gallery__prev`)
// const next = document.querySelector(`.gallery__next`)

// let count = 1
// const nextCount = () => {
//     count++
//     if (count > 5) count = 1;
//     document.querySelector(`.gallery__img`).src = `img/${count}.jpg`;

// }

// const prevCount = () => {
//     count--
//     if (count < 1) count = 5;
//     document.querySelector(`.gallery__img`).src = `img/${count}.jpg`;

// }
// next.onclick = nextCount;
// prev.onclick = prevCount;

//===================== ZOOM ======================


// const zoomImg = document.querySelector(`.zoom__img`)

// let isZoom = false;
// const zoom = () => {
//     if (!isZoom) {
//         zoomImg.style.height = '250px';
//         zoomImg.style.width = '250px';
//         isZoom = true
//     }
//     else {
//         zoomImg.style.height = '200px';
//         zoomImg.style.width = '200px';
//         isZoom = false
//     }
// }
// zoomImg.onclick = zoom

// ------------------ 2 вариант ---------------------------------
// const zoomImg = document.querySelector(".zoom__img");
// let isZoom = false;

// const zoom = () => {
//     if (!isZoom) {
//         zoomImg.style = "width:250px; height:250px; transition:0.2s;";
//         isZoom = true;
//     } else {
//         zoomImg.style = "width:200px; height:200px; transition:0.2s;";
//         isZoom = false;
//     }
// }
// zoomImg.onclick = zoom;


// ==================== Цветная доска ===========================

// let grids = document.querySelectorAll(`.grid > div`)

// const randomRGB = () => {
//     //rgb(52,35,45)
//     let r = Math.round(Math.random() *255),
//         g = Math.round(Math.random() *255),
//         b = Math.round(Math.random() *255);
//     return `background: rgb(${r}, ${g}, ${b});`
// }

// function setColor() {
//     this.style = randomRGB()
// }

// for (let i = 0; i < grids.length; i++) {
//     const element = grids[i];
//     element.onclick = setColor
// }

// //кнопка очистки всех квадратиков - тоже через цикл
// function refreshFn() {
//     for (let i = 0; i < grids.length; i++) {
//         const element = grids[i];
//         element.style.background = '#fff'
//     }
// }
// document.querySelector(`.refresh`).onclick = refreshFn


// ================= NAV BAR ================================






