let num = 266219;
let numToString = `${num}`;
let numResult = 1;
let numResult3 = null;
for (let i=0; i < numToString.length; i++ ){

 numResult *= numToString[i]
    // numResult = numResult * numToString[i]   // 7 и 8 строка одно и тоже
}
numResult3 = numResult **3;
let toPrint = `${numResult3}`;

console.log(numResult3);
console.log(toPrint[0] + toPrint[1]);

// 7 и 8 строка одно и тоже
//домножаю, перевожу в строку и беру первый(0) элемент и второй(1) и вывожу в консоль
//
// digits.reverse();
// for (let i=0;i<massiv.length; i++){
   // новая переменная    при каких услвиях будет повторяться   После каждой итерации к ш будет добавлена 1 (= i=i+1)
//     // let sum = 1;
//     if (num[i]==1){
//     sum *= num[i];
//     console.log(digits);
// }}

// из числа сделать строку ,         for оператор который позволяет пробегаться по массиву , обьекту строке

//пробежаться for  по полученной строке, на каждой итерации множить результат на число
//
// возвести в 3 степень   n**3  n**4
//  переделать число в строку и вынуть первые две цифры



// let arr = Array.from(num);
// console.log(arr);
// let numsplit = num.split;
// console.log(numsplit);
//Переменной suma присвоить ноль.
// Переменной mult присвоить единицу. Присваивать 0 нельзя, так как при умножении на ноль результат будет нулевым.
// Пока значение переменной n больше нуля повторять следующие действия:
// Найти остаток от деления значения n на 10!!!! то есть извлечь последнюю цифру числа.
// Добавить извлеченную цифру к сумме и увеличить на эту цифру произведение.
// Избавиться от последнего разряда числа n путем деления нацело на 10!!!убираем последнюю цифру числа

/*возвести в степень 3 не используя Math.pow*/


// let mult = 1;
// let digits = [];
// while (num > 0) {
//     digits.push(num % 10); частные случаи не в этом примере
//     num = parseInt(num / 10);
// }