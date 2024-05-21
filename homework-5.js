//Задание 1
let a = prompt(`число 1`);
let b = prompt(`число 2`);
function number() {
    if (a < b) {
        console.log(a);
    } else if (a > b) {
        console.log(b);
    }
}
number();

//Задание 2
let chet = prompt(`Введитпе число`);
function evenNumber() {
    if (chet % 2 === 0) {
        alert(`Число четное`);
    } else {
        alert(`Число нечетное`);
    }
}
evenNumber();

//Задание 3
let c = prompt(`Введите число`);
function squareNumber() {
    c = c ** 2;
    console.log(c);
}
squareNumber()

function returnSquareNumber(params) {
    c = c ** 2;
    return c;
}
returnSquareNumber();

//Задание 4
let how = prompt(`Сколько вам лет?`);
function yearsNumber(how) {
    if (how < 0 ) {
        return 'Вы ввели неправильное значение';
    } else if (how >= 0 && how <= 12) {
        return 'Привет, друг!';
    } else {
        return 'Добро пожаловать!';
    }
}
alert(yearsNumber(how));

//Задание 5
function trueIntNumber() {
    let firstIntNumber = prompt('Введите первое число');
    let lastIntNumber = prompt('Введите второе число');
    if (!firstIntNumber, !lastIntNumber) {
        return ('Одно или оба значения не являются числом');
    } else {
        return (firstIntNumber * lastIntNumber);
    }
}
trueIntNumber();

//Задание 6 
function backNumber() {

let numberFirst = prompt('Enter number');

if (!isNaN(numberFirst)) {
    const numberInCube = numberFirst ** 3;
    console.log(`n в кубе равняется ${numberInCube}`);

} else {
    console.log('Переданный параметр не являются числом');
}
}

backNumber();

//Задание 7
function getArea() {
    return Math.PI * this.radius ** 2;
}
function getPerimeter() {
    return 2 * this.radius * Math.PI;
}

const circle1 = {
    radius: 10,
    getCircleleArea: getArea,
    getirclelePerimeter: getPerimeter,
};
const circle2 = {
    radius: 14,
    getCircleleArea: getArea,
    getirclelePerimeter: getPerimeter,
};
console.log(circle1.getCircleleArea());
console.log(circle1.getirclelePerimeter());
console.log(circle2.getCircleleArea());
console.log(circle2.getirclelePerimeter());