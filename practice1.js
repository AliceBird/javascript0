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

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 5000000,
    period: 10,
    asking: function () {
        {
            if (confirm('Есть ли у вас дополнительный заработок?')) {
                let itemIncome = prompt('Какой у вас дополнительый заработок?', 'таксую');
                let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '20 000');
                appData.income[itemIncome] = cashIncome;
                console.log(cashIncome);
            }

            appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Комуналка, бензин, еда..');
            console.log(appData.addExpenses);
            appData.addExpenses = appData.addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

        }

    }
};
// appData.getInfoDeposit = 0;
let getInfoDeposit = function () {
    if (appData.deposit) {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
        appData.moneyDeposit = prompt('Какая сумма заложена', '1000000');
    }
};
appData.getInfoDeposit = getInfoDeposit();

let calcSavedMoney = function () {
    return appData.budgetMonth * appData.period;
};

appData.calcSavedMoney = calcSavedMoney();


console.log(appData.getInfoDeposit);
console.log(appData.calcSavedMoney);

let expenses1,
    expenses2;

appData.asking();

appData.budgetDay = 0;
appData.budgetMonth = 0;
appData.expensesMonth = 0;
console.log(appData)

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

appData.getExpensesMonth = function () {
    for (let key in appData.expenses) {
        appData.expensesMonth += +appData.expenses[key];
    }
};
// appData.budget = appData.getBudget();
appData.getExpensesMonth();
console.log(appData.expensesMonth);

appData.getAccumulatedMonth = function () {
    if (!appData.budget) {
        appData.budget = 0;
    }
    return appData.budget - appData.expensesMonth;
};
appData.getBudget = function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
};

console.log(appData.getBudget());
appData.budgetDay = appData.getAccumulatedMonth() / 30;
console.log(appData.budgetDay);


appData.getTargetMonth = () => {
    return Math.ceil(appData.mission / appData.budgetMonth);
};

appData.TargetMonth = appData.getTargetMonth();
console.log(appData.getTargetMonth());

appData.getStatusIncome = function () {
    if (appData.budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (appData.budgetDay <= 800) {
        return ('Средний уровень дохода');
    } else if (appData.budgetDay > 800) {
        return ('Высокий уровень дохода');
    }
};

appData.getStatusIncome();

if (appData.getTargetMonth() > 0
) {
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
} else {
    console.log('Цель не будет достигнута');
}
;

console.log(appData.getStatusIncome());
//
// for (let key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// };
appData.getBudget();
// appData.getTargetMonth();


// console.log(Object.keys(appData).length);

// console.log('Расходы за месяц: ' + appData.expensesMonth);