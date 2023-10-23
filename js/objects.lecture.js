"use strict";

   let name = 'spot';
    let age = 10;
    let gender = 'male';

    let name1 = 'flufy';
    let age1 = 8;
    let gender1 = 'male';

    let spot = new Object();  //method for declaring an object
    let fluffy = new Object(); //another method for declaring an object

    let dogs = [];
    dogs.push(spot)
    dogs.push(fluffy);

    let newDog = {
        name: "Molly",
        age: 8,
        gender: "female"
    };
    dogs.push(newDog);
    console.log(newDog);

    function makeDog (name, age, gender) {
        let dog = {
            name,
            age1,
            gender
        };
        return dog;

        function prettyPrintDogs(dogs) {
            console.log('Here are the dogs: ');
            for(const dog of dogs) {
                //pretty print  a single dog
                prettyPrintDogs(dog);
            }
        }
    }

const cars = [
	{
		make: "Toyota",
		model: "Camry",
		features: [`Automatic Windows`, 'Bluetooth Connectivity', 'GPS Navigation'],
		owner: {
			name: "Jane Doe",
			age: 30
		}
	},
	{
		make: "Honda",
		model: "Accord",
		features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
		owner: {
			name: "John Doe",
			age: 31
		}
	}
];

console.log("Here are all the features of al the cars:");
cars.forEach(cars =>{
	cars.features.forEach ( feature => console.log(feature));
});

const veh = {};
veh.make = 'Toyota';
veh.model = 'Camry';

veh.honk = function () {
	alert('Honk!  Honk!');
};

veh.honk();

function getThis() {
	return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
