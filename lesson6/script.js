// Массив - объект, представленный в другом виде

/* const myArr = [1, () => console.log("123"), "string"];
console.log(myArr);
console.log(typeof myArr);
console.log(Array.isArray[myArr]); */

/* const myArr = [
    [1, 2], //индекс 0
    [3, 4], //индекс 1
    [5, 6], //индекс 2
];
console.log(myArr[0][1]); */

/* const myArr = ["один", "два", "три", "четыре", "пять"];
myArr.push("шесть", "семь");
myArr.unshift("ноль");
myArr.shift(); // удаляет первый элемент
myArr.pop(); // удаляет последний элемент

console.log(myArr); */

// Полезные методы массива
// find
/* 
const myArr = ['один', 'два', 'три', 'четыре'];
// const foundItem = myArr.find((elem) => elem === "два");

let foundItem = "";
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] === "два") foundItem = myArr[i];
}
console.log(foundItem); */

/* const users = [
    {id: 1, name: "Vasia", isAdmin: false},
    {id: 2, name: "Petia", isAdmin: false},
    {id: 3, name: "Kolia", isAdmin: false},
    {id: 4, name: "Vania", isAdmin: true},
    {id: 5, name: "Sania", isAdmin: false},
]; */

// const foundUser = users.find((user) => user.id === 1);
// const notAdminUsers = users.filter((user) => !user.isAdmin);
// map
/* const modifiedUsers = users.map((user) => {
    return {ID: users.id, userName: user.name};
});
console.log(modifiedUsers); */

//let flowers = ["daffodil", "tulipe", "jasmine"];

// console.log(flowers.pop()); // удаляет последний элемент из массива и возвращает его
// console.log(flowers);

//flowers.push("muscari"); // добавляем элемент в конец массива
// console.log(flowers[flowers.length] = "muscari"); // то же самое, что и предыдущая строка, "добавить в конец мускари"
// console.log(flowers);

// console.log(flowers.shift()); // удаляет первый элемент массива и возвращает его
// console.log(flowers);

//flowers.unshift("primula", "lilly-of-the-valley"); // добавляет элемент в начало массива и возвращает новую длину массива
//console.log(flowers);

/* let birds = ["parrot", "robin"]
let arr = birds;
console.log(birds === arr);
arr.push("pigeon");
console.log(birds); */

/* for (let i = 0; i < flowers.length; i++) {
    console.log(flowers[i]);
} */

/* for (let flower of flowers) {
    console.log(flower);
} //цикл for... of также выдает все элементы массива по порядку
 */

/* for (let flower in flowers) {
    console.log(flowers[flower]);
} //цикл for... in также выдает все элементы массива по порядку, но использовать его не рекомендуется
 */

/* let arr = [1, 2, 3, 4, 5];

arr.length = 2;
console.log(arr);

arr.length = 5; // если длину массива уменьшить, а потом увеличить, удаленные значения не восстановятся   джж\
console.log(arr);
console.log(arr[3]); */
/* 
let arr = new Array(2); //так создается массив без элементов, но с заданной длиной
console.log(arr[0]);
console.log(arr.length);
 */

/* let massive = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
];
console.log(massive[1][0]); // многомерные массивы */
/* 
let mass = [1, 2, 3, 4, 5];
console.log(mass);
console.log(String(mass)); // возвращает массив, превращенный в стринг */

/* console.log( [] + 1 ); // "1"
console.log( [1] + 1 ); // "11"
console.log( [1,2] + 1 ); // "1,21" */

// tasks from book
//1. 
/* let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;

shoppingCart.push("Банан");

console.log( fruits.length ); */

//2. 
/* let styles = ["jazz", "blues"];
styles.push("rock-n-roll");
styles[1] = "classical music";
console.log(styles.shift());

styles.unshift("rap", "raggey");
console.log(styles); */

// ***

// let arr = ["green", "pink", "yellow", "blue"];

// console.log(arr.indexOf("yellow", 1)); // возвращает индекс элемента, если он найдет, иначе -1
// console.log(arr.includes("red", 1)); // возвращает true или false

// let findElem = arr.find((color) => color === "red"); // возвращает значение первого найденного в массиве элемента, удовлетворящего условию, либо "undefined"
// console.log(findElem);

// let filterArr = arr.filter((color) => color.length === 4); // создает новый массив из значений, удовлетворяющих условию, заданному в функции
// console.log(filterArr);

// let mapArr = arr.map((color) => "I like " + color + " color!"); // создает новый массив с результатом вызова переданной функции к каждому элементу
// console.log(mapArr);

// arr.forEach((color) => console.log(color[0].toUpperCase() + color.slice(1))); // применяет переданную функцию к каждому элементу 1 раз

// let result = arr.reduce((accum, current) => accum + " " + current); // применяет переданную функцию к каждлму элементу массива и возвращает результирующее значение
// console.log(result);

// home work

// 1. 
/* let myArr = [2, -3, -9, 7, 6, 8, 5, -4];
let getPositiveEvenNumbers = () => myArr.filter((num) => num > 0 && num % 2 === 0);
let getSum = () => getPositiveEvenNumbers().reduce((accum, current) => accum + current);

console.log(getSum()); */

// 2. 
/* let myArr = [3, 8, 9, 10, 1, 2, 2, 3, 5, 5];
let getUniqueNum = (arr) => arr.filter((element, index, selfArray) => selfArray.indexOf(element) === index);
console.log(getUniqueNum(myArr)); */

// 3. 

/* let areEqual = (arr, arr2) => {
    if (arr.length !== arr2.length) {
        return false;
    } 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr2[i]) {
            continue;
        } 
        return false;
    }
    return true;
};

let myArr = [1, 2, 3];
let myArr1 = [1, 3, 2];
let myArr2 = [3, 5, 8];
let myArr3 = [3, 5, 8];


console.log(areEqual(myArr2, myArr3)); */

// 4. 
/* const countArgSum = (...args) => {
    let result = 0;
    for (let arg of args) {
        if (arg)
    }
} не до конца!!!!!
 */

// 5.
/* const myArr1 = [1, 2, 3, 4, 5];
const myArr2 = [6, 1, 8, 9, 4];

const getCommonElements = (arr1, arr2) => {const newArr = [];

arr2.forEach(
    (elem) => arr1.includes(elem) && !newArr.includes
    (elem) && newArr.push(elem)
    );
    return newArr;
};

console.log(getCommonElements(myArr1, myArr2)); */

// 6.



// ***
/* let firstObj = {a: "Hi"};
let secondObj = firstObj;
firstObj.a = "Hello";
console.log(firstObj, secondObj); // объекты копируются по ссылке, изменяя один, будет изменяться и другой
 */

/* let firstObj = {a: "Hi"};
let secondObj = {b: "Hello"};
let thirdObj = {c: "Good day"};

let fourthObj = Object.assign({d: "Salut"}, firstObj, secondObj, thirdObj); // оператор assign копирует свойства всех исходных объектов, начиная со второго, в первый объект
console.log(firstObj, secondObj, thirdObj, fourthObj);
console.log(fourthObj); */
/* 
let arr = [1, 2, 3];
let newArr = [... arr, 4, 5, 6];
console.log(newArr); */

/* let obj = {a: "Hello"};
let newObj = {... obj}; // оператор расширения spread позволяет расширить доступные для итерации элементы
newObj.b = "Hi";
console.log(obj, newObj); */

/* let example = (a, b,... args) => {
    console.log(a)
    console.log(b)
    console.log(args) // оператор rest группирует неограниченное количество остаточных парамтров функции в массив 
}
example(1,2,3,4,5,6); */

/* let arr = [1, 2];
for (let variable of arr) { // for (... of ...) используется для перебора значений массива
    console.log(variable * 10);
} */

/* let obj = {a:1, b:2};
for (let variable in obj) {
    console.log(obj[variable]*10); // for (... in ...) используется для перебора значений объекта
} */

// tasks from video
// 1
/* const people = [
    {name: "Владилен", age: 25, budget: 40000},
    {name: "Елена", age: 17, budget: 3400},
    {name: "Игорь", age: 49, budget: 50000},
    {name: "Михаил", age: 15, budget: 5000},
    {name: "Василиса", age: 24, budget: 25000},
    {name: "Виктория", age: 38, budget: 2300}
] */

/* for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
} 

for (let person of people) {
    console.log(person)
}*/
 
// forEach
/* people.forEach(function(person, index, pArr) {
    console.log(person);
    console.log(index);
    console.log(pArr);
}) */

// people.forEach(person => console.log(person))

// Map
// const newPeople = people.map(person => `${person.name} (${person.age})`)
// console.log(newPeople)

// Filter

/* const adults = []
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
        adults.push(people[i])
    }
}
console.log(adults) */

/* const adults = people.filter(person => person.age >= 18);
console.log(adults) */

// Reduce
/* let amount = 0
for (let i = 0; i < people.length; i++) {
    amount += people[i].budget
} */

/* const amount = people.reduce((total, person) => {
    return total + person.budget
}, 0)
console.log(amount) */

// Find
/* const igor = people.find(person => person.name === "Игорь")
console.log(igor) */

// FindIndex
/* const igorIndex = people.findIndex(person => person.name === "Игорь")
console.log(igorIndex) */

// =====
/* const amount = people
.filter(person => person.budget > 3000)
.map(person => {
    return {
        info: `${person.name} (${person.age})`,
        budget: person.budget
    }
})
.reduce((total, person) => total + person.budget, 0)
console.log(amount) */

// остаточные параметры и опреатор расширения
// остаточные параметры (...)

/* function showName(firstName, lastName, ...features) { // все, что после ..., пойдет в массив
    console.log(firstName + " " + lastName); 

    console.log(features[0]);
    console.log(features[1]);
    console.log(features[2]);
}
showName("Гордон", "Птен", "желтый", "пернатый", "очень милый");
 */

// оператор расширения

/* let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2)); // оператора расширения "расширяет" перебираемый объект arr в список аргументов
 */

/* let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2]; // оператора расширения можно также использовать для слияния массивов
console.log(merged); */

/* let str = "Hello!";
console.log([...str]);  // подойдет для того, чтобы превратить строку в массив символов
 */

/* let str = "Hello!";
console.log(Array.from(str)); // для этой же цели подойдет и Array.from (более универсальный метод)
 */


// home work
// 1.
/* const flowers = ["daffodil", "lilac", "tulipe"];
console.log(flowers.map((flower) => flower.length));
 */

// 2.
/* const evenMass = [2, 3, 5, 7, 11, 13, 17, 19];
let newArr = new Array();
evenMass.forEach((element, index) => {
    newArr.push(evenMass.filter((el) => evenMass.indexOf(el) <= index).reduce((sum, cur) => sum + cur));
});
console.log(newArr); */

/* let newArr = new Array();
for (let i= 0; i < evenMass.length; i++) {
    let sum = 0;
    for (let j = 0; j <= i; j++) {
        sum += evenMass[j];
    }
    newArr.push(sum);
} */

// 3. 
/* let mass = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let newMass = new Array();
for (let i = 0; i < mass.length; i++) {
    for (let j = 0; j < mass.length; j++)
    if (mass[i] + mass[j] === 7) {
        newMass.push(`${mass[i]}:${mass[j]}`);
    }
}
console.log(newMass); */

// 4.
/* let str = "The spring is coming";
let mass = str.split(" ");
let result = mass.reduce((accum, elem) => accum + elem[0], "");
console.log(result); */

// 5.
/* let str = "The beautiful bird";
let mass = new Array();
for (let i = 1; i < str.length - 1; i++) {
    mass.push(`${str[i - 1]}${str[i]}${str[i + 1]}`)
}
console.log(mass);
 */
// 6.

/* const numberArray = [4, 8, 9, 6, 3, 7];
console.log(numberArray.sort((a, b) => a - b));
 */

// 7.
/* const arr1 = [8, 6, -3, 5, 7];
const arr2 = [5, 2, -9, 4];
const arr3 = [0, 1, 3, 10];

let merged = [...arr1, ...arr2, ...arr3].sort((a, b) => b - a);
console.log(merged); */


// 8.
/* let arr = [
    [1, 2, 3],
    [4, 5],
    [6],
];
let result = arr.reduce((accum, currentItem) => accum + currentItem.reduce((accum1, currentItem1) => accum1 + currentItem1, 0), 0);
console.log(result); */

// 9.
/* let arr = [5, 8, -9, 3, 7, 2, -5];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let box = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = box;
}
console.log(arr); */
// 10.
/* let arr = [5, 8, -6, 7, 3]; 
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
        console.log(i + 1);
        break;
    }
}
 */
// 11.
/* function arrayFill(value, length) {
    let myArr = new Array();
    for (let i = 0; i < length; i++) {
        myArr.push(value);
    }
    return myArr;
}
console.log(arrayFill("utca", 8)); */