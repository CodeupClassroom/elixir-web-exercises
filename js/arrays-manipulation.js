// "use strict";

let instructors = ["Casey", "DocRob", "Ry", "Justin", "Kenneth"]

console.log("Original: ", instructors);
// ADDING ELEMENTS TO AN ARRAY
// push && unshift return the new length of the array
let newLength = instructors.push("Samuel")
console.log(newLength);

// push adds an element to the end of the array
instructors.push("Laura");
console.log("After pushes: ", instructors);

// unshift adds an element to the beginning of the array
instructors.unshift("David");

console.log("After unshift: ", instructors);

// REMOVING ELEMENTS TO AN ARRAY
// pop removes last element from array
let removedItem = instructors.pop();

console.log(removedItem);

console.log("After pop: ", instructors);

// shift removes first element from array
let removedFromBeginning = instructors.shift();

console.log(removedFromBeginning);

console.log("After shift: ", instructors);

// Locating Array Elements

let ryIndex = instructors.indexOf('Ry');

console.log('Ry Index: ', ryIndex);

let lastRy = instructors.lastIndexOf('Ry');

console.log(instructors);

console.log(lastRy);


// Slice

console.log(instructors);

let slice = instructors.slice(2);

console.log('Sliced: ', slice);

console.log(instructors);

Reverse && Sort

console.log(instructors);

instructors.reverse();

console.log('Reversed: ', instructors)

instructors.sort();

console.log(instructors);

let numbers = [2002, 2000, 300, 45, 56, 1, 11];
numbers.sort();
console.log(numbers);

// Splitting && Joining

let userInfo = "Ry,Sutton,1234 Some Address Rd,DOB"


// Gotta save split into a variable to hold the array
let userArray = userInfo.split(',')

console.log(userArray)

// Access each element from array
let firstName = userArray[0];

let address = userArray[2];

console.log(firstName);

console.log(address);

console.log(userInfo);

// Join the array back into the original string
let joinedUserArray = userArray.join(',');

console.log(joinedUserArray);



let joinedNumbers = numbers.join(' | ')

console.log(joinedNumbers);

let someString = "fjkdls;ajfklds;"

let stringArr = someString.split('ajfkl');

console.log(stringArr);









