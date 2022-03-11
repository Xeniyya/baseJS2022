/* /* // Примитивные типы данных //

// Number //

console.log(6/2);
console.log("utka");
console.log(1/0);
console.log(6*2);
console.log(typeof NaN);
console.log(1/0);
// Оператор typeof показывает тип данных, указанный после typeof //

// String //
const myString = "строка"
console.log(myString);

const anotherString = 'текст: "текст" текст';
console.log(anotherString);

const templateString = `шаблонная строка ${anotherString}`;
console.log(templateString);

// Boolean //
const isAdmin = true;
const isUser = false;

// Null
const emptyVariable = null;

// undefined
const userName;
console.log(userName);

// Непримитивные типы данных
// Objects - объекты */

/* const user = {
    name: 'Vasya',
    lastName: 'Ivanov',
    age: 23,
    citizenship: 'Russia' */
  /*   newObject: {
        newProperty: "property",
    } */
/* };
const abrahadabra = "duck";

console.log(abrahadabra); */

// Оператор typeof
// console.log(typeof null);

// Преобразование типов данных
// Строковое преобразование */
/* 
const myVar = true;
const myVarString = String(myVar);
console.log(typeof myVarString); */

/* const myVar = "123"
console.log(myVar); */

// Логическое преобразование

/* const myVar = "0";

console.log(myVar); */

// Биинарный плюс  
/* const myNumber = 1;
const newNumber = 2;
const myString = "Строка";

console.log(myNumber + myString);
console.log(myNumber + newNumber);
 */

// Сравнение строк
/* 
const userTypes = {
    admin: "admin",
    user: "user",
    teacher: "teacher",
    contentManager: "contentManager",
};
const serverDataUserType = "user";

if (serverDataUserType !== userTypes.admin) {
    console.log("показать ограниченный контент");
} else {
    console.log("показать весь контент");
} */

const myNumber = 1;
const myString = "1";

console.log(myNumber === myString);
