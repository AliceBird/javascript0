'use strict';

//Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу
//
// через if,
//
// через switch-case
//
// через многомерный массив без ифов и switch.

let lang = 'ru';
if (lang === 'ru') {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');

} else if (lang === 'en') {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

} else {
    console.log('Непредвиденное значение!')
}

switch (lang) {
    case 'ru':
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;
    case 'en':
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

        break;
    default:
        console.log('Непредвиденное значение!')
}


let langArr = [];
langArr.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье')];
langArr.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log('langArr(Lang)');

const langArray = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(langArray[lang]);

