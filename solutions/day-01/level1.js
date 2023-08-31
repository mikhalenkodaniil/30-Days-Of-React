// Arrays
// 1. Declare an empty array;
const EMPTY_ARRAY = [];
// 2. Declare an array with more than 5 number of elements
const ARRAY_MORE_5 = Array(6);
// 3. Find the length of your array
const LENGTH_OF_MY_ARRAY = ARRAY_MORE_5.length;
// 4. Get the first item, the middle item and the last item of the array
let firstItem = ARRAY_MORE_5[0];
let lastItem = ARRAY_MORE_5[LENGTH_OF_MY_ARRAY - 1];
let middleItem = ARRAY_MORE_5[(LENGTH_OF_MY_ARRAY - 1) / 2];
// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypesArray = [1, '2', true, NaN, {name: "Dan", surname: "Mik"}, null];
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// 7. Print the array using console.log()
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length)
// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[(itCompanies.length - 1) / 2]);
// 10. Print out each company
itCompanies.forEach(el => console.log(el));
// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach((el, id) => {
    // itCompanies[id] = el.toUpperCase();
    console.log(el.toUpperCase())
});
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let out = "";
for (let i = 0; i < (itCompanies.length - 1); i++) {
    if (i === (itCompanies.length - 2)) {
        out += itCompanies[i];
        out += " and ";
        out += itCompanies[i + 1];
        out += " are big IT companies";
    } else {
        out += itCompanies[i];
        out += ", ";
    }
}
console.log(out);
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function checkCompany(arr, name) {
    const IS_EXIST = arr.indexOf(name);
    if (IS_EXIST !== -1) {
        return name;
    } else {
        return "a company is not found";
    }
}
checkCompany(itCompanies, "IBM");
// 14. Filter out companies which have more than one 'o' without the filter method
let newArr = [];
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].toLowerCase().split('').indexOf("o") === itCompanies[i].toLowerCase().split('').lastIndexOf("o")) {
        newArr.push(itCompanies[i]);
    }
}
console.log(newArr);
// 15. Sort the array using sort() method
itCompanies.sort();
// 16. Reverse the array using reverse() method
itCompanies.reverse();
// 17. Slice out the first 3 companies from the array
itCompanies.splice(0, 3);
// 18. Slice out the last 3 companies from the array
itCompanies.splice(itCompanies.length - 3, 3);
// 19. Slice out the middle IT company or companies from the array
if (itCompanies.length % 2 === 0) {
    itCompanies.splice((itCompanies.length / 2) - 1, 2)
} else {
    itCompanies.splice(Math.floor(itCompanies.length / 2), 1)
}
// 20. Remove the first IT company from the array
itCompanies.shift();
// 21. Remove the middle IT company or companies from the array
if (itCompanies.length % 2 === 0) {
    itCompanies.splice((itCompanies.length / 2) - 1, 2)
} else {
    itCompanies.splice(Math.floor(itCompanies.length / 2), 1)
}
// 22. Remove the last IT company from the array
itCompanies.pop();
// 23. Remove all IT companies
itCompanies.splice(0, Infinity);

//Conditional statements 

//1
let yourAge = Math.floor(Math.random() * 50);
if (yourAge > 18) {
    console.log('You are old enough to drive');
} else {
    console.log(`wait for the ${18 - yourAge}`);
}
//2
let myAge = 21;
if (myAge > yourAge) {
    console.log("I'm older")
} else{
    console.log("You are older")
}
//3
let a = 4
let b = 3
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${b} is greater than ${a}`)
}

(a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`);
//4
let randomValue = Math.floor(Math.random() * 50);
if (randomValue % 2 === 0) {
    console.log(`${randomValue} is an even number`);
} else {
    console.log(`${randomValue} is an odd number`);
}

//Objects
// 1.Create an empty object called dog
let dog = {};
// 2.Print the the dog object on the console
console.log(dog);
// 3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Bred";
dog.legs = 4;
dog.color = "Black";
dog.age = 4;
dog.bark = function() {return "woof woof"}
// 4.Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.age);
console.log(dog.color);
console.log(dog.bark());
// 5.Set new properties the dog object: breed, getDogInfo
dog.breed = "Labrodor"
dog.getDogInfo = function() {
    console.log(this.name);
    console.log(this.breed)
    console.log(this.legs);
    console.log(this.age);
    console.log(this.color);
    console.log(this.bark());
}

// functions
// 1.Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName (firstName, lastName) {
    return `${firstName} ${lastName}`
}

// 2.Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers (a, b) {
    return a + b;
} 

// 3.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function _areaOfCircle (r) {
    return Math.PI * (r ** 2);
}

// 4.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit (t) {
    return t * 9 / 5;
}

// 5.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. 
// BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.


// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calculateBMI (weight, height) {
    let BMI = weight / (height ** 2);
    let out = "";
    switch (BMI) {
        case (BMI < 18.5):
            out = "Underweight";
            break;
        case (BMI >= 18.5 && BMI <= 24.9):
            out = "Normal weight"
            break;
        case (BMI >= 25 && BMI <= 29.9):
            out = "Overweight";
            break;
        case (BMI >= 30):
            out = "Obese";
            break;
        default: 
            out = "incorrect data";
    }
    return out;
}

// 6.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason (month) {
    let out = "";
    switch (month) {
        case "September":
            out = "Autumn";
            break;
        case "October":
            out = "Autumn";
            break;
        case "November":
            out = "Autumn";
            break;
        case "December":
            out = "Winter";
            break;
        case "January":
            out = "Winter";
            break;
        case "February":
            out = "Winter";
            break;
        case "March":
            out = "Spring";
            break;
        case "April":
            out = "Spring";
            break;
        case "May":
            out = "Spring";
            break;
        case "June":
            out = "Summer";
            break;
        case "July":
            out = "Summer";
            break;
        case "August":
            out = "Summer"
            break;
        default:
            out = `${month} is not a month`;
    }
    return out;
}

// destructurin
// 1.Create a function called getPersonInfo. 
// The getPersonInfo function takes an object parameter.
//  The structure of the object and the output of the function is given below.
//  Try to use both a regular way and destructuring and compare the cleanness of the code. 
// If you want to compare your solution with my solution, check this link.
const person_task = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }
function getPersonInfo(obj) {
    const { firstName, lastName, age, country, job, skills, languages } = obj;
    console.log(firstName, lastName, age, country, job, skills, languages)
}
getPersonInfo (person_task)

// Functional programming
const products_fp = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  products_fp.forEach((el) => {
    console.log(el.price)
});
// 1. Print the price of each product using forEach

// 2. Print the product items as follows using forEach

//    ```sh
//    The price of banana is 3 euros.
//    The price of mango is 6 euros.
//    The price of potato is unknown.
//    The price of avocado is 8 euros.
//    The price of coffee is 10 euros.
//    The price of tea is unknown.
//    ```
products_fp.forEach((el) => {
    if (+el.price) {
        console.log(`The price of ${el.product} is ${el.price} euros`)
    } else {
        console.log(`The price of ${el.product} is unknown`)
    }
});
// 3. Calculate the sum of all the prices using forEach
let sum = 0;
products_fp.forEach((el) => {
    sum += Number(el.price)
});

// 4. Create an array of prices using map and store it in a variable prices
let store = products_fp.map((el) => {
    return el.price;
})
// 5. Filter products with prices
store.filter((el) => +el);
// 6. Use method chaining to get the sum of the prices(map, filter, reduce)
products_fp.map((el) => el.price).filter((element) => +element).reduce((a, b) => a + b);
// 7. Calculate the sum of all the prices using reduce only
products_fp.reduce((a, b) => a + +b.price, 0);
// 8. Find the first product which doesn't have a price value
products_fp.find(el => !+el.price)
// 9. Find the index of the first product which does not have price value
products_fp.findIndex(el => !+el.price)
// 10. Check if some products do not have a price value
products_fp.some(el => !+el.price)
// 11. Check if all the products have price value
products_fp.every(el => +el.price)
// 12. Explain the difference between forEach, map, filter and reduce
//1) check each el 2) change each 3) filter each element (callback return true/false) 4) current value ~operation~ each el

// 13. Explain the difference between filter, find and findIndex
// 1) filter each element (callback return true/false) 2) if ?el exist return element else undefined 3) if ?el exist return elements index else undefined

// 14. Explain the difference between some and every
// 1) if some one ?el return true else false 2) if all ?el return true else false


// Class 
// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
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
// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(name, age, color, legs, say = "Gaff") {
        super(name, age, color, legs)
        this.say = say;
    }
    say() {
        console.log(`${say}-${say}!`);
    } 
}

class Cat extends Animal {
    constructor(name, age, color, legs, say = "Meow") {
        super(name, age, color, legs)
        this.say = say;
    }
    say() {
        console.log(`${say}-${say}!`);
    } 
}