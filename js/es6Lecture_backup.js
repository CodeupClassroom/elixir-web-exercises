"use strict"
console.log(Math.pow(5,3))
console.log(5 ** 3);


for (let i = 0; i < 10; i++) {
    console.log(i)
    i = 100;
    console.log(i);
}

console.log(name)

let DocRob = "Ry"

console.log(DocRob);

if (true){
    DocRob = "mark"
}


console.log(DocRob);

// console.log("value of i outside of the loop",i)
//
// i = 20
//
// console.log("value of i outside of the loop",i)


const social = 899333;
console.log(social);


// console.log("I am attempting to change the socail number");
// social = 729082;

console.log('DocRob has the value of "mark"');

// console.log(social);

console.log(`${DocRob.toUpperCase()} says "'hi'"`);


let randomNumberHTML = `<p>${DocRob.toUpperCase()}'s random number is ${Math.random() * 100}</p>`;

document.querySelector("body").innerHTML += randomNumberHTML


const people = [`Oswaldo`,`Christian`,`Herman`];


let i = 0
for (let element of people) {

    element = "new value"
}

people.forEach(function (person,index) {
    console.log(person)
})

// console.log(sayHello("Calais"));
//
//
// function sayHello(name){
//     return `Hello from ${name}!`
// }

// const sayHello = name => {
//    const nameToDisplay = name.toUpperCase();
//    return `Hello from ${nameToDisplay}!`
// }

// const sayHello = (name,title) => {
//     const nameToDisplay = name.toUpperCase();
//     return `Hello from ${title}.${nameToDisplay}!`
// }



// const sayHelloFromComputer = _ => {
//    return `Hello, user.`
// }
//
// console.log(sayHelloFromComputer());


function sayHello(usersName = "Tim",age = "34"){
    return `Hello from ${usersName}! Who is ${age} yrs old.`
}

//
// let age = 27;
//
// var aPerson = {
//     name: "Michael",
//     age
// }

const personBuilder = (name,age) => ({name,age})


// const aUser = personBuilder("Oscar","68");

const aUser = {usersName:"Seth", age:34}

const {usersName,age} = aUser

console.log(usersName);
console.log(age);

// console.log(`the value of variable oscarsName is : ${oscarsName}`)


const food = [`olive`,`pizza`,`pasta`,`banana`]

const [foodOne,foodTwo,foodThree,foodFour] = food;

console.log(foodOne)
console.log(foodTwo)
console.log(foodThree);
console.log(foodFour);