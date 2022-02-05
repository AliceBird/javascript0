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
    calcSavedMoney: {},
    getInfoDeposit: {},
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
    /** функция опроса */
    asking: function () {
        function checkIsString(str) {
            return (typeof (str) === 'string' || str instanceof String)
        }

        if (confirm('Есть ли у вас дополнительный заработок?')) {
            let itemIncome;
            do {
                itemIncome = prompt('Какой у вас дополнительый заработок?', 'массаж');
            }
            while (itemIncome === '' || itemIncome === null || !checkIsString(itemIncome))

            let cashIncome;
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '20000');
            } while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null)

            appData.addIncome.push({itemIncome: itemIncome, cashIncome: cashIncome});
        }
        //
        // if (confirm('Есть ли у вас дополнительный заработок?')) {
        //     let itemIncome = prompt('Какой у вас дополнительый заработок?', 'таксую');
        //
        //     if (typeof (itemIncome) === 'string' || itemIncome instanceof String) {
        //         return true;
        //     }
        // } else {
        //     return false;
        // }
        // if (confirm('Сколько в месяц вы на этом зарабатываете?')) {
        //     let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '20 000');
        //
        //     while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null) {
        //         cashIncome = prompt('Ваш месячный доход?', 70000);
        //     }
        //     appData.addIncome = cashIncome;
        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Комуналка, бензин, еда..');
        console.log(appData.addExpenses);

        const toUpperCaseFirstLetter = (word) => {
            let newWord = toUpperCaseFirstLetter[0];
            return newWord().toLocaleUpperCase(newWord);

                // .toLocaleUpperCase();
            // newWord();
            //**
            // создать переменную newWord
            // присвоить значение word
            // обратиться к 0 символу newWord посредсвам [0]
            // для данного символа вызвать toUpperCase
            //вернуть newWord
            // */
        }

        console.log(toUpperCaseFirstLetter);
        appData.addExpenses = appData.addExpenses.toUpperCase().split(',', ' ');

        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
}

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
// appData.getInfoDeposit = function () {
//     if (appData.deposit) {
//         appData.percentDeposit = prompt('Какой годовой процент?', '10');
//
//         appData.moneyDeposit = prompt('Какая сумма заложена', '1000000');
//     }
// };

appData.percentDeposit = function () {
    money = prompt('Какой годовой процент?', '10');

    while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null) {
        appData.percentDeposit = prompt('А всё таки, какой годовой прощент?', 10);
        console.log('percentDeposit: ', appData.percentDeposit);

    }
};

appData.moneyDeposit = function () {
    money = prompt('Какая сумма заложена', '1000000');

    while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null) {
        appData.moneyDeposit = prompt('А всё таки, какая сумма заложена', 1000000);
        console.log('moneyDeposit: ', appData.moneyDeposit);

    }
};
appData.moneyDeposit();
appData.percentDeposit();

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
    if (appData.budgetDay < 3000) {
        return ('Низкий уровень дохода');
    } else if (appData.budgetDay <= 8000) {
        return ('Средний уровень дохода');
    } else if (appData.budgetDay > 8000) {
        return ('Высокий уровень дохода');
    }
};

appData.getStatusIncome();

if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
} else {
    console.log('Цель не будет достигнута');
}
;

console.log(appData.getStatusIncome());

appData.getBudget();


appData.calcSavedMoney = function () {
    return appData.budgetMonth * appData.period;
};
// console.log(appData.calcSavedMoney);
// appData.calcSavedMoney();
// appData.getcalcSavedMoney = appData.calcSavedMoney();

// appData.getInfoDeposit();
// console.log(appData.calcSavedMoney);
// console.log(appData.moneyDeposit, appData.percentDeposit, appData.calcSavedMoney());
// // console.log(calcSavedMoney());


//Задание:Что значит проверка данных: где должен быть текст
// там только текст, где цифры только цифры!
// Если проверку не прошло, то переспрашивать!
// moneyDeposit сумма депозита****
//
// percentDeposit годовой процент депозита****
//
// cashIncome  сумма дополнительного заработка
//
// appData.itemIncome
// ввод статьи обязательных расходов


