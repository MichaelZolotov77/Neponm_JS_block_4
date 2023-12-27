function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}

function isOdd(num) {
  return num % 2 !== 0;
}
function isEven(num) {
  return num % 2 === 0;
}

const result = filterArray([1, 2, 3, 4, 5], isEven);
console.log(result);
