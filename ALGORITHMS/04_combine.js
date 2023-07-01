// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
// к = 7
// Вывод : 256

function combine(arr1, arr2, k) {
    let i = 0;
    let j = 0;
    let arr = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) arr.push(arr1[i++]);
      else arr.push(arr2[j++]);
    }
    while (i < arr1.length) {
      arr.push(arr1[i++]);
    }
    while (j < arr2.length) {
      arr.push(arr2[j++]);
    }
    return arr[k - 1];
  }
  
  let arr1 = [100, 112, 256, 349, 770];
  let arr2 = [72, 86, 113, 119, 265, 445, 892];
  
  console.log(combine(arr1, arr2, 12));


  
  
  function combine(arr1, arr2) {
    let i = 0;
    let j = 0;
    let arr = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) arr.push(arr1[i++]);
      else arr.push(arr2[j++]);
    }
    while (i < arr1.length) {
      arr.push(arr1[i++]);
    }
    while (j < arr2.length) {
      arr.push(arr2[j++]);
    }
    return arr;
  }
  
  let arr = [4, 5, 2, 8, 1, 3, 7, 6];
  console.log(mergeSort(arr));