// функция высшего порядка, принимает функцию в параметрах
function copyArrayAndDoSmth(arr, instruction) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    output.push(instruction(arr[i]));
  }

  return output;
}
// функция - колбек
function numSquared(num) {
  return num ** 2;
}

// функция - колбек
function divideBy2(num) {
  return num / 2;
}

const result = copyArrayAndDoSmth([7, 8, 9], numSquared);
const result2 = copyArrayAndDoSmth([10, 20, 30], divideBy2);

console.log(result);
console.log(result2);
