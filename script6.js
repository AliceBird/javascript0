'use strict';
let money;
// = +prompt("Ваш месячный доход?", '2500000');
// console.log('type money: ', typeof money);

let start = function () {
    money = prompt('Ваш месячный доход?', 500000);

    while (isNaN(money) || money === '' || money === null) {
        money = prompt('Ваш месячный доход?', 70000);
        console.log('money: ', money);

    }
};
// start();

const array = [1, 2, 3];
const obj = {
    'alisa': 1,
    '1': 2,
    '2': 3,

};
console.log(obj["alisa"]);
console.log(obj.alisa);
obj.alisa1 = 123;
obj.alisa1 = 321;
console.log(obj.alisa1);


let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 5000000,
    period: 10,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Комуналка, бензин, еда..');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
};

//1) Функцию showTypeof удаляем
//
// const showTypeof = (data) => {
//     console.log(data, typeof (data));
// };
//
// showTypeof(appData.money);
// showTypeof(appData.income);
// showTypeof(appData.deposit);
let expenses1,
    expenses2;

// 2) В объект appData добавить
// свойство budget которое будет принимать значение money

appData.budget = money;




//3) В объект appData добавить свойства  budgetDay, budgetMonth
// и expensesMonth, изначально равные нулю
appData.budgetDay = 0;
appData.budgetMonth = 0;
appData.expensesMonth = 0;
console.log(appData)
//4) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth,
// getStatusIncome - сделать методами объекта AppData

appData.getExpensesMonth = function () {

};
appData.getAccumulatedMonth = function () {

};
appData.getTargetMonth = function () {

};
appData.getStatusIncome = function () {

};

// console.log(addExpenses.toLocaleLowerCase().split(','));

//Функция возвращает сумму всех расходов за месяц
const getExpensesMonth = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?', 'Кварллата');
        }
        if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?', 'Бензин');

        }
        sum += +prompt('Во сколько это обойдется?', 3500);
    }

    return sum;
};

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount)

//console.log('Расходы за месяц: ',getExpensesMonth)
//Функция возвращает Накопления за месяц (Доходы минус расходы)
let getAccumulatedMonth = function () {
    return money - expensesAmount()
};

let getTargetMouth = function () {
    return appData.mission / expensesAmount();
};


//Подсчитывает за какой период будет достигнута цель,
// зная результат месячного накопления и возвращает результат
const getTargetMonth = (Mymiss, budgetMonth) => {
    return Math.ceil(Mymiss / budgetMonth);
};

let budgetDay = getAccumulatedMonth / 30;

//
// console.log("Цель будет достигнута за " + Math.ceil(getTargetMounth()) + 'месяца');
//
// let getStatusIncome = function () {
//     if (budgetDay < 300) {
//         return ('Низкий уровень дохода');
//     } else if (budgetDay <= 800) {
//         return ('Средний уровень дохода');
//     } else if (budgetDay > 800) {
//         return ('Высокий уровень дохода');
//     }
// };
//
// console.log(getStatusIncome());
