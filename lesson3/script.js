/* const myVar1 = 35;
const myVar2 = 10;

if (myVar1 > myVar2) {
    console.log(`${myVar1} больше ${myVar2}`);
} else if (myVar1 < myVar2) {
    console.log(`${myVar1} меньше ${myVar2}`);
} else {
    console.log("end");
}

let result = myVar1 > myVar2 ? console.log(true) : console.log(false); */
// Тернарный оператор

// Конструкция Switch

/* const userRole = '123';

switch(userRole) {
    case 'student': 
        console.log('Текущий пользователь - student');
        break;
    case 'admin': 
        console.log('Текущий пользователь - admin');
        break;
    case 'normal_user':
        console.log('Текущий пользователь - normal_user')
        break;
    default:
        console.log('Нет такого типа пользователя');
        break;
}
 */

/* 
let user = new Object();
user.role = "student";
user.favoriteDrink = "beer";

let user2 = user;
user2.role = "admin";
user2.favoriteDrink = "whisky";

switch (user2.role) {
    case "student":
        console.log(`Любимый напиток - ${user2.favoriteDrink}`);
        break;
    case "admin":
        console.log(`Любимый напиток - ${user2.favoriteDrink}`);
        break;
    default:
            console.log(`Любимый напиток - вино`);
}

getDrink(user);

function getDrink(user) {
    switch (user.role) {
        case "student":
            console.log(`Любимый напиток - ${user.favoriteDrink}`);
            break;
        case "admin":
            console.log(`Любимый напиток - ${user.favoriteDrink}`);
            break;
        default:
                console.log(`Любимый напиток - вино`);
    }
} */

//Логические опреторы
// && логическое И - возвращает первое значение FALSE или любое последнее
// || логическое ИЛИ - возвращает первое значение TRUE или любое последнее
// ! логическое НЕ

// console.log(0 || 2 || "");

// console.log((1 && 2) || (4 && 0));

/* Что делает JS пошагово:
if (1 && 0) {
    console.log(result);
} */

/* 1. Находит ключевое слово IF, понимает, что дальше - условие.
2. Внутри условия находит логическое И - &&.
3. Оператор приводит значение к булеву типу - true/false (ВАЖНО: делает это "по капотом").
4. 1 >> true, 0 >> false, && возвращает значение, которое является false при приведении в булев тип.
5. В данном случае мы получаем 0, который приводится в булев тип блоком if.

*/

// Логическое НЕ:
// JS приводит значение после ! к булеву типу.
// ! меняет полученный тип на противоположный.

/*const myVar = 5;

 if (!myVar === true) {
    console.log("TRUE");
} */

// console.log(null || 0 || "" || undefined);
// console.log(0 || true && "false" || null);
// console.log (0 && true || "false" && null);
// console.log(!0 && !!1);
// console.log(!(null || !"апельсин" && true));

// 1
/* const intervalOne = 2;
const intervalTwo = 5;
const intervalThree = 8;
const longestInterval = " - самый большой отрезок";

if ((intervalOne > intervalTwo) && (intervalOne > intervalThree)) {
    console.log(`${intervalOne}${longestInterval}`);
} else if ((intervalTwo > intervalOne) && (intervalTwo > intervalThree)) {
    console.log(`${intervalTwo}${longestInterval}`);
} else if ((intervalThree > intervalOne) && (intervalThree > intervalTwo)) {
    console.log(`${intervalThree}${longestInterval}`);
}  */

// 2
/* constCurrentTemp = 36

if (constCurrentTemp < -30) {
    console.log("Оставайтесь дома!");
}
else if ((constCurrentTemp > -30) && (constCurrentTemp <= -10)) {
    console.log("Сегодня холодно!");
}
else if ((constCurrentTemp > -10) && (constCurrentTemp <= 5)) {
    console.log("Не холодно!");
}
else if ((constCurrentTemp > 5) && (constCurrentTemp <= 15)) {
    console.log("Тепло!");
}
else if ((constCurrentTemp > 15) && (constCurrentTemp <= 25)) {
    console.log("Очень тепло!");
}
else if ((constCurrentTemp > 25) && (constCurrentTemp <= 35)) {
    console.log("Жарко!");
}
else {
    console.log("Пекло!");
} */

// Циклы

// WHILE / DO WHILE

/* let counter = 0;

/* while (myVar >= 0 && myVar <= 10) {
    console.log(myVar += 1) // counter = counter + 1
} */

/* do {
  console.log((counter += 1));
} while (false);
 */

// FOR
/* 
const endOfLoop = 10;

for (let counter = 0; counter <= endOfLoop; counter++) {} */

// год, который кратен 400 - високосный
// остальные годы, которые кратны 100 - не високосные
// остальные годы, которые кратны 4 - високосные

/* const startYear = 1800;
const endYear = 2020;
let leapYearsAmount = 0;
const firstSpaceTripYear = 1961; */
// в 1961 надо остановить цикл и выдать количество итераций до него

/* let carsAmount = 60;
const minAmount;
 */

// 1
//const iterationText = "Итерация";

//while
//const limit = 5;
// let counter = 1;

/* while (counter <= limit) {
    console.log(`${iterationText} - ${counter}`);
    counter++;
}
 */
/* do {
    console.log(`${iterationText} - ${counter}`);
    counter++;
} while (counter <= limit); */

/* for (let counter = 1; counter <= limit; counter++) {
    console.log(`${iterationText} - ${counter}`);
} */

// 2. Автомобили

/* let carsAmount = 60; // N
const minCarsAmount = 10; // M

for (let day = 1; carsAmount > minCarsAmount; day++) {
    carsAmount /= 2; // carsAmount = carsAmount / 2

    if (carsAmount < minCarsAmount) {
        console.log(`На ${day} день`);
        break; // break не обязателен, т.к. следующая итерация не будет выполнена, т.к. carsAmount < minCarsAmount
    }
} */

//3. Високосный год
/* 
const startYear = 1800;
const endYear = 2020;

let leapYearsAmount = 0;
const firstSpaceTripYear = 1961;

for (let counter = startYear; counter <= endYear; counter++) {
    if (counter === firstSpaceTripYear) {
        console.log(`${firstSpaceTripYear} - первый полет в космос`);
        console.log(`Количество итераций - ${counter - startYear}`);
        break;
    }
}

for (let year = startYear; year <= endYear; year++) {
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        console.log(year);
        leapYearsAmount +=1;
    }
    if (year === endYear) {
        console.log(`Количество високосных лет - ${leapYearsAmount}`);
        console.log(`Количество итераций - ${year - startYear}`);
 
    }
} */

/* for (let i = 2; i <= 10; i++) {
    let iterationResult = "Итерация №" + (i - 1);
    if (i % 2 === 0) {
        iterationResult += " - " + i;
    }
    console.log(iterationResult);
}
 */
// Итерация №__ - 2

/* for (let i = 0; i < 3; i++) {
    console.log(`number ${i}!`);
} */
/* 
let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++; 
}
 */

/* while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)
  if (value > 100) break;
}
 */

// задание if else видео Жени

/* if (1 === "1") {
    console.log("Истина!");
} else {
    console.log("Ложь!");
} */

/* if (5 == "5") {
    console.log("Истина!");
} else {
    console.log("Ложь!");
} */

/* let message = (92 > "11" && 58 < 100) ? "Истина!" : "Ложь!";
    console.log(message); */

/*     if (0) {
        console.log("Ложь!")
    } else if (" ") {
        console.log("Истина!")
    } */

//task 1 Вывести цифры от 1 до 5 всеми способами

/* let num = 1;
while (num < 6) {
  console.log(num);
  num++;
} */

/* let num = 1;
do {
    console.log(num);
    num++
} while (num <=5);
 */

/* for (num = 1; num <= 5; num++) {
    console.log(num);
} */

// как использовать break
/*  let num = 0;
    for (; num < 5; num++) {
        console.log(num);
        if (num == 2) break;
    }
    console.log(`Работа окончена, num = ${num}`); */

// как использовать continue

/*     let num = 0;
    for (; num < 5; num++) {
        if (num == 2) continue;
        console.log(num);
    } */

//task 2 Верно ли, что последняя цифра будет 0? - нет, т.к. 0 уже не true, цикл прератится

/*      let num = 8;
     while (num) {
         console.log(num);
         num--;
     } */

//task 3 Переписать на while

/* for (let num = 0; num < 3; num++) {
            console.log(`Число: ${num}`);
     } */

/*    let num = 0;
     while (num < 3) {
        console.log(`Число: ${num}`);
        num++;
     } */

//task 4 Прекратить цикл 1 когда size = 1

/* firstFor: for (let num = 0; num < 2; num++) {
         for (let size = 0; size < 3; size++) {
             if (size == 1) {
                 break firstFor;
             }
             console.log(size);
         }
     } */

// Дз
// 1. Работа с if else
1 - 7;
/*      let a = "тест" // как сравниваются строки на разных языках?
     if (a === "test") {
         console.log("Верно!")
     } else {
        console.log("Неверно!")
     } */

/*      let a = "1"
     if (a === 1) {
         console.log("Верно!")
     } else {
        console.log("Неверно!")
     } */

//2. Работа с логическими переменными
1;
/* let test = true;
     if (test === true) {
        console.log("Верно!")
     } else {
        console.log("Неверно!")
     } */

/* 
     let test = false;
     test ? console.log("Верно!") : console.log("Неверно!");  */

//3. Работа с И и ИЛИ
1;
/*      let a = 2;
     if (a > 0 && a < 5) {
         console.log("Верно!")
     } else {
        console.log("Неверно!")
     } */

/*   2. 
     let a = -3;
     if (a === 0 || a === 2) {
         a += 7; console.log(a)
     } else {
        a /= 10; console.log(a)
     }
 */
/*   3.
     let a = 3;
     let b = 5;
     if (a <= 1 && b >= 3) {
        console.log(a + b)
     } else {
        console.log(a - b)
     } */

4;
/*      let a = 1;
     let b = 5;
     if ((a > 2 && a < 11) || (b >=6 && b < 14)) {
        console.log("Верно!")
     } else {
        console.log("Неверно!")
     } */

//На switch-case

/* let num = 4;
let result;
switch (num) {
  case 1:
    result = "зима";
    break;
  case 2:
    result = "весна";
    break;
  case 3:
    result = "лето";
    break;
    default: result = "осень";
    break;
}
console.log(result); */

//На while/for

//1.
/* let i = 1;
while (i <=100) {
    console.log(i);
    i++;
} */
/* 
for (let i = 1; i <=100; i++) {
    console.log(i);
} */

//2.
/* let i = 11;
while (i <=33) {
    console.log(i);
    i++;
}

for (let i = 11; i <=33; i++) {
    console.log(i)
} */

/* let startPos = 0;
let endPos = 100;
let counter = startPos;

while (counter <= endPos) {

    if (counter % 2 === 0) {
        console.log(counter);  
    }
    counter++;
}
 */
/* for (counter; counter <= endPos; counter++) {
    // console.log(counter);
    if (counter % 2 === 0) {
        console.log(counter); // 3 задача
    }
} */

//4.
/* let sum = 0;
for (let i = 1; i <=100; i++) {
    sum +=i
}
console.log(sum); */

//Общие задачи
//1.

/* day = 3;

if (day >= 1 && day <= 10) {
    console.log("Первая декада!")
} else if (day >= 11 && day <= 20) {
    console.log("Вторая декада!")
} else if (day >= 12 && day <= 31) {
    console.log("Третья декада!")
} */

//2.

/* month = 10;

if (month >= 3 && month <= 5) {
  console.log("Весна!");
} else if (month >= 6 && month <= 8) {
  console.log("Лето!");
} else if (month >= 9 && month <= 11) {
  console.log("Осень!");
} else {
  console.log("Зима!");
} */

//3.

/* str = "abcde";
if (str[0] === "a") {
    console.log("Да!")
} else {
    console.log("Нет!")
} */

//4.

/* str = "12345";
if (str[0] === "1" || str[0] === "2" || str[0] === "3") {
    console.log("Да!")
} else {
    console.log("Нет!")
} */

//5.

/* str = "123"
let first = Number(str[0]);
let second = Number(str[1]);
let third = Number(str[2]);
console.log(first + second + third);
 */
//усложненный вариант для ботанов, i - здесь как порядковый номер буквы
/* let sum = 0;
for (let i = 0; i < str.length; i++) {
    sum += Number(str[i])
}
console.log(sum); 
0 < 3 true
0 += str[0] => 0 += 1 => 1

1 < 3 true
1 += str[1] => 3

2 < 3 true
3 += str[2] => 6

3 < 3 false
console.log => 6
 */
 
//6.
// мое решение
/* 
str = "457484";
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i <= 2; i++) {
    sum1 += Number(str[i])
}
for (let j = 3; j <= 5; j++) {
    sum2 += Number(str[j])
}

if (sum1 === sum2) {
    console.log("да")
}  else {
    console.log("нет")
} */


// решение Димы
/* str = "4574238244";
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < str.length; i++) {
    if (str.length / 2 < i || i === 0) {
        sum1 += Number(str[i]);
    }
    else {
        sum2 += Number(str[i])
    }

}

if (sum1 === sum2) {
    console.log("да")
}  else {
    console.log("нет")
} */