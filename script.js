'use strict';
function calculateArea(s){
     let area;
     if (s <= 0){
         return 0;
     } else {
         area = Math.PI * s *s;
         return area;
     }
 }
 let radius = 2.2;
 let theArea = calculateArea(radius);
 console.log('The area is: ' + theArea);

// Дана строка 'abc!def!'. Замените все ! на '@' 
// с помощью глобального поиска и замены.


let txt = 'abc!def!';
console.log(txt.replace(/!/g, '@'));


// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).

let txt1 = 'aaa bbb ccc';
console.log(txt1.substr(4,3));
console.log(txt1.substring(4,7));
console.log(txt1.slice(4,7));


// Дана строка 'js'. Сделайте из нее строку 'JS'.

let txt2 = 'js';
console.log(txt2.toUpperCase());


// Дана строка 'я люблю JS!'. Найдите количество 
// символов в этой строке.

let txt3 = 'я люблю JS!';
console.log(txt3.length);


// Дана строка 'JS'. Сделайте из нее строку 'js'.

let txt4 = "JS"
console.log(txt4.toLowerCase())


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).

let txt5 = 'я люблю javascript!';
console.log(txt5.substring(2, 7))
console.log(txt5.substring(8,18))


// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.

let txt6 = 'я люблю JS!'
console.log(txt6.indexOf('люблю'))


// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.

let txt7 = 'я люблю JS!';
let n = 6; 
let result = "";
if (n < txt7.length) {
    result = txt7.substring(0, n) + "...";
} else {
    result = txt7;
}
console.log(result);


// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.

let txt8 = 'Я-люблю-JS!';
console.log(txt8.replace(/-/g, "!"));


// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.

let txt9 = 'Я люблю JS';
let txt10 = txt9.split((' '));

console.log(txt10);


// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.

let txt11 = 'привет мир';
let txt12 = txt11.split('');

console.log(txt12);



// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты

// Переменные:  year, dogname, age, years, myDog, cups, tea, guests
// Функции: function dogYears    function makeTea     function secret
// Встроенные функции: log
// Аргументы:  dogname, age, cups, tea
// Параметры: myDog, 4, guests, 'Earl Grey'

function dogYears(dogname, age){
    let years = age * 3;
    console.log(dogname + ' is ' + years + ' years old');
}
let myDog = 'Scrim';
dogYears(myDog, 4);

function makeTea (cups, tea){
    console.log('Breawing ' + cups + ' cups of' + tea);
}
let guests = 2;
makeTea(guests, 'Earl Grey');

function secret(){
    console.log('The secret of life is 28');
}
secret();