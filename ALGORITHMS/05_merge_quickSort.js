let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8, 10];

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
console.log(combine(arr1, arr2));




function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return combine(mergeSort(left), mergeSort(right));
}

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
let array1 = [8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(array));




function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let array2 = [9, 1, 2, 3, 0, 7, 6, 5];
console.log(quickSort(array));