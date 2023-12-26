//1. Function Declaration
sum(1, 4); // только ее можно вызвать до объявления
function sum(a, b) {
  return a + b;
}

//2. Function Expression
const sum1 = function (a, b) {
  return a + b;
};

//3. IIFE (Immediately-invoked function expression)

(function (a, b) {
  return a + b;
})(5, 14);

//4. Arrow function
const sum3 = (a, b) => {
  return a + b;
};

const sum4 = (a, b) => a + b;
const add1 = (x) => x + 1; // тут можно без скобок
