// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2)
//     }, 100)
// }, 100)

// =================================================================
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(10);
//         let elem = `Andrey`
//         resolve(elem)
//     }, Math.random() * 100)
// })

// promise.then((elem) => {
//     console.log(20, elem);
// })

// ==== ПРИМЕР ИЗ SUMMARY ========

// function func1() {
//     return new Promise((resolve, reject) => {
//         resolve(`Hello`)
//     })
// }

// function func2() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(2)
//         }, 1000)
//     })
// }

// function func3() {
//    return new Promise((resolve, reject) => {
//       console.log(3);
//    })
// }

// func1().then((x) => {
//     console.log(x);
//     return func2()

// }).then((y) => {
//     console.log(y);
//     return func3()

// }).then((z) => {
//     console.log(z);

// }).catch((err) => {
//     console.log(err);
// })

//=========== CATCH ==========================

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Pending...`);
        if (`есть ответ от сервера`) {
            let elem = `Andrey`
            resolve(elem)
        } else {
            reject()
        }

    }, Math.random() * 2000)
})

promise
    .then((elem) => {
        console.log(elem, `, successful`);
    })
    .catch(() => {
        console.log(`Unsuccessful`);
    })
    .finally();

// ----------------------------------------------------------------------------------

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(`one`), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(`two`), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(`three`), 1000))
])
.then((a) => {
    console.log(a);     //выдаст массив с промисами
})
.catch((e) => {
    console.log(e);     //если будет ошибка, то выдаст только этот промис со значением
})
