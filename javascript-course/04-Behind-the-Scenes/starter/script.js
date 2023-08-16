'use strict';
/*
function calcAge(birthYear) {
  // const birthYear = 1999; // syntax error birth year is a parameter of the funcition it cannot be re declared in the same scope but it can be redeclared in other scopes which is not as same as this for exaple in printAge funtion
  const age = 2023 - birthYear;
  console.log(age);
  console.log(firstName);
  function printAge() {
    const birthYear = 1999;
    const output = `${firstName}, You are ${age} years old, Born in ${birthYear}`;
    console.log(output);
    if (age >= 18) {
      var isAdult = 'adult';
      console.log(isAdult);
      var add = function (a, b) {
        return a + b;
      };
      function add1(a, b) {
        return a + b;
      }
    }
    console.log(isAdult, 'function inner');
    console.log(add(1, 3)); //4 since add is declared by var it will ignore the block scope and it will have functional scope
    // console.log(add1(2, 3)); // RefernceError beacuse funtion declared in blocks have block scope as long as it is not declared by var but if strict mode is not used we will be able to call the fuction and get a result of 5
  }

  printAge();
  //   console.log(isAdult, 'outer'); // ReferneceError
}

const firstName = 'Uday';
calcAge(1997);


//variables
// console.log(me);
// console.log(job);
// console.log(birthYear);

// var me = 'uday';
// const job = 'full stack developer';
// let birthYear = 1997;

// fuctions
console.log(addDec(2, 3)); // 5
// console.log(addExpr(2, 3));// cannot acess before initialization
// console.log(addArrow(2, 3));// cannot access before initialization
console.log('///////////////////');
// console.log(addExpr1(2, 3)); // typeErroraddExpr1 is not a fuction in both modes
// console.log(addArrow1(2, 3)); // typeError addArrow1 is not a fuction in both modes

function addDec(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addExpr1 = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

var addArrow1 = (a, b) => a + b;
console.log(addExpr1(2, 3));


// type of errors may occur because of hoisting

if (!num) deleteAll(); // !num === !undefined or num === undefined

var num = 10;

function deleteAll() {
  console.log('all are deleted');
}

function xyz() {
  // function declartions are also create a property in window object
  console.log('xyz');
}

var x = 5; // variables or funtions declared with var will create a propery in window object
let y = 10;
const z = 15;

console.log(window);
console.log(x === window.x);

var xy = () => console.log('Hai');


// this in practice

console.log(this); // here this refers to global or window object in both the modes

function calcAge() {
  console.log(this); // here this is undefined in strict mode and in sloppy mode it refers to global or window object
}

calcAge();

const calcAgeArrow = () => {
  console.log(this); // here this refers to global or window object since the arrow function do not have own this keyword it will inherit from parent function or parent scope
};

calcAgeArrow();

const calcAgeExpre = function () {
  console.log(this); // here this is undefined in strict mode and in sloppy mode it refers to global or window object
};

calcAgeExpre();


const jonas = {
  name: 'Jonas',
  year: 1989,
  calcAge: function () {
    console.log(this); // this refers to the ower of the function which is jonas object
    console.log(2023 - this.year); // this.year is same as jonas.year because this refers to jonas
  },
};

jonas.calcAge();

const uday = {
  year: 1997,
};

uday.calcAge = jonas.calcAge; // here the calcAge function expression in the jonas object will be copeied to uday object with calcAge property

uday.calcAge(); // here this refers to uday object and the output will be 26

const f = jonas.calcAge;

f(); // here the f is regular function and this refers to undefined in strict mode and in sloppy mode this refers to global or window object

// regular function vs arrow functions

var firstName = 'Uday'; // variables or functions declared with var will create a property in window object

const jonas = {
  firstName: 'Jonas',
  year: 1989,
  calcAge: function () {
    console.log(this); // this refers to the onwer of the function which is jonas object
    console.log(2023 - this.year); // this.year is same as jonas.year because this refers to jonas
  },
  greet: () => {
    // never use arrow function as method will be a good practice
    console.log(this); // here this refers to window object as arrow function doesnt have this
    console.log(this.year); // undefined
    console.log(this.firstName); // Uday wil be logged because here this refers to window and window has property called firstName with value Uday
  },
};

jonas.greet();

var firstName = 'Uday'; // variables or functions declared with var will create a property in window object

const jonas = {
  firstName: 'Jonas',
  year: 1989,
  calcAge: function () {
    console.log(this); // this refers to the owner of the function which is jonas object
    console.log(2023 - this.year); // this.year is same as jonas.year because this refers to jonas
  },
  greet: function () {
    console.log(this); // here this refers to jonas object
    console.log(this.year); // jonas object
    console.log(this.firstName); // Jonas
  },
};

jonas.greet();



var firstName = 'Uday'; // variables or functions declared with var will create a property in window object

const jonas = {
  firstName: 'Jonas',
  year: 1989,
  calcAge: function () {
    console.log(this); // this refers to the owner of the function which is jonas object
    console.log(2023 - this.year); // this.year is same as jonas.year because this refers to jonas
    // const isMillenal = function () {
    //   if (this.year >= 1981 && this.year <= 1996) {
    //     // here this is undefined so it thorws an error
    //     console.log(true);
    //   }
    // }; // there are to ways to solve the above problem 1 is to create a variable and assign this to it before and outside the fuction or 2 by using arrow function

    //solution 1 by assign this to a variable

    // const a = this;
    // const isMillenal = function () {
    //   console.log(a); // jonas object
    //   if (a.year >= 1981 && a.year <= 1996) {
    //     // here a is this of the calcAge function
    //     console.log(true);
    //   }
    // };

    // solution 2 by using an arrow function which inherits the this form parent function or parend scope

    // const isMillenal = () => {
    //   console.log(this); // jonas object
    //   if (this.year >= 1981 && this.year <= 1996) {
    //     // here this is inherited from calcAge method which reffers to jonas object
    //     console.log(true);
    //   }
    // };
    isMillenal();
  },
  greet: function () {
    console.log(this); // here this refers to jonas object
    console.log(this.year); // jonas object
    console.log(this.firstName); // Jonas
  },
};

jonas.calcAge();


// note on arguments regular function has argument key word but arrow function do not arguments key word

function x(a, b) {
  console.log(arguments);
  return a + b;
}

x(2, 3, 4);

const xx = function (a, b) {
  console.log(arguments);
  return a + b;
};

xx(5, 6);

const xxx = (a, b) => {
  console.log(arguments); // ReferenceError: arguments is not defined
  return a + b;
};
xxx(8, 9);


// primitive vs objects

// const me = {
//   name: 'uday',
//   age: '24',
// };
// console.log(me); // {name : "uday", age : 24}
// me.age = 26;
// console.log(me); // {name : "uday", age : 26}

// premitive
// let age = 24;
// console.log(age); //24
// let oldAge = age;
// console.log(oldAge); //24
// age = 26;
// console.log(age); //26
// console.log(oldAge); //26

// // objects
const me = { name: 'Uday', age: 26 };
const friend = me;
console.log('inital me', me);
console.log('inital friend', friend);
friend.age = 30;
console.log('friend', friend);
console.log('me', me);


// primitive vs object in practice
let lastName = 'williams';
let oldLastName = 'williams';
lastName = 'Davis';
console.log(lastName, oldLastName);

// objects

const jessica = {
  firstName: 'jessica',
  lastName: 'willams',
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica); // {firstName : "jessica", lastName : "Davis"}
console.log(marriedJessica); // {firstName : "jessica", lastName : "Davis"}

// copying the objects

const jessica2 = {
  firstName: 'jessica',
  lastName: 'willams',
};

const marriedJessica2 = Object.assign({}, jessica2);
marriedJessica2.lastName = 'Davis';

console.log(jessica2); // {firstName : "jessica", lastName : "williams"}
console.log(marriedJessica2); // {firstName : "jessica", lastName : "Davis"}

// Object.assign will only works on the first level but not on the inner levels so it will give a shallow copy
// what is ment by shallow copy below is the example

const jessica3 = {
  firstName: 'jessica',
  lastName: 'willams',
  family: ['uday', 'jonas'],
};
console.log(jessica3);

const marriedJessica3 = Object.assign({}, jessica3);
marriedJessica3.lastName = 'Davis';
marriedJessica3.family.push('john');
marriedJessica3.family.push('mary');
console.log(jessica3); // {firstName: 'jessica',lastName: 'willams',family : ['uday','jonas','john','mary']}
console.log(marriedJessica3); // {firstName: 'jessica',lastName: 'Davis',family : ['uday','jonas','john','mary']}
*/
