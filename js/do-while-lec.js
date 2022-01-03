// DO-WHILE LOOPS
// similar to while loop, but executes the code once **before** checking the conditional
// after running the code once, it will continue to execute code if condition is true or exit if it's false, just
// like the while loop

// // SYNTAX:

// // do: js keyword that says 'hey we're about to start a do while loop
// // {code to be executed once and then again only if condition is true}
// // while: js keyword that says 'hey, here's that condition that we should check if it's true, if it's true go
// // ahead and keep running that code, if it's false then just exit outta here!'

// do {
//     // execute code
// } while (condition);

// EXAMPLES:

// print "we have ___ amount of desks left"
// variable that holds amount of students; --> our starting point (start at 0)
// define amount of desks available --> inside the while condition
// start our do loop
// increment amount of students
// execute code: log the sentence inside do {}

var numStudents = 0; // variable holding amt of students starting at 0
do { // execute once and then again ONLY IF the condition in the while parenthesis is true
    var desksAvailable = 20 - numStudents;  // 20 // 20 - 1 = 19 //
    console.log(`we have ${desksAvailable} amount of desks left`); //20 //19
    numStudents++; // 1 // 2
} while(numStudents <= 20)

console.log("sorry, class is full!");


// ---------------------------


// MINI-EXERCISE

// TODO: classroom with only 20 desks:
// let numStudents = 0;
//
// do {
//     // console.log(`first console in do-while: ${numStudents}`);
//     numStudents++;
//     console.log(`second console in do-while: ${numStudents}`);
// } while (numStudents < 20);
//
// console.log(numStudents)


// ------------------------------------


// MINI-EXERCISE
// example: sing happy bday every year and when they reach 16 say "i got you a car"
// challenge: accommodate for starting age at 0 or having different logs at different ages
var age = 1; // = age starting point
do {
    // sing a song
    console.log("`happy bday! you're now " + age + " years old!");
    age++;
} while(age < 16) // ==>  output from loop is going to be your starting point at the following iteration

// log too old no more celebrations
console.log(`sorry you're too old for songs, got you a car instead, happy ${age}th birthday`);

// template literals `hey, he said: "happy" +
//     " birthday" to
//      me but she didn't say anything even though I turned ${age} years old today. `
//    increment
var sentence = `this is a sentence ${age}`;


// let age = 5;
// do{
//     console.log("happy birthday!")
//     age++;
//     if(age <=15){
//         console.log(`I need a ride I'm only ${age}`);
//     } else {
//         console.log(`I'll drive! I'm already ${age} years old`)
//         }
// } while(age < 16 )


// --------------------------


// MINI EXERCISE:

//  TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.

// HINT: think of a countdown, remember if statements can be used inside of your statements

var spacesAvailable = 30; // empty parking garage
do{
    console.log(`there are  ${spacesAvailable} parking spaces available in this parking lot`);
    spacesAvailable = spacesAvailable -2;
    if(spacesAvailable === 0){
        console.log(`This parking lot is now full`);
    }

} while(spacesAvailable >= 1);

var numOfCars = 2;