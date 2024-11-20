// Conditionals

// If-else
// If a person can get a drivers license
let age = 10;
let licensableAge = 18;

console.log(age >= licensableAge);

if (age >= licensableAge) {
  console.log("Can get license");
} else {
  console.log("You're too young");
}

// Checks the length of password is up to 8 characters

const DESIRED_LENGTH = 8;
let password = "Lion1234";

if (password.length >= DESIRED_LENGTH) {
  console.log("Password is valid");
} else {
  console.log("Password is too short, must be up to 8 characters");
}

// Nested if

let grade = 50;

console.log("Students grade:", grade);
if (grade >= 90) {
  console.log("Excellent");
} else if (grade >= 80) {
  console.log("Very good");
} else if (grade >= 70) {
  console.log("Good");
} else if (grade >= 60) {
  console.log("Above average");
} else if (grade >= 50) {
  console.log("Average");
} else {
  console.log("Failed");
}

/**
 * ATM machine
 * User wants to withdraw money from the ATM machine
 * Balance 50_000
 * Withdraw 10_000
 *
 * Check if the user can withdraw the cash
 * If they can log out "Please take your cash"
 * "Your current balance is", balance
 *
 *
 * Else, "Insufficient funds"
 * "Your current balance is", balance
 *
 */

let balance = 50_000;
let withdrawAmount = 10_000;

// if the withdraw is not greater than balance show first
console.log("JS ATM machine");
if (withdrawAmount <= balance) {
  console.log("Please take your cash");
  balance = balance - withdrawAmount;
  console.log("Your current balance is", balance);
} else {
  console.log("Insufficient funds");
  console.log("Your current balance is", balance);
}

// Switch case

// Blood group infogram: O, A, AB, B

let bloodGroup = "F";

console.log("Blood group", bloodGroup);
switch (bloodGroup) {
  case "O":
    console.log("Can donate blood to all groups");
    console.log("Can only receive blood from group O");
    break;
  case "A":
    console.log("Can donate blood to group A and group AB");
    console.log("Can receive blood from group A and group O");
    break;
  case "AB":
    console.log("Can only donate blood to group AB");
    console.log("Can receive blood from all groups");
    break;
  case "B":
    console.log("Can donate blood to group B and group AB");
    console.log("Can receive blood from group B and group O");
    break;
  default:
    console.log("Not a valid blood group");
    break;
}

/**
 * Grade system
 * A, B, C, D, F
 * Outputs
 * Case A: Excellent
 * Case B: Good
 * Case C: Average
 * Case D: Pass
 * Case F: Fail
 *
 * Invalid: Invalid grade
 */

let studentGrade = "A";

switch (studentGrade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Pass");
    break;
  case "F":
    console.log("Fail");
    break;

  default:
    break;
}

// Loops
// while loop

let num = 0;

while (num < 10) {
  num += 1;
  console.log("While loop num", num);
}

// For loop

// for (let num = 1; num <= 10; num += 1) {
//   console.log("for loop num", num);
// }

// for (let num = 10; num > 0; num -= 1) {
//   console.log("for dec loop num", num);
// }

// let fruit = "Banana";

// // Print out all the letters in orange
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// // Loop that skips numbers divisible by 5

// let range = 50;

// for (let index = 1; index <= range; index++) {
//   if (index % 5 === 0) {
//     continue;
//   }
//   if (index === 29) {
//     break;
//   }
//   console.log(index);
// }

// Assignment
/***
 * In a list of range of numbers, starting from 1 to 100
 * Count the number of odd numbers
 * count the number of even numbers
 *
 *
 * Result: "Total odd numbers: x", "Total even numbers: y"
 *
 */

let numOfOddNumbers = 0;
let numOfEvenNumbers = 0;
let n = 1;

while (n <= 100) {
  if (n % 2 === 0) {
    numOfEvenNumbers += 1;
  } else {
    numOfOddNumbers += 1;
  }
  n++;
}

console.log(
  `Total odd numbers: ${numOfOddNumbers}, Total even numbers: ${numOfEvenNumbers}`
);

/**
 * Print the word banana backwards.
 *
 * Input: "Banana",
 * Result: "ananaB"
 */

let inputWord = "Banana"; // Initial word
let reserveWord = ""; // initialise reserve word

let cursor = inputWord.length - 1; // set the cursor at last word

// For loop to iterate from the last word to the first word
for (let i = cursor; i >= 0; i--) {
  reserveWord += inputWord[i];
}

console.log("Reserve word:", reserveWord);

/**
 * Loop that only prints numbers that are both divisible by 3 and 5
 *
 * Range 1 to 300
 */

for (let n = 1; n <= 300; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log(n);
  }
}

// Functions

let expresso = "Expresso";

function reserveInputWord(word) {
  let reserveWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reserveWord += word[i];
  }

  console.log("Reserve word:", reserveWord);
}

reserveInputWord(expresso);
reserveInputWord("nurses run");

function sumNumbers(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Function only allows numbers");
  } else {
    return num1 + num2;
  }
}

let sum = sumNumbers(5, 6);
console.log(sum);

let concWords = sumNumbers("You are ", "beautiful!");

console.log(concWords);

let message = "global";

function display_scopes() {
  // declare variable in local scope
  let message = "local";

  if (true) {
    // declare block-level variable
    let message = "block-level";

    console.log(`inner scope: ${message}`);
  }

  console.log(`outer scope: ${message}`);
}

display_scopes();
console.log(`global scope: ${message}`);

let h1Tag = document.querySelector("h1");

h1Tag.innerText = "Learning Javascript is Awesome!";
h1Tag.style.color = "blue";
h1Tag.style.fontFamily = "Verdana";

let pTag = document.createElement("p");
pTag.innerText = "Dynamically created with Javascript";

document.body.appendChild(pTag);

let list = document.createElement("ol");
document.body.appendChild(list);

function addItemToList(item) {
  let liTag = document.createElement("li");
  liTag.innerText = item;
  list.appendChild(liTag);
}

addItemToList("Cake");
addItemToList("Sugar");
addItemToList("Mushmellow");
addItemToList("Garri");
addItemToList("Cornflakes");

function sayHello() {
  let helloTag = document.createElement("p");
  helloTag.innerHTML = "Hello, <b>Chukwuemeka!</b>";
  document.body.appendChild(helloTag);
}

let boxTag = document.querySelector(".box");
function turnBoxRed() {
  boxTag.style.backgroundColor = "red";
}
function turnBoxBlue() {
  boxTag.style.backgroundColor = "blue";
}
function turnBoxGreen() {
  boxTag.style.backgroundColor = "green";
}

// Assignment
/**
 * Box size is 200px by 200px
 * Add extra reactivity to the box so that
 * When the user hovers on the box, it grows to 500px in height and width
 * When the user leaves it should return to it's original size
 * Add a rotate CW button and a rotate anti CW button that rotates the box when user clicks on them
 * Stop button that stops the shape from rotating
 * Add a button that turns the shape to a circle when clicked the first time and reverses it when clicked again (Transistion duration)
 *
 */
