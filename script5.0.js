'use strict';

let money;
let income = 'freelance';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Комуналка, бензин, еда..');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 100000;
let period = 12;


//1)  Переписать функцию  start с цикла while на do while
let start = () => {
    do {
        money = prompt('Ваш месячный доход?', 70000);
        // console.log('money: ', money);
    } while (isNaN(money) || money === '' || money === null);
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


// console.log(addExpenses.toLocaleLowerCase().split(','));
//
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const getExpensesMonth = function () {
    let sum = 0;
    expenses1 = prompt('Введите обязательную статью расходов?', 'Кварллата');
    sum += +prompt('Во сколько это обойдется?', 3500);
    do {
        expenses2 = prompt('Введите обязательную статью расходов?', 'Бензин');
    } while (expenses2 === '' || expenses2 === null);
    sum += +prompt('Во сколько это обойдется?', 3500);
    return sum;
};
let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount)

let getAccumulatedMonth = function () {
    return money - expensesAmount()
};

// 3  Если getTargetMonth возвращает нам отрицательное значение,
// то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
let getTargetMounth = function () {
    return mission / expensesAmount;
};

let getTargetMonth = (mission, budgetMonth) => {
    return Math.ceil(mission / budgetMonth);
};
while (getTargetMonth < 0) {
    alert("Цель не будет достигнута ");
}

console.log("Цель будет достигнута за " + Math.ceil(getTargetMounth()) + 'месяца');


// 4) Если budgetDay отрицательное значение, то
// вместо уровня дохода пусть выводится сообщение “Что то пошло не так”
let budgetDay = getAccumulatedMonth () / 30;


let getStatusIncome = function () {
    if (budgetDay < 0) {
        return ('Что то пошло не так');
    } else if (budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (budgetDay <= 800) {
        return ('Средний уровень дохода');
    } else if (budgetDay > 800) {
        return ('Высокий уровень дохода');
    }
};

console.log(getStatusIncome());