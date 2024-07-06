/*
************************************************************************
Exercise 1

Write a function that takes a string as a parameter and returns the length of the string. 
Call the function and console.log the answer. 
Tip: You can use .length on a variable that is a string to get its length.
************************************************************************
*/

function findLength(string) {
  return string.length;
}
console.log(
  `"I am a little cat" sentence has ${findLength(
    "I am a little cat"
  )} characters.`
);

let sentence = '"I am a little cat with an immense appetite"';
let letterCount = sentence.replace(/[^a-zA-Z]/g, "").length;
console.log(
  `${sentence} sentence has ${
    "I am a little cat with an immense appetite".length
  } characters but ${letterCount} letters`
);

/*
************************************************************************
Exercise 2

Write a function that extracts the year from a string in date format. 
Use substring(startIndex, endIndex). 
The function should take one parameter, which should be a string. 
The string should always have 10 characters and follow the pattern 'YYYY-MM-DD'. 
You should be able to call year('2019-10-14') and get the number 2019 as the result.
************************************************************************
*/

function findYear(string) {
  if (string.length === 10 && string[4] === "-" && string[7] === "-") {
    console.log("The Year is:", string.substring(0, 4));
  } else {
    console.log('Please use "YYYY-MM-DD"');
  }
}

findYear("2024-10-04"); //prints 2019

/*
************************************************************************
Exercise 3

Write a function that takes three parameters. The first two are numbers and the last one is an operator, i.e., either '+', '-', '/', '*'. 
Perform the calculation and return the result and print it out. It should only be possible to pass numbers (except the operator, which is a string), 
and each operation should be its own function. Tip: typeof can be useful here.
************************************************************************
*/

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function calculate(firstNumber, secondNumber, operation) {
  switch (operation) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    default:
      return "Error: Invalid operation.";
  }
}

// Test cases
// calculate(5, 10, "+");
// calculate(5, 10, "-");
// calculate(5, 10, "/");
// calculate(5, 10, "*");
// calculate("hej", 10);
// calculate(10, "Hej");

// getInput();
function getInput() {
  let one = parseInt(window.prompt("Enter a number:"));
  let two = parseInt(window.prompt("Enter another number:"));
  let operation = window.prompt("Enter an operation (+, -, /, *):");

  console.log(one);
  console.log(two);
  console.log(operation);
  calculate(one, two, operation);
  //   console.log(calculate);

  if (isNaN(one) || isNaN(two)) {
    alert("One or both inputs are not valid numbers.");
    return;
  }

  let result = calculate(one, two, operation);
  window.alert(`Result: ${result}`);
  console.log(`Result: ${result}`);
}

/*
************************************************************************
Exercise 4

Rewrite your rock, paper, scissors game so that you use functions and try to reuse code.
************************************************************************
*/

let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getUserChoice() {
  let userChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  } else {
    alert("Invalid choice. Please choose rock, paper, or scissors.");
    return getUserChoice();
  }
}

function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice < 0.35) {
    return "rock";
  } else if (computerChoice <= 0.65) {
    return "paper";
  } else {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
}

function playRound() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  let result = determineWinner(userChoice, computerChoice);

  alert(
    `You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`
  );

  if (result.includes("You win")) {
    userScore++;
  } else if (result.includes("Computer wins")) {
    computerScore++;
  }

  roundsPlayed++;

  if (roundsPlayed < 3) {
    playRound();
  } else {
    if (userScore > computerScore) {
      alert(
        `You win the game! Final score: You ${userScore} - ${computerScore} Computer`
      );
    } else if (computerScore > userScore) {
      alert(
        `Computer wins the game! Final score: You ${userScore} - ${computerScore} Computer`
      );
    } else {
      alert(
        `It's a tie! Final score: You ${userScore} - ${computerScore} Computer`
      );
    }
  }
}

// Start the game
// playRound();

/*
************************************************************************
Exercise 5

Split the Bill! Split the bill calculates how much each friend should pay at a restaurant when the bill comes. 
The user should be able to input the total amount, the number of friends, and the tip (entered as a decimal, i.e., 10% becomes 0.10), 
and then get back how much each person in the group should pay.
************************************************************************
*/

function splitTheBill() {
  let totalAmount = parseFloat(prompt("Enter the total amount of the bill:"));
  let numberOfFriends = parseInt(
    prompt("How many friends should pay the bill?")
  );

  let tip = totalAmount * 0.1;

  if (isNaN(totalAmount) || isNaN(numberOfFriends) || isNaN(tip)) {
    alert("Invalid input");
    return;
  }
  2;

  console.log("tip", tip);
  totalAmount = parseInt(totalAmount) + tip;
  console.log(totalAmount);
  alert(`Total amount, including the 10% tip: ${Math.round(totalAmount)} kr`);

  let eachPersonShare = totalAmount / numberOfFriends;
  console.log(eachPersonShare);
  alert(`Each friend pays ${Math.round(eachPersonShare)} kr`);
}
splitTheBill();
