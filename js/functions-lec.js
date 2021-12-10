"use strict";

let elixir = ["Hector", "David", "Brendan", "Brice", "Collin", "Daniel", "Emilio", "Irvin", "Justin", "Jennifer", "Micah", "Patrick", "Rachel", "Raymond", "Scott", "Trevor", "Vermon", "Wesley", "William"]

function volunteller(cohort) {
    return cohort[Math.floor(Math.random()*cohort.length)]
}

console.log(volunteller(elixir))