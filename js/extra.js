"use strict";

// Check for actual fizz buzz
function getFizzBuzz(startingNum) {

    if (startingNum % 3 === 0 && startingNum % 5 === 0) {
        return "FIZZ BUZZ";
    } else if (startingNum % 3 === 0) {
        console.log("fizz");
    } else if (startingNum % 5 === 0) {
        console.log("buzz");
    }

}

// Validate the input so we don't print out undefined
function tryGetFizzBuzz(input){
    let maybeFizzBuzzIdk = getFizzBuzz(input);

    if (!!maybeFizzBuzzIdk){ // undefined is falsy, so let's make sure that maybeFizzBuzzIdk is not that
        console.log(maybeFizzBuzzIdk)
    }

    console.log(maybeFizzBuzzIdk)
}

// Test the logic against various different values
function runThatProgramThing(){
    tryGetFizzBuzz(9);
    tryGetFizzBuzz(10);
    tryGetFizzBuzz(15);
}

runThatProgramThing();



