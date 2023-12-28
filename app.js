// function getLength(arr) {
//   if (!arr.pop()) return 0;

//   return 1 + getLength(arr);
// }

const getLength = (arr) => (!arr.pop() ? 0 : 1 + getLength(arr));

console.log(getLength([1, 2, 3, 4, 5, 14]));
