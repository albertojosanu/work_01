alert("Задание 1");
let password = "пароль";
let password_input = prompt("Введите пароль");
if (password_input === password) {
    alert("Пароль введен верно");
}
else {
    alert("Пароль введен неправильно");
}
alert("Задание 2");
let c = prompt("Введите число c", 0);
if (c > 0 && c < 10) {
    console.log("Верно");
}
else {
    console.log("Неверно");
}
alert("Задание 3");
let d = prompt("Введите число d");
let e = prompt("Введите число e"); 
if (d > 100 || e > 100) {
    console.log("Верно");
}
else {
    console.log("Неверно");
}
alert("Задание 4");
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));
alert("Задание 5");
monthNumber = 12;
if (monthNumber >= 1 && monthNumber <= 12 && monthNumber % 1 === 0) {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
        default:
            console.log("Неверное значение");
            break;
    }
}
alert("Дополнительное задание 1");
let x = prompt("Пожалуйста, введите любое число");
if (!isNaN(Number(x))) {
    if (x % 2 === 0) {
        alert("Число четное");
    }
    else if (x % 2 === 1) {
        alert("Число нечетное");
    }
    else {
        alert("Число не целое");
    }
}
else {
    alert("Введенное значение не является числом");
}
alert("Дополнительное задание 2");
let clientOS = 0;
if (clientOS == 0) {
    console.log("Установите версию приложения для iOS по ссылке");
}
else {
    console.log("Установите версию приложения для Android по ссылке");
}
alert("Дополнительное задание 3");
clientOS = prompt("Наименование операционной системы телефона");
let message = "";
let clientDeviceYear = prompt("Год выпуска телефона");
if ((clientOS == 0 || clientOS == 1) && (!isNaN(Number(clientDeviceYear))) && (clientDeviceYear % 1 === 0)) {
    if (clientDeviceYear < 2015) {
        message = "облегченную ";
    }
    if (clientOS == 0) {
        alert("Установите " + message + "версию приложения для iOS по ссылке");
    }
    else {
        alert("Установите " + message + "версию приложения для Android по ссылке");
    }
}
else {
    alert("Введены неверные данные");
}