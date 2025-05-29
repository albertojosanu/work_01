/*let arrSum = [3,4,5,6];
const sum = (a,b, ...rest) => {
    let result = a + b;
    console.log(result);
    console.log(rest);
}
sum(...arrSum);
*/
function game_2() {
    let operand_1 = Math.round(Math.random() * 10);
    let operand_2 = Math.round(Math.random() * 10);
    let operator = ["+", "-", "*", "/"];
    operator = operator[Math.floor(Math.random() * operator.length)];
    let result = operand_1 + " " + operator + " " + operand_2;

    if (Number(prompt(result)) === eval(result)) {
        alert("Верный ответ");
    }
    else {
        alert("Ошибка");
    }
}

console.log("Задание 1");

let array_1 = [1, 5, 4, 10, 0, 3];

do {
    param = array_1[Math.floor(Math.random() * array_1.length)];
    console.log(param);
} while (param !== 10)

console.log("Задание 2");

let array_2 = [1, 5, 4, 10, 0, 3];

console.log(array_2.indexOf(4));

console.log("Задание 3");

let array_3 = [1, 3, 5, 10, 20];

console.log(array_3.join(' '))

console.log("Задание 4");

let array_4 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

console.log(array_4);

console.log("Задание 5");

let array_5 = [1, 1, 1];

array_5.push(2, 2, 2);

console.log(array_5);

console.log("Задание 6");

let array_6 = [9, 8, 7, 'a', 6, 5];
let string_6 = array_6.sort().join('');

console.log(string_6.replace(/[a-zA-Z]/g, "").split(""));

console.log("Задание 7");

let array_7 = [9, 8, 7, 6, 5];

if (array_7.includes(Number(prompt("Введите число")))) {
    alert("Угадал");
}
else {
    alert("Не угадал")
}

console.log("Задание 8");

let string_8 = 'abcdef';

console.log(string_8.split("").reverse().join(""))

console.log("Задание 9");

let array_9 = [[1, 2, 3],[4, 5, 6]]

console.log(array_9.join(",").split(",").map(item => Number(item)));

console.log("Задание 10");

let array_10 = [];

for (let i = 0; i < Math.ceil((1 - Math.random()) * 10); i++) {
    array_10.push(Math.ceil((1 - Math.random()) * 10));
    if (i) {
        console.log(array_10[i - 1] + array_10[i]);
    }
}

console.log(array_10);

console.log("Задание 11");

function square(array) {
    return array.map(item => item * item);
}

let array_11 = [];

for (let i = 0; i < Math.ceil((1 - Math.random()) * 10); i++) {
    array_11.push(Math.round(Math.random() * 10));
}

console.log(array_11);

console.log(square(array_11));

console.log("Задание 12");

function lenght(array) {
    return array.map(item => item.length);
}

let array_12 = [];
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";

for (let i = 0; i < Math.ceil((1 - Math.random()) * 10); i++) {
    let word = "";
    for (let j = 0; j < Math.ceil((1 - Math.random()) * 20); j++) {
        word += characters[Math.round(Math.random() * characters.length)];
    }
    array_12.push(word);
}

console.log(array_12);

console.log(lenght(array_12))

console.log("Задание 13");

function min_numbers(array) {
    return array.filter(item => item < 0);
}

let array_13 = [];

for (let i = 0; i < Math.ceil((1 - Math.random()) * 10); i++) {
    array_13.push(Math.round(Math.random() * 20) - 10);
}

console.log(array_13);

console.log(min_numbers(array_13));

console.log("Задание 14");

let array_14 = [];

for (let i = 0; i < 10; i++) {
    array_14.push(Math.round(Math.random() * 10));
}

array_14_even = array_14.filter(item => item % 2 === 0);

console.log(array_14);

console.log(array_14_even);

console.log("Задание 15");

let array_15 = [];

for (let i = 0; i < 6; i++) {
    array_15.push(Math.ceil((1 - Math.random()) * 10));
}

console.log(array_15);

console.log(array_15.reduce((total, number) => (total + number))/array_15.length);