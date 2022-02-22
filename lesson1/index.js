console.log("HELLO JAVASCRIPT!!!!!");
const myName = "Ksenia";
const myBirthdayYear = 1987;

let birtday = prompt("Угадайте мой год рождения!");
if (birtday < myBirthdayYear) {
  alert("Я не такая старая!");
} else if (birtday > myBirthdayYear) {
  alert("Вы мне льстите!");
} else {
  alert("Точно!");
}
