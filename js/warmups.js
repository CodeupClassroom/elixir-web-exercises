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




function randomOrderGenerator(arrOfStudents) {
    let randomArray = [];
    let i = 0;
    do {
        let randomStudent = arrOfStudents[Math.floor(Math.random()*arrOfStudents.length)]
        if (randomArray.includes(randomStudent)) {
            continue;
        }
        randomArray[i] = randomStudent;
        i++;
    } while (i < arrOfStudents.length)
    return randomArray;
}

console.log(randomOrderGenerator(["Hector", "David", "Brendan", "Brice", "Collin", "Daniel", "Emilio", "Irvin", "Justin", "Jennifer", "Micah", "Patrick", "Rachel", "Raymond", "Scott", "Trevor", "Wesley", "William"]));

function elixirGroupOfThreeSlicer(arr) {
    let groupOne = arr.slice(0, 3);
    let groupTwo = arr.slice(3, 6);
    let groupThree = arr.slice(6, 9);
    let groupFour = arr.slice(9, 12);
    let groupFive = arr.slice(12, 15);
    let groupSix = arr.slice(15);
    console.log(groupOne)
    console.log(groupTwo)
    console.log(groupThree)
    console.log(groupFour)
    console.log(groupFive)
    console.log(groupSix)

}
elixirGroupOfThreeSlicer(randomOrderGenerator(["Hector", "David", "Brendan", "Brice", "Collin", "Daniel", "Emilio", "Irvin", "Justin", "Jennifer", "Micah", "Patrick", "Rachel", "Raymond", "Scott", "Trevor", "Wesley", "William"]))