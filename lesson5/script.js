
// объекты 

/* const goToThePlace = (place) => {
    console.log(`Иду в ${place}!`);
};
const user = {
    name: "Ivan",
    age: 18,
    goToUniversity: () => goToThePlace("универ"), // колбэк функция
};
user.goToUniversity(); */
/* 
const user = {
    name: "Ivan",
    age: 18,
};

user.name = "Petya" // объект можно переименовать

delete user.age // можно удалить возраст
console.log(user); */

/* const myFavoriteFIlm = {
    name: "Four weddings and a funeral",
    yearOfProduction: 1994,
    filmDirector: "Michael Newell",
    countryOfOrigin: "Great Britain",
    rentalsProceeds: "245 000 000 dollars",
}

console.log(myFavoriteFIlm);

myFavoriteFIlm.showName = () => console.log(myFavoriteFIlm.name);
delete myFavoriteFIlm.yearOfProduction; // разобрать после урока!!!
 */

/* const myNumber = 10.12131313
console.log(Object.getPrototypeOf(myNumber));
console.log(myNumber.toFixed(1)); */

/* const myNumber = 2.3e4;
console.log(myNumber); */

// parseInt - для целых чисел
// parseFloat - для дробных чисел

// console.log(parseInt("123", 16));

// const myNumber = 123.3;
/* // if (typeof myNumber === "number") console.log("Число");
if (isNaN(myNumber)) console.log("Число"); //разобрать после */

// console.log(isFinite(2 / 0));

/* console.log(Math.ceil(myNumber)); // потолок - округление в большую сторону
console.log(Math.floor(myNumber)); // пол - округление в меньшую сторону
console.log(Math.random()); // выдает рандомное число
 */
/* const myArray = [1, 4, 10, 20, 14, 15];

console.log(Math.max(...myArray)); // ...myArray - то же самое, что 1, 4, 10, 20, 14, 15 и так далее
console.log(Math.min(...myArray)); */

/* const myString = "widget with id" //начинает искать с буквы d

console.log(myString.indexOf("id", 2)); */

/* const myString = "with id";

const idIndex = myString.indexOf("id");
const newString = myString.slice(idIndex); */

//1. 
/*     const myFunk = (min, max) => { //минимум включается, максимум не включается
    const result = Math.random() * (max - min) + min; //  Math.random() выдает случайное число от нуля до единицы, а потом мы его просто масштабируем
    return result.toFixed(2); // округляем результат
}
console.log(myFunk(1, 2));  */

//2. 
/* const myStr = 'стРока';
const isCharBig= (str, pos) => {
    if (!str[pos]) {
        return "Ошибка";
    }
    if (str[pos] === str[pos].toUpperCase()) {
        return "Заглавная";
    }
    return "Не заглавная"; 
}; 
console.log(isCharBig(myStr, 4)); */

//3.
/* const myConst = 'njlkjljl word jjljljl jkj guu word asdajk'
const replaceFunc = (str, findValue, replaceValue) => {
    return str.replaceAll(findValue, replaceValue);
};

console.log(replaceFunc(myConst, "word", "WORD")); */

// домашний разбор презентации

/* const myFavoriteFIlm = {
    name: "Four weddings and a funeral",
    filmDirector: "Michael Newell",
    countryOfOrigin: "Great Britain",
    yearOfProduction: 1994,
}

myFavoriteFIlm.rentalsProceeds = "245 000 000 dollars";
delete myFavoriteFIlm.yearOfProduction;
console.log(myFavoriteFIlm);
    function sayName() {
    console.log(myFavoriteFIlm.name)
}

sayName(); */
/* 
let str = "Hello Pten";
console.log(str.toUpperCase());

let number = 1.23456;
console.log(number.toFixed(1)); */


// console.log(isNaN("jhjkjhk"));
// console.log(isFinite("46"));

// let num = 78687;
// console.log(num.toString());

// console.log(Math.min(3, 5, -2, 154));

/* let pten = " Pten ";
console.log('Pten'.length);
console.log('Pten'[2]);
console.log('Pten'.toUpperCase());
console.log(pten);
console.log('Pten'.toLowerCase());
console.log('Pten'.trim()); */

// console.log('Pten'.codePointAt(3));

// let str = 'Pten is really handsome man';
// console.log(str.indexOf('al', 1));

// console.log('Utenok tonkii'.includes('nok'));

/* let str = 'basketball';
console.log(str.slice(0, 4));
console.log(str.substr(0, 5));
console.log(str.slice(0, 7)); */

/* console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(25)); */

// задачи из учебника
// 1.
/* let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name

console.log(user); */

// 2.
/* const obj = {}

function isEmty(obj) {
    for (let key in obj) { // если у объекта есть какие-либо свойства, то false
        return false;
    }
    return true;
}
console.log(isEmty(obj)); */


// 3.
// да
/* const user = {
    name: "John"
};
user.name = "Pete";

console.log(user.name) */

// 4. 
/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum); */

// 5.
/* let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof(obj[key]) === "number") {
                obj[key] = obj[key] * 2;
            }
        }
    }  

  multiplyNumeric(menu);
  console.log(menu); */

/* 
function makeUser(name, age) {
    return {
        name: name,
        age: age
    };
}
let user = makeUser("John", 30);
console.log(user.age); */

/* let obj = {
    0: "Test"
};
console.log(obj[0]); */

/* let obj = {
    test: undefined
};
console.log("test" in obj); // свойство существует, хотя оно и undefined
 */

/* let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
for (let key in user) {
    console.log(key);
    console.log(user[key]);
}; */
/* 
let str = "Hi";
str.test = 5;
console.log(str.test); */

/* 
let spring = {};

spring.weather = "warm";
spring["bestFlowers"] = "daffodils";

for (let property in spring) {
    console.log(property + " " + spring[property]);
} */

/* let num = 12.555555;
console.log(Math.round(num)); */

/* let bil = 1.5e8; 
console.log(bil) */

// ***

// 1. 
/* let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b ); */

// 2. 
// console.log( Math.round(6.35 * 10) / 10);

// 3.
/* function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`); */

// 4.
/* let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) console.log(i);
}  */
// происходит потеря точности при работе с десятичными дробями

// 5. 
/* function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  console.log( random(2, 8) ); */

// 6. разобрать с Димой

/* let str = 'Ослик Иа-Иа посмотрел на виадук';

let target = 'Иа'; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Найдено тут: ${foundPos}` );
  pos = foundPos + 1; // продолжаем со следующей позиции
} */

/* let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
console.log( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
console.log( str.slice(0, 1) ); */

// 1. 
/* function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("gordon")); */

// 2.
/* function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    if (lowerStr.includes ('viagra' || 'XXX')) {
        return "Это спам"
    } 
}
console.log(checkSpam('VIAGRA')) */

// 3.
/* function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

console.log(truncate("This is quitу a long string", 10)); */

// 4.
/* function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue("$67678688")); */

// home tasks
// 1.
/* function stringToArray(str) {
    let arr = new Array();
    let startPos = 0;
    let endPos = 0;
    while (endPos != -1) {
        endPos = str.indexOf(" ", startPos);
        if (endPos != -1) {
            arr.push(str.slice(startPos, endPos));
            startPos = endPos + 1;
        } else if (str.length > 0 ) {
            arr.push(str.slice(startPos, str.length));
        }
    }
    return arr;
} */
// console.log(stringToArray("The duck has eaten fish"));
// console.log("The duck has eaten fish".split(" "));

// 2. 
/* function deleteCharacters(str, length) {
    let newStr = str.substr(0, length);
    return newStr;
}
console.log(deleteCharacters("антилопа", 3)); */

// 3.
/* function insertDash(str) {
    let wordsArr = str.split(" ");
    let newString ="";
    wordsArr.forEach(el => newString += el + "-");
    newString.toUpperCase();
    return newString.substring(0, newString.length -1);
}
console.log(insertDash("The duck has eaten fish")) */
// variant 
//const myString = "I am here";
//const insertDash = (str) => str.toUpperCase().split(" ").join("-");

// 4.
/* function changeRegister(str) {
    let str1 = str[0].toUpperCase() +  str.slice(1 , str.length);
    return str1;
}

console.log(changeRegister("utka")); */

// 5.
/* function capitalize(str) {
    let wordsArr = str.split(" ");
    let newString = "";
    wordsArr.forEach(el => newString +=(el[0].toUpperCase() + el.slice(1) + " "));

    return newString.trim();
}
console.log(capitalize("The duck has eaten fish"))
 */

// .map метод Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

// 6.
/* function changeRegister(str) {
    let newString = "";
    for (let i =0; i < str.length; i ++) {
        if (str[i].toUpperCase() === str[i]) {
            newString += str[i].toLowerCase();
        } else {
            newString += str[i].toUpperCase();
        }
    }
    return newString;
}
console.log(changeRegister("ThE dUcK hAs EaTeN fIsH"));
 */

// 7.
/* function removeChar(str) {
    let charsAndNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let newString = "";
    for (let i=0; i< str.length; i++) {
        if (str[i] === " ") {
            newString += str[i];
        } else if (charsAndNumbers.includes(str[i].toUpperCase())) {
            newString += str[i];
        }
    }
    return newString;
}

console.log(removeChar("Some Words and num 12341 and here ¼ was element")); */

// 8.
/* function zeros(num, len) {
// 12, 3
// 120
    let newString = "";
    if (num > 0) {
        newString += "+";
    } else {
        newString += "-";
        num = num.toString().slice(1);
    }
    if (num.toString().length < len) {
        
        newString += num.toString();
        for (let i=0; i < len - num.toString().length; i++) {
            newString += "0";
        }
    }
    return newString;
}

console.log(zeros(-12,3)); */

// 9.
/* function comparison(str1, str2) {
    let newStr1 = str1.toUpperCase();
    let newStr2 = str2.toUpperCase();
        if (newStr1 === newStr2) {
            return "Strings are equal!"
        } else if (newStr1 > newStr2)  {
            return "String 1 is bigger than string 2!"
        } else if (newStr1 < newStr2) {
            return "String 1 is less than string 2!"
        }
}
console.log(comparison("Koshka", "koshka")); */

/* // 10.
function insensitiveSearch(str1, str2) {

}

// 11.
function initCap(str) {

}

// 12.
function capitalizeinitSnake(str) {

}

// 13.
function repeatStr(str, n) {

}

// 14.
function path(pathname) {

}

// 15.


// 16. 
function getSubstr(str, char, pos) {

}

// 17.
function insert(str, substr, pos) {

}

// 18.
function limitStr(str, n, symb) {

}

// 19.
function count(str, n, stringsearch) {

}

// 20.
function strip(str) {

}

// 21.
function cuttString(str, n) {

} */

// 22.
/* function findWord(word, str) {
    let newWord = word.toUpperCase();
    let newStr = str.toUpperCase();
    if (newStr.includes(newWord)) {
        return "Содержится!";
    } else {
        return "Не содержится..."
    }
}
console.log(findWord("Duck", "Duck Face Is Not Trendy Now"));
 */



/* let str = "Unkomensch";
console.log(str[str.length - 1]); */

/* for (let char of 'Ptitca') {
    console.log(char);
} */

/* let str = "utka";

str = "chr" + str;
console.log(str); */

/* let str = "Widget with id";

if (str.indexOf("Widget") != -1) {
    console.log("Совпадение есть");
} */

/* function lastIndexof(str, target) {
    for (let i=str.length; i > -1; i--) {
        if (str[i] === target) {
            return i;
        }
    }
    return -1;
} */

// home tasks from Pavel
// 1. 
