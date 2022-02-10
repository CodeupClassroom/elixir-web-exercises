"use strict";
(function () {
    console.log("Hello from external script!")

    let myAge = 27

// alert("Check out this alert")

// let areYouDoingJS = confirm("Are you doing js right now?")
//
// console.log(areYouDoingJS)

// let doYouLikePizza = confirm("Do you like pizza?")
//
// if (doYouLikePizza) {
//     alert("Awesome, who doesn't")
// } else {
//     alert("How?")
// }


    let userInput = prompt('Please type a number to add two to:');
    console.log("Your number plus 2 is: " + (parseInt(userInput) + 2));
})();

