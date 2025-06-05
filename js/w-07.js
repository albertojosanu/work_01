function game_3() {
    try {
        alert(prompt("Введите текст").split("").reverse().join(""));
    }
    catch {
    }
}

function game_5() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let count = 0;
/*
    quiz.forEach(item => {
        if (Number(prompt(item.question + "\n" + item.options)) === item.correctAnswer) {
            count++;
        }
    });
*/
    let answer;
    
    for (let i = 0; i < quiz.length; i++) {
        answer = prompt(quiz[i].question + "\n" + quiz[i].options);
        if (Number(answer) === quiz[i].correctAnswer) {
            count++;
        }
        else if (answer === null) {
            break;
        }
        if (i === quiz.length - 1) {
            alert("Количество правильных ответов: " + count)
        }
    }
}

console.log("Задание 1");

console.log("js".toUpperCase());

console.log("Задание 2");

function startsWith(array, symbol_string) {
    try {
        return symbol_string !== "" ? array.filter(item => item.toLowerCase().startsWith(symbol_string.toLowerCase())) : "Ввод не выполнен";
    }
    catch {
        return "Ввод отменен";
    }
}

let string_array = [];
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";

for (let i = 0; i < Math.ceil((1 - Math.random()) * 20); i++) {
    let word = "";
    for (let j = 0; j < Math.ceil((1 - Math.random()) * 50); j++) {
        word += characters[Math.round(Math.random() * characters.length)];
    }
    string_array.push(word);
}

console.log(string_array);

console.log(startsWith(string_array, prompt("Введите строку")));
//startsWith(string_array, characters[Math.round(Math.random() * characters.length)]);

console.log("Задание 3");

console.log(32.58884);
console.log("Округлено до меньшего целого: " + Math.floor(32.58884));
console.log("Округлено до большего целого: " + Math.ceil(32.58884));
console.log("Округлено до ближайшего целого: " + Math.round(32.58884));

console.log("Задание 4");

let numbers = [52, 53, 49, 77, 21, 32];

console.log(numbers);
console.log("Минимальное число: " + Math.min(...numbers));
console.log("Максимальное число: " + Math.max(...numbers));

console.log("Задание 5");

console.log(Math.floor(Math.random() * 10 + 1));

console.log("Задание 6");

function rand(number) {
    if (number % 2 === 0 && number > 0) {
        numbers = [];
        for (let i = 0; i < number/2; i++) {
            numbers.push(Math.random() * number);
        }
        return numbers;
    }
    else {
        return "Отсутствует возможность вывода массива в 2 раза меньше переданного числа";
    }
}

console.log(rand(prompt("Введите положительное четное число")));

console.log("Задание 7");

function between(first, second) {
    if (Number.isInteger(first) && Number.isInteger(second)) {
        return Math.min(first, second) + Math.random() * Math.abs(first - second);
    }
    else {
        return "Неверный ввод";
    }
}

console.log(between(+prompt("Введите первое целое число"), +prompt("Введите второе целое число")));

console.log("Задание 8");

let currentDate = new Date();

console.log(currentDate.toLocaleDateString('ru-RU'));

console.log("Задание 9");

let days = 73 * 24 * 60 * 60 * 1000;
let day_new = new Date(Number(currentDate) + days);

console.log(day_new.toLocaleDateString('ru-RU'));

console.log("Задание 10");

function date_output(date) {
    regex = new RegExp("^([0-3][0-9])\\.([0-1][0-9])\\.([0-2][0-9]{3})\\s([0-2][0-9])\\:([0-5][0-9])\\:([0-5][0-9])$");
    if (regex.test(date) && Date.parse(date.slice(3, 5) + "." + date.slice(0, 2) + "." + date.slice(6))) {
        const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
        const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        /*let dt = new Date();
        console.log("Дата: " + dt.getDate() + " " + months[dt.getMonth()] + " " + dt.getFullYear() + " - это " + days[dt.getDay()] + "\nВремя: " + dt.toLocaleTimeString('ru-RU'));*/
        let format = new Date(Date.parse(date.slice(3, 5) + "." + date.slice(0, 2) + "." + date.slice(6, 10)));
        return "Дата: " + date.slice(0, 2) + " " + months[+date.slice(3, 5) - 1] + " " + date.slice(6, 10) + " - это " + days[format.getDay()] + "\nВремя: " + date.slice(11);
    } else {
        return "Неверный ввод";
    }
}

console.log(date_output(prompt("Введите дату и время в формате DD.MM.YYYY HH:mm:SS")));