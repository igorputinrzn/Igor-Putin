//Задание 1
let i = 0;
while (i < 2) {
    console.log(`Привет`);
    i++
}

//Задание 2
let number = 1;
while (number <= 5) {
    console.log(number);
    number++
}

//Задание 3
let a = 7;
while (a <= 22) {
    console.log(a);
    a++
}

//Задание 4
const obj = {
    Коля : 200,
    Вася : 300,
    Петя : 400,
};
for (let many in obj) {
    console.log(`${many} -ЗП ${obj[many]} Долларов.`);
}

//Задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(`число:${n}`);
console.log(`интеграции:${num}`);

//Задание 6
let firstFriday = 5;
for (let i = firstFriday; i <= 31; i += 7) {
  console.log(`пятница, ${i}-е число.`);
}