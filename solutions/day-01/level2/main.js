//Array
import { countries } from "./countries";
import { webTechs } from "./web_techs";

//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
console.log(words)
console.log(words.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (shoppingCart.indexOf("Meat") === -1) shoppingCart.unshift('Meat');
if (shoppingCart.indexOf("Sugar") === -1) shoppingCart.push('Meat');
let isAllergic = true;
if (isAllergic) shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea')

//4
if (countries.indexOf('Ethiopia') === -1) {
    countries.push('Ethiopia');
} else {
    console.log('ETHIOPIA')
}

//5 
if (webTechs.indexOf('Sass') === -1) {
    webTechs.push('Sass');
    console.log(webTechs);
} else {
    console.log('Sass is a CSS preprocess')
}

//6 
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

//Conditional statements 

//1 
let score = randomValue = Math.floor(Math.random() * 100);
if (score > -1 && score < 50) console.log(`${score} = F`);
if (score > 49 && score < 60) console.log(`${score} = D`);
if (score > 59 && score < 70) console.log(`${score} = C`);
if (score > 69 && score < 80) console.log(`${score} = B`);
if (score > 79 && score < 101) console.log(`${score} = A`);

//2
let month = "September"
switch (month) {
    case "September":
        console.log("Autumn");
        break;
    case "October":
        console.log("Autumn");
        break;
    case "November":
        console.log("Autumn");
        break;
    case "December":
        console.log("Winter");
        break;
    case "January":
        console.log("Winter");
        break;
    case "February":
        console.log("Winter");
        break;
    case "March":
        console.log("Spring");
        break;
    case "April":
        console.log("Spring");
        break;
    case "May":
        console.log("Spring");
        break;
    case "June":
        console.log("Summer");
        break;
    case "July":
        console.log("Summer");
        break;
    case "August":
        console.log("Summer");
        break;
    default:
        console.log(`${month} is not a month`)
}

let weekDay = "monday";
weekDay = weekDay.toLowerCase();
let firstLetter = weekDay.split('').shift().toUpperCase();
weekDay = weekDay.split('')
weekDay.shift()
weekDay.unshift(firstLetter)
weekDay = weekDay.join('')
firstLetter = firstLetter.toUpperCase();
switch (weekDay) {
    case "Monday":
        console.log(`${weekDay} is a working day`)
        break;
    case "Tuesday":
        console.log(`${weekDay} is a working day`)
        break;
    case "Wednesday":
        console.log(`${weekDay} is a working day`)
        break;
    case "Thursday":
        console.log(`${weekDay} is a working day`)
        break;
    case "Friday":
        console.log(`${weekDay} is a working day`)
        break;
    case "Saturday":
        console.log(`${weekDay} is a weekend day`)
        break;
    case "Sunday":
        console.log(`${weekDay} is a weekend day`)
        break;
    default:
        console.log(`${weekDay} is not a week day`)
}

//objects
//1.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  let MoreSkils = null;
  for (person in users) {
    if (MoreSkils !== null) {
        if (MoreSkils.skills.length < users[person].skills.length) {
            MoreSkils = users[person];
        }
    } else {
        MoreSkils = users[person];
    }
  }
  console.log(MoreSkils);

  //2.
  let countUsers = 0;
  for (person in users) {
    countUsers++;
  }
  console.log(countUsers);
  
  //3.
  let MERN_developer = [];
  for (person in users) {
    if (users[person].skills.indexOf("MongoDB") !== -1 && users[person].skills.indexOf("Express") !== -1 && users[person].skills.indexOf("React") !== -1 && users[person].skills.indexOf("Node") !== -1) {
        MERN_developer.push(users[person])
    }
  }

//   4.
users.Daniil = {};

//5.
console.log(Object.keys(users));
//6.
console.log(Object.values(users));
// 7.
let COUNTRIES = {
    Belarus: {
        capital: "Minsk",
        population: 10000000,
        languages: ["Belarussian", "Russian"]
    }
};
console.log(COUNTRIES);

// functions
// 1. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic (a, b, c) {
    if (arguments[0] === undefined ) return `{0}`;

    let D = (b ** 2) - (4 * a * c);
    let x1;
    let x2;
    if (D >= 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
    } 
    if (x1 === x2) {
        return `{${x1}}`
    }
    return `{${x1}, ${x2}}`
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 2. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray () {
    arguments.array.forEach(element => {
        console.log(element);
    });
}

// 3. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime () {
    let out = Date();
    out = out.split(" ");
    switch (out[1]) {
        case "Jan":
            out[1] = 1;
            break;
        case "Feb":
            out[1] = 2;
            break;
        case "Mar":
            out[1] = 3;
            break;
        case "Apr":
            out[1] = 4;
            break;
        case "May":
            out[1] = 5;
            break;
        case "Jun":
            out[1] = 6;
            break;
        case "Jul":
            out[1] = 7;
            break;
        case "Aug":
            out[1] = 8;
            break;
        case "Sep":
            out[1] = 9;
            break;
        case "Oct":
            out[1] = 10;
            break;
        case "Nov":
            out[1] = 11;
            break;
        case "Dec":
            out[1] = 12;
            break;
    }
    out[4] = out[4].split(":");
    console.log(`${out[2]}/${out[1]}/${out[3]} ${out[4][0]}:${out[4][1]}`)
}

// 4. Declare a function name swapValues. This function swaps value of x to y.
function swapValues (x, y) {
    let z = x;
    x = y;
    y = z;
    return {x, y}
}
// 5. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray (arr) {
    let newArr = [];
    for (el of arr) {
        newArr.unshift(el);
    }
    return newArr;
}

// 6. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray (arr) {
    arr[0] = arr[0].toUpperCase();
    return arr;
}
// 7. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr, item) {
    arr[arr.length] = item;
    return arr;
}

// 8. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem (arr, index) {
    arr.splice(index, 1);
    return arr;
}

// 9. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(a) {
    if (a % 2 === 0) {
        return "odd";
    } 
    return "even";
}

// 10. Write a function which takes any number of arguments and return the sum of the arguments

function sumArguments () {
    let sum = 0;
    for (el of arguments) {
        sum += el;
    }
    return sum;
}

// 11. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator () {
    let CHARS = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM"
    CHARS = CHARS.split('');
    const ID = [];
    for (let i = 0; i < 7; i++) {
       let rand = Math.floor(Math.random() * 63);
       ID[i] = CHARS[rand];
    }
    return ID.join("");
}


// Class 
// 1. Override the method you create in Animal class
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    sayMeow() {
        console.log("Meow")
    }
    sayMeowAnyTime(n) {
        for (let i = 0; i < n; i++) {
            console.log("Meow")
        }
    }
}

Animal.prototype.sayMeow = function () {
    console.log("GAFF");
    
}