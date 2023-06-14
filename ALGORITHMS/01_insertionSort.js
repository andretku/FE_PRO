// Сортировка ВСТАВКОЙ
//алгоритм не идет линейно, возвращается туда сюда по циклу while
let arr = [3,2,1,5,4,0]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {          //i=1       i=2     i=3     i=4
        let key = arr[i];                           //key=2     key=1   key=5   key=4

        while (i >= 1 && arr[i-1] > key) {          
            arr[i] = arr[i-1]                       //(2)=3                     (5)=5
            i = i-1                                 //i=0                       i=3
        }
        arr[i] = key                                //(2)=2     (3)=1   (4)=5
        console.log(arr);
    }
    return arr
}
console.log(insertionSort(arr));