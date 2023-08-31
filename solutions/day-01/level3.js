//Array

// 1.The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - 
//Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - 

import { countries } from "./level2/countries";

//Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort((a, b) => a - b);

const MIN_AGE = ages[0];

const MAX_AGE = ages[ages.length - 1];

let MEDIAN_AGE;
if (ages.length % 2 === 0) {
    MEDIAN_AGE = (ages[(ages.length / 2) - 1] + ages[ages.length / 2]) / 2;
} else {
    MEDIAN_AGE = ages[Math.floor(ages.length / 2)];
}

let avarageAge = 0;
for (let i = 0; i < ages.length; i++) {
    avarageAge += age[i];
}
avarageAge = avarageAge / ages.length;

const RANGE_AGES = MAX_AGE - MIN_AGE;

if (Math.abs(MIN_AGE - averageAge) === Math.abs(MAX_AGE - averageAge)) {
    console.log(true)
} else {
    console.log(false)
}
// 1.Slice the first ten countries from the countries array
 countries.splice(0, 10);
// 2.Find the middle country(ies) in the countries array
let middleCountry;
if (countries.length % 2 === 0) {
    middleCountry = countries[(countries.length / 2) - 1] + countries[countries.length / 2];
} else {
    middleCountry = countries[Math.floor(countries.length / 2)];
}
// 3.Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let country1;
let country2;
if (countries.length % 2 === 0) {
    country1 = countries.splice(0, (countries.length / 2));
    country2 = countries;
} else {
    countries.unshift('NewCountry')
    country1 = countries.splice(0, (countries.length / 2));
    country2 = countries;
}

//Conditional statements 

//1
let month = "September"
switch (month) {
    case "September":
        console.log(`${month} has 30 day`)
        break;
    case "October":
        console.log(`${month} has 31 day`)
        break;
    case "November":
        console.log(`${month} has 30 day`)
        break;
    case "December":
        console.log(`${month} has 31 day`)
        break;
    case "January":
        console.log(`${month} has 31 day`)
        break;
    case "February":
        console.log(`${month} has 28 day`)
        break;
    case "March":
        console.log(`${month} has 31 day`)
        break;
    case "April":
        console.log(`${month} has 30 day`)
        break;
    case "May":
        console.log(`${month} has 31 day`)
        break;
    case "June":
        console.log(`${month} has 30 day`)
        break;
    case "July":
        console.log(`${month} has 31 day`)
        break;
    case "August":
        console.log(`${month} has 31 day`)
        break;
    default:
        console.log(`${month} is not a month`)
}

//objects
// 1. Create an object literal called personAccount.
//  It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
//  Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
    firstName: "Daniil",
    lastName: "Mikhalenka",
    incomes: {
        incomes: 0,
        description: "$"
    },
    expenses: {
        expenses: 0,
        description: "$"
    },
    totalIncome: function() {},
    totalExpense: function() {},
    accountInfo: function() {},
    addIncome: function() {},
    addExpense: function() {},
    accountBalance: function() {},
}

// 2.
const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]
//a.
users.signUp = function (n_id, nusername, nemail, npassword, ncreatedAt, nisLoggedIn) {
    let isExist = false;
    users.forEach ((el) => {
        if (el.username === nusername) {
            isExist = true;
        }
    });
    if (isExist) {
        console.log(`account ${username} already exist`) 
    } else {
        users.push({
            _id: n_id,
            username: nusername,
            email: nemail,
            password: npassword,
            createdAt: ncreatedAt,
            isLoggedIn: nisLoggedIn
        });

    }
}
//b.
users.signIn = function (inUserName, inPassword) {
    users.forEach((el) => {
        if (el.username === inUserName && password === inPassword) {
            el.isLoggedIn = true;
        } else {
            console.log("check your password or username")
        }
    });
}

//3
//a.
products.rateProduct = function (pName, id, r) {
    this[pName].ratings.push({
        userId: id,
        rate: r
    });
}
//b.
products.avarageRating = function () {
    products.forEach((el) => {
        if (el.ratings[0]) {
            let count = 0;
            let sum = 0;
            el.ratings.forEach((el) => {
                count++;
                sum += el.rate;
            });
            console.log(`${el.name} have rating: ${sum / count}`)
        } else {
            console.log(`${el.name} product don't have any ratings`)
        }
    });
}
// 4.
products.likeProduct = function (userId) {
    let i = this.likes.indexOf(userId);
    if (i === -1) {
        this.likes.push(userId);
    } else {
        this.likes.splice(i, 1);
    }
}

// functions
// 1. Declare a function name userIdGeneratedByUser. 
// It doesn’t take any parameter but it takes two inputs using prompt(). 
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser(num, N) {
    const OUT = [];
    function userIdGenerator () {
        let CHARS = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM"
        CHARS = CHARS.split('');
        const ID = [];
        for (let i = 0; i < num; i++) {
           let rand = Math.floor(Math.random() * 63);
           ID[i] = CHARS[rand];
        }
        return ID.join("");
    }
    for (let i = 0; i < N; i++) {
        OUT[i] = userIdGenerator();
    }
    return OUT;
}

// 2. Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, N) {
    let color = [];
    const out = [];
    switch(type) {
        case 'hexa':
            let symb = "qwertyuiopasdfghjklzxcvbnm1234567890"
            symb = symb.split('');
            for (let i = 0; i < N; i++) {
                color = [];
                for (let i = 0; i < 6; i++) {
                    color[i] = symb[Math.floor(Math.random() * 37)];
                } 
                // color = color.split('');
                color.unshift("#");
                color = color.join("");
                out[i] = color;
            }
            return out;
        case 'rgb':
            for (let i = 0; i < N; i++) {
                color = [];
                for (let i = 0; i < 3; i++) {
                    color[i] = Math.floor(Math.random() * 256);
                }
                color = color.join(", ");
                color = color.split('');
                color.unshift("rgb(");
                color.push(")")
                color = color.join('');
                out[i] = color;
            }
            return out;
        default:
            return "incorrect type of color"
    }
}

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 3. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray (arr) {
    let newArr = [];
    function randomPosition () {
        let out;
        out = Math.floor(Math.random() * arr.length)
        if (newArr[out]) {
            return randomPosition();
        }
            return out
    }
    for (el of arr) {
        newArr[randomPosition()] = el;
    }
    return newArr;
}

// 4. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial (num) {
    let out = 1;
    for (let i = 2; i < (num + 1); i++) {
        out *= i;
    }
    return out;
}

// 5. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(a) {
    if (a) {
            return "not empty";

    }
    return 'empty';
}

// 6. Write a function called average, it takes an array parameter and returns the average of the items. 
// Check if all the array items are number types. 
// If not give return reasonable feedback.
function averageOfArray(arr) {
    if (!arr[0]) return 0;
    let average = 0;
    let count = 0; 
    for (el of arr) {
        average += el;
        count++;
    }
    return average / count;
}

// Class 
// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and 
// measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
// You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. 
// Check the output below.