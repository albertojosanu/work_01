alert("Задание 1");
let i = 0;
while ( i < 2) {
    console.log("Привет");
    i++;
}
alert("Задание 2");
for (i = 1; i <= 5; i++) {
    console.log(i);
}
alert("Задание 3");
let message = "";
for (i = 7; i <= 22; i++) {
    message = message + " " + i;
}
console.log(message);
alert("Задание 4");
let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}
for (let name in obj) {
    console.log(`${name} - ${obj[name]}`);
}
alert("Задание 5");
let n = 1000;
let num = 0;
do {
    n /= 2;
    num++; 
} while (n > 50);
console.log("Результат - " + n + ". Кол-во итераций - " + num);
alert("Задание 6");
/*const date = new Date();
console.log(date);*/
let first_friday = prompt("Введите целое число от 1 до 7");
if (first_friday >= 1 && first_friday <= 7 && first_friday % 1 === 0) {
    for (i = first_friday; i <= 31; i++) {
        if ((i - first_friday) % 7 === 0) {
            console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`)
        }
    }
}
else {
    console.log("Введено неверное число")
}
alert("Дополнительное задание 1");
let k = 100;
let iterations = 0;
do {
    k -= 7;
    iterations++; 
} while (k > 0);
console.log("Результат - " + k + ". Кол-во итераций - " + iterations);
alert("Дополнительное задание 2");
console.log("Массивы не изучены");
alert("Дополнительное задание 3");
let book = {
    "название" : prompt("Введите название"),
    "автор" : prompt("Введите имя автора"),
    "год издания" : prompt("Введите год издания"),
    "жанр" : prompt("Введите жанр")
}
for (let property in book) {
    console.log(`${property} - ${book[property]}`);
}
alert("Дополнительное задание 4");
console.log("Массивы не изучены");