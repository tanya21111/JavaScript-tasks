// 5. Подсчет количества букв и цифр в строке
function counter(input) {
    const letters = input.match(/[a-zA-Z]/g) || [];
    const digits = input.match(/\d/g) || [];
    return {
        lettersCount: letters.length,
        digitsCount: digits.length
    };
}
const testString = "abc123";
console.log("5. Количество букв и цифр:", counter(testString));


// 4. Проверка, что строка не содержит спецсимволов и цифр, длина >= 10
function checker4(input) {
    const check = /^[a-zA-Z]{10,}$/;
    return check.test(input);
}
const testString4 = "abcdefghij";
console.log("4. Нет спец. символов и длина не менее 10:", checker4(testString4));


// 3. Проверка, что строка состоит только из букв и цифр
function checker3(input) {
    const check = /^[a-zA-Z0-9]+$/;
    return check.test(input);
}
const testString3 = "abc123";
console.log("3. Только буквы и цифры:", checker3(testString3));


// 2. Проверка корректности названия переменной JS (не включая ключевые слова)
function checker2(input) {
    const check = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return check.test(input);
}
const testVariable = "_validVariable123";
console.log("2. Корректность названия переменной:", checker2(testVariable));

// 1. Проверка, является ли строка URL адресом
function checker1(input) {
    const check = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\/\w .-]*)*\/?$/i;
    return check.test(input);
}

const testURL = "https://example.com";
console.log("1. Валидная URL ссылка:", checker1(testURL));