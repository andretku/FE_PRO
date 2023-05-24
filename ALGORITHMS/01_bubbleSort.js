// Пузырьковая сортировка: сравниваем первый со вторым, второй с третьим, т.о. самый большой перемещается в самый конец.
// Чтобы поменять местами переменные, нужно сохранить одну из них во временную переменную:
// a=5
// b=7
// temp=a
// a=b
// b=temp

let arr = [3,2,1,5,0]

// for (let i = 0; i < arr.length-1; i++) {
//     for (let j = 0; j < arr.length-1 - i; j++) {
//         if (arr[j] > arr[j+1]) {
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr);

// Улучшения:

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length-1; i++) {
//         let changed = false;    //проверяем, меняется что-нить или нет
//         for (let j = 0; j < arr.length-1 - i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 changed = true
//             }
//             if (!changed) break;    //если не меняется, выходим из цикла. То есть сокращаем количество итераций (проходов) 
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr))

// Каменная сортировка (наименьшее тонет)

//сам решал:
// function stoneSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         let changed = false
//         for (let j = arr.length; j > 0; j--) {
//             let temp = 0;
//             if (arr[j] < arr[j-1]) {
//                 temp = arr[j-1]
//                 arr[j-1] = arr[j]
//                 arr[j] = temp
//                 changed = true
//             }
//             console.log(arr);

//         }
//         if (!changed) break;
//     }
//     return arr
// }
// console.log(stoneSort(arr));

//Правильное, более короткое решение:
//первый цикл не меняем
// function stoneSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let changed = false; 
//         for (let j = arr.length - 1; j > i; j--) {
//             if (arr[j] < arr[j-1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j-1]
//                 arr[j-1] = temp
//                 changed = true
//             }
//             console.log(arr);
//         }
//         if (!changed) break;
//     }
//     return arr
// }
// console.log(stoneSort(arr))


