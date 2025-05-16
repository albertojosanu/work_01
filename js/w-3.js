console.log("Задание 1");
let i = 0;
while ( i < 2) {
    console.log("Привет");
    i++;
}
console.log("Задание 2");
for (i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("Задание 3");
let message = "";
for (i = 7; i <= 22; i++) {
    message = message + " " + i;
}
console.log(message);
console.log("Задание 4");
let obj = {
    Коля : "200",
    Вася : "300",
    Петя : "400"
}
for (let name in obj) {
    console.log(`${name} - ${obj[name]}`);
}
console.log("Задание 5");
let n = 1000;
let num = 0;
do {
    n /= 2;
    num++; 
} while (n > 50);
console.log("Результат - " + n + ". Кол-во итераций - " + num);
console.log("Задание 6");
let first_friday = 3;
let allday = 31;
for (i = first_friday; i <= allday; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`)
}
console.log("Дополнительное задание 1");
let k = 100;
let iterations = 0;
do {
    k -= 7;
    iterations++; 
} while (k > 0);
console.log("Результат - " + k + ". Кол-во итераций - " + iterations);
console.log("Дополнительное задание 2");
let months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
for (let i = 0; i < months.length; i++) {
    console.log(months[i] + " - " + (i + 1) + " месяц в году");
}
console.log("Дополнительное задание 3");
let book = {
    название : prompt("Введите название"),
    автор : prompt("Введите имя автора"),
    "год издания" : prompt("Введите год издания"),
    жанр : prompt("Введите жанр")
}
for (let property in book) {
    console.log(`${property} - ${book[property]}`);
}
console.log("Дополнительное задание 4");
/*let numbers = new Array(10).fill(Math.random());*/
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.round(Math.random() * 10));
}
console.log(numbers);
let min_number = numbers[0];
for (i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) {
        min_number = numbers[i];
    }
}
console.log(min_number);