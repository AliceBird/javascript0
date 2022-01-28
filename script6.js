'use strict';
let money;

let start = function () {
    money = prompt('Ваш месячный доход?', 500000);

    while (isNaN(money) || money === '' || money === null) {
        money = prompt('Ваш месячный доход?', 70000);
        console.log('money: ', money);

    }
};
start();

// const array = [1, 2, 3];
// const obj = {
//     'alisa': 1,
//     '1': 2,
//     '2': 3,
//
// };
// console.log(obj["alisa"]);
// console.log(obj.alisa);
// obj.alisa1 = 123;
// obj.alisa1 = 321;
// console.log(obj.alisa1);

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
        appData.expenses += +prompt('expenses ' ,  50000);
    }
};

//1) Функцию showTypeof удаляем
let expenses1,
    expenses2;

// 2) В объект appData добавить
// свойство budget которое будет принимать значение money
appData.budget = money;
appData.expenses = appData.getExpensesMonth;
appData.expensesMonth = appData.key;

//3) В объект appData добавить свойства  budgetDay, budgetMonth
// и expensesMonth, изначально равные нулю
appData.budgetDay = 0;
appData.budgetMonth = 0;
appData.expensesMonth = 0;
appData.getAccumulatedMonth = 0;
console.log(appData)
//4) Функции getExpensesMonth, getAccumulatedMonth, getTargetMonth,
// getStatusIncome - сделать методами объекта AppData
// appData.getTargetMonth = function () {
//
// };
// appData.getStatusIncome = function () {
//
// };

//6) Из метода  getExpensesMonth перенести цикл в метод asking, и
// переписать цикл таким образом чтобы результат записывался в объект
// appData.expenses в формате:
// expenses: {
//     “ответ на первый вопрос” : “ответ на второй вопрос”,
//     “ответ на первый вопрос” : “ответ на второй вопрос”
//     }
//
appData.getExpensesMonth = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            expenses1 = prompt('ответ на первый вопрос:', 'ответ1');
        }
        if (i === 1) {
            expenses2 = prompt('ответ на первый вопрос:', 'ответ1');

        }
        sum += +prompt('ответ на первый вопрос?', 123);
    }

    return sum;
};
appData.expenses = appData.getExpensesMonth();
//7) Метод getExpensesMonth(Функция возвращает сумму всех расходов за месяц)
// будет считать сумму всех обязательных расходов
// и сохранять результат в свойство expensesMonth!!!!
// для того, чтобы посчитать сумму используйте цикл for in

// appData.getExpensesMonth = appData.expenses();
// appData.expenses = appData.getExpensesMonth();
// console.log(appData.expenses('ответ на первый вопрос: ответ на второй вопрос' , ' ' ));



//8) getAccumulatedMonth(Функция возвращает Накопления за месяц (Доходы минус расходы))
// переименовать в getBudget.
// Этот метод будет считать budgetMonth и budgetDay
// (перенести эти команды в этот метод)
//План:
//1 переименовать getAccumulatedMonth в getBudget
//2,1 посчитать budgetMonth
//2.2 посчитать budgetDay
//3 вывести

appData.getAccumulatedMonth = function () {

};
// getAccumulatedMonth = getBudget;

//9) Вызвать все необходимые методы, чтобы корректно считались все данные. В консоль вывести:
// — Расходы за месяц - getExpensesMonth
// — За какой период будет достигнута цель (в месяцах) - getTargetMonth
//// let budgetDay = getAccumulatedMonth / 30;
//
// //
// // console.log("Цель будет достигнута за " + Math.ceil(getTargetMounth()) + 'месяца');
// //

// — Уровень дохода - //
// // let getStatusIncome = function () {
// //     if (budgetDay < 300) {
// //         return ('Низкий уровень дохода');
// //     } else if (budgetDay <= 800) {
// //         return ('Средний уровень дохода');
// //     } else if (budgetDay > 800) {
// //         return ('Высокий уровень дохода');
// //     }
// // };
// //
// // console.log(getStatusIncome());
// appData.getTargetMonth = function () {
//
// };
//
// appData.getStatusIncome = function () {
//
// };


// 10) Используя цикл for in для объекта (appData), вывести в консоль сообщение
// "Наша программа включает в себя данные: " (вывести весь appData)
// for (let key in appData){
//     console.log('Наша программа включает в себя данные: ' + key + ' Значение: ' + appData[key]);
// };

// console.log(Object.keys(appData).length);

// let expensesAmount = getExpensesMonth();
// console.log('Расходы за месяц: ' + expensesAmount)

//console.log('Расходы за месяц: ',getExpensesMonth)
//Функция возвращает Накопления за месяц (Доходы минус расходы)
// let getAccumulatedMonth = function () {
//     return money - expensesAmount()
// };
//
// let getTargetMouth = function () {
//     return appData.mission / expensesAmount();
// };


//Подсчитывает за какой период будет достигнута цель,
// зная результат месячного накопления и возвращает результат
// const getTargetMonth = (Mymiss, budgetMonth) => {
//     return Math.ceil(Mymiss / budgetMonth);
// };
//
// let budgetDay = getAccumulatedMonth / 30;

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
