 // Primitive 
// 7 Types : String, Number, Boolean, Null, Undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 345903493495298945098394509n


// Non-Primitive (Reference)
// Array, Objects, Functions

const heroes = ['shaktiman', 'nagraj', 'doga']
let myObj = {
    name: 'Sneha',
    age: 21,
}
const myfunc = function(){
    console.log("HEllo Sneha");
}
console.log(typeof myfunc);