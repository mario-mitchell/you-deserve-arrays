/*1 Get first from

const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));

console.log("the first item in the colors array is: " + userArray[0]);
*/


/*2 get last item

const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));

console.log("the last item in the array array is: " + userArray[userArray.length-1]);
*/



/*3 get index3

const prompt = require('prompt-sync')({ sigint: true });


let userArray = JSON.parse(prompt("enter an array: "));

console.log(userArray);


console.log(" the third item in the userArray is: " + userArray[2]);


if (userArray.length < [3])
console.log("the value of the last index is " + userArray[userArray.length-1])
*/


/*4 first item is a number

const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));

if (typeof userArray[0]=== "number"){
    console.log("the first item in your array " + userArray[0] + " is a number")
} else if (typeof userArray[0] !== "number"){
    console.log("the first item in your array " + userArray[0] + " is not a number")
}
*/



/*5 Is Long List

const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));
console.log(userArray);

if(userArray.length >= 10){
    console.log("the length of this array is at least 10: " + userArray.length)
} else if(userArray.length < 10){
    console.log("your array length is too short: " + userArray.length);
}

*/

/*6 Second Char of Third String
const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));

if (typeof userArray[2][1]=== "string"){
    console.log("the second character of the 3rd item in your array " + userArray[2][1] + " is a string")
} else if (typeof userArray[2][1] !== "string"){
    console.log("error " + userArray[2][1] + " is not a string")
}
*/