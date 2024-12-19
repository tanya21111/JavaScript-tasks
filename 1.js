function main() {
    // 1. Получение числа и проверка
    const inputNumber = prompt("Введите число:");
    if (isNaN(inputNumber)) {
        alert("Вы ввели не число. Пожалуйста, обновите страницу и попробуйте снова.");
        return;
    }

    const number = parseFloat(inputNumber);

    // 2. Проверка числа на отрицательность
    if (number > 0) {
        console.log(`Введенное число ${number} положительное`);
    } else if (number < 0) {
        console.log(`Введенное число ${number} отрицательное`);
    } else {
        console.log(`Введенное число ${number} равно нулю`);
    }

    // 3. Проверка коэффициентов квадратного уравнения
    const a = parseFloat(prompt("Введите коэффициент a:"));
    const b = parseFloat(prompt("Введите коэффициент b:"));
    const c = parseFloat(prompt("Введите коэффициент c:"));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Один из введенных коэффициентов не является числом. Обновите страницу и попробуйте снова.");
        return;
    }

    if (a == 0) {
        alert("Коэффициент а равен нулю. Уравнение не является квадратным. Обновите страницу и попробуйте снова.");
        return;
    }

    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        alert("Уравнение имеет два решения.");
    } else if (discriminant === 0) {
        alert("Уравнение имеет одно решение.");
    } else {
        alert("Уравнение не имеет решений.");
    }

    // 4. Проверка треугольника
    const side1 = parseFloat(prompt("Введите длину стороны 1:"));
    const side2 = parseFloat(prompt("Введите длину стороны 2:"));
    const side3 = parseFloat(prompt("Введите длину стороны 3:"));

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        alert("Одна из длин сторон не является числом. Обновите страницу и попробуйте снова.");
        return;
    }

    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        alert("Эти стороны могут быть длинами треугольника.");
    } else {
        alert("Эти стороны не могут быть длинами треугольника.");
    }

    // 5. Поиск пары с максимальной суммой
    const num1 = parseFloat(prompt("Введите число 1:"));
    const num2 = parseFloat(prompt("Введите число 2:"));
    const num3 = parseFloat(prompt("Введите число 3:"));
    const num4 = parseFloat(prompt("Введите число 4:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        alert("Одно из введенных значений не является числом. Обновите страницу и попробуйте снова.");
        return;
    }

    const methodChoice = prompt("Выберите метод вычисления: 1 или 2:");

    switch (methodChoice) {
        case "1":
            // Способ 1: Использование Math.max
            const sum1 = num1 + num2;
            const sum2 = num1 + num3;
            const sum3 = num1 + num4;
            const sum4 = num2 + num3;
            const sum5 = num2 + num4;
            const sum6 = num3 + num4;
            const maxSum = Math.max(sum1, sum2, sum3, sum4, sum5, sum6);
            alert(`Максимальная сумма пар: ${maxSum}`);
            break;
        case "2":
            // Способ 2: Простое сравнение
            let max = num1 + num2;
            if (num1 + num3 > max) max = num1 + num3;
            if (num1 + num4 > max) max = num1 + num4;
            if (num2 + num3 > max) max = num2 + num3;
            if (num2 + num4 > max) max = num2 + num4;
            if (num3 + num4 > max) max = num3 + num4;
            alert(`Максимальная сумма пар: ${max}`);
            break;
        default:
            alert("Некорректный выбор метода. Обновите страницу и попробуйте снова.");
    }
}

main();
