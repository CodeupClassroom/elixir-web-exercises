"use strict";

let elixir = ["Hector", "David", "Brendan", "Brice", "Collin", "Daniel", "Emilio", "Irvin", "Justin", "Jennifer", "Micah", "Patrick", "Rachel", "Raymond", "Scott", "Trevor", "Vermon", "Wesley", "William"]

function volunteller(cohort) {
    return cohort[Math.floor(Math.random()*cohort.length)]
}

console.log(volunteller(elixir))


function wakeUp() {
    console.log("Vermon's waking up...")
}

function getCoffee() {
    console.log("Turn on coffee machine")
    console.log("Press button")
    console.log("Pick up your mug")
}

// Invoking or Calling a function
// getCoffee()


// Parameters && Arguments

function cubed(x) {
    return x * x * x;
}

// console.log(cubed(8));

let eightToTheThird = cubed(8);

// console.log(eightToTheThird);

// Will throw an error
// console.log(increment(9));

let increment = function(x) {
    return x + 1;
};

// let two = increment(1);

function someScopeStuff() {
    var one = 1;
    console.log(one);
    if (one !== 1) {
       let two = 2;
    } else {
        // Can't access in different block
        two = 'two'
    }
    console.log(two)
}

function moreScope() {
// This will throw an error because casey is not defined until line 62
    // If this variable was declared using 'var' the function would continue to execute
    console.log(casey)
    let casey = 'casey';
    console.log(casey)
}

// someScopeStuff();
// moreScope()

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // Access sum here
        sum += arr[i];
    }
    // Access sum here
    console.log(sum)
}

average([1, 2])

// Undefined in this script because of IIFE
// console.log(myAge)

