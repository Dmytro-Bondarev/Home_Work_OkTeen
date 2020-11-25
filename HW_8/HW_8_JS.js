// - створити функцію яка виводить масив
// let mas = ['Max','Viktor','Igor','Vika']
// function masP ()
// {
//     console.log(mas);
// }
// masP()
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function RanNum (length,min,max) {
//     let nom = [];
//     for (let i = 0; i < length ; i++) {
//         nom.push (Math.floor(Math.random()*(max-min)+min))
        
//     }
//     return nom;
// }
// const RanNum1 = RanNum(10,10,100);
// RanNum(RanNum1);
// console.log(RanNum1);
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function number (num1,num2,num3){
//     if (num1<= num2 && num1<=num3) {
//         return console.log(num1);
//     }
//     else if( num2 <= num1 && num2 <= num3) {
//       return console.log(num2);
//     }
//     return console.log(num3);
// }
// number(9,5,7)
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function number (num1,num2,num3){
//     if (num1>= num2 && num1>=num3) {
//         return console.log(num1);
//     }
//     else if( num2 >= num1 && num2 >= num3) {
//       return console.log(num2);
//     }
//     return console.log(num3);
// }
// number(9,5,7)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//  function Rnum() {
//      let min = arguments[0]
//      let max = arguments [0]
//     for (let i of arguments) {
//         if (i<= min )  { 
//             min = i 
//         }
//         if (i>=max) {
//             max=i
//         }
        
//     }
//     console.log(max);
//     return min
// }


// let start = Rnum(7,6,8,9)
// console.log(start);
// - створити функцію яка повертає найбільше число з масиву
// let num = [4,5,6,1,8]
// function numF (numbers) {
//     let max = numbers [0]
//     for (let i of num) {
//         if (i >= max) {
//             max= i
//         }        
//     }
// console.log(max);
    
// }
// numF(num)
// - створити функцію яка повертає найменьше число з масиву
// let num = [4,5,6,1,8]
// function numF (numbers) {
//     let min = numbers [0]
//     for (let i of num) {
//         if (i <= min) {
//             min= i
//         }        
//     }
// console.log(min);
    
// }
// numF(num)
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let num = [1,4,7,9]
// function numP(numbers) {
//     let plus = 0
//     for (let i of numbers) {
//         plus += i
        
//     }
//     return plus;
// }

// let res = numP(num)
// console.log(res);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let num = [1,4,7,9]
// function numP(numbers) {
//     let plus = 0
//     for (let i of numbers) {
//         plus += i
        
//     }
//     return plus/numbers.length;
// }

// let res = numP(num)
// console.log(res);
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let mas = [
//         {
//           id: 1,
//           name: "Leanne Graham",
//           username: "Bret",
//           },
//         {
//           id: 2,
//           name: "Ervin Howell",
//           username: "Antonette",
//           email: "Shanna@melissa.tv",
//         },
//         {
//           id: 3,
//           name: "Clementine Bauch",
//           username: "Samantha",
//           email: "Nathan@yesenia.net",
//         },
//         {
//           id: 4,
//           name: "Patricia Lebsack",
//           username: "Karianne",
//           email: "Julianne.OConner@kory.org",
//         },
//       ];
// function masF (masM){
//     let obg = 0
//     for (let i of masM) {
//         obg++
//     }
//     return obg
    
// } 
// let res = masF(mas)
// console.log(res);
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let mas = [
//             {
//               id: 1,
//               name: "Leanne Graham",
//               username: "Bret",
//               },
//             {
//               id: 2,
//               name: "Ervin Howell",
//               username: "Antonette",
//               email: "Shanna@melissa.tv",
//             },
//             {
//               id: 3,
//               name: "Clementine Bauch",
//               username: "Samantha",
//               email: "Nathan@yesenia.net",
//             },
//             {
//               id: 4,
//               name: "Patricia Lebsack",
//               username: "Karianne",
//               email: "Julianne.OConner@kory.org",
//             },
//           ];
//     function masF (masM){
//         let obg = 0
//         for (let i of masM) {
//             for (let key in i) { {
//                     obg++
//                 }
//             }
//         }
//         return obg
        
//     } 
//     let res = masF(mas)
//     console.log(res);
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let mas1 = [1,4,6,7]
// let mas2 = [3,5,6,8]
// function masPLUSmas (mass1,mass2) {
//     let masRes=[]
// for (let i = 0; i < mass1.length; i++) {
//     masRes.push(mass1[i]+mass2[i])
    
// }
//     return masRes
// }
// let res = masPLUSmas(mas1,mas2)
// console.log(res);
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]