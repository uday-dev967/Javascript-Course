'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (mainIndex, staterIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[staterIndex]];
  },
  openingHours,
  orderItem(mainIndex) {
    return this.mainMenu[mainIndex];
  },
  orderDelivery({ starterIndex = 0, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received!, ${this.starterMenu[starterIndex]},${this.orderItem(
        mainIndex
      )} will be Delivered by ${time} to ${address}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2
console.log('B737'[0]); //B
console.log(airline[-1]); //undefined
console.log(airline[-5]); //uddefined
console.log('B737'[-3]); //undefined
console.log('B737'[-30]); //undefined

console.log(airline.length); //16
console.log('B737'.length); //4
// indexOf gives the index of first occurance of the mathced value if not returns -1
// lastIndexOf gives the index of last occurance of the matched value if not return -1
console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); //10
console.log(airline.indexOf('portugal')); //-1

// slice
console.log(airline.slice(4)); // gives entire string from index 4 to the last index
console.log(airline.slice(4, 7)); // gives from 4 to 6 only and ignore 7

console.log(airline.slice(0, airline.indexOf(' '))); // gives from index 0 to the index before first occurnace of " "
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // gives from index 0 to the first occurnace of " " index

console.log(airline.slice(-2)); // gives last 2 chars of string
console.log(airline.slice(1, -1)); // gives enitre except the last and first chars
console.log(airline.slice(-300, -1)); // even though -300 is index out the range bcz it is negative it will take it as 0 so the out put will be entire string except the last one

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B'); // You got lucky 😎
checkMiddleSeat('23C'); // You got the middle seat 😬
checkMiddleSeat('3E'); // You got lucky 😎

console.log(new String('jonas')); // returns a string object
console.log(typeof new String('jonas')); // object

console.log(typeof new String('jonas').slice(1)); // string

// NOTE: while performing the sting method js convert the string into object and perfrom the requried task and returns a string

/*
// Maps : Iterations
const question = new Map([
  ['question', 'what is the capital of INDIA ?'],
  [1, 'NEW DELHI'],
  [2, 'KAKINADA'],
  [3, 'HYDERABAD'],
  ['correct', 1],
  [true, 'Correct Answer 🎉'],
  [false, 'Try Again 👎'],
]);

console.log(question);
// const userAns = Number(
//   prompt(
//     `${question.get('question')}\n1.${question.get(1)}\n2.${question.get(
//       2
//     )}\n3.${question.get(3)}`
//   )
// );
// console.log(question.get(question.get('correct') === userAns));

// from above creating a map by using a list of arrays it can be said that we can create a map simlar to object by using its entires

const person = {
  name: 'uday',
  age: 26,
  isAdult() {
    if (this.age > 18) {
      return true;
    }
    return false;
  },
  true: 'has driving license',
  false: 'no dirving licence',
};

console.log(person);

console.log(Object.entries(person));
const personMap = new Map(Object.entries(person));
console.log(personMap);
console.log(personMap.get(personMap.get('isAdult'))); // undefined this key word wont work in map
console.log(personMap.get(personMap.get('age') >= 18)); // undefined since true is a string in the map which is converted from the object
console.log(personMap.get('age')); // 26

// converting map to arrays
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

// Maps
const rest = new Map();
rest.set('name', 'uday');
console.log(rest); // {"name" => "uday"}
console.log(rest.get('name')); // uday
console.log(rest.has('name')); // true
console.log(rest.size); // 1
const x = 'hasLincense';
rest.set(x, 'has 2 wheeler');
console.log(rest.get(x)); // has 2 wheeler
console.log(rest.get('hasLincense')); // has 2 wheeler
rest.set('name', 'Uday kanda');
console.log(rest.get('name')); // Uday kanda
// console.log(rest.get(hasLincense)); // haLincense is not defined
// calling the set method always return the updated map so we can chain with updated map
// rest.set(since, 1990); // since is not defined

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 9)
  .set('close', 21)
  .set(1, 'one')
  .set(2, 'two')
  .set(true, 'we are open') // we can assign to boolean
  .set(false, 'soory we are closed'); // not just true but also to false we can assign

console.log(rest);

rest.set([1, 2], 'sample'); // wrong way to assign it like this inorder to  assign a value to array we should use the address of array instead of array
console.log(rest.get([1, 2])); // undefined

// correct way to assign a value to objects
const y = [1, 2];
rest.set(y, 'sample');
console.log(rest.get(y)); // can only accessed through address not trough the value "[1,2]"
const time = 7;
console.log(rest.get(time > rest.get('open') && rest.get(time) > time));
console.log(rest.delete(2)); // true
console.log(rest);


// sets
// const newSet1 = new Set({ a: 'A', b: 'b' }); // error object is not an iterable
const newSet2 = new Set('uday kanda');
console.log(newSet2.size); // 7
console.log(newSet2.add('x')); // Set(8) {'u', 'd', 'a', 'y', ' ', …,'x'}
console.log(newSet2.delete('z')); // false NOTE: z is not in the set
newSet2.delete('z');
console.log(newSet2.delete('k')); // true NOTE: K is in the set and not it is removed
const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const newset3 = new Set([x, y]); // {[1, 2, 3, 4],[1, 2, 3, 4]}
console.log(newset3);
const newset4 = new Set(x, y); // {1, 2, 3, 4}
console.log(newset4);
console.log(newSet2.has('x')); // true
console.log(newSet2.has('z')); // false
newSet2.add('x');
console.log(newSet2);
newSet2.clear();
console.log(newSet2);


// looping through objects

// property key or names
const names = Object.keys(openingHours);
console.log(names);
for (let key of names) {
  console.log(key);
}

// property values
const values = Object.values(openingHours);
console.log(values);
for (let i of values) console.log(i);

// entire object or key value pair in array
const enteries = Object.entries(openingHours);
console.log(enteries);

for (const i of enteries) console.log(i);

for (const [day, { open, close }] of enteries) {
  console.log(`on ${day} we open at ${open} & close at ${close}`);
}



// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant?.openingHours?.mon); // undefined
console.log(restaurant.openingHours.mon?.open); // undefined
console.log(restaurant.openingHours?.mon?.open); // undefined

console.log(restaurant.openingHours.sat?.open); // 0
console.log(restaurant.openingHours.sat?.close); // 24

// console.log(obj?.name); // syntax error because obj isnt declared yet

let obj;
console.log(obj?.name); //undefined
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of days) {
  // const open = restaurant.openingHours[day]?.open ?? 'closed';
  // in the above line what if openingHours does not exists?
  const open = restaurant.openingHours?.[day]?.open ?? 'closed';
  const sentence =
    open === 'closed'
      ? `we are ${open} on ${day}`
      : `on ${day} we open at ${open}`;
  console.log(sentence);
}

// Methods
console.log(restaurant?.order?.(0, 1) ?? 'Method does not exists');
console.log(restaurant?.orderHappyMeal?.() ?? 'Method does not exists');
const users = [
  { name: 'Jonas', email: 'hello@jonas.io' },
  { name: 'uday', email: 'uday@gmail.com' },
];
// const users = [];
console.log(users?.[1]); // this works to Keep in mind we can also do this

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

console.log(users[0]?.name ?? 'user array empty');


// for of loop
let menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

// array.entries()
console.log(menu.entries()); // Array Iterator
console.log('MENU');
for (const item of menu.entries()) {
  // console.log(item); // it gives an array of index and value
  // creating a menu
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// we can acutally write the above code even better
console.log('MENU');
for (const [i, j] of menu.entries()) {
  console.log(`${i + 1}: ${j}`);
}


// LOGICAL ASSIGNMET OPERATORS ||= AND &=

const rest1 = {
  name: 'capri',
  numGuests: 20,
};

const rest2 = {
  name: 'la piazza',
  owner: 'giovanni rossi',
};
//OR assignment operator (||=)
// NOTE: it assigns a value to the variable if that variable is currently falsy so when the variable has a falsy value as its acutal value it might not give the desire result so to avoid this we use NULLISH COALESCING ASSIGNMENT OPERATOR (??=)
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// the above 2 lines of code is same as below 2 lines of code
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1); // {name: 'capri', numGuests: 20}
console.log(rest2); // {name: 'la piazza', owner: 'giovanni rossi', numGuests: 10}
// falsy value as the actual value

rest1.numGuests = 0;
delete rest2.numGuests;
rest1.numGuests ||= 30;
rest2.numGuests ||= 30;

console.log(rest1); // {name: 'capri', numGuests: 30}
console.log(rest2); // {name: 'la piazza', owner: 'giovanni rossi', numGuests: 30}

// using nullish coalescing assignment operator
rest1.numGuests = 0;
delete rest2.numGuests;
rest1.numGuests ??= 40;
rest2.numGuests ??= 40;

console.log(rest1); // {name: 'capri', numGuests: 0}
console.log(rest2); // {name: 'la piazza', owner: 'giovanni rossi', numGuests: 40}

// AND assignment operator
// it assigns the first falsy value, if there is no falsy value assings the last truthy value
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// the above 2 line code is same as below 2 line code
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1); // {name: 'capri', numGuests: 0}
console.log(rest2); // {name: 'la piazza', owner: '<ANONYMOUS>', numGuests: 40}

rest1.owner &&= '<ANONYMOUS>' && 'uday';
rest2.owner &&= '<ANONYMOUS>' && 'nikhi' && null;
console.log(rest1); // {name: 'capri', numGuests: 0}
console.log(rest2); // {name: 'la piazza', owner: null, numGuests: 40}


// short circuiting || and &&

// short circuiting with OR
// OR short circuting actually return the 1st truthy value and skip the next part entirely and if all the value or elemnts of the circuit are falsy then it return the last falsy element
// console.log('' || 'uday'); // uday
// console.log(2 || 'uday'); // 2
// console.log('uday' || 0); // uday
// console.log('' || null); // null
// console.log('' || 0 || null || undefined || 'uday' || NaN || 'hello'); // uday
// // NOTE: if the one of the elemnt in ciruit has falsy value as its actual value this OR shrot circuit might not give the deisird output we can actually solve this by using Nullish coalescing operator
// //example
// let y;
// console.log(y || 10); // 10 since y has no value it is a desired value here
// const x = 0;
// console.log(x || 10); // 10 but here the desired output here is 0

// // analysing the OR short circuiting with real time exmaple use
// let a;
// const z = a ? a : 22;
// // the above code can be return as below
// const w = a || 22;
// console.log(z, w);

// a = 10;
// const z1 = a ? a : 22;
// // the above code can be return as below
// const w1 = a || 22;
// console.log(z1, w1); // 10 10

// a = 0;
// const z2 = a ? a : 22;
// // the above code can be return as below
// const w2 = a || 22;
// console.log(z2, w2); // 22 22 but not 0 0 beacause thats how OR short circuiting works as we discussed above

// AND short circuiting
// AND  short circuiting actually returns the first falsy element or value and skip the rest if all the value or elemnts of the circuit are truthy then it return the last truthy element or it can be said that the AND short circuting is exact opposite of OR short circuiting
console.log('' && 'uday'); // ""
console.log(0 && 'uday'); // 0
console.log(0 && null); // 0
console.log('uday' && 22); // 22
console.log('uday' && 22 && {} && null && 0 && 'hello' && NaN); // null
// NOTE: if the one of the element in ciruit has falsy value as its actual value this AND shrot circuit might not give the deisird output.
// analysing AND short cicuting with real time use case
// example
let x;
if (x) {
  console.log('yes'); // no output
}
// the above syntax is same as the below syntax
x && console.log('yes'); // no output
x = 22;
if (x) {
  console.log('yes'); // yes
}
// the above syntax is same as the below syntax
x && console.log('yes'); // yes

// example 2 with falsy value a actuall value
x = 0;
if (x) {
  console.log('yes'); // no output
}
// the above syntax is same as the below syntax
x && console.log('yes'); // no output

// NULLISH COALESCING OPERATOR (??)

// this nullish coalescing operator works on the principle or concept of NULLISH values instead of falsy vaulues
// NULLISH values : null and undefined
let m = {};
m.a = 0;
const l = m.a || 10;
console.log(l); // 10 this isnt the desired output here since m.a === 0 the output should be 0
const n = m.a ?? 10;
console.log(n); // 0 this is the desired output

// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =

let [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a, b, c);
[a, , b, ...c] = [1, 2, 3, 4, 5];
console.log(a, b, c);

let { name, categories, ...others } = restaurant;
console.log(name, categories, others);

console.log([...restaurant.mainMenu, ...restaurant.starterMenu]);
const [Piazza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Piazza, Risotto, otherFood);

// functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
add(1, 2, 3);
add(1, 2, 3, 4, 5);
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


// Spread operator
// spread operator works on all iterables
const arr = [1, 2, 3, 4];
const newArr = [...arr, 21, 1];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Chicken Briyani'];
console.log(newMenu);

// copying an array (shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// joining 2 arrays
const menu = [...restaurant.mainMenu, restaurant.starterMenu];

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'uday';
console.log(...str);
const newArray = [...str, 'K.'];
console.log(newArray);
const ingredients = ['mushrooms', 'peproni', 'cheese'];
restaurant.orderPasta(...ingredients);

// Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
});
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// // renaming
// const {
//   name: restasrunName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restasrunName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

//mutating variables
// let a = 999;
// let b = 123;
// console.log(a, b);
// 999, 123;
// const obj = { a: 1, b: 2 };
// // since a and b are delarced we can redeclared and also by writin {a,b} = obj will throw an error so we simply need to place it in b/w "()"
// ({ a, b } = obj);
// console.log(a, b); // 1, 2

//nested object destructuring
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);// 11 23
//or

// const {
//   openingHours: {
//     fri: { open, close },
//   },
// } = restaurant;
// console.log(open, close); //11 23

// // renaming and assigning default while destructuring nested object

// const {
//   openingHours: {
//     sat: { open: startTime = 11, close: endTime }, // start time 11 is give as default value
//   },
// } = restaurant;
// console.log(startTime, endTime); //0 24



// Destructuring Array

let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3
[a, , b] = [1, 2, 3];
console.log(a, b); // 1 3
[a, b, c] = [1, 2, [4, 5]];
console.log(a, b, c); // 1 2 [4, 5]
console.log(c); // [4, 5]
[a, b, c] = [33, 32]; // there are only 2 elements in the array which will assigned to a and b as for c it will assign arr[2] which is undefined
console.log(a, b, c); // 33 32 undefined

// Default values
[a = 1, b = 1, c = 1] = [41, 42]; // here a,b,c has default value of 1 so the two values in array will be assigned to a & b but for c this time it will not be undefined beacause it has a default value of 1
console.log(a, b, c); //41 42 1

// nested destructuring
[a, , [b, c]] = [51, 52, [55, 56]];
console.log(a, b, c); // 51 55 56

// switching variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); //Italian Vegetarian
[main, secondary] = [secondary, main];
console.log(main, secondary); //Vegetarian Italian

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse); //Pasta Garlic Bread

*/
