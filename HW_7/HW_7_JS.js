// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let per_1 = {
//     neme : 'Dima',
//     age : 43,
//     job : 'photographer',
//  }
//  let per_2 = {
//     neme : 'Alex',
//     age : 33,
//     job : 'DJ',
//  }
//  let per_3 = {
//     neme: 'Vika',
//     age : 46,
//     job : 'developer',
//  }
//  let per_4 = {
//     neme: 'Nik',
//     age : 54,
//     job : 'denser',
//  }
//  let per_5 = {
//     neme: 'Nady',
//     age : 12,
//     job : 'artist',
//  }
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let object1 = {
    // neme : 'car',
//     model: ['E200'],
//     story: { age:  25 }
// }
// let object2 = {
//     neme: 'nikon',
//     model: ['d750'],
//     story:{age: 10},
// }
// let object3 = {
//     name: 'radme',
//     model: ['note8T'],
//     story: { age: 2}
// }
// let object4 = {
//     name: 'ipod',
//     model: ['calassic'],
//     story: {age: 3}
// }
// let object5 = {
//     name: 'laptop',
//     model: ['samsung'],
//     story: {age: 10}
// }

// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let l1 in per_1) {
//     console.log(l1)
// }
// for (let l2 in per_2) {
//     console.log(l2)
// }
// for (let l3 in per_3) {
//     console.log(l3)
// }
// for (let l4 in per_4) {
//     console.log(l4)
// }
// for (let l5 in per_5) {
//     console.log(l5)
// }
// for (let o1 in object1) {
//     console.log(o1)
// }
// for (let o2 in object2) {
//     console.log(o2)
// }
// for (let o3 in object3) {
//     console.log(o3)
// }
// for (let o4 in object4) {
//     console.log(o4)
// }
// for (let o5 in object5) {
//     console.log(o5)
// }
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let ObK1 = Object.keys(per_1)
// let ObK2 = Object.keys(per_2)
// let ObK3 = Object.keys(per_3)
// let ObK4 = Object.keys(per_4)
// let ObK5 = Object.keys(per_5)
// let ObK6 = Object.keys(object1)
// let ObK7 = Object.keys(object2)
// let ObK8 = Object.keys(object3)
// let ObK9 = Object.keys(object4)
// let ObK10 = Object.keys(object5)

// console.log(ObK1,ObK2,ObK3,ObK4,ObK5,ObK6,ObK7,ObK8,ObK9,ObK10)
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
//  {name:'ford', year: 1998, power: 350, color: 'rad'},
//  {name:'cerry', year: 2008 , power: 150, color: 'black'},
//  {name:'lada', year: 2010, power: 75, color: 'blue'},
//  {name:'BMW', year: 2015, power: 800, color: 'pink'},
//  {name:'lada', year: 1999, power: 200, color: 'blue'},
//  {name:'kamaz', year: 2005, power: 370, color: 'orange'},
//  {name:'deo', year: 2018, power: 320, color: 'green'},
//  {name:'BMW', year: 2000, power: 680, color: 'white'},
//  {name:'mersedes', year: 2014, power: 120, color: 'purple'},
//  {name:'wolcwagen', year: 2009, power: 620, color: 'silver'}
// ]
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {city:'lviv',population:'950k',country:'Ukraine',region:'56'},
//     {city:'Dnipro',population:'500k',country:'Ukraine',region:'45'},
//     {city:'Uzgorod',population:'480k',country:'Ukraine',region:'22'},
//     {city:'Lugansk',population:'600k',country:'Ukraine',region:'97'},
//     {city:'Severodoneck',population:'700k',country:'Ukraine',region:'37'},
//     {city:'Krakow ',population:'780k',country:'Poland',region:'55'},
//     {city:'Paris',population:'976k',country:'France',region:'78'},
//     {city:'Rivne',population:'300k',country:'Ukraine',region:'93'}   
// ]
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars_driver = [
//     {name:'ford', year: 1998, power: 350, color: 'rad', diver:{name:'Dima',age:66,sex:'man'}},
//     {name:'cerry', year: 2008 , power: 150, color: 'black', diver:{name:'Alex',age:45,sex:'man'}},
//     {name:'lada', year: 2010, power: 75, color: 'blue', diver:{name:'Vika',age:23,sex:'woman'}},
//     {name:'BMW', year: 2015, power: 800, color: 'pink', diver:{name:'Max',age:33,sex:'man'}},
//     {name:'lada', year: 1999, power: 200, color: 'blue', diver:{name:'Igor',age:36,sex:'man'}},
//     {name:'kamaz', year: 2005, power: 370, color: 'orange', diver:{name:'Alina',age:26,sex:'woman'}},
//     {name:'deo', year: 2018, power: 320, color: 'green', diver:{name:'Tanya',age:39,sex:'woman'}},
//     {name:'BMW', year: 2000, power: 680, color: 'white', diver:{name:'Artem',age:69,sex:'man'}},
//     {name:'mersedes', year: 2014, power: 120, color: 'purple', diver:{name:'Egor',age:36,sex:'man'}},
//     {name:'wolcwagen', year: 2009, power: 620, color: 'silver', diver:{name:'Oleg',age:24,sex:'man'}}]
// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0
// while(i<cars.length){
//     console.log(cars[i]);
//     i++;

// }

// let i = 0
// while(i<cities.length){
//     console.log(cities[i]);
//     i++;
// }

// let i = 0
// while(i<cars_driver.length){
//     console.log(cars_driver[i]);
//     i++;
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
    
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
    
// }
// for (let i = 0; i < cars_driver.length; i++) {
//     console.log(cars_driver[i]);
    
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (let i of cars) {
//     console.log(i)
// }
// for (let i of cities) {
//     console.log(i)
// }
// for (let i of cars_driver) {
//         console.log(i)
// }
// - взять объекты из задания 1 и превратить каждый в json.
// let JS1 = JSON.stringify(per_1)
// let JS2 = JSON.stringify(per_2)
// let JS3 = JSON.stringify(per_3)
// let JS4 = JSON.stringify(per_4)
// let JS5 = JSON.stringify(per_5)

// - взять json из задания 11 и превратить их обратно в объекты.
// let clon_per_1 = JSON.parse(JS1)
// let clon_per_2 = JSON.parse(JS2)
// let clon_per_3 = JSON.parse(JS3)
// let clon_per_4 = JSON.parse(JS4)
// let clon_per_5 = JSON.parse(JS5)
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     console.log(JSON.stringify(car))   
// }
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let mas2 = JSON.stringify(cities)
// for (let i = 0; i < cities.length; i++) {
//     const citi = cities[i];
//     console.log(JSON.stringify(citi))   
// }
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let new_mas = []
// for (let i = 0; i < cars_driver.length; i++) {
//     const car_d = cars_driver[i];
//     new_mas.push(JSON.stringify(car_d))   
// }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let user = [
    us1={neme:'Max',age:33,skills:'ph' },
    us2={neme:'Igor',age:25,skills:'dev' },
    us1={neme:'Oleg',age:22,skills:'driv' }
]
 for (const user of users) {
     console.log(user.name);
     for(const skill of skills) {
         console.log (skill)
     }     
 }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];



// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

//             			let users = [{
//             				name: 'vasya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//             			}, {
//             				name: 'petya',
//             				age: 30,
//             				status: true,
//             				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//             			}, {
//             				name: 'kolya',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//             			}, {
//             				name: 'olya',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//             			}, {
//             				name: 'max',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//             			}, {
//             				name: 'anya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//             			}, {
//             				name: 'oleg',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//             			}, {
//             				name: 'andrey',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//             			}, {
//             				name: 'masha',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//             			}, {
//             				name: 'olya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//             			}, {
//             				name: 'max',
//             				age: 31,
//             				status: true,
//             				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//             			}];


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]





// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний
