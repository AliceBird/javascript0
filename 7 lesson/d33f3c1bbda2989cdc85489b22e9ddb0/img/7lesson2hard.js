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
let tag1 = document.querySelectorAll('button')[0];
let tag2 = document.querySelectorAll('button')[1];

//получить чекбокс по id через querySelector
let checkBox = document.querySelector('#start');
console.log(checkBox);

//Получить поля для ввода возможных доходов (additional_income-item)
// при помощи querySelectorAll
let additionalIncomeItem1 = document.querySelectorAll('.additional_income-item')[0];
let additionalIncomeItem2 = document.querySelectorAll('.additional_income-item')[1];
console.log(additionalIncomeItem1, additionalIncomeItem2);

//Получить все блоки в правой части программы через классы
// (которые имеют класс название-value,
// начиная с class="budget_day-value" и
// заканчивая class="target_month-value">)



let targetMonthValue = document.querySelector('target_month-value');
console.log(targetMonthValue);

let incomePeriodValue = document.querySelector('income_period-value');
console.log(incomePeriodValue);

let additionalExpensesValue = document.querySelector('additional_expenses-value');
console.log(additionalExpensesValue);


let additionalIncomeValue = document.querySelector('additional_income-value');
console.log(additionalIncomeValue);

let expensesMonthValue = document.querySelector('expenses_month-value');
console.log(expensesMonthValue);

let budgetDayValue = document.querySelector('budget_day-value');
console.log(budgetDayValue);

let budgetMonthValue = document.querySelector('budget_month-value');
console.log( budgetMonthValue);

//Получить оставшиеся поля через querySelector каждый в отдельную переменную
// (Инпуты с левой стороны не забудьте про range)
let periodSelect = document.querySelector('period-select');
console.log(periodSelect);

let targetAmount = document.querySelectorAll('target-amount');
console.log(targetAmount);

let depositCheck = document.querySelector('deposit-check');
console.log(depositCheck);



