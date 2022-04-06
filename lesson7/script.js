// Продвинута работа с функциями

//this

/* const myObject = {
  name: 'Vasya',
  callName: function() {
    console.log(this);
    console.log(this.name);
  },
};

myObject.callName(); */

// task 1
/* 
const myCity = {
  name: "Praha",
  population: 1309000,
  showName: function () {
    console.log(this.name);
  },
  showPopulation: function () {
    console.log(this.population);
  },

  changeKeyValue: function (key, newValue) {
    switch (key) {
      case "name":
        this.name = newValue;
        return;
      case "population":
        this.population = newValue;
        return;
      default:
        console.log("Ключ не найден");
        return;
    }
  },
};
myCity.changeKeyValue("poopulation", 200000);
console.log(myCity) */

// call, apply, find - методы функции, мы используем их, если хотим привязать какой-то контекст к функции, где используется this
// call
/* 
const myObject = {
    name: "Vasia",
    callName: function() {
        console.log(this.name);
    },
};

const newObject = {
    name: "Petia",
};

myObject.callName.call(newObject); // взяли метод у myObject и применили его к newObject
 */

 // контекст дает гибкость
/* 
const say = function(phrase) {
  console.log(`${this.name}: ${phrase}`);
};

const myObject = {
  name: "Vasya", 
};

const newObject = {
  name: "Petya",
};

say.call(myObject, "Привет!");
say.call(newObject, "И тебе привет!"); */

// apply - удобен для работы с функциями, у которых много аргументов, можно передат аргументы в массиве, в остальном то же, что и call
// bind - позволяет процесс привязки контекста и вызова функции разбить на несколько действий. Иногда нужно не вызывать ф-ю сразу (что делает call), а создать переменную и запихнуть туда функцию 
// с привязанным контекстом. Call привязывает контекст и сразу же вызывает ф-ю, bind - только привязывает контекст. Привязку кладем в переменную и вызываем потом, можно в одной части скрипта хранить все привязки.

/* const say = function(phrase, phrase2) {
  console.log(`${this.name}: ${phrase}`);
  console.log(phrase2);
};

const myObject = {
  name: "Vasya", 
};

const newObject = {
  name: "Petya",
};

const argsArray = ["Привет", "phrase"];

//say.apply(myObject, argsArray);
// say.call(newObject, "И тебе привет!", "phrase");
const boundFunc = say.bind(newObject, "И тебе привет!", "phrase");
boundFunc();
  */

// задача на call, apply, bind

/* const myCity = {
  name: "Praha",
  population: 1309000,
  showName: function () {
    console.log(this.name);
  },
  showPopulation: function () {
    console.log(this.population);
  },

  changeKeyValue: function (key, newValue) {
    switch (key) {
      case "name":
        this.name = newValue;
        return;
      case "population":
        this.population = newValue;
        return;
      default:
        console.log("Ключ не найден");
        return;
    }
  },
};

const newCity = {
  name: "NN",
  population: 1500000,
}; */

//myCity.showName.call(newCity);
//myCity.showPopulation.call(newCity);
//myCity.changeKeyValue.call(newCity, "name", "NY");
//myCity.changeKeyValue.apply(newCity, ["population", "5000000"]);
//console.log(newCity);

//const boundFunc = myCity.changeKeyValue.bind(newCity, "name", "LA");
//boundFunc();
//console.log(newCity);

// замыкание

/* const myFunc = () => {
    const myVar = 5; // эта переменная замкнута, она ограничена областью видимости, к ней имеет доступ только вложенная ф-я

    return(param) => {
        console.log(myVar + param);
    };
 };

 myFunc()(2123); // сначала вызвали первую ф-ю, а потом вторую (без имени, она колбэк)
 */
// каррирование - позволяет разгрузить верстку, поэтому иногда используется
 
/*  const myFunc = (a) => {
     return (b) => {
         return (c) => {
             return a + b + c;
         };
     };
 };
 console.log(myFunc(2)(3)(10)); */

 // по сути, это можно было записать вот так
/* const myFunc = (a, b, c) => {
  return a + b + c;
};
console.log(myFunc(2, 3, 10)); */

// task 2 from presentation
/*  const myFunc = () => {
    const myVar = 10;

    return(param1, param2) => {
        console.log(myVar * param1 * param2);
    };
 };

 myFunc()(3, 4); */

/*  const myFunc = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c;
        };
    };
};
console.log(myFunc(2)(3)(4)); */

// about THIS from LearnJS

/* let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  console.log("Hello!");
};
user.sayHi(); */
/* 
let user = {
  name: "John",
  age: 30,

  sayHi() {
    console.log(this.name); // this - это "текущий объект", объект перед точкой
  },
};

user.sayHi(); */

/* let user = {name: "John"};
let admin = {name: "Admin"};

function sayHi() {
  console.log(this.name);
}
user.f = sayHi; // let's use one function in both objects
admin.f = sayHi;

user.f(); // John (this == user)
admin.f(); // Admin (this == admin)
admin['f'](); // Admin
 */

/* let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName); // arrow functions don't have their own "this", they get it from outside context
    arrow();
  }
};

user.sayHi(); */

// tasks
// 3. 
/* 
function makeUser() {
  return {
    name:"John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();
console.log(user.ref().name); */

// Привязка контекста к функции из Learn JS

/* let user = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Привет, undefined! потому что setTimeout получил функцию sayHi отдельно от объекта user
 */

/* let user = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  }
};

setTimeout(function() {
  user.sayHi(); // Привет, Вася!
}, 1000); // все корректно, потому что user достается из замыкания, а потом вызывается его метод sayHi */

// видео Владилена Минина "Как работает call, bind, apply"

function hello() {
  console.log("Hello", this)
}
hello();

const person = {
  name: "Ksusha",
  age: 34,
  sayHello: hello,
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }

}
const pten = {
  name: "Gordon",
  age: 0.5
}

// const fnPtenInfoLog = person.logInfo.bind(pten, "ptenez", "8-920-333-44-55")() // метод bind 
// person.logInfo.call(pten, "ptenez", "8-920-333-44-55") // метод call вызывает функцию сразу
person.logInfo.apply(pten, ["ptenez", "8-920-333-44-55"]) // у метода apply  второй параметр всегда массив, он также сразу вызывает функцию, отличается только способом передачи параметров

// ================ комбинирование контекста и прототипов
const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(function(i) {
//     return i * n
//   })
// }
Array.prototype.multBy = function(n) {
  return this.map(function(i) {
    return i * n
  })
}
console.log(array.multBy(2));

// console.log(multBy(array, 15))