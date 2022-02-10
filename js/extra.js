"use strict";
//

// ---------- getFizzBuzz

// // Check for actual fizz buzz
// function getFizzBuzz(startingNum) {
//
//     if (startingNum % 3 === 0 && startingNum % 5 === 0) {
//         return "FIZZ BUZZ";
//     } else if (startingNum % 3 === 0) {
//         console.log("fizz");
//     } else if (startingNum % 5 === 0) {
//         console.log("buzz");
//     }
//
// }
//
// // Validate the input so we don't print out undefined
// function tryGetFizzBuzz(input){
//     let maybeFizzBuzzIdk = getFizzBuzz(input);
//
//     if (!!maybeFizzBuzzIdk){ // undefined is falsy, so let's make sure that maybeFizzBuzzIdk is not that
//         console.log(maybeFizzBuzzIdk)
//     }
//
//     console.log(maybeFizzBuzzIdk)
// }
//
// // Test the logic against various different values
// function runThatProgramThing(){
//     tryGetFizzBuzz(9);
//     tryGetFizzBuzz(10);
//     tryGetFizzBuzz(15);
// }
//
// runThatProgramThing();
//
//
//

// ------- getMeaningOfLife

// Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
//     This function will use a while loop to compare its current number (a variable named counter) against the meaningfulNum.
//     While the counter is not equivalent to the meaningfulNum, continue the loop.
//     Once that condition is broken (i.e., the loop’s test fails), console log a string telling the user "The meaning of life, the universe, and everything is [your meaningful number]"
// Thinking about the above function, getMeaningOfLife, let’s ask a question: What happens if the value of meaningfulNum is a non-numeric?
//     Write some code to account for this case. How the function handles the situation is up to you!
//     Let’s continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42, console log a separate message at the end of the function to say: "Did you bring your towel?"

function getMeaningOfLife(meaningfulNum){
    let counter = 0;

    meaningfulNum = parseInt(meaningfulNum);

    if (meaningfulNum){
        while (meaningfulNum !== counter){ // 10 is not equal to 0
            counter++; // make the counter guess another number
        }
        console.log("The meaning of life, the universe, and everything is " + counter);

        if (counter === 42){
            console.log("Did you bring your towel?");
        }
    }
}

getMeaningOfLife(-1);












// function getMeaningOfLife(meaningfulNum){
//     let counter = 0;
//     meaningfulNum = parseInt(meaningfulNum);
//
//     if (meaningfulNum){
//         while (counter !== meaningfulNum){
//             counter++;
//         }
//         console.log("The meaning of life, the universe, and everything is " + counter);
//     }else{
//         console.log("This makes no sense, activate the Improbability Drive!")
//     }
//
// }
//
// getMeaningOfLife("42");