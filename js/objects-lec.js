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

printAllCars(cars);


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

for (let i = 0; i < 11; i++) {
    cars[0].accelerate();
}
