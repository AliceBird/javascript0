'use strict'

//** Убрать рекламу */))))))))))))))))))))))))))))))))))))))))))))
let myAdv = document.querySelector('.adv');
// console.log(myAdv);
myAdv.classList.remove('adv');
// console.log(myAdv.classList);

//*Восстановить порядок книг.
let collect = document.querySelectorAll('.book');
let elemUl = document.querySelectorAll('ul'),
    elemLi = document.querySelectorAll('li')
console.log(document.querySelectorAll('li'));
console.log(collect);
collect[0].insertBefore(elem[0], elem[2]);

// Заменить картинку заднего фона на другую из папки image
let image = document.querySelector('body');
image.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');




// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")//
// let myElem = document.querySelectorAll('h2')[2].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes"\n' +
//     '               target="_blank">Книга 3. this и ПроТОТипы Объектов</a>';
// console.log(myElem);


// Восстановить порядок глав во второй и пятой книге
// let book = document.querySelectorAll('.books');
// console.log(book);
// book[1].removeChild(book[2]);
// let elemRep = book[0].replaceChild(book[4], book[2] );
// console.log(elemRep);
// // в шестой книге добавить главу “Глава 8: За пределами ES6”
// // и поставить её в правильное место */
// console.log(bookAll);
// bookAll[2].insertBefore(book[2], book[1]);
// bookAll[1].appendChild(book[3], book[4]);
// bookAll[1].appendChild(bookAll(5));

// let elements = document.querySelectorAll('ul > li:last-child');
// console.log(elements);
