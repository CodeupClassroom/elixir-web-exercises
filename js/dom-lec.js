"use strict";


// Accessing Elements

// By ID
// let mainHeader = document.getElementById("main-header");
// console.log(mainHeader);
// Using querySelector
let mainHeader = document.querySelector("#main-header");
console.log(mainHeader);

// By Class
// let subHeaders = document.getElementsByClassName("sub-head");
// console.log(subHeaders[0]);
// console.log(subHeaders[1]);
// Using querySelector
let subHeaders = document.querySelectorAll(".sub-head");
console.log(subHeaders[0]);
console.log(subHeaders[1]);

// By Tag Name
let listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i])
}
// Using querySelector
// let listItems = document.querySelectorAll("li");


// Accessing Form Inputs

let searchInput = document.getElementById("search");

let searchTimeout = function () {
    console.log("Search Input: ", searchInput.value);
}

setTimeout(searchTimeout, 5000);


// Accessing or Modifying Inner HTML and Text

let list = document.getElementsByTagName("ul")[0];
// list.innerHTML = "<li>Jaco</li><li>Stanley Clark</li><li>Lemmy</li><li>Geddy Lee</li>";
// console.log(list);

let secondPTag = document.getElementsByTagName("p")[1];
console.log(secondPTag.innerText);
console.log(secondPTag.innerText = "Some new stuff");
console.log(secondPTag);


// Access and Modify Attributes

let puppy = document.querySelector("img");
console.log(puppy.getAttribute("src"))
console.log(puppy.setAttribute("src", "https://media1.dallasobserver.com/dal/imager/u/magnum/12972521/hannah-grace-fk4timldff0-unsplash.jpg?cb=1642542828"));
console.log(secondPTag.hasAttribute("id"));

// let listItems = document.querySelectorAll("li");
console.log(listItems);
for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i].getAttribute("data-shredid"));
}

// Access and Modify Styling
mainHeader.style.backgroundColor = "yellow";




