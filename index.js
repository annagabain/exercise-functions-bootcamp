/*
Exercise 1

Write a function that takes a string as a parameter and returns the length of the string. 
Call the function and console.log the answer. 
Tip: You can use .length on a variable that is a string to get its length.*/

function findLength(string) {
  return string.length;
}
console.log(`"I am a little cat" sentence has ${ findLength( "I am a little cat")} characters.`);

let sentence ='"I am a little cat with an immense appetite"';
let letterCount = sentence.replace(/[^a-zA-Z]/g, '').length;
console.log(`${sentence} sentence has ${"I am a little cat with an immense appetite".length} characters but ${letterCount} letters`);



/*
Exercise 2
Write a function that extracts the year from a string in date format. 
Use substring(startIndex, endIndex). 
The function should take one parameter, which should be a string. 
The string should always have 10 characters and follow the pattern 'YYYY-MM-DD'. 
You should be able to call year('2019-10-14') and get the number 2019 as the result.
*/

function findYear(string) {
  if (string.length === 10 && string[4] === "-" && string[7] === "-") {
    console.log("The Year is:", string.substring(0,4));
  } else {
    console.log('Please use "YYYY-MM-DD"');
  }
}

findYear("2024-10-04"); //prints 2019

/*
Exercise 3
Write a function that takes three parameters. The first two are numbers and the last one is an operator, i.e., either '+', '-', '/', '*'. 
Perform the calculation and return the result and print it out. It should only be possible to pass numbers (except the operator, which is a string), 
and each operation should be its own function. Tip: typeof can be useful here.
*/

/*
Exercise 4
Rewrite your rock, paper, scissors game so that you use functions and try to reuse code.
*/

/*
Exercise 5
Split the Bill! Split the bill calculates how much each friend should pay at a restaurant when the bill comes. 
The user should be able to input the total amount, the number of friends, and the tip (entered as a decimal, i.e., 10% becomes 0.10), 
and then get back how much each person in the group should pay.
*/
