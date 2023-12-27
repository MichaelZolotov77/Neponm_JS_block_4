let counter = 0;
function getLength(arr) {
  counter++;
  if (!arr.pop()) return counter - 1;
  return getLength(arr);
}

getLength(arr);
