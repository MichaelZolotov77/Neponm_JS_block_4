//this

const cat1 = {
  name: "Persik",
  say() {
    const greeting = () => console.log(this); // cat

    setTimeout(greeting, 500);
  },
};

const cat2 = {
  name: "Persik",
  say() {
    function greeting() {
      console.log(this);
    } // window

    setTimeout(greeting, 500);
  },
};

cat1.say();
cat2.say();
