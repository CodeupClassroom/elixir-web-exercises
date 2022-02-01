// "use strict;"
//
// // function arrayToString(myArray) {
// //     var myString = "";
// //     for (let i = 0; i < myArray.length; i++) {
// //         myString += myArray[i];
// //
// //     }
// //     return myString
// // }
// //
// // console.log(arrayToString(["hello", "world"]))
//
// function removeAll(myArray, valueToRemove) {
//
//     let filteredArr = [];
//
//     // negative logic approach - create new filtered array
//     // for (let i = 0; i < myArray.length; i++) {
//     //     if (myArray[i] !== valueToRemove){
//     //         filteredArr.push(myArray[i]);
//     //     }
//     // }
//
//     // affirmative logic approach - alter array in-place
//     // for (let i = 0; i < myArray.length; i++) {
//     //     if(myArray[i] === valueToRemove){
//     //         myArray.splice(i, 1);
//     //         i--
//     //     }
//     // }
//
//     // affirmative logic WITH filtered array
//     for (let i = 0; i < myArray.length; i++) {
//         if (myArray[i] === valueToRemove) {
//             continue;
//         }
//         filteredArr.push(myArray[i]);
//     }
//
//     return filteredArr; // or myArray
// }
//
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// console.log(removeAll(bugs, "ant"));
//
//
//
//
// function randomOrderGenerator(arrOfStudents) {
//     let randomArray = [];
//     let i = 0;
//     do {
//         let randomStudent = arrOfStudents[Math.floor(Math.random()*arrOfStudents.length)]
//         if (randomArray.includes(randomStudent)) {
//             continue;
//         }
//         randomArray[i] = randomStudent;
//         i++;
//     } while (i < arrOfStudents.length)
//     return randomArray;
// }
//
// console.log(randomOrderGenerator(["Hector", "David", "Brendan", "Brice", "Collin", "Daniel", "Emilio", "Irvin", "Justin", "Jennifer", "Micah", "Patrick", "Rachel", "Raymond", "Scott", "Trevor", "Wesley", "William"]));
//
// function elixirGroupOfThreeSlicer(arr) {
//     let groupOne = arr.slice(0, 3);
//     let groupTwo = arr.slice(3, 6);
//     let groupThree = arr.slice(6, 9);
//     let groupFour = arr.slice(9, 12);
//     let groupFive = arr.slice(12, 15);
//     let groupSix = arr.slice(15);
//     console.log(groupOne)
//     console.log(groupTwo)
//     console.log(groupThree)
//     console.log(groupFour)
//     console.log(groupFive)
//     console.log(groupSix)
//
// }
// elixirGroupOfThreeSlicer(randomOrderGenerator(["Hector", "David", "Brendan", "Brice", "Collin", "Daniel", "Emilio", "Irvin", "Justin", "Jennifer", "Micah", "Patrick", "Rachel", "Raymond", "Scott", "Trevor", "Wesley", "William"]))
//
//
// function reverseString(str) {
//     let result = "";
//     for (let i = str.length-1; i >=0 ; i--) {
//         result += str[i];
//     }
//     return result;
// }
//
// console.log(reverseString("Hello"));
//
//
// function findAverage(grades) {
//     let sum = 0;
//     grades.forEach(function (grade) {
//         sum += grade;
//     });
//     return sum / grades.length;
// }
//
// console.log(findAverage([95, 74, 86, 100]));
//
//
// function sumOfSquares(a, b) {
//     return Math.pow(a, 2) + Math.pow(b, 2);
// }
//
// console.log(sumOfSquares(2, 3));
//
//
//
//
//
//
//
//
//
//
//
//

// global scope
var a = 1;

function foo() {
    var b = 2;

    console.log("in foo, a is " + a);
    console.log("in foo, b is " + b);

    for (let i = 0; i < 10; i++) {

    }

    // console.log("in foo, i is " + i);
}

function bar() {
    var c = 3;

    console.log("in foo, a is " + a);
    console.log("in foo, c is " + c);
}

console.log("in global scope, a is " + a);
// console.log("in global scope, b is " + b);

foo();

function whichStringIsLonger(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string") {
        return false;
    }
    if(string1.length > string2.length) {
        return "first";
    }
    if(string2.length > string1.length) {
        return "second";
    }
    return "neither";
}

console.log(whichStringIsLonger("bobby", "lou")); // returns first
console.log(whichStringIsLonger("bob", "louise")); // returns second
console.log(whichStringIsLonger("bob", "lou")); // returns neither
console.log(whichStringIsLonger("bobby", 2)); // returns false
console.log(whichStringIsLonger(1, "lou")); // returns false