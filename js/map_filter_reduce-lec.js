"use strict;"

const people = [
    {
        id: 1,
        name: "Bob",
        age: 45,
        job: "Student"
    },
    {
        id: 2,
        name: "Tom",
        age: 32,
        job: "Teacher"
    },
    {
        id: 3,
        name: "Sue",
        age: 22,
        job: "Student"
    },
    {
        id: 4,
        name: "Wilma",
        age: 37,
        job: "Teacher"
    },
    {
        id: 5,
        name: "Zantor",
        age: 18,
        job: "Student"
    }
]

// let idArray = [];
// people.forEach(function(person) {
//     idArray.push(person.id);
// });
const idArray = people.map(person => person.id);
console.log(idArray);

// let students = [];
// people.forEach(function(person) {
//     if(person.job === "Student") {
//         students.push(person);
//     }
// });
let students = people.filter(function(person) {
    return person.job === "Student";
});
console.log(students);

// let count = 0;
// people.forEach(function(person) {
//     count++;
// });

let count = people.reduce(function(peopleCount, person) {
    // console.log(`peopleCount is ${peopleCount} and will add 1 to it when this returns`);
    return peopleCount + 1;
}, 0);
console.log(count);

console.log(people.filter(function(person) {
    return person.job === "Student";
}).reduce(function(peopleCount, person) {
    // console.log(`peopleCount is ${peopleCount} and will add 1 to it when this returns`);
    return peopleCount + 1;
}, 0));

console.log(people.reduce(function(minAge, person) {
    // console.log(`minAge is ${minAge} and current person's age is ${person.age}`);
    // if(person.age < minAge) {
    //     return person.age;
    // } else {
    //     // if we get here then person's age is >= minAge so return minAge
    //     return minAge;
    // }
    return Math.min(minAge, person.age);
}, Infinity));

console.log(people.filter(person => person.job === 'Teacher')
    .map(person => person.age)
    .reduce((minAge, personAge) => Math.min(minAge, personAge), Infinity));
