// // "use strict;"
// //
// // // function arrayToString(myArray) {
// // //     var myString = "";
// // //     for (let i = 0; i < myArray.length; i++) {
// // //         myString += myArray[i];
// // //
// // //     }
// // //     return myString
// // // }
// // //
// // // console.log(arrayToString(["hello", "world"]))
// //
// // function removeAll(myArray, valueToRemove) {
// //
// //     let filteredArr = [];
// //
// //     // negative logic approach - create new filtered array
// //     // for (let i = 0; i < myArray.length; i++) {
// //     //     if (myArray[i] !== valueToRemove){
// //     //         filteredArr.push(myArray[i]);
// //     //     }
// //     // }
// //
// //     // affirmative logic approach - alter array in-place
// //     // for (let i = 0; i < myArray.length; i++) {
// //     //     if(myArray[i] === valueToRemove){
// //     //         myArray.splice(i, 1);
// //     //         i--
// //     //     }
// //     // }
// //
// //     // affirmative logic WITH filtered array
// //     for (let i = 0; i < myArray.length; i++) {
// //         if (myArray[i] === valueToRemove) {
// //             continue;
// //         }
// //         filteredArr.push(myArray[i]);
// //     }
// //
// //     return filteredArr; // or myArray
// // }
// //
// // var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// //
// // console.log(removeAll(bugs, "ant"));
// //
// //
// //
// //
// // function randomOrderGenerator(arrOfStudents) {
// //     let randomArray = [];
// //     let i = 0;
// //     do {
// //         let randomStudent = arrOfStudents[Math.floor(Math.random()*arrOfStudents.length)]
// //         if (randomArray.includes(randomStudent)) {
// //             continue;
// //         }
// //         randomArray[i] = randomStudent;
// //         i++;
// //     } while (i < arrOfStudents.length)
// //     return randomArray;
// // }
// //
// // console.log(randomOrderGenerator(["Hector", "David", "Brendan", "Brice", "Collin", "Daniel", "Emilio", "Irvin", "Justin", "Jennifer", "Micah", "Patrick", "Rachel", "Raymond", "Scott", "Trevor", "Wesley", "William"]));
// //
// // function elixirGroupOfThreeSlicer(arr) {
// //     let groupOne = arr.slice(0, 3);
// //     let groupTwo = arr.slice(3, 6);
// //     let groupThree = arr.slice(6, 9);
// //     let groupFour = arr.slice(9, 12);
// //     let groupFive = arr.slice(12, 15);
// //     let groupSix = arr.slice(15);
// //     console.log(groupOne)
// //     console.log(groupTwo)
// //     console.log(groupThree)
// //     console.log(groupFour)
// //     console.log(groupFive)
// //     console.log(groupSix)
// //
// // }
// // elixirGroupOfThreeSlicer(randomOrderGenerator(["Hector", "David", "Brendan", "Brice", "Collin", "Daniel", "Emilio", "Irvin", "Justin", "Jennifer", "Micah", "Patrick", "Rachel", "Raymond", "Scott", "Trevor", "Wesley", "William"]))
// //
// //
// // function reverseString(str) {
// //     let result = "";
// //     for (let i = str.length-1; i >=0 ; i--) {
// //         result += str[i];
// //     }
// //     return result;
// // }
// //
// // console.log(reverseString("Hello"));
// //
// //
// // function findAverage(grades) {
// //     let sum = 0;
// //     grades.forEach(function (grade) {
// //         sum += grade;
// //     });
// //     return sum / grades.length;
// // }
// //
// // console.log(findAverage([95, 74, 86, 100]));
// //
// //
// // function sumOfSquares(a, b) {
// //     return Math.pow(a, 2) + Math.pow(b, 2);
// // }
// //
// // console.log(sumOfSquares(2, 3));
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
//
// // global scope
// var a = 1;
//
// function foo() {
//     var b = 2;
//
//     // console.log("in foo, a is " + a);
//     // console.log("in foo, b is " + b);
//
//     for (let i = 0; i < 10; i++) {
//
//     }
//
//     // console.log("in foo, i is " + i);
// }
//
// function bar() {
//     var c = 3;
//
//     console.log("in foo, a is " + a);
//     console.log("in foo, c is " + c);
// }
//
// // console.log("in global scope, a is " + a);
// // console.log("in global scope, b is " + b);
//
// foo();
//
// function whichStringIsLonger(string1, string2) {
//     if(typeof string1 !== "string" || typeof string2 !== "string") {
//         return false;
//     }
//     if(string1.length > string2.length) {
//         return "first";
//     }
//     if(string2.length > string1.length) {
//         return "second";
//     }
//     return "neither";
// }
//
// // console.log(whichStringIsLonger("bobby", "lou")); // returns first
// // console.log(whichStringIsLonger("bob", "louise")); // returns second
// // console.log(whichStringIsLonger("bob", "lou")); // returns neither
// // console.log(whichStringIsLonger("bobby", 2)); // returns false
// // console.log(whichStringIsLonger(1, "lou")); // returns false
//
// var myString = "Hello World";
//
// var myArgument = "lo".toUpperCase();
//
// console.log(myString.toUpperCase().includes(myArgument));
// function isBoolean(input) {
//     var testVal = typeof input;
//     if(testVal === "boolean") {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(isBoolean(true))

// write a function called sumOfThreeNumbers that returns the sum of the 3 numeric arguments provided (i.e., it has 3 parameters)
// if any of the parameters are non-numeric then return false

// function sumOfThreeNumbers(num1, num2, num3) {
//     if(typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
//         return false;
//     }
//     return num1 + num2 + num3;
// }
//
// console.log(sumOfThreeNumbers(1, 2, 3)); // return 6
// console.log(sumOfThreeNumbers(-10, 2, 3)); // return -5
// console.log(sumOfThreeNumbers(1, 2, "bob")); // return false

// write a function called convertInchesToCentimeters that takes 1 parameter (the # of inches) and returns a value that is the number of centimeters in the given # of inches
//
// if the parameter is non-numeric then return false
//
// 1 inch = 2.54 cm

// function convertInchesToCentimeters(inches) {
//     if(typeof inches !== "number") {
//         return false;
//     }
//     return inches * 2.54;
// }
//
//
// console.log(convertInchesToCentimeters(1)); // returns 2.54
// console.log(convertInchesToCentimeters(15)); // returns 38.1
// console.log(convertInchesToCentimeters("bob")); // returns false

// Define a function named upperCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters capitalized.

// function upperCase(aString) {
//     if(typeof aString !== "string")
//         return false;
//
//     // if(!isNaN(parseInt(aString))) {
//     // var parsedVal = parseInt(aString);
//     // if(typeof parsedVal === "number") {
//     //     return aString;
//     // }
//
//     return aString.toUpperCase();
// }
//
// console.log(upperCase("Codeup")  );       // "CODEUP"
// console.log(upperCase("javascript")  );   // "JAVASCRIPT"
// console.log(upperCase("45")    );         // "45"
// console.log(upperCase(23)  );             // false
// console.log(upperCase(null)  );           // false
// console.log(upperCase([1, 2, 3])  );      // false
// console.log(upperCase(true)   );          // false
// console.log(upperCase()     );                  // false

function upperCase(input) {
    // var output = /* do something to calculate output */;
    return input.toUpperCase();
}