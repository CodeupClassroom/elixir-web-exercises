

function add(num1, num2){

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    return num1 + num2; // 10 + "22.3" -> string value "1022.3"
}


function addTests(){

    // Basic tests can rely on this setup:
    // Determine *what* you are testing
    // Store the ACTUAL value you receive from the tested function
    // Assign an EXPECTED value based on what you input to the tested function
    // Compare the ACTUAL value to the EXPECTED value

    //TODO:  --> Describe WHAT you are testing
    //add() returns the accurate sum of the params
    //TODO:  --> GET ACTUAL VALUE
    let actualValue = add(10, 22.3);
    //TODO:  --> ASSIGN EXPECTED VALUE
    let expectedValue = 32.3;
    //TODO:  --> COMPARE ACTUAL TO EXPECTED AND DELIVER A NICE MESSAGE TO THE USER
    console.log("Expect the return value to be accurate: " + (actualValue === expectedValue));

    // add() can handle the param(s) being a numeric string
    actualValue = add(10, "57.9");
    expectedValue = 67.9;
    console.log("Expect to handle numeric string as a number: " + (actualValue === expectedValue));

    // add() can handle the param(s) being a non-numeric string
    actualValue = add(3, "dog");
    console.log("Expect to return NaN when passed a non-numeric string: " + isNaN(actualValue));
}

addTests();


// OoOoO maybe we refactor our test code so we don't have to repeat the every time!
function happyPathTests(param1, param2, expectedValue){
    let actualValue = add(param1, param2);
    console.log("Expect the return value to be accurate: " + (actualValue === expectedValue));
}


