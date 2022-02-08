'use strict'


// let collect = document.getElementsByClassName('._blank');
// let collect_2 = document.getElementsByTagName('h2');
// console.log(collect);
// console.log(collect_2);
// console.log(document.children);

//** Убрать рекламу */
// let myAdv = document.querySelector('adv');
// // console.log(document.querySelectorall('.adv'));
// // console.log(myAdv.classList);
// myAdv.remove('Купи google недорого');
// // console.log(myAdv.classList);

//*Восстановить порядок книг.
//
// Заменить картинку заднего фона на другую из папки image
// let image = document.getElementsByTagName('.body');
// // //image.
// // // or
// image.classlist.remove("url('you-dont-know-js.jpg')");
// // // document.body.style.background = "url('you-dont-know-js.jpg')"
// console.log(image);
// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")//
// let myElem = 1;
//  myElem.title = 'Книга 3. this и Прототипы Объектов';
// console.log(myElem.title);

// Восстановить порядок глав во второй и пятой книге
// let bookAll = document.querySelectorAll('.book');
// // в шестой книге добавить главу “Глава 8: За пределами ES6”
// // и поставить её в правильное место */
// console.log(bookAll);
// bookAll[2].insertBefore(book[2], book[1]);
// bookAll[1].appendChild(book[3], book[4]);
// bookAll[1].appendChild(bookAll(5));

let elements = document.querySelectorAll('ul > li:last-child');
console.log(elements);
