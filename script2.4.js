let num = 2;

let numResult = null;
numResult = num **16;
// console.log(numResult);
let numToString = `${numResult}`;
// console.log(typeof numToString);

for (let i=0; i < numToString.length; i++ ){

    // numResult *= numToString[i]
//     // numResult = numResult * numToString[i]   // 7 и 8 строка одно и тоже

 console.log(numToString[i]);
}
// console.log();

//2 возвести в 16 степень. вывести каждую цифру отдельной строкой в консоль