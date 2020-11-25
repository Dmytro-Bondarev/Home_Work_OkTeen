// - создать массив с 20 числами.
// let numb = [2,3,77,45,87,12,5,7,60,34,97,45,32,44,69,23,65,10,39,72]
// -- при помощи метода sort и колбека  отсортировать массив.
// let numb_st = numb.sort((a,b) => a - b)
// console.log(numb_st)
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let numb_st = numb.sort((a,b) => b - a)
// console.log(numb_st)
// -- при помощи filter получить числа кратные 3
// let numF = numb.filter((a) => {
//     if (a % 3 === 0) {
//         return a;
//     };
// });
// console.log(numF);
// -- при помощи filter получить числа кратные 10
// let numF = numb.filter((a) => {
//     if (a % 10 === 0) {
//         return a;
//     };
// });
// console.log(numF);
// -- перебрать (проитерировать) массив при помощи foreach()
//  each = numb.forEach( (val,i)=> {
//     console.log(val,i);
//  });
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let m3 = numb.map((num)=>{
// return num *3
// });
// console.log(m3)
// - создать массив со словами на 15-20 элементов.
// let string = ['Dima','Vasya','Igor','Adriana','Max','Viktor','Nata','Alex','Anna','Masha','Inna','Oleg','Ira','Vika','Alex','Lena']
// -- отсортировать его по алфавиту в восходящем порядке.
// let AlS = string.sort();
// console.log(AlS);
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let AlS = string.sort((a,b) => a > b ? -1 : 1);
// console.log(AlS);
// -- отфильтровать слова длиной менее 4х символов
// let f4 = string.filter((a)=>{
//     if (a.length < 4 ) {
//         return a; };
// })
// console.log(f4);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let ItMap = string.map((word)=>{
//     return word +'!';
// });
// console.log(ItMap);
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sorAge = users.sort((a,b)=> a.age - b.age)
// console.log(sorAge); 

// let sorAge = users.sort((a,b)=> b.age - a.age)
// console.log(sorAge); 
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sorName = users.sort((a,b)=> a.name.length - b.name.length);
// console.log(sorName);

// let sorName = users.sort((a,b)=> b.name.length - a.name.length);
// console.log(sorName);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// - відсортувати його за індентифікатором


// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком