//1) Создать массив arr = []
//
//
//
// — Записать в него 7 любых многозначных чисел в виде строк
//
// — Вывести в консоль только те, что начинаются
// с цифры 2 или 4 (Должны присутствовать в массиве)
// создать массив
//перебрать каждое значение массива
//проверить первую цифру каждого числа
//если начинается с 2 или 4
//вывести кв консоль

// const arr = ['2516', '36582', '222', '684', '49455', '6958', '42988'];
// const arr1 = ['2516'];
//
// const getNumbers = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i][0] == 2 || array[i][0] == 4) {
//             console.log(array[i]);
//         }
//     }
// }
// getNumbers(arr);
// getNumbers(arr1);

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// const String = ['monkey', 'elephant', 'cat', 'dog', 'tiger'];
// findLongestWord = () => {
//     let LongestWord = 0;
//     for (let i = 0; i < String.length; i++){
//         if (String[i].length > LongestWord) {
//             LongestWord = String[i].length;
//         }
//         // console.log(String[i]);
//     }
//     return LongestWord;
// }
// findLongestWord();
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//
// function array(arr, elem) {
//     for (let p = 2; p == arr.lenght;i++){
//         if (arr[p] === elem) {
//
//         }
//     }
//     return arr()
//         }
// console.log();

//
//
//
// //2) Вывести в столбик все простые числа от 1 до 100
// //
// // — Статья про простые числа - КЛИК
// //
// // — Рядом с каждым числом написать оба делителя данного числа
// //
// //     Например: “Делители этого числа: 1 и n”

// перебрать от 1 до определенного чилса
// условия делители этого числа 1 и n
// вывести в консоль число и “Делители этого числа: 1 и n”
// %
// console.log(14 % 5)


let n = 2;

const getComonNumber = (n) => {
    let m = 0;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            m += 1
        }
    }
    // if (m.lenght <= 2)
    if (m === 0) {
        console.log('Делители этого числа: 1 и', n);
    }
}
getComonNumber(3);
//перебрать все числа от 1 до 100
//для каждого числа запустить функцию getcomonNumber
let newFunction = (x) => {
    for (let k = 1; k <= x; k++ ) {
        getComonNumber(k)
    }
}
newFunction(10)

