// Closure
// 1. Функция возвращает функцию
// 2. Возвращаемая функция запоминает scope(окружение)

function hello(name) {
  const helloName = () => console.log("Hello", name);

  return helloName; // Важно! Здесь функция не вызывается.
}

const helloWorld = hello("world");
helloWorld(); //Hello world

const helloJohn = hello("John");
helloJohn(); //Hello John

function outer() {
  let counter = 0;

  function incrementCounter() {
    console.log(++counter);
  }

  return incrementCounter;
}

// Два независимых счетчика
const myCounter1 = outer();
myCounter1(); // 1
myCounter1(); // 2
myCounter1(); // 3

const myCounter2 = outer();
myCounter2();
myCounter2();
myCounter2();
