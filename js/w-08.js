function game_4() {
    options = ["камень", "ножницы", "бумага"];
    user_choice = Number(prompt("Введите свой выбор: \n1. Камень 2. Ножницы 3. Бумага"));
    machine_choice = options.indexOf(options[Math.floor(Math.random() * 3)]) + 1;
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

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const main = async () => {
    console.log("Задание 1");

    let people = [
    { name: "Глеб", age: 29 },
    { name: "Анна", age: 17 },
    { name: "Олег", age: 7 },
    { name: "Оксана", age: 47 }
    ];

    console.log(people.sort((a, b) => a.age - b.age));

    await sleep(1000);

    console.log("Задание 2");

    function isPositive(number) {
        return number > 0;
    }
    function isMale(obj) {
        return obj.gender === "male";
    }
    function filter(arr, cb) {
        let final = [];
        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i])) {
                final.push(arr[i]);
            }
        }
        return final;
    }

    console.log(filter([3, -4, 1, 9], isPositive));

    people = [
    {name: "Глеб", gender: "male"},
    {name: "Анна", gender: "female"},
    {name: "Олег", gender: "male"},
    {name: "Оксана", gender: "female"}
    ];

    console.log(filter(people, isMale));

    await sleep(1000);

    console.log("Задание 3");

    let timerId = setInterval(() => console.log(Date()), 3000);

    setTimeout(() => {clearInterval(timerId); console.log("30 секунд прошло");}, 30000);

    await sleep(30000);

    console.log("Задание 4");

    function delayForSecond(callback) {
        setTimeout(() => callback(), 1000);
    }

    delayForSecond(function () {
    console.log('Привет, Глеб!');
    })

    await sleep(1000);
    
    console.log("Задание 5");

    function delayForSecond(cb) {
        setTimeout(() => {
            console.log("Прошла одна секунда");
            if(cb) {  cb(); }
        }, 1000)
    }
    function sayHi (name) {
        console.log(`Привет, ${name}!`);
    }

    delayForSecond(() => setTimeout(() => sayHi('Глеб'), 1000));
    }

main()