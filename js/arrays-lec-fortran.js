"use strict;"

// console.log("test")

// var dog1 = "Fido";
// var dog2 = "Spot";
// var dog3 = "Fifi";
// var dog4 = "Lola";

// Fido is the first element, even tho the index is 0
// therefore I consider Fido to be an odd element
// thus even index values will be considered an odd element
var dogNames = ["Fido", "Spot", "Fifi", "Lola"];
var dogAges = [5, 2, 3, 10];

// console.log("Dog names: " + dogNames);
// console.log(dogNames.length);

// first element is at index 0
// note that index can also be referred to as a subscript
// console.log(dogNames[0]); // should output Fido
// how to speak accessing elements?
// the element at index 0
// the 0th element in the array
// dogNames sub 0

// log the 2nd element
// console.log(dogNames[1]);

// last element is at index length - 1
var lastIndex = dogNames.length - 1;
// console.log(dogNames[lastIndex]); // should output Lola
// how to speak accessing the last element?
// the last element in the array

// log the 2nd to last element
// console.log(dogNames[dogNames.length - 2]);

// loops and arrays are like peas and carrots
// for (var i = 0; i < dogNames.length; i++) {
//     // output the ith element in the array
//     // output the element sub i
//     // output the element at index i
//     console.log("Dog at index " + i + " is " + dogNames[i]);
// }

// for (let i = dogNames.length - 1; i >= 0; i--) {
//     // output only the odd dogs
//     // Fido is the first element, even tho the index is 0
//     // therefore I consider Fido to be an odd element
//     // thus even index values will be considered an odd element
//     if(i % 2 === 0) {
//         console.log("The odd dog at index " + i + " is " + dogNames[i]);
//     }
// }

dogNames.forEach(function(dogName, index) {
    // this function will be executed on each element
    // as the forEach iterates over the array
    // if(a certain record) {
    //     skip that record
    // }

    // dogName = "Zantor";
    dogNames[index] = "Zantor";

    // output the odd dogs (i.e., the dog at index 0 is an odd dog)
    if(index % 2 === 0) {
        console.log("Dog at index " + index + " is " + dogName);
    }

    // stop the loop with break if dogName is Spot
    // if(dogName === "Spot") {
    //     return;
    // }
});

console.log(dogNames);