"use strict;"

// console.log(Math.pow(2, 8));
// console.log(2 ** 8);
//
// for (let i = 0; i < 10; i++) {
//     let myLoopVar = "bob";
// }
// // console.log(myLoopVar);
//
// const PI = 3.14159;
// // pi = 3.2;
// const MY_ARRAY = [1, 2, 3];
// MY_ARRAY[0] = 11;
// // myArray = "bob";
// // myArray = [1, 2, 3, 4]; // cannot do this
// console.log(MY_ARRAY);
//
//
// const fullName = "Bob";
// const age = 30;
// const gender = "Male";
// const job = "Developer";
// console.log("Name: " + fullName + " Age: " + age + " Gender: " + gender + " Job: " + job);
// console.log(`Name: ${fullName} Age: ${age} Gender: ${gender} Job: ${job}`);
//
// console.log(`Name: ${fullName.toUpperCase()}
// Age: ${age}
// Gender: ${gender}
// Job: ${job}`);
//
// MY_ARRAY.forEach(function(aNumber, index) {
//     // aNumber = 99;
//     // MY_ARRAY[index] = 99;
//     console.log(aNumber);
//     if(aNumber === 2) {
//         console.log("breaking out of loop");
//         return;
//     }
// });
// console.log(MY_ARRAY);
//
// for (let aNumber of MY_ARRAY) {
//     // aNumber = 99;
//     console.log(aNumber);
//     if(aNumber === 2) {
//         console.log("breaking out of loop");
//         break;
//     }
// }
// console.log(MY_ARRAY);
//
// let myFruit = [
//     {
//         name: "apple",
//         qty: 4
//     },
//     {
//         name: "pear",
//         qty: 2
//     },
//     {
//         name: "banana",
//         qty: 5
//     },
//     {
//         name: "grape",
//         qty: 3
//     }
// ]
// for (const fruit of myFruit) {
//     // fruit = { // can't reassign the fruit object in the array
//     //     name: "starfruit",
//     //     qty: 99
//     // };
//
//     // but we can modify its properties
//     fruit.qty = 100;
// }
// console.log(myFruit);
//
// const person = {
//     name: "bob",
//     age: 40
// }
//
// // person = {
// //     name: "sue"
// // }
// person.age = 20;
// console.log(person.age);
//
// // don't worry about the below thing for now
// // console.log(person["age"]);
//
// // const sayMyName = function (myName) {
// //     console.log("Hello " + myName);
// // }
//
// // const sayMyName = (myName) => {
// //     console.log("Hello " + myName);
// // };
// // sayMyName("bob");
//
// // const sayHello = (myName) => {
// //     return "Hello " + myName;
// // }
//
// // function sayHello(myName) {
// //
// // }
//
// // const sayHello = myName => "Hello " + myName;
// //
// // console.log(sayHello("Bob"));
// //
// // const sayHelloWorld = _ => "Hello world";
// //
// // console.log(sayHelloWorld());
//
// const sayHello = (myName = "World") => `Hello ${myName}`;
// // sayHello = ... some new function
//
// console.log(sayHello("Bob"));
// console.log(sayHello(undefined));

// var fullName = "Bob";
// var age = 30;
// var gender = "Male";
// var job = "Developer";

// var person = {
//     fullName: fullName,
//     age: age,
//     gender: gender,
//     job: job
// }
// let person = {
//     fullName,
//     age,
//     gender,
//     job
// }
// console.log(person);

const person = {
    fullName: 'codeup',
    age: 4,
    gender: 'Male',
    job: {
        jobName: "Developer",
        yearsOnJob: 15
    }
};

// const fullName = person.fullName;
// const age = person.age;
// const gender = person.gender;

const {fullName, gender} = person;
console.log(fullName);
// console.log(age);
console.log(gender);

let myFruit = [
    "apple",
    "pear",
    "banana",
    "plum"
];

const [fruitxxx, fruit3] = myFruit;
console.log(fruitxxx);
// console.log(fruit1);
// console.log(fruit2);
console.log(fruit3);


const printPerson = ({fullName, job}) => {
    console.log(fullName);
    console.log(job.jobName);
}

printPerson(person);
