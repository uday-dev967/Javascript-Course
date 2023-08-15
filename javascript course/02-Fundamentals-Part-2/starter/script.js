'use strict'
/*
firstName = "uday"; 
console.log(firstName); // if strict mode is not activated output will be in console else reference error will appear console;

const interface = "none";
console.log(interface) // if strict mode is not activated output will be in console else syntax error uncepexted strict mode will appear in console

interface = "none";
console.log(interface); // if strict mode is not activated output will be in console else Uncaught SyntaxError: Unexpected strict mode reserved word




function greet() {
    console.log("hi");
}

greet();

function greet2(name) {
    console.log(`hai ${name}`); // if the name argument is not passed in both modes output will be hai undefined
}

greet2();// hai undefined
greet2("uday")// hai uday 


function greet3(name) {
    const string = `hai ${name}`
    console.log(string);
    return string
}
let out1 = greet3("uday"); //hai uday


function greet4(name, time="morning") {
    const string = `hai ${name}, good${time}`
    return string
}

function greet5(time="morning", name) { // the default value cannot be assigned to first argument if there are multiple arugument it may give unexpeted effect
    const string = `hai ${name}, good${time}`
    return string
}


let out2 = greet4("uday");
console.log(out2);

let out3 = greet4("uday");
console.log(out3);



// function declaration and function expression

// function declaration
// can be called before it is defined
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// function expression 
// cannot ge called before it is defined
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);



// Arrow function
// simple arrow function

const calculateAge = birthyear => 2023-birthyear
console.log(calculateAge(1997))

const remingYearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(remingYearsUntilRetirement(1997,"uday"));


// function calling other functions


function fruitPeices(fruit) {
    return fruit * 4
}

function fruitProcessor(apples,oranges) {
    const applePieces = fruitPeices(apples);
    const orangePieces = fruitPeices(oranges);

    const juice = `juice of ${applePieces} pecies of apple and ${orangePieces} peices of orange`
    return juice;
} 

console.log(fruitProcessor(2,8));



const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

const yearsUntilRetirement1 = function (birthYeah, firstName) { // function works same as above function
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    console.log(`${firstName} has already retired 🎉`);
    return -1;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
console.log(yearsUntilRetirement1(1991, 'Jonas'));
console.log(yearsUntilRetirement1(1950, 'Mike'));


// challenge 1


const calcAverage = (x,y,z) => (x+y+z)/3;

const scoreDolphins = calcAverage(44,23,71);

const scoreKoalas = calcAverage(65,54,49);

function checkWinner() {
    if (scoreKoalas >= 2*(scoreDolphins)) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`)
    }
    else if(scoreDolphins > 2*(scoreKoalas)) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)
    }else {
        console.log("No team wins...")
    }
} 

checkWinner()



// Arrays

const friends = ["Tharun", "Rajeev","Anil","Anu"];
console.log(friends[0]);
console.log(friends.length)
console.log(friends[friends.length-1]);
console.log(friends);

friends[friends.length-1] = "Nikhitha"
console.log(friends);

const firstName = "Uday"
const uday = [firstName,"kanda",2023-1997,friends]
console.log(uday)

const calculateAge = (year) => 2023 - year
const birthYear = [1996,2000,1997,1998];
const age1 = calculateAge(birthYear[0])
const age2 = calculateAge(birthYear[1]);
const age3 = calculateAge(birthYear[birthYear.length-1]);

const ages = [calculateAge(birthYear[0]),calculateAge(birthYear[1]),calculateAge(birthYear[birthYear.length-1])]
console.log(ages)


// Basic Array Operations(methods)

// for adding an element push, unshift

const friends = ["Tharun", "Rajeev","Anil","Anu"];
console.log(friends)
const pushed = friends.push("Nikhita"); // push function adds the new element in the last of the array retunrs length
console.log(pushed);
console.log(friends)

const unshifted = friends.unshift("uday"); // unshift function adds the new element in the first of the array and return length.
console.log(unshifted);
console.log(friends);

// for removing elements pop,shift

const poped = friends.pop(); // pop funtion remove the last element and returns the removed element.
console.log(poped);
console.log(friends);

const shifted = friends.shift(); // shift funtion remove the 1st element and returns the removed element.
console.log(shifted);
console.log(friends);

// finding index of an element
const index = friends.indexOf("Rajeev");// return the 1st matched element index of the array else returns -1
console.log(index);// 1
const index2 = friends.indexOf("Hari");
console.log(index2); // -1

// checking wheater the element is present in the array or not 

const isPresent = friends.includes("Anu"); // returns true if present else returns false
console.log(isPresent);
const isPresent1 = friends.includes("Nikhitha");
console.log(isPresent1);

friends.push(23);

console.log(friends.includes("23"))// returns false because includes check the element wiht strict equal to "==="
console.log(friends)



// challenge 2

const calcTip = (bill) => {
    // if(bill >= 50 && bill <= 300) {
    //     return bill * 0.15
    // }
    // return bill * 0.2
    // or
    
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [125,555,44]
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
console.log(tips)
const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(totals)



// intor to objects 

const person = {
    firstName : "Uday",
    lastName : "Kanda",
    age : 2023-1997,
    job : "Jr.Full-stack Deverloper",
    friends : ["Tharun","Rajeev","Anil","Anu"]
}

console.log(person);

console.log(person.lastName);
console.log(person['lastName']);

const nameKey = 'Name';
console.log(person['first' + nameKey]);
console.log(person['last' + nameKey]);

// console.log(person.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (person[interestedIn]) {
  console.log(person[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

person.location = 'INDIA';
person['mail'] = 'udaychakravarthi22@gmail.com';
console.log(person);

// challenge 

console.log(`${person.firstName} has ${person.friends.length} friends, and his best friend is ${person.friends[0]}.`)


const friends = ["Tharun", "Rajeev","Anil","Anu"];



// Object Methods

const person = {
    firstName : "Uday",
    lastName : "Kanda",
    birthYear : 1997,
    hasDrivingsLicense : false,
    job : "Jr.Full-stack Deverloper",
    friends : ["Tharun","Rajeev","Anil","Anu"],
    calculateAge : function() {
        this.age = 2023 - this.birthYear;
        return this.age
    },
    getInfo : function() {
        return (`Hi I'm ${this.firstName}, a ${this.calculateAge()} year old ${this.job},  ${this.hasDrivingsLicense ? "and has a driving license" : "but do not have driving license"}`);
    }
}
console.log(person.firstName)// Uday
console.log(person["firstName"])// Uday bracket notation can accept expression or any computed value
// console.log(person."firstName") // throws an syntax error because dot notation will only accept final key value
// console.log(person[firstName])// throws an reference error because firstName is not defined
const myLastName = "lastName"
console.log(person[myLastName])// Kanda => since bracket notation will accept computed value or expression

console.log(person.myLastName)// undefined => since dot notation will only accept final key and it takes myLastName as key but not variable and in the object if we try to access any key that is not present in the object then it return undefined

person.calculateAge();
console.log(person.getInfo());


// challenge 3 

const mark = {
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function() {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi
    }
}

const john = {
    fullName : "John Smith",
    mass : 92,
    height : 1.95,
    calcBMI : function() {
        this.bmi = this.mass/(this.height* this.height);
        return this.bmi
    }
}

const condition = mark.calcBMI() > john.calcBMI()

console.log( condition ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!` : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)



// for loop

// for loop keeps running while condition is TRUE

for(let x=1; x <= 10;x++) {
    console.log(`Lifting weights times ${x}.`)
}



// Looping Arrays, Breaking and Continuing
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

// for (let i=0;i<jonas.length;i++) {
//     // filling the array
//     // types.push(typeof jonas[i])// method 1 
//     // or
//     types[i] = typeof jonas[i]
// }

// console.log(types)

// the above code is same as bellow

for (let i=0;Boolean(jonas[i]);i++) {// since for loop runs untill the condition is false we can make of it
    // filling the array
    // types.push(typeof jonas[i])// method 1 
    // or
    types[i] = typeof jonas[i]
}

console.log(types)

const years = [1997,1999,2000,1987];
const ages = [];
for (let i=0; Boolean(years[i]); i++) {
    //filling the array
    ages.push(2023-years[i]);
}

console.log(ages)

// Continue and Break in loop

// Continue
for (let i=0;Boolean(jonas[i]);i++) {
    if(typeof jonas[i] !== 'string') continue
    console.log(jonas[i], typeof jonas[i])
}

// Break

for (let i=0;Boolean(jonas[i]);i++) {
    if(typeof jonas[i] === 'number') break
    console.log(jonas[i], typeof jonas[i])
}



// Backward array looping or reverse looping and loop in loop

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = jonas.length-1;i>=0;i--) {
    console.log(i,jonas[i])
}

// loops in loops

for(let exercise=1; exercise<4; exercise++) {
    console.log(`--------- Start Exercise ${exercise} ---------`);
    for(let rep = 1; rep<=5; rep++){
        console.log(`Exercise ${exercise} : Lifting weights rep ${rep}`);
    }
}



// while loop

let rep = 1;
while(rep <= 5) {
    console.log(`lifting weights ${rep}`);
    rep ++;
}

let dice = Math.trunc(Math.random() * 6) + 1

// while (dice !== 6) {
//      console.log(`You Rolled ${dice}`);
//      dice = Math.trunc(Math.random()*6) + 1;
//      if(dice === 6) console.log(`Your loop is about to end....`);
// }

// let try to do this for loop


for (;dice !== 6;) {
    console.log(`You Rolled ${dice}`);
     dice = Math.trunc(Math.random()*6) + 1;
     if(dice === 6) console.log(`Your loop is about to end....`);
}

*/

// challenge 4

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}



const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

for(let i=0; i < bills.length; i++) tips.push(calcTip(bills[i])) ;

for(let i=0; i < tips.length; i++) totals.push(bills[i] + tips[i]) ;

console.log(tips);
console.log(totals);

const calcAerage = function(arr) {
    let sum = 0;
    for(let i=0; i<arr.length;i++) sum+=arr[i];
    console.log(sum/arr.length);
}

calcAerage(totals);


// const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips1 = [];
const totals1 = [];

for(let i=0; i < bills.length; i++) tips1.push(calcTip(bills[i])),totals1.push(bills[i] + tips1[i]) ;


console.log(tips1);
console.log(totals1);