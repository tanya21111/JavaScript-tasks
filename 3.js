// 1. Определение пола
function GetGender(gender) {
    if (gender === 'М' || gender === 'м') {
      return "Ваш пол мужской";
    } else if (gender === 'Ж' || gender === 'ж') {
      return "Ваш пол женский";
    } else {
      return "Ваш пол не определён";
    }
}

// 2. определение дня
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            alert("Понедельник");
            break;
        case 2:
            alert("Вторник");
            break;
        case 3:
            alert("Среда");
            break;
        case 4:
            alert("Четверг");
            break;
        case 5:
            alert("Пятница");
            break;
        case 6:
            alert("Суббота");
            break;
        case 7:
            alert("Воскресенье");
            break;
        default:
            alert("Некорректное число. Введите от 1 до 7.");
    }
}

// 3. Максимум и минимум
function findMin(a, b, c) {
    return Math.min(a, b, c);
    
}
function findMax(a, b, c) {
    return Math.max(a, b, c);
}

// 4. Проверка возраста
const checkAge = function() {
    const name = prompt("Введите ваше имя:");
    const age = parseInt(prompt("Введите ваш возраст:"));

    if (isNaN(age)) {
        alert("Укажите корректные данные!");
    } else if (age < 18) {
        alert(`${name}, вы еще очень молоды!`);
    } else if (age >= 18 && age <= 50) {
        alert(`${name}, добро пожаловать в личный кабинет!`);
    } else {
        alert(`${name}, моё почтение!`);
    }
};

// 5. Проверка типа данных
const checkDataType = function() {
    const value = prompt("Введите любое значение для проверки его типа:");
    const parsedValue = isNaN(value) ? value : parseFloat(value);
    alert(`Тип данных: ${typeof parsedValue}`);
};

// 6. Математический тренажёр
const mathTrainer = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const correctAnswer = num1 + num2;
    const userAnswer = parseInt(prompt(`Сколько будет ${num1} + ${num2}?`));
  
    if (userAnswer === correctAnswer) {
        alert("Ответ правильный!");
    } else {
        alert(`Неправильно! Правильный ответ: ${correctAnswer}`);
    }
};

const gender = prompt("Введите ваш пол ('М' или 'Ж'):");
alert(GetGender(gender));

const dayNumber = parseInt(prompt("Введите номер дня недели (1-7):"));
alert(getDayOfWeek(dayNumber));

const num1 = parseFloat(prompt("Введите первое число:"));
const num2 = parseFloat(prompt("Введите второе число:"));
const num3 = parseFloat(prompt("Введите третье число:"));
alert(`Минимум: ${findMin(num1, num2, num3)}`);
alert(`Максимум: ${findMax(num1, num2, num3)}`);



checkAge();
checkDataType();
mathTrainer();
