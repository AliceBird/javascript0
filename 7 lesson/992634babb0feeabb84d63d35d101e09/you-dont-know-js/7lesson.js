'use strict'


// let collect = document.getElementsByClassName('._blank');


//** Убрать рекламу */))))))))))))))))))))))))))))))))))))))))))))
let myAdv = document.querySelector('.adv');
// console.log(myAdv);
myAdv.classList.remove('adv');
console.log(myAdv.classList);

//*Восстановить порядок книг.
//
// Заменить картинку заднего фона на другую из папки image
// let image = document.getElementsByTagName('.body');
// // // // //image.
// // // // // or
// // image.classlist.add(url('you-dont-know-js.jpg'));
// // // // // document.body.style.background = "url('you-dont-know-js.jpg')"
// console.log(image);

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")//
// let myElem = 1;
// let myElem.title = 'Книга 3. this и Прототипы Объектов';
// console.log(myElem.title);
// console.log(collect_2);
// collect_2.title = 'Книга 3. this и ПроТОТИпы Объектов';
//замена h2 в первом h2((((((
let collect_2 = document.querySelector('h2').textContent = 'Книга 3. this и ПроТОТИпы Объектов';
// let collect_2 = document.querySelectorAll('h2').innerHTML = 'Книга 3. this и ПроТОТИпы Объектов';
// collect_2[4].title = 123;
console.log(collect_2);

// Восстановить порядок глав во второй и пятой книге
// let book = document.querySelectorAll('.book');
// console.log(book);
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
