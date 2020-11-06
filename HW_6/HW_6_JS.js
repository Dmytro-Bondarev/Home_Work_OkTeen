// -створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let task_1 = [1,12,25,33,47]
// let task_2 = ['Dima','Nata','Vika','Ira','Katya']
// let task_3 = [33,97,56,43,87,'Oleg','Andrey','Alex','Viktor','Igor',true,false]

// console.log( task_1);
// console.log( task_2);
// console.log( task_3);
// - Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let me = [];
// me [0] = 'Dima';
// console.log(me);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>fdghj</div>' )
    
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>fdghj</div>' +[i])
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0
// while  (i<20) {
//     document.write('<h1> Hello </h1><hr>')
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0
// while  (i<20) {
//     document.write('<h1> Hello </h1><hr>'+[i]);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let mus = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i <= mus.length; i++) {
//     console.log(mus);
    
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let mus = ['Dima','Alex','Vikto','Oleg','Max','Artem','Andrei','Ira','Alisa','Adriana']
// for (let i = 0; i <= mus.length; i++) {
//         console.log(mus);}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mus = ['Dima','Alex','Vikto',22,'Max','Artem','Andrei','Ira','Alisa','Adriana']
// for (let i = 0; i <= mus.length; i++) {
//         console.log(mus);}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mas = [10,55,98,73,'Viktor','Igor','Max',true,false]
//     for (let i = 1; i <= mas.length; i ++) {
          
//     if (typeof mas[i] === 'boolean'){
//         console.log(mas[i]);
//     }
    
//     }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mas = [10,55,98,73,'Viktor','Igor','Max',true,false]
//     for (let i = 1; i <= mas.length; i ++) {
          
//     if (typeof mas[i] === 'number'){
//         console.log(mas[i]);
//     }
    
//     }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mas = [10,55,98,73,'Viktor','Igor','Max',true,false]
//     for (let i = 1; i <= mas.length; i ++) {
          
//     if (typeof mas[i] === 'string'){
//         console.log(mas[i]);
//     }
    
//     }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let mus =[]
// mus [0] = 'Elena'
// mus [1] = 'Ira'
// mus [2] = 'Veronika'
// mus [3] = 33
// mus [4] = 99
// mus [5] = 47
// mus [6] = 99
// mus [7] = 'Dima'
// mus [8] = 'Rustam'
// mus [9] = 'Igor'

// for (let i = 0; i <= mus.length; i++) {
//     console.log (mus[i]);
    
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//    console.log(i);
//    document.write (i)
    
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write (i)
     
//  }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let tap = 0
// for (let i = 0; i < 100; i++) {
//     console.log(tap);
//     document.write(tap ,'<br>' )
//     tap+=2;
    
//  }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// let tap = 0
// for (let i = 1; i < 100; i++) {
//     console.log(tap);
//     document.write(tap ,'<br>' )
//     tap+=2 ;
    
//  }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// let tap = 1
// for (let i = 1; i < 100; i++) {
//     console.log(tap);
//     document.write(tap ,'<br>' )
//     tap+=2 ;
    
//  }
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
