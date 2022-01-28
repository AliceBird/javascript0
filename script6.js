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
        appData.addExpenses = +prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Комуналка, бензин, еда..');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

    }
};

let expenses1,
    expenses2;


// 2) В объект appData добавить
// свойство budget которое будет принимать значение money
appData.budget = money;
// appData.expenses = appData.getExpensesMonth;
appData.expensesMonth = appData.key;

//3) В объект appData добавить свойства  budgetDay, budgetMonth
// и expensesMonth, изначально равные нулю
appData.budgetDay = 0;
appData.budgetMonth = 0;
appData.expensesMonth = 0;
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

appData.getExpensesMonth = function () {
    const inputExpenses = {};
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            expenses1 = prompt('введите цель накоплений', 'car');
            // console.log('expenses ' + 'ответ на первый вопрос:' + 'ответ на второй вопрос' );
            do {
                inputExpenses[expenses1] = prompt('Сколько в месяц откладывать?', 5000);
            } while (isNaN(inputExpenses[expenses1]) || inputExpenses[expenses1] === '' || inputExpenses[expenses1] === null);
        }
        if (i === 1) {
            expenses2 = prompt('введите цель накоплений', 'house');
            // console.log('expenses ' + 'ответ на первый вопрос:' + 'ответ на второй вопрос' );
            do {
                inputExpenses[expenses2] = prompt('Сколько в месяц откладывать?', 5000);
            } while (isNaN(inputExpenses[expenses2]) || inputExpenses[expenses2] === '' || inputExpenses[expenses2] === null);
        }
    }
    return inputExpenses;

};

appData.expenses = appData.getExpensesMonth();

//7) Метод getExpensesMonth(Функция возвращает сумму всех расходов за месяц)
// будет считать сумму всех обязательных расходов
// и сохранять результат в свойство expensesMonth!!!!
// для того, чтобы посчитать сумму используйте цикл for in

appData.getExpensesMonth = function () {
    for (let key in appData.expenses){
        appData.expensesMonth += +appData.expenses[key];
}
 // appData.expensesMonth = appData.getExpensesMonth();

};

//8) getAccumulatedMonth(Функция возвращает Накопления за месяц (Доходы минус расходы))
//To do list
//1 переименовать в getBudget.
//2 Этот метод будет считать budgetMonth и budgetDay
//3 (перенести эти команды в этот метод)

// appData.getAccumulatedMonth = 0;
// let getBudget = appData.getAccumulatedMonth;

//НАКОПЛЕНИЯ ЗА МЕСЯЦ/БЮДЖЕТ МЕСЯЦА?
// appData.getAccumulatedMonth = () => {
//     if (!appData.budget) {
//         appData.budget = 0;
//     }
//     return appData.budget - appData.expenses;
// };
//
// appData.budgetDay = appData.getAccumulatedMonth() / 30;
//
// let getBudget = appData.getAccumulatedMonth;
// console.log(getBudget('getBudget' + ' '));
// appData.budgetMonth = getBudget();


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log();
// appData.budgetMonth = ;
// appData.budgetDay = getBudget/30;
// console.log(appData.budgetDay());
// appData.budgetDay

// console.log(appData.expenses ('getBudget' + ' '));
// console.log(getBudget);
// appData.getBudget = appData.getAccumulatedMonth;
// appData.getBudget = appData.getAccumulatedMonth();

// appData.getBudget = getAccumulatedMonth();

//9) Вызвать все необходимые методы, чтобы корректно считались все данные. В консоль вывести:
//1 — Расходы за месяц - getExpensesMonth
//2 — За какой период будет достигнута цель (в месяцах) - getTargetMonth
//// let budgetDay = getAccumulatedMonth / 30;
//
// //
// // console.log("Цель будет достигнута за " + Math.ceil(getTargetMounth()) + 'месяца');
// //

//3— Уровень дохода - //
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
appData.getTargetMonth = function () {

};

appData.getStatusIncome = function () {

};


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

