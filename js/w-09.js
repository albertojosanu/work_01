let header = document.querySelector(".header");

let new_field = document.createElement("div");
new_field.style.background = "#E1FF8F";
new_field.classList.add("center");
document.body.insertBefore(new_field, header);

//Задание 1

let task_1 = document.createElement("h1");
task_1.textContent = "Задание 1";
task_1.style.paddingTop = "20px";
new_field.append(task_1);

let task_1_button = document.createElement("button");
task_1_button.textContent = "Скрыть";
task_1_button.classList.add("header__button");
new_field.append(task_1_button);

let task_1_h1 = document.createElement("h1");
task_1_h1.textContent = "Lorem ipsum dolor sit amet.";
task_1_h1.style.marginTop = "20px";
task_1_h1.style.display = "none";
new_field.append(task_1_h1);

task_1_button.addEventListener("click", () => {
    if (task_1_h1.style.display === "none") {
        task_1_h1.style.display = "block";
    } else {
        task_1_h1.style.display = "none";
    }
})

//Задание 2

let task_2 = document.createElement("h1");
task_2.textContent = "Задание 2";
task_2.style.paddingTop = "20px";
new_field.append(task_2);

let task_2_button = document.createElement("button");
task_2_button.textContent = "Изменить цвет";
task_2_button.classList.add("header__button");
task_2_button.style.width = "300px";
new_field.append(task_2_button);

let task_2_p = document.createElement("p");
task_2_p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vel assumenda neque reprehenderit facilis delectus explicabo qui, nostrum ipsam optio!";
task_2_p.style.marginTop = "20px";
new_field.append(task_2_p);

task_2_button.addEventListener("click", () => {
    if (!(task_2_p.style.color === "blue")) {
        task_2_p.style.color = "blue";
    } else {
        task_2_p.style.removeProperty("color");
    }
})

//Задание 3

let task_3 = document.createElement("h1");
task_3.textContent = "Задание 3";
task_3.style.paddingTop = "20px";
new_field.append(task_3);

let task_3_button = document.createElement("button");
task_3_button.textContent = "Изменить текст";
task_3_button.classList.add("header__button");
task_3_button.style.width = "300px";
new_field.append(task_3_button);

let task_3_h1 = document.createElement("h1");
task_3_h1.textContent = "Lorem ipsum dolor sit amet.";
task_3_h1.style.marginTop = "20px";
new_field.append(task_3_h1);

task_3_button.addEventListener("click", () => {
    task_3_h1.textContent = "Привет, мир!";
})

//Задание 4

let task_4 = document.createElement("h1");
task_4.textContent = "Задание 4";
task_4.style.paddingTop = "20px";
new_field.append(task_4);

let task_4_p_1 = document.createElement("p");
task_4_p_1.textContent = "Lorem ipsum dolor sit amet.";
task_4_p_1.classList.add("description");
new_field.append(task_4_p_1);

let task_4_p_2 = document.createElement("p");
task_4_p_2.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quod.";
task_4_p_2.classList.add("description");
new_field.append(task_4_p_2);

let task_4_p_3 = document.createElement("p");
task_4_p_3.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ex nostrum delectus rem molestiae cumque.";
task_4_p_3.classList.add("description");
new_field.append(task_4_p_3);

let array_4_descriptions = document.querySelectorAll(".description");
array_4_descriptions.forEach(element => {
    element.textContent = "Измененный текст";
});

//Задание 5

let task_5 = document.createElement("h1");
task_5.textContent = "Задание 5";
task_5.style.paddingTop = "20px";
new_field.append(task_5);

let task_5_p_1 = document.createElement("p");
task_5_p_1.textContent = "Lorem ipsum dolor sit amet.";
task_5_p_1.classList.add("description");
new_field.append(task_5_p_1);

let task_5_p_2 = document.createElement("p");
task_5_p_2.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quod.";
task_5_p_2.classList.add("description");
new_field.append(task_5_p_2);

let task_5_p_3 = document.createElement("p");
task_5_p_3.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ex nostrum delectus rem molestiae cumque.";
task_5_p_3.classList.add("description");
new_field.append(task_5_p_3);

let task_5_p_4 = document.createElement("p");
task_5_p_4.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque labore ratione ut neque vitae ullam sunt totam corrupti possimus!";
task_5_p_4.classList.add("header__description");
new_field.append(task_5_p_4);

let task_5_p_5 = document.createElement("p");
task_5_p_5.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum aut aliquam, veritatis nam totam dolores dignissimos porro commodi quam et quisquam asperiores laborum corporis voluptatibus?";
task_5_p_5.classList.add("about__description");
new_field.append(task_5_p_5);

let task_5_p_6 = document.createElement("p");
task_5_p_6.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum aut aliquam, veritatis nam totam dolores dignissimos porro commodi quam et quisquam asperiores laborum corporis voluptatibus?";
task_5_p_6.classList.add("games__description");
new_field.append(task_5_p_6);

setTimeout(() => {
    let array_5_descriptions = document.querySelectorAll(".description");
    array_5_descriptions.forEach(element => {
    element.textContent = "Новый текст";
});
}, 5000);

//Задание 6

let task_6 = document.createElement("h1");
task_6.textContent = "Задание 6";
task_6.style.paddingTop = "20px";
new_field.append(task_6);

let task_6_button = document.createElement("button");
task_6_button.textContent = "Добавить элемент";
task_6_button.classList.add("header__button");
task_6_button.style.width = "300px";
new_field.append(task_6_button);

task_6_button.addEventListener("click", () => {
    let task_6_p = document.createElement("p");
    task_6_p.textContent = "Новый абзац";
    task_6_p.style.marginTop = "20px";
    new_field.appendChild(task_6_p);
})

//Задание 7

let task_7 = document.createElement("h1");
task_7.textContent = "Задание 7";
task_7.style.paddingTop = "20px";
new_field.append(task_7);

let task_7_button = document.createElement("button");
task_7_button.textContent = "Удалить элемент";
task_7_button.classList.add("header__button");
task_7_button.style.width = "300px";
new_field.append(task_7_button);

let task_7_p_1 = document.createElement("p");
task_7_p_1.textContent = "Lorem ipsum dolor sit amet.";
task_7_p_1.classList.add("description");
new_field.append(task_7_p_1);

let task_7_p_2 = document.createElement("p");
task_7_p_2.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, quod.";
task_7_p_2.classList.add("description");
new_field.append(task_7_p_2);

let task_7_p_3 = document.createElement("p");
task_7_p_3.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ex nostrum delectus rem molestiae cumque.";
task_7_p_3.classList.add("description");
new_field.append(task_7_p_3);

let task_7_p_4 = document.createElement("p");
task_7_p_4.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque labore ratione ut neque vitae ullam sunt totam corrupti possimus!";
task_7_p_4.classList.add("header__description");
new_field.append(task_7_p_4);

let task_7_p_5 = document.createElement("p");
task_7_p_5.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum aut aliquam, veritatis nam totam dolores dignissimos porro commodi quam et quisquam asperiores laborum corporis voluptatibus?";
task_7_p_5.classList.add("about__description");
new_field.append(task_7_p_5);

let task_7_p_6 = document.createElement("p");
task_7_p_6.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum aut aliquam, veritatis nam totam dolores dignissimos porro commodi quam et quisquam asperiores laborum corporis voluptatibus?";
task_7_p_6.classList.add("games__description");
new_field.append(task_7_p_6);

task_7_button.addEventListener("click", () => {
    let description = document.querySelector(".description");
    description.remove();
    let array_7_description = document.querySelectorAll(".description");
    if (array_7_description[7]) {
        array_7_description[5].remove(); 
    }  
})