"use strict";

let cars = ['Altima', 'Bronco', 'Pinto', 'Mustang', 'Bronco'];
console.log(cars);

cars.push('germlin');
console.log(cars);

cars.unshift('civic');
console.log(cars);

//remove first and last element

let removedCars = cars.shift();
console.log('removed "' + removedCars);
console.log(cars);

removedCars = cars.pop();
console.log('removed ' + removedCars);
console.log(cars);

let someCars = cars.slice(2);
console.log(someCars);

someCars = cars.slice(2,4);
console.log(someCars);

someCars = cars.slice( 2, cars.length - 2);
console.log(someCars);

