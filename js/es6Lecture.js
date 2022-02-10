"use strict"

var x = 2 ** 8;

const MY_CONST = 1;

// if(true) {
//     let test1 = "bob";
// }
// console.log(test1);

// let fullName = "Bob";
// let age = 30;
// let gender = "Male";
// let job = "Developer";

// console.log("Name: " + fullName + " Age: " + age + " Gender: " + gender + " Job: " + job);
// console.log(`Name: ${fullName} Age: ${age} Gender: ${gender} Job: ${job}`);

// console.log(`Name: ${fullName}
//     Age: ${age}
//     Gender: ${gender}
//     Job: ${job}`);

let fruits = [
    {
        name: "apple",
        qty: 4
    },
    {
        name: "pear",
        qty: 2
    },
    {
        name: "banana",
        qty: 5
    },
    {
        name: "grape",
        qty: 3
    }
]

// for (let fruit of fruits) {
//     if(fruit.name === "banana") {
//         break;
//     }
//
//     console.log(fruit);
//     // fruit = "asdfasdf";
//     fruit.qty = 99;
//     fruit.color = "red";
// }
// console.log(fruits)

// const foo2 = function(x) {
//     return x + "!";
// }
// foo2("sue");
//
// const foo3 = _ => "bob!";
// console.log(foo3());

// $("#myButton").click( function(event) {
//     event.preventDefault();
//
//     if(validateData) {
//         processData();
//     }
// });
//
// $("#myButton").click( (event) => {
//     event.preventDefault();
//
//     console.log(this.value);
//
//     if(validateData) {
//         processData();
//     }
// });

// function sayHello(name = '') {
//     return `Hello, ${name}!`;
// }
//
// sayHello(); // "Hello, World!"
// sayHello('codeup'); // "Hello, codeup!"

var fullName = "Bob";
var age = 30;
var gender = "Male";
var job = "Developer";

var person = {
    fn: fullName,
    a: age,
    g: gender,
    j: job
}

// var person = {
//     fullName,
//     age,
//     gender,
//     job
// }
// console.log(person);

// var fn = person.fullName;
// var a = person.age;

// var {fn, a, g, j} = person;
// console.log(fn + " " + a + " "+ g + " " +j );

function foo4({j, g}) {
    console.log(g + " " + j );//+ " "+ g + " " +j );

}
foo4(person);

const food = [`olive`,`pizza`,`pasta`,`banana`]

const [a, b, c, d] = food;
console.log(a + " "+ b + " " + c + " " + d);