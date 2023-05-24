// Сортировка ВСТАВКОЙ
//алгоритм не идет линейно, возвращается туда сюда по циклу while
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];

        while (i >= 1 && arr[i-1] > key) {
            arr[i] = arr[i-1]
            i = i-1
        }
        arr[i] = key
    }
    return arr
}
console.log(insertionSort(arr));