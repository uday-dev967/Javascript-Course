// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*

// NOTE: BUG FIXME

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Uderstanding the Problem by Questioning
// What is the temperature amplitude ? Answer: Difference b/w maximum temp and minimum temp
// How to get Max and Min values from an array ?
// What is ment by seson error and How to handle it ? Answer : ignore all errors

// 2. Breaking down to sub-problems
// How to Ignore Errors ?
// Find max and min value in the array
// Calculate temp amplitude and return it

const calcTempAmplitude = function (arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    // debugger;
    if (typeof arr[i] !== 'number') continue;
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Merging or concating or combining 2 arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
// NOTE: concat doest change the existing array it only combine 2 arrays and return the combined array so it need to stored in the new variable



// Coding Challenge #1

// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

// Uderstainding the problem
// Printing the elements of temperatures array with days
// How to get days Answer : staring with 1 for 0th index element and 2 for 1st and 3 for 2nd.....

// Breaking down sub-problems
// create a function that takes temp array as argument and prints the string
// looping over the array and calculating the days
// ignore all the strings and errors

//Code

const printForecast = function (arr) {
  const temps = arr;
  let string = '... ';
  for (let i = 0; i < temps.length; i++) {
    string +=
      typeof temps[i] === 'number'
        ? `${temps[i]}°C in ${i + 1} days ... `
        : null;
  }
  console.log(string);
};

printForecast([12, 5, -5, 0, 4]);
printForecast([17, 21, 23]);

*/

//scope

// const person = 'uday';
// const job = 'full stack developer';
// const joinedYear = 2023;

// function first(job, joinedYear) {
//   const age = 26;
//   console.log(joinedYear);
//   if (age >= 18) {
//     var license = 'two wheeler license';
//     const hasFourWheeler = false;
//   }
//   function second() {
//     console.log(`i am ${person}, ${age} years old and a ${job}.`);
//     console.log(license);
//   }
//   second();
// }
// first(job);
// console.log(license);

const a = 'jonas';
first();

function first() {
  const b = 'Hello';
  second();
  function second() {
    const c = 'Hi';
    third();
  }
}

function third() {
  const d = 'Hey!';
  console.log(b);
  console.log(d);
  console.log(a);
  console.log(c);
  console.log(d + c + b + a);
}
