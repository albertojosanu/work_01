function game_1() {
    let main_number = Math.round(Math.random() * 100);
    let user_number;

    do {
        user_number = Number(prompt("Введите целое число от 1 до 100"));

        if (user_number >= 1 && user_number <= 100 && user_number % 1 === 0) {
            if (user_number > main_number) {
                alert("Загаданное число меньше указанного");
            }
            else if (user_number < main_number) {
                alert("Загаданное число больше указанного");
            }
            else {
                alert("Вы угадали!");
            }
        }
        else {
            if (confirm("Вы ввели неверное число или не ввели его. Выйти из игры?")) {
                break;
            }
            else {
                continue;
            }
        }
    } while (user_number !== main_number);
}

alert("Задание 1");

function min(a, b) {
    if (a % 1 === 0 && b % 1 === 0) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }
    else {
        return "отсутствует. Причина - неверный ввод"
    }

}

alert("Наименьшее число - " + min(Number(prompt("Введите первое число")), Number(prompt("Введите второе число"))));

alert("Задание 2");

function isEven(number) {
    if (number % 1 === 0) {
	    return (number % 2 === 0) ? "Четное число" : "Нечетное число";
    }
    else {
        return "Неверный ввод"
    }
}

alert(isEven(Number(prompt("Введите число"))));

alert("Задание 3");

function square_1(number) {
    console.log(number ** 2);
}

function square_2(number) {
    return number ** 2;
}

square_1(Number(prompt("Введите число для вывода его квадрата в консоль")));
let x = square_2(Number(prompt("Введите число для возврата значения в переменную X")));

alert("Задание 4");

function your_age(age) {

    if (age % 1 !== 0) {
        alert("Вы ввели не целое число");
    }
    else if (age < 0) {
        alert("Вы ввели неправильное значение");
    }
    else if (age >= 0 && age <= 12) {
        alert("Привет, друг!");
    }
    else {
        alert("Добро пожаловать!");
    }
}

your_age(Number(prompt("Сколько Вам лет?")));

alert("Задание 5");

function mult(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Одно или оба значения не являются числом";
    }
    else {
        return a * b;
    }
}

alert(mult(prompt("Введите первое число", 0), prompt("Введите второе число", 0)));

alert("Задание 6");

function is_number(n) {
    if (!isNaN(n)) {
        return n + " в кубе равняется " + n ** 3;
        //return `${n} в кубе равняется ${n ** 3}`;
    }
    else {
        return "Переданный параметр не является числом";
    }
}

alert(is_number(prompt("Введите число")));

alert("Задание 7");

function getArea() {
    return 3.14 * this.radius * this.radius;
}

function getPerimeter() {
    return 2 * 3.14 * this.radius;
}

let circle1 = {
    radius: prompt("Введите значение радиуса"),
    area: getArea,
    perimeter: getPerimeter
}

let circle2 = {
    radius: 5,
    area: getArea,
    perimeter: getPerimeter
}

alert(circle1.area() ? circle1.area() : "Введено неверное значение")