
// // Практическое задание 9.2
// let result = "";
//  for (let i = 0; i <= list.length-1; i++) {
//     if (list[i].length > result.length) {
//         result=list[i];
//    }
// }
// console.log(result);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.3
// let result = 0;
// for (let index = 0; index <= list.length-1; index++) {
//     result += list[index];
// }console.log(result);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.4
// const list_1 = [12, 3];
// const list_2 = [2, 1];
// const list_3 = list_1.concat(list_2);

// const list_4 = [];
//  for (let i = 0; i <= list_3.length-1; i++) {
//     list_4.push(Math.pow(list_3[i], 2));
// }
// console.log(list_4);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.5
// const list = [12, -4, 5, 32, 2];

// let result = 0;
// for (let index = 0; index <= list.length-1; index++) {
//     if (list[index] > 0 ) {
//         result += list[index];
//     }
// }console.log(result);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.6
// const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

// let result = 0;
// nextPrime:
// for (i = 2; i <= list.length; i++) {
//   for (j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   result += i;
// }
// console.log(result);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.7
// const list = [2, 45, 3, 23, 6];
// console.log(Math.max(...list) * Math.min(...list));
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.8
// const list = [2, 45, 3, 23, 6];
// const list_4 = [];
//  for (let i = list.length-1; i >= 0; i--) {
//     list_4.push(list[i]);
// }
// console.log(list_4);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.9
// let string = 'Практическое задание 9.8'
// console.log(string.split(' '));
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.10
// const list = [2, 45, 3, 23, 6];
// function count(array) {
//     let count = 0;
//     for (let index = 0; index <= array.length-1; index++) {
//         if (array[index] % 2 == 0) {
//             count += 1;
//         }
        
//     }
//     return count;
// }
// console.log(count(list));
// 
// const list = [2, 45, 3, 23, 6];
// function count(list) {
//     let result = 0
//     for (let item of list) {
//     if(item % 2 === 0) {
//     result  += 1
//      }
//     }
//     return result;
//     }
//     console.log(count(list));
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.11
// const list = [2, 45, 3, 23, 6];

// const average = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         sum += array[i];
//     }
//     return sum / array.length;
// }
// console.log(Math.round(average(list)));
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.12
// let list = [true]
// let sum = 0;
// for (let i = 0; i < list.length; i += 1) {
        
//         if (typeof list[i] === "boolean") {
//             break;
//         }
//         sum += list[i];
//     }
//     console.log(sum);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.13
// const list = [];
//  for (let i = 10; i <= 20; i++) {
//     list.push(i);
// }
// console.log(list);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.14
// let list = [2, "привет", 23, true, 2, false, 2]
// let listFiltred = [];
// for (let i = 0; i < list.length; i += 1) {
//     if (typeof list[i] === "number") {
//         listFiltred.push(list[i])
//         }
//         else if (list[i] === false) {
//             break;
//         }
    
//     }
//     console.log(listFiltred);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.15

// let list = ["Лёша", "Default", "полке", "клопа", "нашёл", "default"]
// let listCount = 0;
// for (let i = 0; i < list.length; i += 1) {

//     listCount += 1;
//     if (list[i].toLowerCase() === "default") {
//         listCount -=1;
//         }
    
//     }
//     console.log(listCount);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.16
// let list = ["Лёша", "Default", "полке", "клопа", "нашёл", "default"]
// let result = '';
// for (let i = 0; i < list.length; i += 1) {
//     let word = list[i];
//     splitString = word.split('');
//     firsLetter = splitString[0];
//     result += firsLetter;
// }
// console.log(result);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.17
// const obj = {
//     "Яблоко": "фрукт",
//     "Арбуз": ["ягода","фрукт"],
//     "Помидор": "овощ",
//     "Огурец": "овощ",
//     "Вишня": "ягода",
// };

// const newObj = {};

// for (let key in obj) {
//     const value = obj[key];
//     if (Array.isArray(value)) {

//         for (let el of value) {
//           foo(el)
//         }
//     } else{
//         foo(value)
//     }

// }
// function foo(key) {
//     if (key in newObj) {
//         newObj[key] += 1;
//     } else {
//         newObj[key] = 1;
//     }
// }

// console.log(newObj);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Практическое задание 9.18

// const list = [
//     {product: "Apple", price: 25},
//     {product: "Cherry", price: 32},
//     {product: "Strawberry", price: 45}
//    ];

//    let maxPrice = list[0].price;
//    let n = list[0].product;

//   for ( let i = 1; i< list.length;i++){
//     if (list[i].price > maxPrice) {
//         maxPrice =list[i].price;
//         n = list[i].product;
//     }
//   }
//   console.log(n);
