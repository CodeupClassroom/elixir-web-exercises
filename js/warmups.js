"use strict;"

// function arrayToString(myArray) {
//     var myString = "";
//     for (let i = 0; i < myArray.length; i++) {
//         myString += myArray[i];
//
//     }
//     return myString
// }
//
// console.log(arrayToString(["hello", "world"]))

function removeAll(myArray, valueToRemove) {

    let filteredArr = [];

    // negative logic approach - create new filtered array
    // for (let i = 0; i < myArray.length; i++) {
    //     if (myArray[i] !== valueToRemove){
    //         filteredArr.push(myArray[i]);
    //     }
    // }

    // affirmative logic approach - alter array in-place
    // for (let i = 0; i < myArray.length; i++) {
    //     if(myArray[i] === valueToRemove){
    //         myArray.splice(i, 1);
    //         i--
    //     }
    // }

    // affirmative logic WITH filtered array
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === valueToRemove) {
            continue;
        }
        filteredArr.push(myArray[i]);
    }

    return filteredArr; // or myArray
}

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

console.log(removeAll(bugs, "ant"));
