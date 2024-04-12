//Задание 1
let a = 10;
alert(a);
alert(a * 2);
//Задание 2
const firstIphoneYear = 2007;
alert(`Первый iPhone был выпущен в ${firstIphoneYear} году`);
//Задание 3
const nameCreator = `Brandan Eich`;
alert(`создателем языка JavaScript был ${nameCreator}`);
//Задание 4
let y = 10;
let x = 2;
alert(y + x);
alert(y - x);
alert(y * x);
alert(y / x);
//Задание 5
let result = 2**5;
alert(result);
//Задание 6
let a1 = 9;
let b = 2; 
alert(a1 % b);
//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
//Задание 8
let age = (prompt(`Сколько вам лет?`));
alert(age);
//Задание 9
const user = {
    name: 'Igor',
    age: 21,
    isAdmin: true
};
//Задание 9.1
user.cityOfResidence = true;
//Задание 9.2
user.cityOfResidence = false;
//Задание 9.3
delete user.cityOfResidence;
//Задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user.info);
//Задание 10
let name = prompt(`Укажите имя`);
alert(`Привет` + name + `!`);
