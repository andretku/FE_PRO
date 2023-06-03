
// const btn = document.getElementById('btn');

// =========== onClick в button ==============================
// const counter = () => {
//      count++;
//      document.getElementById('result').innerHTML = count;
// }

// btn.onclick = function() {
//   то же самое
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

// ------------------ 2 вариант изменения стиля -------------------
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

// ========== Увеличиваем до 500 и обратно до 200 ==================
// есть нюанс на 500px - изменил if на else, и всё заработало))
// const zoom500 = document.querySelector(`.zoom__img`)

// let zoomCount = 200;
// let checkZoom = true;
// let maxSize = 500;
// let minSize = 200;

// const zoom = () => {
//     if (checkZoom) {
//         zoomCount += 50
//         zoom500.style = `width:${zoomCount}px; height:${zoomCount}px;`
//         if (zoomCount === maxSize) checkZoom = false;
//     }
//     else {
//         zoomCount -= 50
//         zoom500.style = `width:${zoomCount}px; height:${zoomCount}px;`
//         if (zoomCount === minSize) checkZoom = true;
//     }
// }
// zoom500.onclick = zoom

// ==================== Цветная доска ===========================

// создаем массив дивов, поэтому можем использовать цикл для покраски:
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

const toggle = document.querySelector(`.navbar__toggle`)

toggle.onclick = toggleHandler 

function toggleHandler() {
    if(this.classList.contains(`navbar__toggle_active`)) {
        this.classList.remove(`navbar__toggle_active`)
        this.parentElement.querySelector(`.navbar`).classList.remove("navbar__show")
    } else {
        this.classList.add(`navbar__toggle_active`)
        this.parentElement.querySelector(`.navbar`).classList.add("navbar__show")
    }
}
    // можно через toggle искать элемент - в 2 строчки, можно через if в 6 строчек:
    // function toggleHandler() {
    //      this.classList.toggle(`navbar__toggle_active`)
    //      this.parentElement.querySelector(`.navbar`).classList.toggle(`navbar__show`)