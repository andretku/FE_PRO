//логарифмы - это алгоритмы с бинарным поиском
//? пока что очень не понятна связь

let array = [1, 5, 4, 3, 8, 2, 7, 6];
let modArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] == 4) modArray.push(i);
}
console.log(modArray);


//найти пары чисел, сумма которых будет равна 10 (number задаем сами)
function findPair(arr, number) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] + arr[j] === number) {
                console.log(arr[i], arr[j]);
            }
        }
    }
}
findPair(array, 10)