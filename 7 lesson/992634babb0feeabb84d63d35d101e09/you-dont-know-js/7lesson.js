'use strict'

//** Убрать рекламу */))))))))))))))))))))))))))))))))))))))))))))
let myAdv = document.querySelector('.adv');
myAdv.classList.remove('adv');

// Заменить картинку заднего фона на другую из папки image
let image = document.querySelector('body');
image.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
document.querySelectorAll('ul')[2].appendChild(newElem);
document.querySelectorAll('ul')[2].insertBefore(document.querySelectorAll('li')[27], document.querySelectorAll('li')[26]);


let elemUl = document.querySelectorAll('ul'),//elemUl = document.querySelectorAll('ul'), // Create selector to UL, tor transport inside il elements
    elemLi = document.querySelectorAll('li'), // Create selector to inside elements, tor transport inside li elements

    collectRoot = document.querySelector('body'),
    collect = document.querySelectorAll('.books'), //Create selector to collection, for transport elements.
    elem = document.querySelectorAll('.book'), // Create selector to elements, for transport
    elemH2 = document.querySelectorAll('h2');

console.log(document.querySelectorAll('li'));

//Восстановить порядок книг.
collect[0].insertBefore(elem[0], elem[2]); // transport null and first elements.
collect[0].insertBefore(elem[2], elem[6]); // transport second and last elements.
collect[0].insertBefore(elem[3], elem[5]); // transport third and fourth elements.

//Замена пропопипов на прототипов
document.querySelectorAll('h2')[2].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes"\
target="_blank">Книга 3. this и Прототипы Объектов</a>';

//главы книги поставить по порядку
document.querySelectorAll('ul')[1].insertBefore(elemLi[2], elemLi[10]);
document.querySelectorAll('ul')[1].insertBefore(elemLi[6], elemLi[4]); //sort elements of li
document.querySelectorAll('ul')[1].insertBefore(elemLi[8], elemLi[4]);
document.querySelectorAll('ul')[4].insertBefore(elemLi[56], elemLi[49]);
document.querySelectorAll('ul')[4].insertBefore(elemLi[56], elemLi[50]);
document.querySelectorAll('ul')[4].insertBefore(elemLi[52], elemLi[55]);
document.querySelectorAll('ul')[4].insertBefore(elemLi[49], elemLi[53]);

console.log(document.querySelectorAll('li'));