/* let js = "amazing";
if(js === "amazing") alert("JavaScript is Fun!");
console.log(48+2);

let jsIsFun = true;
let firstName = "uday";
let lastName;
let age = 26
console.log(typeof jsIsFun)
console.log(typeof true)

jsIsFun = "yes"
console.log(typeof jsIsFun);
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof lastName);
console.log(typeof null);

let firstName;
console.log(firstName);
firstName = "uday";
console.log(firstName);
// const lastName;
const lastName = "kanda";
// lastName = "kanda"
console.log(lastName);
var age;
console.log(age);
age = 26;
console.log(age);
middleName = "chakravarthi" // this will apear in console but it is not variable it will be a property of global object 
console.log(middleName);


// math operators 
const now = 2023;
const myAge = now - 1997;
const tharunsAge = now - 1996;
console.log(myAge, tharunsAge);
console.log(myAge * 2, myAge/10, myAge**2)
console.log("uday" + " " + "kanda")

// assignment operators 
let x = 10 
x += 15 // x = x + 15 = 25 
console.log(x);
x *= 4 // x = x * 4 = 100 
console.log(x);
x /= 4 // x = x/4 = 25 
console.log(x);
x -= 15 // x = x - 15 = 10
console.log(x);
x **= 2; // x = x**2 = 100
console.log(x);

x++; // x = x + 1 = 101
console.log(x);
x--; // x = x - 1 = 100
console.log(x);

// comparision operators 
const isMyAgeLow = myAge < tharunsAge 
console.log(isMyAgeLow);
console.log(now-1997 < now-1996);
// comparision operators >, <, >=, <=, ===, ==

let y,z;
y = z = 20 + 2 - 12
console.log(y,z);
const average1 = myAge + tharunsAge / 2 // here the operator precedance of "/" is greater than "+" so we dont get the average of e2 valules
console.log(average1)
const avereage2 = (myAge + tharunsAge) / 2 // by using paranthasis or grouping we will rectify the above mistake
console.log(avereage2);

// challenge 1
// const massMark = 78;
// const heightMark = 1.69;


// const massJohn  = 92;
// const heightJohn = 1.95;
// const BMIMark  = (massMark/(heightMark * heightMark));
// const BMIJohn = (massJohn /(heightJohn * heightJohn));
// console.log(BMIMark,BMIJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

 


// String and Template literals

// const firstName = "Uday";
// const job = "jr.Full-Stack Developer";
// const company = "OrderStack";
// const birthYear = 1997;
// const year = 2023;
// const person = "I'm " + firstName + ", a " + year - birthYear + " year old " + job;
// const newPerson = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
// console.log(person);
// console.log(newPerson);
// const newPerson1 = `I'm ${firstName}, a ${year - birthYear} year old ${job} at ${company}.`
// console.log(newPerson1)

// if else
const sarahAge = 18;
const isOldEnough = sarahAge >= 18;
if (isOldEnough) {
    console.log('Sarah is old enough to drive a car 🚗');
}else {
    console.log(`Sarah is too young, wait for another ${19-sarahAge} years.`);
}

const birthYear = 1990;
let century // if not decleared we will get a reference error
if (birthYear >= 2000) {
    century = 21;
}else {
    century = 20;
}

console.log(century);


// challenge 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);



if(BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
}else {
    console.log("John's BMI is higher than Mark's!")
}

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

// multiple lines

const multi = 'stirng \n\ with \n\ multiple \n\ lines'
console.log(multi)
const multiline = `string
with
multiple
lines`
console.log(multiline)

// Type conversion and Type coercion

const year = "2023";
console.log(Number(year), year);
console.log(Number(year) + 18);
console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23),23);

// Type coercion
console.log("1991" - 1); // 1990
console.log("23"-"3" - 2 + 7); // 25
console.log("2" * 5); // 10
console.log("2" * "6"); // 12

let n = "1" + 1
console.log(n);// 11 string
n = n - 1 
console.log(n); // 10 number

// Truthy and Falsy values
// 5 Falsy values : 0,"",undefined,null,NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean(''));// false


const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}



// Equality operators "===" vs "=="

const age = "18"
if (age === 18) console.log("it is a number");
else if (age == 18) console.log("not a number");

if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("what is you luck number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 2) {
    console.log("Cool! 2 is a awesome number")
}else if (favourite == "7") console.log("7 is also a cool number");
else console.log("why not a 2");

if (favourite !== 5) console.log("why not 5")
if (favourite != 6) console.log("why not a 6");


// Logical operators 

const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false

console.log(hasDriversLicense && hasGoodVision);// true
console.log(hasDriversLicense || hasGoodVision);// true
console.log(!hasGoodVision);// false
console.log(hasDriversLicense && !hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense && hasGoodVision || !isTired); //true

if(hasDriversLicense && hasGoodVision) {
    console.log("sarah is able to drive");
}else {
    console.log("let someone else drive")
}s

console.log(hasDriversLicense && hasGoodVision && !isTired); //true

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
console.log('Someone else should drive...');
}
  


// challenge 3

const scoreDolphins =( 96+108+89)/3;
const scoreKoalas = (88+91+110)/3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas) console.log("Dolphins win the trophy");
else if (scoreKoalas > scoreDolphins) console.log("Koalas win the trophy");
else console.log("Both win the trophy")

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) console.log('Dolphins win the trophy 🏆');
else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) console.log('Koalas win the trophy 🏆');
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) console.log('Both win the trophy!');
else console.log('No one wins the trophy 😭');



// Switch statements 
const day = "wed"

switch(day) {
    case 'monday':
        console.log("make plans for the week");
        break;
    case 'tuesday' :
        console.log("pepare for theory");
        break;
    case "wednesday" :
    case "thursday":
        console.log("work on task");
        break;
    case "friday" :
        console.log("complete the task");
        break;
    case "saturday":
    case "sunday":
        console.log("enjoy your weekend")
        break;
    default :
        console.log("not a valid day!");
}

// above switch statement in if else control structure

if (day === "monday") {
    console.log("make plans for the week");
}else if (day === "tuesday"){
    console.log("pepare for theory");
}else if (day === "wednesday" || day === "thursday"){
    console.log("work on task");
}else if (day === "friday") {
    console.log("complete the task");
}else if (day === "saturday" || day === "sunday") {
    console.log("enjoy your weekend")
}else {
    console.log("not a valid day!");
}

const val = 100

switch (val) {
    case (val >= 100) :
        console.log("100");
        break;
    case (val < 100) :
        console.log("less");
        break;
    default :
        console.log("logical output of switch value does'nt triger case it is only triggered by value only");
    
}


// Expressions can be assigned or used as operands, while statements can only be declared. 
// Statements create side effects to be useful, while expressions are values or execute to values.

// ternary operator

const age = 26
const drink = age >= 18 ? "wine" : "water";
console.log(drink); 

const out = true ? true ? "nested-true" : "nested-false" : "false"
console.log(out);

const out1 = false ? false ? "nested-true" : "nested-false" : true ? false ? "ture2" : true ? "true3" : "false3" : "false2"
console.log(out1);

const out2 = `i am uday ${age >= 18 ? `an adult of ${age}` : `teen of ${age}` } years old`
console.log(out2);


*/
// challenge 4 
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill*15/100 : bill*20/100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
