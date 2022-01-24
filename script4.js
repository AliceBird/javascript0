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

let mission = 1000000;

let period = 12;
// console.log(`Период равен ${period} месяцев.
//     Цель заработать ${mission} рублей/долларов/гривен/юани`);
// console.log(addExpenses.toLocaleLowerCase().split(', '));

let expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'gasoline');
let amount1 = +prompt('Во сколько это обойдется?', '5000');
let expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'food');
let amount2 = +prompt('Во сколько это обойдется?', '30000');


// задание 4

//Функция возвращает сумму всех расходов за месяц
const getExpensesMonth = () => {
    if (!amount1) {
        amount1 = 0;
    }
    if (!amount2) {
        amount2 = 0;
    }
    return amount1 + amount2;
};

//console.log('Расходы за месяц: ',getExpensesMonth)
//Функция возвращает Накопления за месяц (Доходы минус расходы)

let getAccumulatedMonth = (moneyMonth, expensesMonth) => {
    if (!moneyMonth) {
        moneyMonth = 0;
    }
    return moneyMonth - expensesMonth;
};
//console.log('Накопления за месяц: ', getAccumulatedMonth (money, getExpensesMonth()) );


//Подсчитывает за какой период будет достигнута цель,
// зная результат месячного накопления и возвращает результат
const getTargetMonth = (Mymiss, budgetMonth) => {
    return Math.ceil(Mymiss / budgetMonth);
};

const budgetDay = getAccumulatedMonth / 30;

const showTypeof = (data) => {
    console.log(data, typeof (data));
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);


const getStatusIncome = (budget) => {
    return isNaN(budget) ? 'Упс! Где-то закралась ошибка ...' :
        (budget < 0) ? 'Что то пошло не так' :
            (budget < 600) ? 'Что то пошло не так' :
                (budget === 600) ? 'У вас почти средний уровень дохода, но немного не хватает...' :
                    (budget < 1200) ? 'У вас средний уровень дохода' :
                        (budget === 1200) ? 'У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!' :
                            'У вас высокий уровень дохода';
};

console.log('getStatusIncome(): ', getStatusIncome(budgetDay));
