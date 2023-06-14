// рекурсия

// вычисление функции от 5 (1+2+3+4+5)
// 1 способ - итеративный
// function progression(n) {
//     if (n <= 0) throw new Error("the number should be positive");
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum = sum + i;
//     }
//     return sum;
//   }
    // console.log(progression(5));

//модификация функции через рекурсию
  function progression(n) {
    if (n <= 0) throw new Error("the number should be positive");
    if (n === 1) return 1

    return progression(n-1) + n;
  }

  // =============== ЧИСЛА ФИБОНАЧЧИ ===========================
  function progression(n) {
    if (n <= 0) throw new Error("the number should be positive");
    if (n == 1) return 0;
    if (n == 2) return 1;
    let sum1 = 0;
    let sum2 = 1;
    let sum = 0;
    for (let i = 3; i <= n; i++) {
      sum = sum1 + sum2;
      sum1 = sum2;
      sum2 = sum;
    }
    return sum;
  }
//   console.log(progression(6));

// через рекурсию
function progression(n) {
    if (n <= 0) throw new Error("the number should be positive");
    if (n == 1) return 0;
    if (n == 2) return 1;

    return progression(n-1) + progression(n-2);
  }
//   console.log(progression(6));

  // ====================== ФАКТОРИАЛ ==============================
//итеративный
//   function factorial(n) {
//     let result = 1
//     for (let i = 1; i <= n; i++) {
//         result = result * i        
//     }
//     return result
//   }
//   console.log(factorial(10));

// рекурсивный
function factorial(n) {
    if (n == 1) return 1;
    return factorial(n-1) * n
}
  console.log(factorial(6));

// ================= ПРИМЕР 1 ================================
// написать формулу для Sn = 2+4+6+8+...+n

function progression(n) {
    if (n <= 0) throw new Error("the number should be positive");
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i * 2;
    }
    return sum;
  }
  console.log(progression(1));
  
  // рекурсия
  function progression(n) {
    if (n <= 0) throw new Error("the number should be positive");
    if (n == 1) return 2;
    return progression(n - 1) + 2 * n;
  }
  