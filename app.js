function addByX(x) {
  return (y) => x + y;
}

const addByTwo = addByX(2);

console.log(addByTwo(3)); // 5
console.log(addByTwo(5)); // 7
