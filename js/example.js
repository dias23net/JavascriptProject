'use strict';

// Условия *************************************************************************************

// const num = 50;

// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('Много');
// } else {
//   console.log('Ok!');
// }

// switch (num) {
//   case 49:
//     console.log('Меньше чем 50 :(');
//     break;
//   case 100:
//     console.log('Больше чем 100 ;(');
//     break;
//   case 50:
//     console.log('Равен! :)');
//     break;
//   default:
//     console.log('Не в этот раз :|');
// }

// Логические операторы *************************************************************************************

// const humburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(humburger === 3 && cola && fries);

// if (humburger === 3 && cola === 1 && fries) {
//   console.log('Я сыт!');
// } else {
//   console.log('Мы уходим!');
// }

// Пример работы логического оператора "&&" - "{ ... и ... }"

// console.log(1 && 0); // Здесь оператор && возвращает "0" - (false)
// console.log(1 && 5); // Здесь оператор && возвращает "5" - (true - если условие обе верные то, оператор возвращает послендний "true")
// console.log(null && 5); // Здесь оператор && возвращает "null" - (false)
// console.log(0 && text); // Здесь оператор && возвращает "0" - (false)

// const humburger = 3;
// const cola = 0;
// const fries = 3;
// const nuggets = 3;

// if (humburger || cola || fries || nuggets) {
//   console.log('Все сыты!');
// } else {
//   console.log('Мы уходим!');
// }

// console.log((humburger === 3 && cola === 2) || (fries === 3 && nuggets === 3));

// let johnReport,
//   alexReport,
//   samReport,
//   mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);
// console.log(!0);

// console.log(NaN || 2 || undefined); // 2
// console.log(NaN && 2 && undefined); // NaN
// console.log(1 && 2 && 3); // 3
// console.log((!1 && 2) || !3); // false
// console.log(25 || (null && !3)); // 25
// console.log(NaN || null || !3 || undefined || 5); // 5
// console.log(NaN || (null && !3 && undefined) || 5); // 5
// console.log((5 === 5 && 3 > 1) || 5); // 5

// Задача: Выполняется ли условие?

// Первая задача
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log('Done!');
// } // Условие выполняется и ответом будет - "Done!"

// console.log((hamburger === 3 && cola) || (fries === 3 && nuggets));

// Вторая задача
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//   console.log('Done!');
// } // Условие выполняется и ответом будет - "Done!"

// console.log(hamburger || cola || fries === 3 || nuggets);

// Третья задача
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log('Done!');
// } // Условие не выполнится и ответом будет - "false"

// console.log((hamburger && cola) || (fries === 3 && nuggets));

// Цыклы

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 5) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// Циклы в цикле

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }

// Пирамида

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += j;
  }
  result += '\n';
} 

console.log(result);