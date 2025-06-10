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

function game_3() {
    try {
        alert(prompt("Введите текст").split("").reverse().join(""));
    }
    catch {
    }
}

function game_4() {
    let options = ["камень", "ножницы", "бумага"];
    let user_choice = Number(prompt("Введите свой выбор: \n1. Камень 2. Ножницы 3. Бумага"));
    let machine_choice = options.indexOf(options[Math.floor(Math.random() * 3)]) + 1;

    console.log("Ваш выбор: " + options[user_choice - 1]);
    console.log("Выбор оппонента: " + options[machine_choice - 1]);

    if (Number.isInteger(user_choice) && user_choice > 0 && user_choice < 4) {
        if ((user_choice === 3 && machine_choice === 1) || (user_choice === machine_choice - 1)) {
            console.log("Вы победили");
            alert("Вы победили");
        }
        else if (user_choice === machine_choice) {
            console.log("Ничья");
            alert("Ничья");
        }
        else {
            console.log("Вы проиграли");
            alert("Вы проиграли");
        }
    }
    else {
        console.log("Неверный выбор");
        alert("Неверный выбор");
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

let block = document.querySelectorAll(".games__text");
let button = document.createElement("button");

button.textContent = "Изменить цвет";
button.classList.add("games__button");
button.style.width = "300px";
button.style.marginTop = "15px";
button.style.display = "none";
block[5].append(button);

function game_6() {   
    if (button.style.display === "none") {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function getNewColor() {
    let symbols = '0123456789ABCDEF';
    let color = '#'

    for (let i = 0; i < 6; i++) { 
       color += symbols[Math.floor(Math.random() * 16)];
    }

    return color;
  }
  
button.addEventListener("click", () => {
    document.body.style.background = getNewColor();
})