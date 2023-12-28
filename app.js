//this

const developer = {
  name: "Mikhail",
  salary: 2500,

  getBonus(sum1, sum2) {
    console.log(
      this.name,
      "has a salary this month",
      this.salary + sum1 + sum2
    );
  },
};

// developer.getBonus(250);

const manager = {
  name: "Anna",
  salary: 1800,
};

// при вызове метода call можно подставить другой контекст
// хотя вызывали Михаила, получили Анну
developer.getBonus.call(manager, 150, 200);

// делает то же самое, только принимает параметры в виде массива
developer.getBonus.apply(manager, [150, 200]);

// привязка контекста к менеджеру, создание функции у Анны
manager.getBonus = developer.getBonus.bind(manager);
// вызов новой функции
manager.getBonus(150, 200);
