'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
// Converting and Checking Numbers
console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.2 + 0.2); // 0.4
console.log(0.2 + 0.2 === 0.4); // ture
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.3 + 0.2 === 0.5); // true
console.log(0.3 + 0.6 === 0.9); // false

// conversion
console.log(Number('23'));
console.log(+'23');
console.log(Number('22') === +'22'); // true

// parsing
// parseInt
// Number.parseInt() or parseInt() is same and works same but Number.parseInt() give the namespace of Number well I dont know exactly about that for now but make sure you use 'Number.' methods on numbers
console.log(parseInt('30px')); // 30
console.log(Number.parseInt('30px')); // 30
console.log(parseInt('x30px')); // NaN
console.log(Number.parseInt('x30px')); // NaN
console.log(Number.parseInt('    20px    ')); // 20
console.log(Number.parseInt('20px25')); // 20
console.log(Number.parseInt('20.58px')); // 20
console.log(Number.parseInt('22.5')); // 22

// parseFloat
console.log(parseFloat('30px')); // 30
console.log(Number.parseFloat('30px')); // 30
console.log(parseFloat('x30px')); // NaN
console.log(Number.parseFloat('x30px')); // NaN
console.log(Number.parseFloat('    20px    ')); // 20
console.log(Number.parseFloat('20px25')); // 20
console.log(Number.parseFloat('20.58px')); // 20.58
console.log(Number.parseFloat('22.5')); // 22.5

// check if value is NaN
// isNaN() is may not be same as Number.isNaN() so be careful
console.log(isNaN('30px')); // true
console.log(Number.isNaN('30px')); // false
console.log(isNaN('x30px')); // true
console.log(Number.isNaN('x30px')); // false
console.log(Number.isNaN('    20px    ')); // false
console.log(isNaN('    20px   ')); // true
console.log(isNaN('    20   ')); // false
console.log(Number.isNaN('20px25')); // false
console.log(Number.isNaN('20.58px')); // false
console.log(Number.isNaN('22.5')); // false

// Checking if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

// ROUNDING
// EXPONENT OR TO THE POWER OF
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8
// SQUARE ROOT Math.sqrt()
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); // 5
console.log(Math.sqrt(20)); //4.47213595499958

// CUBE ROOT or any
console.log(27 ** (1 / 3)); // 3
console.log(256 ** (1 / 4)); // 4

console.log(Math.PI); // 3.141592653589793
// area of circle with radius 4px
console.log(Math.PI * Number.parseFloat('4px') ** 2);

// MIN and MAX
const randomarray = [1, 2, 3, 4, 5, 67, -5];
console.log(Math.min(randomarray)); // NaN
console.log(Math.min(...randomarray)); // -5
console.log(Math.min(1, 2, 3, -5, -898)); // -898
console.log(Math.max(...randomarray)); // 67
console.log(Math.max(1, 2, 3, -5, -898)); // 3

// round
console.log(Math.round(2.3)); // 2
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.6)); // 3

// ceil
console.log(Math.ceil(2.1)); // 3
console.log(Math.ceil(2.5)); // 3
console.log(Math.ceil(2.6)); // 3

// floor
console.log(Math.floor(2.9)); // 2
console.log(Math.floor(2.5)); // 2
console.log(Math.floor(2.1)); // 2

// closer look at trunc
console.log(Math.trunc(2.8)); // 2
console.log(Math.trunc(2.1)); // 2
// it just ignore the decimal and give the integer
// from above it looks like it is rounding to the least number you might also think that it is same as floor but not it is just ignore the decimal part thats all
// example to compare floor and trunc
console.log(Math.floor(-2.1)); // -3
console.log(Math.trunc(-2.1)); // -2


// generating random num
// Math.random() method gives a random number between 0 and 1 but not 1

console.log(Math.floor(Math.random() * 20)); // can give an num b/w 0 to 20 but not 20
console.log(Math.floor(Math.random() * 20) + 1); // can give any num b/w 1 to 20 both 1 and 20 are included

// generating a random num b/w a give range
const n = 30;
const m = 20;
console.log(Math.floor(Math.random() * (n - m) + 1) + m); // can give any num b/w 21 to 30 both included

const randomInt = (max, min) =>
  console.log(Math.floor(Math.random() * (max - min) + 1) + min);

randomInt(50, 48);


// The Remainder Operator
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5 // 5 = 2 * 2 + 1

console.log(8 % 3); // 2
console.log(8 / 3); // 2.666666666665 // 8 = 2 * 3 + 2

console.log(6 % 2); // 0
console.log(6 / 2); // 3

console.log(7 % 2); // 1
console.log(7 / 2); // 3.5

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true


// Numeric Separators

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000
// the underscore "_" can be anywhere in the number except at start,end,before "." and afer "."
const price = 345_99;
console.log(price); // 34599
console.log(typeof 358_458); // number
const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000')); // NaN
console.log(+'230_540'); // NaN
console.log(Number.parseInt('230_000')); // 230
console.log(parseInt('230_000')); // 230
*/
// Working with BigInt
// the maximum safe number in js
const largestSafeNum = 2 ** 53 - 1;
console.log(largestSafeNum);
console.log(Number.MAX_SAFE_INTEGER);

// after this number there will be some errors

console.log(4838430248342043823408394839483204n); // big integers must be in integers only not decimals
console.log(BigInt(48384302)); // even the number passed inthe BigInt() should be less than or equal to the Number.MAX_SAFE_INTEGER
// console.log(BigInt(54448.164)); // The number 54448.164 cannot be converted to a BigInt because it is not an integer

// operation can only done b/w the bigint and biint only js cannot allow mixed operation but with some exceptions
// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n)); // Uncaught TypeError: Cannot convert a BigInt value to a number
const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));
// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);
// console.log(11n / 3); Uncaught TypeError: Cannot mix BigInt

// creating date
let now = new Date();
console.log(now);
console.log(new Date('Tue Aug 08 2023 16:04:04'));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // parameters year,month,date,hours,minutes,seconds
console.log(new Date(2037, 10, 31));

console.log(new Date(0)); // parameters milliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());

// date time in string dd/mm/yyyy, hh:mm

const year = now.getFullYear();
const month = `${now.getMonth()}`.padStart(2, 0);
const dd = `${now.getDate()}`.padStart(2, 0);
const hours = `${now.getHours()}`.padStart(2, 0);
const min = `${now.getMinutes()}`.padStart(2, 0);
const sec = `${now.getSeconds()}`.padStart(2, 0);

const dateTimeStr = `${dd}/${month}/${year}, ${hours}:${min}:${sec}`;
console.log(dateTimeStr);
console.log(future.toISOString());
console.log(future.toLocaleDateString());
console.log(future.toLocaleString());

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // can be numeric or long  or 2-digit
  year: 'numeric', // can be numeric  or 2-digit
  weekday: 'long',
};
const localformat = new Intl.DateTimeFormat('te-IN', options).format(now);
console.log('India', localformat);
