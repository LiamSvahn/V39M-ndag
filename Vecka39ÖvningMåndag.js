//Måndag Vecka 39
'use strict';

//poängen med programmet är att printa
//o
//oo
//ooo
//oooo


//oooo
//ooo
//oo
//o

// let output = "";
// const linebreak = "\n";

// const myChar = "o";
// let myCharacters = "";

// let i = 0;
// let j = 0;
// while (true) {
//     myCharacters += myChar;
//     output += myCharacters + linebreak;
//     j++
//     if (j > 4) break;
// }
// console.log(output)
const width = 5;
const height = 5;

const l = "\n";
const charO = "O";
const charX = "X";

let i = 0;
let j = 0;

let output = "";
let row = "";

while (i < height) {

    while (j < width) {
        row = row + charO;
        j++;
    }
    output = output + row + l;
    row = "";
    j = 0;
    i++;
    console.log(j);
}

console.log(output);


// exempel mennigar
// const mening1 = "jag heter Sven Svensson och är 32 år gammal och har ingen hund";
// const mening2 = "mina favoritsysslor är att gymma, brädspel och hänga med polare";
// const mening3 = "jag har en son som heter Lucas och han är 24 år gammal. Så jag var? år gammal när han föddes";

let vadHeterDu = promt("vad heter du");
let hurGammalÄrDu = prompt("hur gammal är du");
let hurLångÄrDu = prompt("hur lång är du");
let vadTykerDuOmAttGöra = prompt("vad tycker du om att göra på din fritid");
let harDuNågraHusdjur = prompt("har du något husdjur");
let VadärDinFavoritMat = prompt("vad är din favorit mat");

console.log(`hej mit namn är ${vadHeterDu} och jag är ${hurGammalÄrDu} gammal och är ${hurLångÄrDu} och jag tycker om att ${vadTykerDuOmAttGöra} på  min fritid. jag har ${harDuNågraHusdjur} och min favorit mat är ${VadärDinFavoritMat}`);



// function calcAge(birthYear){
    //     let age = 2022 - birthYear;
    //     //console.log(age)
    
    //     return age;
    // }
// let Age = calcAge(2001)

// console.log(Age)

// consol.log(calcAge(1999));

// let a = "a";
// let b = "b";
// let l = "\n";


// // output = a + b + l + output;

// console.log(a + b + l + output);
// console.log(l);
// console.log(output + a + b + l);

// FUNCTION EXPRESSION
// const foo = function(x){
//     console.log("test", x);

// }

// foo(1);
// foo(2);

// const calcAge = function(birthYear){
//     return 2022 - birthYear;
// }

// const calcAge2 = birthYear => 2022 - birthYear;

// console.log(calcAge(1980));
// console.log(calcAge2(1980));

// const bar = (a,b) => {
//     return(a,b);
// }

// console.log(1,2)

const cutFodPices = function (food, numberOfPices){
    return food * numberOfPices;
}
const dinnerPreparator = function(veggieballs, potatos){
    return `din mat med ${veggieballs} veggobollar och ${cutFodPices (potatos, 4)} potatis.`;
}

console.log(dinnerPreparator(4,3));
console.log(dinnerPreparator(5,23));
console.log(dinnerPreparator(5,24));
// det är så här man decklarerar functionen
// function foo(){
//     console.log("foo")
// }

// //här kör du koden
// foo();

// // function calcAge(birthYear){
// //     let age = 2022 - birthYear;
// //     console.log(age)
// // }
// // calcAge(2001)
// // calcAge(1999)

// let output = "gamla outputen";