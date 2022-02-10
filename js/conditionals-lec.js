"use strict";

function rollADie(lowerBound, upperBound) {
    var baseRandomNumber = Math.floor(Math.random() * upperBound);
    var offsetRandomNumber = baseRandomNumber + lowerBound;
    return offsetRandomNumber;
}

console.log(rollADie(1, 20)); // from 0 to < 6