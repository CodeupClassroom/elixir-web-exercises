"use strict";

// Declaring an array

// []
// [1]
// ['someString', 1, 2, 3, 4, true, false]

let guitarHeroes = ['SRV', 'Django', 'King Edward', 'Jimi'];

let numbers = [1 ,2, 4, 5];

// Get the length of the array (number of elements)
console.log(guitarHeroes.length);
console.log(numbers.length);

// First element
console.log(guitarHeroes[0]);
// Second element
console.log(guitarHeroes[1]);
// Third element
console.log(guitarHeroes[2]);
// Last element (two ways)
console.log(guitarHeroes[3]);
console.log(guitarHeroes[guitarHeroes.length - 1]);


// Iterating arrays

for (let i = 0; i < guitarHeroes.length; i++) {
    console.log(guitarHeroes[i])
}

// Iterate backwards
for (let i = guitarHeroes.length - 1; i >= 0; i--) {
    console.log(guitarHeroes[i])
}

// Iterate every other index
for (let i = 0; i < guitarHeroes.length; i+=2) {
    console.log(guitarHeroes[i])
}

// Traditional for loop refactor with foreach
guitarHeroes.forEach(function (guitarHero) {
    console.log(guitarHero);
})

// ForEach with access to the index
numbers.forEach(function (num, index) {
    console.log(`${num} is at the index of ${index}`)
})