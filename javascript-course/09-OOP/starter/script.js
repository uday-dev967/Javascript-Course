'use strict';

// Constructor Functions and the new Operator
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.lastName = lastName;
  this.myAge = function () {
    console.log(new Date().getFullYear() - birthYear);
  };
  // NOTE: never create methods in the constructor function like above (this.myAge) bcz if you do that this same function have to copied to all the instances this Person consturctor function it will be give a terrible performance of our code instead of creating methods in the consturctor we should do a prototypal inheritance
};

const lastName = 'Kanda';

// static method for constructor function
// static methods arent available for the instances
Person.greet = function () {
  console.log('hey hai hello');
  console.log(this);
};
const uday = new Person('Uday', 1997);
// whenever we call a function with new keyword it will do the below
// 1. create a new object {}
// 2. function called and the newly created object {} will be assigned to this keyword ===> this = {}
// 3. this new object {} will be linked to prototype
// 4. finally return the object {}

console.log(uday);
// uday.calcAge(); //26
console.log(typeof new Date().getFullYear()); // number
// NOTE: on constructor function it is not js feature it is pattern developed by the other developers

Person.greet();
// uday.greet(); // uday.gree is not a function
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};
uday.calcAge();
console.log(uday);
console.log(uday.__proto__);
console.log(uday.__proto__ === Person.prototype); // ture
console.log(Person.prototype.isPrototypeOf(uday)); // ture
console.log(Person.prototype.isPrototypeOf(Person)); // false
// NOTE: here the Person.prototype doesnt mean the protoypes of Person but it acutally mean Person.prototype is prototype of the instance of the Person but not Person
console.log(Object.getOwnPropertyNames(uday)); // ['firstName', 'birthYear', 'lastName', 'myAge'] // but calcAge is not inclueded
console.log(Object.getOwnPropertyNames(Person)); // ['length', 'name', 'prototype', 'greet']
console.log(uday.hasOwnProperty('myAge')); // true
console.log(uday.hasOwnProperty('firstName')); // ture
console.log(uday.hasOwnProperty('calcAge')); // false // bcz it is prototype not a property
Person.prototype.species = 'Homo Sapiens';
console.log(uday.species); //  Homo Sapiens
console.log(uday.hasOwnProperty('species')); // false // bcz it is prototype not a property
console.log(Person.hasOwnProperty('species')); // false // it is not property but a prototype and aslo it is not for the Person but for its instaces
// Prototypal Inheritance on Built-In Objects
console.log(uday.__proto__); // form Person
console.log(uday.__proto__.__proto__); // from Object
console.log(uday.__proto__.__proto__.__proto__); // null

// Person.prototype.constructor refers back to person it self
console.dir(Person.prototype.constructor);
const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prototype.eachConsoleLog = function () {
  this.forEach(each => console.log(each));
};

arr.eachConsoleLog();
console.dir(x => x + 1);
console.log(Object.getOwnPropertyNames(uday)); // all the things in prototype will not be included here

// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    // instance properites
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // instance methods. Methods will be added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
  // getter for class
  get age() {
    return new Date().getFullYear() - this.birthYear;
  }
  // setter for class
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a Full-Name`), (this.firstName = name);
  }
  get fullName() {
    return this._fullName;
  }
  // static method it wont be available for the instances and will not be in prototype or in the property
  static greet() {
    console.log('hai all how are you');
    console.log(this);
  }
}
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

PersonCl.prototype.location = 'India';

const person1 = new PersonCl('Uday Kanda', 1997);
console.log(person1.__proto__);
console.log(Object.getOwnPropertyNames(person1)); //  ['firstName', 'birthYear'] // all the things in prototype inheritance will not apear here
console.log('geter', person1.age);
console.log(person1.location); // India
console.log(person1.__proto__ === PersonCl.prototype); // true
console.log(person1.__proto__.__proto__); // it gives the prototypes of inctance of Object which are PersonCl
console.log(person1.__proto__.__proto__.__proto__); // null
// PersonCl.prototype.constructor should refer back to PersonCl itselp
console.log(PersonCl.prototype.constructor);
console.dir(PersonCl.prototype.constructor);

// getters and setters
const account = {
  owner: 'uday',
  movements: [200, 500, 1300, 2222],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 200;
console.log(account.movements);
const person2 = new PersonCl('Uday', 1997);
PersonCl.greet();
// person1.greet(); // TypeError: person1.greet is not a function
console.log(person1.__proto__.__proto__);
console.log(Object.getOwnPropertyNames(PersonCl));
console.dir(PersonCl);

// Object.create
const personProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.bithYear);
  },

  init(firstName, birthYear) {
    // objects properties
    this.firstName = firstName;
    this.birhtYear = birthYear;
  },
};

const uday = Object.create(personProto);
console.log(uday.__proto__); // {calcAge: ƒ, init: ƒ}
console.log(Object.getOwnPropertyNames(uday)); // [] // empty list no properties for this at this point in time
uday.init('Uday', 1997);
console.log(Object.getOwnPropertyNames(uday)); // ['firstName', 'birhtYear']
// we can also add properties like below
uday.lastName = 'Kanda';
console.log(Object.getOwnPropertyNames(uday)); // ['firstName', 'birhtYear', 'lastName']
console.log(uday.__proto__ === personProto); // true
*/
/*
// Inheritance Between "Classes": Constructor Functions

const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person1.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};
// Linking the Prototypes
// for inheritance to be achived
// student1.__proto__ should be Student.prototype
// then again Student.prototype.__proto__ should be Person1.prototype which is finally student1.__proto__.__proto__
const Student = function (firstName, birthYear, course) {
  // we are binding the Person1 with the this object which is finally the instace of Student
  Person1.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person1.prototype); // here were assigning the Person1.prototype to Student.prototype.__proto__
console.log(Student.prototype.__proto__ === Person1.prototype); // true

const student1 = new Student('Uday', 1997, 'Ele');
console.log(student1.firstName);
student1.calcAge();
console.log(student1.__proto__.__proto__ === Person1.prototype);
Student.prototype.introduce = function () {
  console.log(`Hi I am ${this.firstName} and I am studying ${this.course}`);
};
student1.introduce(); // Hi I am Uday and I am studying Ele
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person1); // true
console.log(student1 instanceof Object); // true
console.dir(Student.prototype.constructor); // Person1 {introduce: ƒ}
console.log(student1.__proto__); // Person1 {introduce: ƒ}
//in the student1.__proto__ refer to  Person1 which look like below
// Person1 {introduce: ƒ}
// introduce: ƒ ()
// [[Prototype]]: Object
//   calcAge: ƒ ()
//   constructor: ƒ (firstName, birthYear)
//   [[Prototype]]: Object
// but should student1.__proto__ refer the studen.prototype
// we can actually rectify this mistake like below

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // ƒ Student(firstName, birthYear, course)
*/
// Inheritance Between "Classes": ES6 Classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // the super() function must be called before accessing this keyword because it is the praent class responsiblity to pass this keyword
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  // method over writing
  calcAge() {
    console.log(
      `I'm ${
        new Date().getFullYear() - this.birthYear
      } years old, but as a student I feel more like ${
        new Date().getFullYear() - this.birthYear + 10
      }`
    );
  }
  // here method over writing means we are creating a new method with the same name in the local prototype scope or chain if it will not change the method in the parent class here the calcAge is not calcAge in PersonCl both are different
}

const Uday = new StudentCl('Uday Kanda', 1997, 'Ele');
console.log(Uday);
console.log(Uday.fullName);
console.log(Uday._fullName);
console.log(Uday.course);
Uday.calcAge();
console.log(Uday.__proto__ === StudentCl.prototype);
console.log(Uday.__proto__.__proto__ === PersonCl.prototype);
console.log(Uday instanceof StudentCl);
console.log(Uday instanceof PersonCl);
console.log(Uday.__proto__);
console.log(Uday.__proto__.__proto__);
console.log(Uday.__proto__.calcAge);
console.log(StudentCl.prototype.__proto__.calcAge);


const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const Uday = Object.create(StudentProto);
Uday.init('Uday', 1997, 'Ele');
Uday.calcAge();
console.log(Uday.firstName);
console.log(Uday.course);
StudentProto.introuduce = function () {
  console.log(`i am ${this.firstName} and i am studying ${this.course}`);
};
// over writing the methods
StudentProto.calcAge = function () {
  console.log(
    `I'm ${
      new Date().getFullYear() - this.birthYear
    } years old, but as a student I feel more like ${
      new Date().getFullYear() - this.birthYear + 10
    }`
  );
};
Uday.introuduce();
console.log(Uday.__proto__);
console.log(Uday.__proto__.__proto__);
console.log(Uday.__proto__ === StudentProto);
console.log(Uday.__proto__.__proto__ === PersonProto);
Uday.calcAge();

// class example
class Account {
  constructor(owner, pin, currency) {
    this.owner = owner;
    this.pin = pin;
    this.currency = currency;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening account, ${owner}`);
  }
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Your loan is approved and initialized');
    }
  }
}

const acc1 = new Account('Uday', 1997, 'INR');
// movements are actually accesible out side of the class which not a good thing
// and also modifiying data manually like below is no recommended
acc1.movements.push(222);
acc1.movements.push(-120);

acc1.deposit(200);
acc1.withdraw(100);
console.log(acc1);
console.log(acc1.pin); // 1997 // it shouldn't be accessible out side the class
acc1.requestLoan(10000);
console.log(acc1.approveLoan(10000)); // this approveLoan shouldn't accessible outside the class


// Encapsulation: Protected Properties and Methods
class Account {
  constructor(owner, pin, currency) {
    this.owner = owner;
    this._pin = pin;
    this.currency = currency;
    this._movements = []; // it is some how protected but not a private
    this.locale = navigator.language;
    console.log(`Thanks for opening account, ${owner}`);
  }
  getMovements() {
    return this._movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    // works similarly like the _movements
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Your loan is approved and initialized');
    }
  }
}

const acc1 = new Account('Uday', 1997, 'INR');
// now movements are not actually accesible out side of the class which a good thing
// acc1.movements.push(222);
// acc1.movements.push(-120);
// but still we can modifiying data manually like below is no recommended
acc1._movements.push(222);
acc1._movements.push(-120);
console.log(acc1.getMovements());
acc1.deposit(200);
acc1.withdraw(100);
console.log(acc1);
// console.log(acc1.pin); // it is protected but not a private it is still accessible by _pin
acc1.requestLoan(10000);
// console.log(acc1.approveLoan(10000)); // this approveLoan is protected but can be accessbile out side
console.log(acc1._approveLoan(10000)); // this _approveLoan still be accessible outside the class
console.log(acc1);
*/
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)
class Account {
  // public fields
  locale = navigator.language;
  // private fields these fields cannot be accessed outside the class
  #movements = [];
  #pin;

  constructor(owner, pin, currency) {
    this.owner = owner;
    this.#pin = pin;
    this.currency = currency;
    console.log(`Thanks for opening account, ${owner}`);
  }
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  #approveLoan(val) {
    // works similarly like the _movements
    return true;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Your loan is approved and initialized');
    }
    return this;
  }
}

const acc1 = new Account('Uday', 1997, 'INR');
// now movements are not actually accesible out side of the class which a good thing and now it is truly private

console.log(acc1.getMovements());
acc1.deposit(200);
acc1.withdraw(100);
console.log(acc1);
// console.log(acc1.#movements); // SyntaxError: Private field '#movements' must be declared in an enclosing class
// console.log(acc1.pin); // it is protected but not a private it is still accessible by _pin
acc1.requestLoan(10000);

// console.log(acc1.#approveLoan(10000)); // SyntaxError: Private field '#approveLoan' must be declared in an enclosing class
console.log(acc1);
