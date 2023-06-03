console.log(1);
console.log(2);
console.log(3);

setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2)
    }, 100)
}, 100)

// =================================================================
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(10);
        let elem = `Andrey`
        resolve(elem)
    }, 500)
})

promise.then((elem) => {
    console.log(20, elem);
})

// ==== ПРИМЕР ИЗ SUMMARY ========

function func1() {
    return new Promise((resolve, reject) => {
        resolve(`Hello`)
    })
}

function func2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(2)
        }, 1000)
    })
}

function func3() {
   return new Promise((resolve, reject) => {
      console.log(3);
   })
}

func1().then((x) => {
    console.log(x);
    return func2()

}).then((y) => {
    console.log(y);
    return func3()

}).then((z) => {
    console.log(z);

}).catch((err) => {
    console.log(err);
})

//=================================
