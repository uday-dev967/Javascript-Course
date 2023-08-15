'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/*
// simple array methods
// slice
// slice is similar to strings slice funtion
// it does not change the original array it returns new array which contains the sliced part of original array
let arr = ['a', 'b', 'c', 'd', 'e'];
let y = arr.slice(2); // slice the array from index 2 to end
console.log(y);
y = arr.slice(2, 4); // slice the arry form index 2 to index 4 but index 4 not be included
console.log(y);
y = arr.slice(2, undefined); // slice the array from index 2 to end
console.log(y);
y = arr.slice(0, 4); // slice from 0 to 4 but 4 is not included
console.log(y);
y = arr.slice(undefined, 4); // same as arr.slice(0, 4);
console.log(y);
y = arr.slice(undefined, undefined); // slice from 0 to the end
console.log(y);
y = arr.slice(0, 4, 2); // doesnt need the third parameter
console.log(y);
y = arr.slice(-2); // slice the last 2 (or slice from 2nd place from the last)
console.log(y);
y = arr.slice(-100000); // if the negative value is greater than the length of arry it will slice from index 0
console.log(y);
y = arr.slice(-4, 4);
console.log(y); // slice from -4 (4th place from the last) to index 4 and 4 is not included
y = arr.slice(arr.length * -1, 4);
console.log(y);
y = arr.slice(1, -2); // slice from 1 to -2 but -2 is not include (slic from 1 to 2nd place from the last but 2nd place from the last is not included)
console.log(y);
y = arr.slice(); // no parameters given to it will take undefined for all the arguments it is same as arr.slice(undefined, undefined)
console.log(y); // slice entire array

// SPLICE
// it is similar to slice but it has more to it
// it will change the original array itself
// it can add delete or modify the array
// splice(start(or delete index from), deleteCount (how many element to delete from given start or delete index), item0, item1,  … , itemN)
// splice(start, deletecount, 3rd paramter, 4th parameter ..... , nth parameter) from 3rd parameter to nth parameter are the elements that will be add from the given start index
// y = arr.splice(2); // deltes all the elements from index 2 to end in the orginal array and here y will store the new array reference and the new array only contain deleted elements
// console.log(y); // ['c', 'd', 'e']
// console.log(arr); //  ['a', 'b']
y = arr.splice(2, 1, 'f', 'g', 'h'); // here the new array returned by the splice will only contain the deleted elements from the original array but not the elements which are add to the original array
console.log(y); // ["c"]
console.log(arr); // ['a', 'b', 'f', 'g', 'h', 'd', 'e']
y = arr.splice(-2); // delete the element from the last 2nd place to the end
console.log(y); // ['d', 'e']
console.log(arr); // ['a', 'b', 'f', 'g', 'h']

// REVERSE
// it reverse the order of the given array
// it will change the original array too
const arr2 = ['l', 'k', 'j', 'i', 'h', 'g'];
y = arr2.reverse();
console.log(y);
console.log(arr2);

// CONCAT
// it doesnt change the orginal array
// it will combine the 1st array with the next array and return the new combined array
arr = ['a', 'b', 'c', 'd', 'e'];
const letters = arr.concat(arr2); // ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j', 'k', 'l']
// the above is same as below
const letters2 = [...arr, ...arr2];
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j', 'k', 'l']
console.log(letters2); // ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j', 'k', 'l']

// JOIN
// it will join the array elements in an orderly way by seperating them with the give string parameter and returns a new joined string
y = arr.join(' - ');
console.log(y); // a - b - c - d - e


// NEW AT METHOD
let arr3 = [21, 11, 31];
let y = arr3.at(1);
console.log(y); // 11
console.log(arr3); // [21, 11, 31]

let m = arr3[-1]; // it will not work this way
console.log(m); // undefined
// m = arr3.splice(-1)[0]; // do it this 1way or
console.log(m); // 31
m = arr3[arr3.length - 1]; // do it this 2way
console.log(m); // 31
y = arr3.at(-1);
console.log(y); // 31
y = arr3.at(-3);
console.log(y); // 21
y = arr3.at(-100);
console.log(y); // undefined


// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of loop method
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`MOVEMENT ${i + 1}: You Deposited $${mov}`);
  } else {
    console.log(`MOVEMENT ${i + 1}: You Withdraw $${mov * -1}`);
  }
}

const x = 'abcdef';
for (const i of x) {
  console.log(i);
}

// forEach method
// forEach method takes call back function as argurment and executes it on every element of the array
// forEach method pass 3 parameters to the call fuction 1 => arraay element 2 => element index 3 => array itself
// for now atleast for each doesnt work on strings
// it works on Maps, sets, arrays
// break and continue will not work in forEach
console.log('---------FOR EACH---------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`MOVEMENT ${i + 1}: You Deposited $${mov}`);
  } else {
    console.log(`MOVEMENT ${i + 1}: You Withdraw $${mov * -1}`);
  }
});

// x.forEach(function (i) {
//   console.log(i);
// });



// forEach on MAPs on SETs

// MAPs
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['INR', 'Indian Rupee'],
]);

// for maps the forEach pass the parameters value,key,map to the call back function
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SETs
const currenciesUnique = new Set(['INR', 'USD', 'EUR', 'INR', 'EUR']);
console.log(currenciesUnique);

// for sets since the set doesnt have the keys or index so in order for the forEach to work the same for all the arrays and maps it passes paramters value,value,set to the call back function
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${_}: ${value}`);
});

// on object will it work ?
// const obj = { USD: 'United States dollar', INR: 'Indian Rupee', EUR: 'Euro' };
// obj.forEach(function (value, key, object) {
//   console.log(`${_}: ${value}`);
// });
// NOTE: forEach doesnt work for objects (i.e dictionaries in refernce to python) and stirngs


// map method
// this array method doesnt change the original array
// it may look simal to forEach it is not
// it executes the given operation on every element of the given array and returns new array which contain the elment which are produced after the given operation

let convertMovementsUsd = movements.map(mov => mov * 1.1);
console.log(convertMovementsUsd);

let movementsDescriptions = movements.map((mov, i) => {
  const out = `MOVEMENT ${i + 1}: You ${
    mov > 0 ? 'Deposit' : 'Withdraw'
  } ${Math.abs(mov)}`;
  console.log(out); // here this is the side effect that we can do other than just returning the new array
  return out; // if we dont return anything undefined will be returned
});

console.log(movementsDescriptions);

// FILTER method

let deposites = movements.filter(mov => mov > 0);
console.log(deposites);

let withdrawals = movements.filter(mov => {
  if (mov < 0) {
    return Math.abs(mov);
  } else {
    console.log(`not withdraw deposite ${mov}`);
  } // thsi entire else block can be said to the side effect
});

console.log(withdrawals);

// REDUCE method
// it boils down the array to a single unit and return it
// it has 2 parameter one is a call back funtion and other is the initial value of accumulator
// unlike forEach, map and filter the call back function 1st argument is not the element of array but the accumulator and the rest 3 arguments are element, index, array
const balance = movements.reduce((acc, mov, i, arr) => acc + mov, 0); // here acc is accumulator and 0 is its initial value
console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// MAXIMUM VALUE BY REDUCE
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  }
  return mov;
}, movements[0]);
console.log(max);

// The Magic of Chaining Methods
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// The find Method
// find method return the first element which matches the condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// findIndex method
// findIndex is similar to find method but it return the frist element index which matches the condition

const firstWithdrawalIndex = movements.findIndex(mov => mov < 0);
console.log(firstWithdrawalIndex); //2
const findDeposite = movements.findIndex(mov => mov === 3000);
console.log(findDeposite); //3

//SOME AND EVERY
// for equality we use includes

console.log(movements.includes(-130)); // true

// SOME method is also same as includes but it takes a condition and if any element satisfies the given condition it will return true otherwise false
console.log(movements.some(mov => mov > 0)); // true
console.log(movements.some(mov => mov === -130)); // true
console.log(movements.some(mov => mov === 'abc')); // false

// EVERY method returns true if all the elements in the array satisfies the given condition eles it will return false (even one fails to satisfy)

console.log(movements.every(mov => mov > 0)); // false
console.log(movements.every(mov => mov < 0)); // false
console.log(movements.every(mov => typeof mov === 'number')); // true

// separate callback functions can be written for the array method
// example
const callback1 = mov => mov > 0;
console.log(movements.some(callback1)); // true
console.log(movements.every(callback1)); // false

//FLAT & FLATMAP
//flat method
let x = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
let y = x.flat(); // here the default depth of flat arguments is 1
console.log(y);
console.log(x.flat(1));
x = [[1, [2, 3, [4, 5, [6]]]]]; // a list can have n levels of nested lists
y = x.flat(Infinity); // so in order to flat n levels we dont know the value of n just make sure you pass max value as depth parameter simple
console.log(y);

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// in the above code we use a chiaining of map().flat() it is a common use case so flatMap is intoruduced
// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
// NOTE: faltMap has default depth of 1 and cannot be changed if you want to have depth more than 1 then you have to use map().flat()

// SORTING AN ARRAY
console.log(movements);

const sringsArrray = ['Uday', 'anil', 'Rahul', 'abc', 'ABC', 'aBc'];
sringsArrray.sort(); // the stirngs starts with calpital letters will be sorterd to the first then the small letters
console.log(sringsArrray); // ['ABC', 'Rahul', 'Uday', 'aBc', 'abc', 'anil']
// NOTE: this type of sort method will not work for numbers
// sorting array for numbers

const numArray = [12, 6, 5, 2, 31, 8, 7, 13, -50, -60, -2];
numArray.sort((a, b) => {
  if (a > b) return 1; // return value can be 2,200,8975 or any positive num not just 1
  if (a < b) return -1; // return value can be -22, -35, -1697 any negative num not just -1
});
console.log(numArray); // [-60, -50, -2, 2, 5, 6, 7, 8, 12, 13, 31]

numArray.sort((a, b) => {
  if (a > b) return -1; // return value can be 2,200,8975 or any positive num not just 1
  if (a < b) return 1; // return value can be -22, -35, -1697 any negative num not just -1
});
console.log(numArray); //[31, 13, 12, 8, 7, 6, 5, 2, -2, -50, -60]

movements.sort((a, b) => {
  // console.log(a, b);
  return a - b;
});

console.log(movements); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

movements.sort((a, b) => b - a);
console.log(movements); //[3000, 1300, 450, 200, 70, -130, -400, -650]

// More Ways of Creating and Filling Arrays
// old method of creating an array
const randomArray = new Array(1, 2, 3, 4, 5, 6, 6); // creates an array of elements with the given parameter and with length of no.of parameters passed
console.log(randomArray); // (7) [1, 2, 3, 4, 5, 6, 6]
const randomArray2 = new Array(4); // you might blown away by this bcz this sintax will not create an array with element 4 of length 1 (which is [4]) but creats an empty array

// Empty array
const emptyArray = new Array(3); // this sintax will create an array of length 3 wiht empty values
console.log(emptyArray); // (3) [empty × 3]
console.log(emptyArray.length); // 3
console.log(emptyArray[1]); // undefined

// Empty array + fill method
// fill method with 1 parameter
emptyArray.fill(1); // it fills all the elements with given element here in this case it fill all the elements with 1 even if its empty or not it doesnt matter
console.log(emptyArray); //  [1, 1, 1]
let x = [2, 22, 33, 4];
x.fill(0);
console.log(x);

const emptyArray2 = new Array(4); // create new array of length 4 with empty elements
// fill with 3 parameters
emptyArray2.fill(22, 2, 100); // it place 22 as element for all the indexes from 2 to 100 (where 100 is not incluede) provided the length of the array is 100 else if the length is less than 100 then it fills all the indexes elements with 22 from 2 to the end NOTE: form index 0 to 1 still empty if accesed we get undefined
console.log(emptyArray2); // (4) [empty × 2, 22, 22]
const emptyArray3 = new Array(8);
// fill with 2 parameters
emptyArray3.fill(22, 3); // it also works as the above case it fill all the indexes elements from 3 to the end with 22
console.log(emptyArray3); // (8) [empty × 3, 22, 22, 22, 22, 22]
// can fill take four parameters ??
const emptyArray4 = new Array(9);
emptyArray4.fill(22, 1, 9, 2); // no use of 4th parameter it is same as the 3 parameter fill
console.log(emptyArray4);

// Array.form method
// it is more understandable syntax compared to new Array.fill()
const newArray1 = Array.from({ length: 10 }); // creats an array with lenght of 10 where its all elements are undefined
console.log(newArray1); // (10) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

const newArray2 = Array.from({ length: 10 }, () => 2); // creates new array with length 10 all the elements are 2
console.log(newArray2);

const newArray3 = Array.from({ length: 10 }, (curr, i) => i + 1); // creates new array with length 10 all the elemnst are its index + 1
console.log(newArray3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const randomArray3 = [1, 5, 7, 6, 2, 5, 5, 9];
// randomArray3.from({ length: randomArray3.length }, (curr, i) => curr * i); from doest work on array instance it will work on Array object itself only
*/

// Array Methods practice
// 1. bank deposites
const bankDepositSum1 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);
console.log(bankDepositSum1);

const bankDepositSum2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((sum, curr) => (curr > 0 ? sum + curr : sum), 0);
console.log(bankDepositSum2);

// 2 no.of bank deposites greater than or equal to 1000
const numDeposits10001 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits10001);
const numDeposits10002 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0); // here count++ will not work and return 0 so we use ++count
console.log(numDeposits10002);

let a = 10;
console.log(a++); // 10 it still 10 bcz when ++ operator used like this it still return the previous value but inacutallity the a is increased
console.log(a); // 11

// prefix ++ operator
console.log(++a); // 12
console.log(a); // 12

// 3 advanced usage of reduce

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (totals, curr) => {
      // curr > 0 ? (totals.deposits += curr) : (totals.withdrawals += curr);
      totals[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return totals;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits);
console.log(withdrawals);

const [deposits1, withdrawals1] = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (total, curr) => {
      // curr > 0 ? (total[0] += curr) : (total[1] += Math.abs(curr));
      total[curr > 0 ? 0 : 1] += Math.abs(curr);
      return total;
    },
    [0, 0]
  );

console.log(deposits1);
console.log(withdrawals1);

// 4.
// this is a nice title -> This Is a Nice Title
const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
const convertTitleCase = function (str) {
  const capitalize = function (altStr) {
    return altStr[0].toUpperCase() + altStr.slice(1);
  };
  const alteredStr = str
    .toLowerCase()
    .split(' ')
    .map(each => (exceptions.includes(each) ? each : capitalize(each)))
    .join(' ');
  return capitalize(alteredStr);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
