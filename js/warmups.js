"use strict;"

function arrayToString(myArray) {
    var myString = "";
    for (let i = 0; i < myArray.length; i++) {
        myString += myArray[i];

    }
    return myString
}

console.log(arrayToString(["hello", "world"]))