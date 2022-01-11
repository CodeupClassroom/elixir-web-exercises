"use strict";


// FOR LOOPS are useful for when you need to execute the same piece of code multiple times
//  With the nuance that you know how MANY times to execute it

// Unlike while/do-while, the condition which will end the loop won't be met INSIDE the loop's body

// WHILE LOOP

// while (someCondition) {
//      some code...
//      someCondition = true --> the loop will end because of this..
// }

// FOR LOOP

// for (variable assignment; condition to end loop; increment variable until condition is met){
//      some code...
// }

// Notice above, BOTH the condition which ends the loop AND the **mechanism to meet that condition**
//      Are part of the loop's definition itself

// PUT PROPERLY...


function petThosDoggos(numberOfDoggos){

    for (let i = 0; i < numberOfDoggos; i++){
        console.log(`${i}: **Pats that good boi!**`);
    }
}

petThosDoggos(3);

console.log("11/10, would pet again!")


// function myFirstForLoop(numOfIterations){
//
//     for (let i = 1; i <= numOfIterations; i++){
//         console.log("Iteration count: "  + i);
//     }
//
// }
//
// myFirstForLoop(5);


// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds

// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password