"use strict;"

// var car1 = {};
// car1.make = "Ford";
// car1.model = "Taurus";
// car1.year = 2000;
//
// console.log(car1);
//
// var car2 = {
//     make : "Toyota",
//     model : "Tundra"
// }
// console.log(car2);

// console.log("The available properties of car1 are: " + Object.keys(car1));
// if(!car1.year) {
//     console.log("Hey!! Car1 doesn't have year!");
// }
//
// console.log("The available properties of car2 are: " + Object.keys(car2));
// if(!car2.year) {
//     console.log("Hey!! Car2 doesn't have year!");
// }

function printAllCars(cars) {
    // print out each car
    for (let i = 0; i < cars.length; i++) {
        printCar(cars[i]);
    }
}

function printCar(car) {
    console.log("Car info!!!!");
    console.log("\tMake: " + car.make);
    console.log("\tModel: " + car.model);
    if(car.year) {
        console.log("\tYear: " + car.year);
    }
    printCarTires(car);
}

function printCarTires(car) {
    var carTires = car.tires;
    if(!carTires) {
        console.log("\tNo tires have been specified");
        return;
    }
    console.log("\tTires:");
    for (let i = 0; i < carTires.length; i++) {
        printCarTire(carTires[i]);
    }
}

function printCarTire(carTire) {
    console.log("\t\tLocation: " + carTire.location);
    console.log("\t\tBrand: " + carTire.brand);
    console.log("\t\tYear Purchased: " + carTire.yearPurchased);
}

// printCar(car1);
// printCar(car2);

// let's make an array of cars instead of having separate car variables

var cars = [];
// create first car in the array as a ford taurus
cars[0] = {};
cars[0].make = "Ford";
cars[0].model = "Taurus";
cars[0].year = 2000;
cars[0].currentSpeed = 0;
cars[0].maxSpeed = 100;
cars[0].tires = [
    {
        location : "right-front",
        brand : "Goodyear",
        yearPurchased : 2020
    },
    {
        location : "left-front",
        brand : "Michelin",
        yearPurchased : 2010
    },
];

// create second car in the array as a toyota tundra
cars[1] = {
    make : "Toyota",
    model : "Tundra",
    currentSpeed : 0
}

// console.log(cars);

// var aCar = cars[0];
// printCar(aCar);
// printCar(cars[1]);

cars[0].honkHorn = function() {
    console.log("Honk honk");
};
// cars[1].honkHorn = function() {
//     console.log("Honk honk");
// };

// printAllCars(cars);


// cars[0].honkHorn();

cars[0].accelerate = function() {
    // increase car's speed by 10
    if(this.currentSpeed + 10 <= this.maxSpeed) {
        this.currentSpeed += 10;
        console.log("Current speed of car is " + this.currentSpeed);
    } else {
        console.log("She's breaking apart, captain!");
    }
};

cars[1].accelerate = function() {
    // increase car's speed by 10
    if(this.currentSpeed + 10 <= this.maxSpeed) {
        this.currentSpeed += 10;
        console.log("Current speed of car is " + this.currentSpeed);
    } else {
        console.log("She's breaking apart, captain!");
    }
};

// for (let i = 0; i < 11; i++) {
//     cars[0].accelerate();
// }

// MATH part starts here

// Returns a random integer (x) between min and max INCLUSIVELY.
// min <= x <= max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(getRandomInt(50, 100));
// 50 <= x <= 100
// how many #s are between 1 and 10
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 = 10 - 1 = 9
// 10 - 1 + 1 = 10
// max - min + 1
var max = -10;
var min = -20;
// console.log(Math.random() * (max - min + 1));
// returns a # between 0 and 9.9999999

// add the min as an offset
// console.log(Math.random() * (max - min + 1) + min);
//         from 0 to .99999
//            multiply 0 to .9 * scale
//                     0 to .9... * 11
//                     0 to 10.99999999
//                     off

// add Math.floor call to the whole thing to turn it into an int
// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// console.log(Math.ceil(45.0));
// Math.pow(2, 8);
// console.log(Math.PI);
// round 3.1 -> 3
// round 3.14159 -> 3.14  100ths
// 3.14159 * 100 = 314.159 -> 314
// 314 / 100 = 3.14
// console.log(Math.round(Math.PI));

// 100th
// console.log(Math.round(-20.50));
// let number = 1.98763.toFixed(2);
// console.log(number)
