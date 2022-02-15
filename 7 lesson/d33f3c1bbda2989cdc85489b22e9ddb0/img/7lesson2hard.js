'use strict';
// alert("Привет. Мир!");

let money = 158;
console.log(money);
let income = 170000;
console.log(income);
let addExpenses = 20000;
console.log(addExpenses);
let deposit = 50000;
console.log(deposit);
let mission = "win?";
console.log(mission);
let period = 3;
console.log(period);

let text = "Text about anything";
console.log(text)

//Получить кнопку "Рассчитать" через id
let btn = document.getElementById('start');
console.log(btn);

//Получить кнопки “+” (плюс) через Tag, каждую в своей переменной.
let tag1 = document.getElementsByTagName('.data .btn_plus');
let tag2 = document.getElementsByTagName('btn_plus expenses_add');
console.log(tag1);
console.log(tag2);

//получить чекбокс по id через querySelector
let checkBox = querySelector('#deposit\\check');
console.log(checkBox);

