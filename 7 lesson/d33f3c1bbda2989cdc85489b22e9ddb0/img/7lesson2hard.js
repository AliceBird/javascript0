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
let btn = document.getElementById('.start');
console.log(btn);

//Получить кнопки “+” (плюс) через Tag, каждую в своей переменной.
let tag1 = document.getElementsByTagName('.data .btn_plus');
let tag2 = document.getElementsByTagName('btn_plus expenses_add');
console.log(tag1);
console.log(tag2);

//получить чекбокс по id через querySelector
let checkBox = document.querySelector('#deposit\\check');
console.log(checkBox);

//Получить поля для ввода возможных доходов (additional_income-item)
// при помощи querySelectorAll
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
console.log(additionalIncomeItem);

//Получить все блоки в правой части программы через классы
// (которые имеют класс название-value,
// начиная с class="budget_day-value" и
// заканчивая class="target_month-value">)

let target_month = document.querySelectorAll('.value');
console.log(target_month);

// let income_period = document.querySelectorAll('.additional_income-item');
// console.log(income_period);
//
// let additional_expenses = document.querySelectorAll('.additional_income-item');
// console.log(additional_expenses);
//
// let additional_income = document.querySelectorAll('.additional_income-item');
// console.log(additional_income);
//
//
// let expenses_month = document.querySelectorAll('.additional_income-item');
// console.log(expenses_month);
//
// let budget_day = document.querySelectorAll('.additional_income-item');
// console.log(budget_day);
//
// let budget_month = document.querySelectorAll('.additional_income-item');
// console.log(budget_month);

//Получить оставшиеся поля через querySelector каждый в отдельную переменную
// (Инпуты с левой стороны не забудьте про range)
let periodSelect = document.querySelectorAll('period-select');
console.log();

let targetAmount = document.querySelectorAll('target-amount');
console.log(targetAmount);

let depositPercent = document.querySelectorAll('deposit-percent');
console.log(depositPercent);

let depositAmount = document.querySelectorAll('deposit-amount');
console.log(depositAmount);

let additionalExpensesTitle = document.querySelectorAll('additional_expenses-title');
console.log(additionalExpensesTitle);

let expensesAmount = document.querySelectorAll('expenses-amount');
console.log(expensesAmount);

let expensesTitle = document.querySelectorAll('expenses-title');
console.log(expensesTitle);

let addiIncomeItem = document.querySelectorAll('additional_income-item');
console.log(addiIncomeItem);

let incomeAmount = document.querySelectorAll('income-amount');
console.log(incomeAmount);

let incomeTitle = document.querySelectorAll('income-title');
console.log(incomeTitle);

let salaryAmount = document.querySelectorAll('salary-amount');
console.log(salaryAmount);
