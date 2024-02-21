/******************* Primitive DataTypes*****************/

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



/***********************  Reference (Non primitive) *********************/

// Array, Objects, Functions

const heros = ["Ironman", "Batman", "Spiderman"];
let myObj = {
    name: "Roshan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// ++++++++++++++++++++++++++++++++++++++++++

// Stack Memory(P rimitive datatypes) and Heap Memory(Non-primitive)

let myname = "Roshan"

let anothername = myname
anothername = "Batman"

console.log(myname);
console.log(anothername);

// Since strings are primitive types, the assignment 'anothername = myname'created a newcopy of the string "Roshan" for 'anothername'. Changing the value of 'anothername' afterwads doesnot affect the value of 'myname'.If you were working with non primitive types(object,arrays,etc.)changes to one variable could affect the other if they both reference the same obkect in memory.

let user1 = {
    email: "aryalroshan06@gmail.com",
    name: "roshan"
}

let user2 = user1

user2.email = "aryalroshanpal@gmail.com"

console.log(user1.email);
console.log(user2.email);