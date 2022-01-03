"use strict"

// getPasswordInput
// Define a function named getPassword() which performs the following actions:
// Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
// HINT: start by defining the correct password and don't forget to link your html file


function getPasswordInput() {
    let correctPassword = "coolpassword";
    let userInput = prompt("Enter the password, please.")
    let attempts = 1;
    while (userInput !== correctPassword && attempts < 3) {
        alert("That's not the right password! Try again!");
        userInput = prompt("Enter the password, please.");
        attempts++;
    }
    if (attempts > 2) {
        alert("You're locked out!")
    } else {
        alert("You got in!")
    }
}

getPasswordInput();