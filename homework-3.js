//Задание 1
let password = String(prompt(`Введите пароль`));
let check;
if (password === `12345`) {
    check = `Пароль верный`
} else {
    check = `Пароль введен неправильно`
}
alert(check);

//Задание 2
let number = prompt(`Назовите число`);
if (number > 0 && number < 10) {
    number = `Верно`
} else {
    number = `Не верно`
}

//Задание 3
let d = prompt(`Введите первое число`);
let e = prompt(`Введите второе число`);
if (d > 100 || e > 100) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}

//Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = prompt(`К какому сезону относится месяц?`);
switch (monthNumber) {

    case `12`:
        console.log(`Зима`);
        break;

    case `1`:
        console.log(`Зима`);
        break;

    case `2`:
        console.log(`Зима`);
        break;
        
    case `3`:
        console.log(`Весна`);
        break;       

    case `4`:
        console.log(`Весна`);
        break;
            
    case `5`:
        console.log(`Весна`);
        break;  

    case `6`:
        console.log(`Лето`);
        break;
        
    case `7`:
        console.log(`Лето`);
        break;
        
    case `8`:
        console.log(`Лето`);
        break;
        
    case `9`:
        console.log(`Осень`);
        break;
        
    case `10`:
        console.log(`Осень`);
        break;
        
    case `11`:
        console.log(`Осень`);
        break;        
        
    default:
    case `13`: console.log(`Нет месяца`);
        break;
}

//Задание 6 (Адаптация сайта)

//Задание 7 (дополнительное)
let num = String(prompt(`Пожалуйста, введите любое число`));
if (num % 2 === 0) {
    alert(`Верно`);
} else {
    alert(`Неверно`);
}

//Задание 8 (дополнительное)
let clientOS = prompt(``);
switch (clientOS) {
    case `0`:
        alert(`Установите версию приложения для iOS по ссылке`)
    case `1`:
        alert(`Установите версию приложения для Android по ссылке`)
    default:
        break;
}

//Задание 9 (дополнительное)
let clientDeviceYear = Date(prompt(`Какого года у вас телефон?`));
const client = {client:`2015`};
if (client >= 2015) {
    console.log(`Установите версию приложения для iOS по ссылке`);
    console.log(`Установите версию приложения для Android по ссылке`);
} else {
    switch (clientDeviceYear) {
        case `0`: alert(`Установите облегченную версию приложения для iOS по ссылке`);
        case `1`: alert(`Установите облегченную версию приложения для Android по ссылке`);

        default:
            break;
    }
}