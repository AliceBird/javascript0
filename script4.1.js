'use strict'

const getTrimString = (str) => {
    // Если как аргумент передана не строка -
    // функция оповещает об этом пользователя
    if (typeof str !== 'string') {
        // alert('Упс! Где-то закралась ошибка ...');
             return ('Упс! Где-то закралась ошибка ...');
    }
 let string = str.trim();
    // console.log(string);
    return string.length > 30 ? string.slice(0, 30) + '...' : str;
}
let string = '   this is the best idea I thing its better and   '
//     string = string.trim();
//В полученной (как аргумент) строке функция
// должна убрать все пробелы в начале и в конце

//Если строка более 30 знаков - то после 30го символа часть
// текста скрывается и вместо них появляются три точки (...)

console.log(getTrimString(string))