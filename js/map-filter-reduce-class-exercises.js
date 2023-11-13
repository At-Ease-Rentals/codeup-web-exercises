"use strict"

//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

// const evens = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0){
//         evens.push(numbers[i]);
//     }
// }
// console.log(evens);

// const evens = numbers.filter( n => n % 2 === 0);
// console.log(evens);
//
// const incremented = numbers.map( n => n + 1);
// console.log(numbers);
// console.log(incremented);


// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0 );
// console.log(sum);
//
//
// const salesPeople = [
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150}
// ];
//
// const totalSales = salesPeople.reduce((total, person) => {
//     return total + person.sales;
// }, 0);
//
// console.log(salesPeople);
// console.log(totalSales);


function countWords(sentence){
    const words = sentence.split('');
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            wordCounts[word] = 1;
        } else {
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {});
    return wordCountObject;
}
countWords('Mary had a little lamb little lamb little lamb');



// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// prices.forEach(function(price, index) {
//     console.log(`Item number ${index + 1}: $${price}`);
// });

// const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];
//
//
// smashers.forEach(function(name, index){
//     console.log(`This is each element in the array: ${name}`);
//     console.log(`This is item ${index +1} and this is the name:${name}`);
// });

// const outputDiv = document.querySelector("#output");

// smashers.forEach(function(smasher, index) {
//     const smashP = document.createElement('p');
//     smashP.innerText = `Character item: ${index + 1}: ${smasher}`;
    // outputDiv.appendChild(smasher);

//This is an array of cars with object properties.esc
//     const cars = [
//         {
//             make: "Honda",
//             model: "Civic",
//             mileage: 10428
//         },
//         {
//             make: "Toyota",
//             model: "Corolla",
//             mileage: 9425
//         },
//         {
//             make: "Ford",
//             model: "Mustang",
//             mileage: 2567
//         },
//         {
//             make: "Audi",
//             model: "A3",
//             mileage: 14500
//         },
//         {
//             make: "Mazda",
//             model: "3",
//             mileage: 11248
//         }
//     ];
//
// const mileages = cars.map(car => car.mileage);
//     // console.log(mileages);
//     // console.log(Math.max(...cars.map(car => car.mileage)));
//
// const lowMileages = cars.filter(car => car.mileage < 10000);
//
// console.log(lowMileages);
//
// lowMileages.forEach(car => {
//     const carPar = document.createElement("p");
//     carPar.innerText = `I found a ${car.make} ${car.model} with ${car.mileage} miles.`;
//     outputDiv.appendChild(carPar);
//     // console.log(carPar);
//
// });

// function findMaxPrice(maxSoFar, currentPrice) {
//     if (currentPrice > maxSoFar) {
//         return currentPrice;
//     }
//     return maxSoFar;
// }
//
// const maxPrice = prices.reduce(findMaxPrice, Number.NEGATIVE_INFINITY);
// console.log(maxPrice);

//find the car with the lowest mileage
// function findLowestMileage (lowestSoFar, currentCar) {
//     if (currentCar.mileage < lowestSoFar.mileage) {
//         return lowestSoFar;
//     }
// }
// console.log(lowestSoFar);
//
// const lowestMileageCar = cars.reduce(findLowestMileage, cars[0]);