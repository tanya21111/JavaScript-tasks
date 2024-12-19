function main() {
    // 1. Вывод чисел от 1 до 100
    console.log("Числа от 1 до 100:");
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }

    // 2. Вывод чисел от -100 до 0
    console.log("Числа от -100 до 0:");
    for (let i = -100; i <= 0; i++) {
        console.log(i);
    }

    // 3. Четные числа от 1 до 100
    console.log("Четные числа от 1 до 100:");
    for (let i = 2; i <= 100; i += 2) {
        console.log(i);
    }

    // 4. Четные числа из промежутка
    function getEvenNumbers() {
        let start, end;
        while (true) {
            start = parseInt(prompt("Введите начало промежутка:"));
            end = parseInt(prompt("Введите конец промежутка:"));

            if (isNaN(start) || isNaN(end)) {
                alert("Вы ввели некорректные числа. Попробуйте снова.");
                continue;
            }

            if (start > end) {
                [start, end] = [end, start]; 
                alert("Начало промежутка было больше конца. Промежуток поменян.");
            }
            break;
        }

        console.log(`Четные числа из промежутка от ${start} до ${end}:`);
        for (let i = start; i <= end; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    }
    getEvenNumbers();

    // 5. Таблица умножения
    function multiplicationTest() {
        while (true) {
            const num1 = Math.floor(Math.random() * 9) + 2; 
            const num2 = Math.floor(Math.random() * 9) + 2; 
            const correctAnswer = num1 * num2;

            const userAnswer = parseInt(prompt(`Сколько будет ${num1} * ${num2}?`));
            if (isNaN(userAnswer)) {
                alert("Вы ввели не число. Попробуйте снова.");
                continue;
            }

            if (userAnswer === correctAnswer) {
                alert("Правильно!");
            } else {
                alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
            }

            const continueTest = prompt("Хотите продолжить? Введите 'y' для продолжения, любой другой символ для выхода.");
            if (continueTest.toLowerCase() !== "y") {
                alert("Тест завершен. Спасибо за участие!");
                break;
            }
        }
    }
    multiplicationTest();
}

main();
