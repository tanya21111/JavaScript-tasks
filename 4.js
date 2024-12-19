// 1. Объект messages с проверкой ответа
let messages = {
    'error': "Вы допустили ошибку",
    'success': "Все прошло успешно",
    'check': function (userAnswer, correctAnswer) {
        if (Number(userAnswer) === correctAnswer) {
            console.log(this.success);
        } else {
            console.log(this.error);
        }
    }
};

// Генерация случайной задачи и проверка ответа
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let correctAnswer = num1 * num2;

let userAnswer = prompt(`Вычислите: ${num1} * ${num2}`);
messages.check(userAnswer, correctAnswer);

// 2. Символы на четных позициях строки
let inputString = prompt("Введите строку:");
let evenPositionChars = "";
for (let i = 1; i < inputString.length; i += 2) {
    evenPositionChars += inputString[i];
}
console.log("Символы на четных позициях:", evenPositionChars);

// 3. Произведение цифр строки
let digitString = prompt("Введите строку, состоящую только из цифр:");
let product = 1;
for (let char of digitString) {
    product *= Number(char);
}
console.log("Произведение цифр:", product);

// 4. Перевернутое число
function reverseNumber(num) {
    let reversed = "";
    let strNum = String(num);
    for (let i = strNum.length - 1; i >= 0; i--) {
        reversed += strNum[i];
    }
    return Number(reversed);
}

let number = prompt("Введите число для переворота:");
console.log("Перевернутое число:", reverseNumber(number));

// 5. Удаление символа на заданной позиции
function removeCharAt(str, position) {
    return str.substring(0, position) + str.substring(position + 1);
}

let userString = prompt("Введите строку:");
let position = Number(prompt("Введите позицию символа для удаления:")) - 1; // Нумерация от 1
console.log("Результат:", removeCharAt(userString, position));
