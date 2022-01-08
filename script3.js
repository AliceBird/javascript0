'use strict';

// let a = 5;
// console.log('a: ', a);
//
// // let question = confirm('тебе есть 118 лет?');
// // console.log(question);
//
// // console.log(confirm('тебе есть 118 лет?'));
//
// let question2 = prompt('How old are you?', '118');
// console.log(question2);

let money = +prompt ("Ваш месячный доход?", '2500000')
console.log('type money: ', typeof money);

let income = 'freelance';
console.log('type income: ', typeof income);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Комуналка, бензин, еда..');
console.log('type addExpenses:', typeof addExpenses);
// //addExpenses вывести в виде массива//
//
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('type deposit: ', typeof deposit);

let mission = 1000000;

let period = 12;
console.log(`Период равен ${period} месяцев.
    Цель заработать ${mission} рублей/долларов/гривен/юани`);
console.log(addExpenses.toLocaleLowerCase().split(', '));

let question1 = ('Какие обязательные ежемесячные расходы у вас есть?' , 'gasoline');
let question2 = ('Во сколько это обойдется?', '5000');
let question3 = ('Какие обязательные ежемесячные расходы у вас есть?', 'food');
let question4 = ('Во сколько это обойдется?', '30000');

let budgetMonth =  Number(money) - (Number(question2)) + (Number(question4));
if (isNaN(budgetMonth)) {
    console.log('Упс! Где-то закралась ошибка... Дальнейшее выполнение остановлено.');
} else {
    console.log('Бюджет на месяц: ', budgetMonth);

    console.log('Цель будет достигнута за: ${Math.ceil(mission / budgetMonth)} месяцев');
}


// Задание
// if budgetDay > 800
//     else “Высокий уровень дохода”
//
// //Если budgetDay больше 300 и меньше 800,
// // то сообщение “Средний уровень дохода”
//
// if budgetDay <300 and <800 “Средний уровень дохода”
//
// //Если budgetDay больше 0 и меньше 300 то в консоль
// // вывести сообщение “Низкий уровень дохода”
//
// if budgetDay <0 and <300 “Низкий уровень дохода”
//
// //Если отрицательное значение то вывести “Что то пошло не так”
//
// if budgetDay >0 “Что то пошло не так”
//
// //учесть варианты 0, 300 и 800


let budgetDay = (budgetMonth / 30);
console.log('Бюджет на день: ', Math.floor(budgetDay));

if (budgetDay === 800) {
    console.log('Высокий уровень дохода')
} else if (budgetDay === 300) {
    console.log('Средний уровень дохода')
} else if (budgetDay === 0) {
    console.log('Низкий уровень дохода')
} else if (budgetDay > 800) {
    console.log('Очень высокий уровень дохода')
} else if (budgetDay < 800 && budgetDay > 300) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
} else {
    console.log('К сожалению у вас уровень дохода ниже среднего');
}



// вариант 2 (тернарный оператор)
// console.log(isNaN(budgetDay) ? 'Упс! Где-то закралась ошибка...' :
//     (budgetDay < 0) ? 'Что то пошло не так' :
//         (budgetDay < 600) ? 'Что то пошло не так' :
//             (budgetDay === 600) ? 'У вас почти средний уровень дохода, но немного не хватает...' :
//                 (budgetDay < 1200) ? 'У вас средний уровень дохода' :
//                     (budgetDay === 1200) ? 'У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!' :
//                         'У вас высокий уровень дохода');
// }