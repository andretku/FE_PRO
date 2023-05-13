
//самый простой пример
// function handle() {
//     console.log(12);
//     return function() {
//         console.log(34);
//     }
// }
// let test = handle()   // будет результат 12
// то же самое, что let test = function() {
//                              console.log(123);    }
// test()    // будет результат 34

//-----------------------------------------------------------------------
// function createName() {
//     let name = `Steven`
//     return function() {
//         name += ` Test`
//         console.log(name);
//     }
// }


// let nameResult = createName()
// nameResult()                    // хранит результат работы createName
// nameResult()    // еще раз проделает то, что написано внутри функции

// ---------------- пример --------------------------------------------------
// function getCounter() {
//     let counter = 0
//     return function(){
//         counter += 1
//         console.log(counter);
//     }
// }
// let count1 = getCounter()  // результат 0
// count1()                // результат 1
// count1()                // результат 2
// count1()                // результат 3
// count1()                // результат 4
// // то есть работает как счетчик, потому что саму функцию вызвали и присвоили только один раз
// let count2 = getCounter()
// count2()                // результат 1


//-------------- пример 2 ----------------------------------------------
//создаем переменные для генерации url-адресов:

function createUrl(domen) {
    return function(url){
        console.log(`www.${url}.${domen}`);
    }
}
let getCom = createUrl(`com`)       //передаем домен и замыкаем его для всей фунции getCom
getCom(`google`)
getCom(`facebook`)

let getNet = createUrl(`net`)       //передаем значение и замыкаем его для всей фунции getNet
getNet(`phone`)
getNet(`address`)

// -------------------- пример 3 --------------------------------------------------
// Напишите функцию power, которая будет возращать функцию с математическим вычислением 
// power(n) должен в качестве аргумента указывать степень возвоедения, 
// а анонимная функция должна получить число, которое необходимо возвести в n степень 

function power(n) {
    return function(a) {
        console.log(a**n)
    }
}
let result = power(3)
result(2)

// -------------------- пример 4 --------------------------------------------
// Напишите функцию createPassword(pass), которая в качестве аргумента будет получать значение нового пароля
// Функция должна вернуть функцию, которая будет проверять, совпадет ли аргумент pass с тем аргмуентом.
// который будет указан в возвращаемой функции. Если пароль совпадает - возвращаемая функция должна вывести
// в консоль true, в противном случае false

function createPassword(pass) {
    return function(passTrue) {
        console.log((pass === passTrue) ? true : false)
        //или еще проще: 
        //console.log(pass === passTrue)
    }
}
let passResult = createPassword(`123456`)
passResult(`123`)

// ----------------- пример 4 --------------------------------------