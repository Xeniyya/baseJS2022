// function declaration - объявление функции
//function expression - функциональное выражение
//arrow function - стрелочная функция

/* function showMessage () {
    console.log ("hello")
}

showMessage(); */
/* 
let user;

function greetUser(name = "гость") {
    console.log(`Привет, ${name}`);
}

greetUser(user); 

const user = {
    name: "Vasia",
    age: 45,
};
*/
//function declaration - когда скрпит загружается, сначала инициализируются все функции, потом все переменные.
// Функции могут лежать даже в конце файла, а вызываться там, где нужно. Могут лежать в отдельном файле.

/* function checkAccess(age) {
    if (age < 18) {
        showDeniedMsg();
    } else {
        showAllowedMsg();
    }
}
                      
function showAllowedMsg() {
    console.log("Доступ разрешен");
}

function showDeniedMsg() {
    console.log("Вали отсюда, малолетка");
}

checkAccess(user.age); */

//function expression - функции лежат в переменных, функция вызывется в тот момент, когда инициализируется переменная

/* function checkAccess(age) {
    if (age < 18) {
        showDeniedMsg();
    } else {
        showAllowedMsg();
    }
}

const showAllowedMsg = function() {
    console.log("Доступ разрешен");
}

const showDeniedMsg = function() {
    console.log("Доступ запрещен");
}

checkAccess(user.age);
 */
// если бы функции в виде expression были после вызова функции, он бы не смог их выполнить, т.к. они не были бы инициализированы

/* function calcValue(a, b) {
    const result = a + b; // следует писать то, что надо вернуть, в одной строке!
    // на моменте ретёрна функция выполнена, если что-то написано дальше, оно не выполнится
    return result;
}
const result = calcValue(3, 5);

console.log(result); */

/* const user = {
    name: "Vasia"
};

const greetMsg = "Привет";

function getName(user) {
    return user.name || "гость";
}

function sayHi(text, name = getName()) {
    console.log(`${text}, ${name}!`);
} 
sayHi(greetMsg, getName(user));
 */
// функция, используемая внутри функции - callback. Она зависит от внешних функций

/* const name = "Vasia";
function showMsg() {
    console.log(name);
} */

// showMsg();
// не надо работать с внешними переменными, лучше объявлять их внутри функции из=за области видимости

// task 1

/* const user = {
    name: "Петя"
};
const greetMsg = "Здравствуй"

function getName(user) {
    return user.name || "гость";
}

function sayHi(text, name = getName()) {
    console.log(`${text} ${name}!`);
} 
sayHi(greetMsg, getName(user)); */

// task 2 с проверкой на дурака

/* const calcPower = function (num, power = 1) {
    if (typeof num !== "number") {
        const errorMsg = "Некорректные аргументы";
        return errorMsg;
    } 
        return num ** power;
    }
    const result = calcPower ("2", 3);
    
    console.log(result);
 */
// task 3 разобрать дома!

/* const myArray = [1, 14, 15];

const calcAverageValue = function (arr) {   
    if (!arr.length) {
        return "Пустой массив";
    }
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length; 
};

console.log(calcAverageValue(myArray)); */

// Arrow function - аналог function expression, инициадизируется, когда скрипт доходит до этой переменной

// const calcValue = (a, b) => a + b;
// то же самое, что:

/* const calcValue = (a, b) => {
    const result = a + b;
    return result;
}
const result = calcValue (3, 5); 
console.log(result); */

// задачи
//1.
/* 
const msgsAmount = 5;
const message = "Сообщение"

const showMessage = (msg, count) => {
    for (let i = 1; i <= 5; i++) {
        console.log(`${msg} ${i}`);
    }
}

showMessage(message,msgsAmount); // message попадает в msg, msgsAmount попадает в count
 */
//2.

/* const myChar = 12;

const isMyCharVowel = (char) => {
  const vowels = "ауоыэяюёие";
  if (typeof char !== "string") {
    return `Passed argument is not a string but typeof: ${typeof char}`;
  }
  if (char.length > 1) {
    return "Passed argument's length is longer than a single char";
  }
  if (vowels.includes(char)) {
    return "Гласная";
  }
  return "Не гласная";
}; */

// console.log(isMyCharVowel(myChar)); // вызвали функцию isMyCharVowel, в качестве аргумента ей присвоили myChar
// Почему, если в myChar сохраняем 2 гласные, к-е идут друг за другом в const vowels = "ауоыэяюёие", выдает также, что это гласная, а если не друг за другом, то не гласная

// learn JS про функции

/* function showMessage() {
    let message = "Привет всем птицам!";
    console.log(message);
}
showMessage();
console.log(message); //переменная видна только внутри функции
 */

/* let userName = "Вася";

function showMessage() {
    let message = "Привет, " + userName + "!";
    console.log(message);
}
showMessage(); //функция имеет доступ к внешним переменным */

/* et userName = "Вася";

function showMessage() {
    userName = "Петя";

    let message = "Привет, " + userName;
    console.log(message);
}

console.log(userName); // Вася, т.к. функция еще не вызвана
showMessage(); // Привет, Петя
console.log(userName); // Петя, т.к. функция уже вызвана, а значение переменной в функции было изменено */

/* let userName = "Вася";

function showMessage() {
    let userName = "Петя";
    let message = "Привет, " + userName; // Петя
    console.log(message);
}
showMessage(); // функция использует локальную переменную, поэтому Петя
console.log(userName); // Вася, т.к. внешняя переменная не менялась */

/* function showMessage(from, text) { // аргументы from, text
    console.log(from + ": " + text);
}

showMessage("Gordon", "Hi, people!") */

/* function showMessage(from, text) {
    from = "Прекрасный " + from + " птен"; // значение from изменилось, но это видно только внутри функции 
    console.log(from + ": " + text);
}
let from = "Гордон";
showMessage(from, "Привет!"); 
console.log(from); */

/* function sum(a, b) {
    return a + b;
}

let result = sum(1, 2); //значение присваивается переменной result
console.log(result)  */

/* function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("А родители разрешили?")
    }
}

let age = prompt("Сколько вам лет?", 18);

if (checkAge(age)) {
    console.log("Доступ получен");
} else {
    console.log("Доступ закрыт");
} */

// разобрать эти 2 задачи с Димой
/* 
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i); 
    }
}
showPrimes(6) */
/* 
function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      console.log(i);  // простое
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }
  showPrimes(7)
 */
/* 
  function checkAge(age) {
      return (age > 18) ? true : false;
  }

  console.log(checkAge(74)); */

/* console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

function min(a, b) {
    if (a < b) {
        return a;
    } return b
}
 */
/* 
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

function min(a, b) {
    return (a < b) ? a : b;
} */

/*  function pow(x, n) {
        return x ** n
    }

    console.log(pow(2, 3));
 */

/*    function ask(question, yes, no) {
        if (confirm(question)) yes()
        else no();
    }

    ask(
        "Вы согласны?",
        function() {console.log("Вы согласились");},
        function() {console.log("Вы отменили выполнение");}
    ) */

// дз
// 1.
/*   function pow(x) {
        if (typeof x !== "number") {
            return `Passed argument is not a number but typeof: ${typeof x}`;
          }
        return x ** 2;
    }
    console.log(pow(4)); */

//2.
/* function sum(x, y) {
  if (typeof x !== "number" && typeof y !== "number") {
    return `Passed arguments are not numbers but typeof: ${typeof x} and ${typeof y}`;
  } else if (typeof x !== "number") {
    return (`Passed argument is not a number but typeof: ${typeof x}`)
  } else if (typeof y !== "number") {
    return `Passed argument is not a number but typeof: ${typeof y}`
  }
      return x + y;
}
console.log(sum("utca", true)); */

//3.
/* function deductionSegmentation(x, y, z) {
    if (typeof x !== "number") {
        return (`Passed argument is not a number but typeof: ${typeof x}`)
      } else if (typeof y !== "number") {
        return `Passed argument is not a number but typeof: ${typeof y}`
      } else if (typeof z !== "number") {
        return `Passed argument is not a number but typeof: ${typeof z}`
      } 
          return (x - y) / z;
}
console.log(deductionSegmentation(15, 5, 2)); */

//4.
/* function weekDays(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";
    default:
      return "Нет таких значений";
  }
}
console.log(weekDays(5)); */

//5.
/* function equalNumbers(x, y) {
    return (x === y) ? true : false;
}
console.log(equalNumbers(2, 4)); */

//6.
/* function isMoreTen(x, y) {
    if ((typeof x !== "number") || (typeof y !== "number")) {
        return `The type of one or both arguments are not number but ${typeof x} and ${typeof y}`
    }

    return ((x + y) > 10) ? true : false;
}
console.log(isMoreTen(6, 5)); */

//7.
/* function isLessZero(isMinus) {
    return isMinus < 0 ? true : false;
}
console.log(isLessZero(5)); */

//8.
/*  function isNumberInRange(x) {
    return (x > 0) && (x < 10) ? true : false;
}
console.log(isNumberInRange(10));

//9.
//const myArray = [4, 0 -1, 5, 12] // создали один массив

function valuesInRange(arrParam) { // объявили функцию для отбора чисел в новый массив, которая принимает в качестве параметра массив, который в него передали (в нашем случае в строке 447)
    let newArray = new Array(); // создали новый массив, чтобы в него записывать числа, которые мы отберем из массива, который был передан в качестве параметра. Объявили, что он (новый) массив (а не что-то другое).
    for (let i = 0; i < arrParam.length; i++) { // создали цикл для проверки каждого элемента массива
        if (isNumberInRange(arrParam[i])) { // если результат функции isNumberInRange true, 
            newArray.push(arrParam[i]) // то добавляем этот элемент в новый массив
        }
    }

    return newArray; // вернуть новый массив
}

console.log(valuesInRange([4, 0 -1, 5, 12])); // вывести в консоль новый массив */

//10.
/* function getDigitsSum(num) {
  let str = String(num);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
} 
console.log(getDigitsSum(32)); */

//11.
/* function yearOfsumOfIsThirhteen(year) { // объявили ф-ю, кот-я принимает в качестве параметра год
    for (let j = 1; j <= year; j++) { // создали цикл, который перебирает все года от 1 до того, что задан в качестве параметра
        if (getDigitsSum(j) === 13) { // воспользуемся ф-й getDigitsSum и сравним результат ее выполнения с 13
            console.log(j); // напечатаем j - все года, сумма цифр которых равна 13
        }
    }
}

yearOfsumOfIsThirhteen(2020); */

//12.
/* function isEven(num) {
  return num % 2 === 0 ? true : false;
}
console.log(isEven(4)); */

// or

/* let isEven = (num) => (num % 2 === 0) ? true : false;
console.log(isEven(4)); */

//13.
/* let numbersArray = [1, 2, 5, 8];
let novyArray = new Array();
for (let arrayElement = 0; arrayElement < numbersArray.length; arrayElement++) {
    if (isEven(numbersArray[arrayElement])) {
        novyArray.push(numbersArray[arrayElement]);
    }
}
console.log(novyArray); */

//14.
/* function getDivisors(num) {
    let novyArray = new Array();
    for (let divider = 1; divider <= num; divider++) {
        if (num % divider === 0) {
            novyArray.push(divider);
        }
    }
     return novyArray;
}
console.log(getDivisors(9));
 */
//15.

/* let lastResult;
testRecursion(269949);
console.log(lastResult);

function testRecursion(num) { // функция принимает любое число
    const digitsSum = getDigitsSum(num); // считаем с помощью вышенаписанной функции сумму цифр этого числа и присваиваем ее переменной digitsSum
    if (digitsSum > 9) { // проверяем, что сумма цифр больше 9
        testRecursion(digitsSum); // и если больше, то ф-я вызывает саму себя рекурсивно
    } else { // иначе сохраняем последний результат 
        lastResult = digitsSum; // это будет выполнено, когда дойдет до последнего вычисления digitsSum > 9 => false
    }
} */

//16. разобрать
/* let func = (word) => {
    for (let i=0; i < word.length; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(func("казак")); */