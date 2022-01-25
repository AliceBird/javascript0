'use strict';

let money = +prompt("Ваш месячный доход?", '2500000')
// console.log('type money: ', typeof money);

let income = 'freelance';
// console.log('type income: ', typeof income);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Комуналка, бензин, еда..');
// console.log('type addExpenses:', typeof addExpenses);
// //addExpenses вывести в виде массива//
//
let deposit = confirm('Есть ли у вас депозит в банке?');
// console.log('type deposit: ', typeof deposit);

let mission = 100000;

let period = 12;
// console.log(`Период равен ${period} месяцев.
//     Цель заработать ${mission} рублей/долларов/гривен/юани`);
// console.log(addExpenses.toLocaleLowerCase().split(', '));


let start = function() {
    money = prompt('Ваш месячный доход?', 50000);

    while(isNaN(money) || money === '' || money === null){
        money = prompt('Ваш месячный доход?', 70000);
        console.log('money: ', money);

    }
};

start();

let expenses1,
    expenses2;

const showTypeof = (data) => {
    console.log(data, typeof (data));
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

// задание 4
console.log(addExpenses.toLocaleLowerCase().split(','));

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
//
//     if (!amount1) {
//         amount1 = 0;
//     }
//     if (!amount2) {
//         amount2 = 0;
//     }
//     return amount1 + amount2;
// };

//console.log('Расходы за месяц: ',getExpensesMonth)
//Функция возвращает Накопления за месяц (Доходы минус расходы)
let getAccumulatedMonth = function () {
    return money - expensesAmount()
};

let getTargetMouth = function () {
    return mission / expensesAmount();
};
// let getAccumulatedMonth = (moneyMonth, expensesMonth) => {
//     if (!moneyMonth) {
//         moneyMonth = 0;
//     }
//     return moneyMonth - expensesMonth;
// };
//console.log('Накопления за месяц: ', getAccumulatedMonth (money, getExpensesMonth()) );


//Подсчитывает за какой период будет достигнута цель,
// зная результат месячного накопления и возвращает результат
const getTargetMonth = (Mymiss, budgetMonth) => {
    return Math.ceil(Mymiss / budgetMonth);
};

let budgetDay = getAccumulatedMonth / 30;


//
// const getStatusIncome = (budget) => {
//           (budget < 0) ? 'Что то пошло не так' :
//         (budget < 600) ? 'Что то пошло не так' :
//             (budget === 600) ? 'У вас почти средний уровень дохода, но немного не хватает...' :
//                 (budget < 1200) ? 'У вас средний уровень дохода' :
//                     (budget === 1200) ? 'У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!' :
//                         'У вас высокий уровень дохода';
// };
console.log("Цель будет достигнута за " + Math.ceil(getTargetMounth()) + 'месяца');

let getStatusIncome = function () {
    if (budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (budgetDay <= 800) {
        return ('Средний уровень дохода');
    } else if (budgetDay > 800) {
        return ('Высокий уровень дохода');
    }
};

console.log(getStatusIncome());