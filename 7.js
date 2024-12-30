// 1. Функция, которая возвращает день недели словом
function Day_Week(dateString) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const date = new Date(dateString);
    return days[date.getDay()];
}

// 2. Функция, которая сообщает, сколько дней осталось до Нового года
function New_Year() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = newYear - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// 3. Функция, которая возвращает предыдущий, текущий и следующий дни недели
function Around_Days() {
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const today = new Date();
    const curr = today.getDay();
    return {
        prev: days[(curr + 6) % 7],
        curr: days[curr],
        next: days[(curr + 1) % 7]
    };
}

// 4. Функция для преобразования миллисекунд в дни, часы, минуты и секунды
function Milliseconds_to_Time(ms) {
    const seconds = Math.floor(ms / 1000);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return { d, h, m, s };
}

// 5. Функция, которая рассчитывает возраст в годах, месяцах и днях
function Age(birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

// 6. Заполнение массива датами всех "пятниц 13-го" в текущем году
function Fridays_13() {
    const year = new Date().getFullYear();
    const fridays13 = [];
    for (let month = 0; month < 12; month++) {
        const date = new Date(year, month, 13);
        if (date.getDay() === 5) {
            fridays13.push(date.toLocaleDateString());
        }
    }
    return fridays13;
}

// 7. Приветствие в зависимости от времени суток
function Greeting() {
    const hours = new Date().getHours();
    if (hours >= 6 && hours < 12) {
        return 'Доброе утро';
    } else if (hours >= 12 && hours < 18) {
        return 'Добрый день';
    } else if (hours >= 18 && hours < 24) {
        return 'Добрый вечер';
    } else {
        return 'Доброй ночи';
    }
}

// 8. Дни недели для официальных праздников
function Holidays() {
    const year = new Date().getFullYear();
    const holidays = [
        new Date(year, 0, 1),   // Новый год
        new Date(year, 1, 23),  // День защитника Отечества
        new Date(year, 2, 8),   // Международный женский день
        new Date(year, 4, 1),   // Праздник весны и труда
        new Date(year, 4, 9),   // День Победы
        new Date(year, 5, 12),  // День России
        new Date(year, 10, 4)   // День народного единства
    ];
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    return holidays.map(date => ({
        date: date.toLocaleDateString(),
        day: days[date.getDay()]
    }));
}

console.log('1. День недели:', Day_Week('2024-06-18'));
console.log('2. Дней до Нового года:', New_Year());
console.log('3. Дни недели вокруг текущего:', Around_Days());
console.log('4. Преобразование миллисекунд:', Milliseconds_to_Time(1234567890));
console.log('5. Возраст:', Age('2004-01-19'));
console.log('6. Пятницы 13-го:', Fridays_13());
console.log('7. Приветствие:', Greeting());
console.log('8. Праздники и дни недели:', Holidays());
