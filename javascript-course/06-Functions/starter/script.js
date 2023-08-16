'use strict';

/*
// Default Parameters
const bookings = [];

const createBooking = function (
  flight,
  numOfPassengers = 1,
  price = 2000 * numOfPassengers
) {
  // ES5 OF ASSINGNING DEFAULT PARAMETERS
  //   numOfPassengers = numOfPassengers || 1;
  //   price = price || 2000;
  const booking = {
    flight,
    numOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LHB12');
createBooking('LH123', 2, 1500);
createBooking('AIR12', undefined, 400); // this is how we skip the parameter
createBooking('AIR3', 3);


// How Passing Arguments Works: Values vs. Reference
const flight = 'AIR12';
const person = { name: 'Uday Kanda', passport: '1234567890' };

const checkIN = function (flightNum, passenger) {
  // here flightNum = flight and passenger = person
  flightNum = 'AIR33';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 1234567890) {
    console.log('CHECKED IN');
  } else console.log('WRONG PASSENGER');
};

checkIN(flight, person);
console.log(flight); // here the parameter flight will the value of flight but no the varible it self
console.log(person); // here the parameter person will be the value (which is reference of the object) but not the variable it self
// so the permitive will not change but non primitive or refernce will change
// NOTE: although the above senario seems to be that js function works on passing by reference but actually it isnt it just in case of object the refernce will be sent then again the reference is itself is a value so js function works on passing by value only
const newPassport = function (person) {
  const x = Math.random() * 100000000000;
  console.log(x);
  person.passport = Math.trunc(x); // trunc just floors the value
  console.log(person.passport);
};

newPassport(person);
checkIN(flight, person);
console.log(person);


// Functions Accepting Callback Functions

const oneWord = function (string) {
  return string.replaceAll(' ', '');
};

const UpperFirstWord = function (string) {
  const [first, ...other] = string.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

const transforStr = function (str, fn) {
  console.log(`original-stirng : ${str}`);
  console.log(`transformed-string: ${fn(str)} \ntranformed by ${fn.name}`);
};

transforStr('javascript is the best prgramming language', oneWord);
transforStr('javascript is the best prgramming language', UpperFirstWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const myGreet1 = greet('hai');
myGreet1('uday');
greet('hey')('uday');

// using arrow fuction
const greet1 = greeting => name => console.log(`${greeting}, ${name}`);
greet1('hello')('uday');
*/

// The call and apply Methods
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(288, 'uday'); // uday booked a seat on lufthansa flight LH288
console.log(lufthansa);
// well it does work so but when we need a function like this lufthansa.book() funtion for outside this object lets find out can we store and use it ?
// does not work
// const book1 = lufthansa.book;
// book1(388, 'uday'); // Uncaught TypeError: Cannot read properties of undefined (reading 'airline') this is because the presence of this keyword in the book1 but book1 doesnt have any onwer to it so this reffers to undefined
// another example

const book1 = lufthansa.book;

const axx = {
  airline: 'axx',
  iataCode: 'AX',
  bookings: [],
  book: book1,
};

axx.book(487, 'uday'); // uday booked a seat on axx flight AX487
console.log(axx);
// so it  workS BUT this not a conservative way in some case it may not be possible like this

// so is there a way to go arround this keyword ??
// yes we do
// call, apply and bind
// CALL, APPLY

const aus = {
  airline: 'aus',
  iataCode: 'AS',
  bookings: [],
};

lufthansa.book.call(aus, 222, 'uday'); // here the first parameter aus is the owner or object to which the this keyword reffers to and the later parameter are passed to the book funtion itself

// can also do this

book1.call(aus, 852, 'uday');
console.log(aus);
// APPLY method
const sus = {
  airline: 'sus',
  iataCode: 'SS',
  bookings: [],
};
lufthansa.book.apply(sus, [679, 'uday']); // it is same as the call method the first parameter aus is the owner or object to which the this keyword reffers to and the secons parameter is an array which contains the parameters to book function
console.log(sus);
// but in modern js we can use call by using spread operator
lufthansa.book.call(aus, ...[488, 'uday']); // this works fine too

// BIND
// bind is also same as call and apply methods which is used to manually assign the this keyword to certain object but unlike call and apply it will not be called immedeatly it just return an funtion
// example

const suzs = {
  airline: 'suz',
  iataCode: 'SZ',
  bookings: [],
};

const booksz = lufthansa.book.bind(suzs);
console.log(suzs);
booksz(789, 'uday'); // uday booked a seat on suz flight SZ789

//here call apply bind did not created new book function in the objext suzs or sus or aus but they reused the book function from the lustanfa object and changed the this keyword reference

// Partial application of bind
// partial application of bind mean that we prefix some of the argument to the function by passing the extra parameters to the bind method
// example
const booksz233 = lufthansa.book.bind(suzs, 233); //so here 233 is the prefixed argument to the book function so we dont need tho send that
booksz233('nikhita'); // nikhita booked a seat on suz flight SZ233

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

const addVAT = addTax.bind(null, 0.48);
console.log(addVAT(100)); //148
// partial application of bind is special use case of bind method as we can observe in the above cases
