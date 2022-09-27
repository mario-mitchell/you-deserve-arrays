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







// Write a program, main.js, that randomly picks a number between 1 and 100.
// Give the user three chances to guess it. If they get it right, tell them so.
// If their guess is off, tell them in which direction they need to guess. And let them guess up to three times. If they get it correct before the third guess, don't ask them additional questions!
// Example 1
// I'm thinking of a number bewtween 1 and 100. Try to guess it.
// > 13
// Sorry, too low! Guess again.
// > 20
// Sorry, too low! Guess again.
// > 30
// Sorry too low. I was thinking of 40.
// Example 2
// I'm thinking of a number bewtween 1 and 100. Try to guess it.
// > 13
// Sorry, too low! Guess again.
// > 20
// Congratulations, 30 is correct!


const prompt = require("prompt-sync")({sigint: true});

let answer = Math.ceil(Math.random() * 100);
console.log(answer)
let guess = Number(prompt("Pick a number between 1 and 100: "));
let count = 0;

while (guess !== answer && count < 2){
    count++
    if (guess < answer){
        console.log("Too Low. Pick a higher number.");
        guess = Number(prompt("> "));
    } else if (guess > answer){
        console.log("Too High. Pick a lower number.");
        guess = Number(prompt("> "));
    }
}
if (count === 2){
    console.log("Sorry, you're all out of guesses. The number was: " + answer);
}
if (guess === answer){
    console.log("You got it! " + answer + " was the number.")
}


//3 get index3

const prompt = require('prompt-sync')({ sigint: true });


let userArray = JSON.parse(prompt("enter an array: "));

console.log(userArray);


console.log(" the third item in the userArray is: " + userArray[2]);


if (userArray.length < [3])
console.log("the value of the last index is " + userArray[userArray.length-1])



//4 first item is a number

const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));

if (typeof userArray[0]=== "number"){
    console.log("the first item in your array " + userArray[0] + " is a number")
} else if (typeof userArray[0] !== "number"){
    console.log("the first item in your array " + userArray[0] + " is not a number")
}




//5 Is Long List

const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));
console.log(userArray);

if(userArray.length >= 10){
    console.log("the length of this array is at least 10: " + userArray.length)
} else if(userArray.length < 10){
    console.log("your array length is too short: " + userArray.length);
}



//6 Second Char of Third String

const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("enter an array: "));

if (typeof userArray[2][1]=== "string"){
    console.log("the second character of the 3rd item in your array " + userArray[2][1] + " is a string")
} else if (typeof userArray[2][1] !== "string"){
    console.log("error " + userArray[2][1] + " is not a string")
}
