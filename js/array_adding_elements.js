"use strict";

const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
console.log(daysOfTheWeek);

daysOfTheWeek.unshift('Sunday');
console.log(daysOfTheWeek);

daysOfTheWeek.push('Friday', 'Saturday');
console.log(daysOfTheWeek);

const todoList = ['take out the trash', 'Clean the car', 'Pay the bills'];
console.log('My todo List:' );
console.log(todoList);
console.log(`Completing the last:` + todoList[todoList.length -1]);

const removedItem = todoList.pop();
console.log(`Task complete: ` + removedItem);
console.log(todoList);
console.log(`Completing the first items: ` + todoList[0]);

const doneItem = todoList.shift();
console.log(`Completing the first item: ` + todoList[0]);
console.log(doneItem);
console.log(todoList);


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];

let index = colors.indexOf('green');
console.log(index);

index = colors.indexOf('red');
console.log(index);

index = colors.lastIndexOf('red');
console.log(index);

let slice = colors.slice(2, 4);
console.log(colors);

console.log(slice);

slice = colors.slice(3);
console.log(slice);

const colors1 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors1);

colors1.reverse();
console.log(colors1);

colors1.sort();
console.log(colors1)

let namesString = "Joe,Bob,Sally";
console.log(namesString);

const namesArray = namesString.split(',');
console.log(namesArray);

let namesString1 = namesArray.join(',');
console.log(namesString1);
