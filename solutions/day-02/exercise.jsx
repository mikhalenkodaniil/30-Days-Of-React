// Exercises: What is React?
// 1. What is React?
// Ract is popular library, which develop Facebook
// 2. What is a library?
// list special methods, properties and tools, which help you develop something
// 3. What is a single page application?
// it is application, which have only one html document, which rerender, if you want
// 4. What is a component ?
// component - is universal slice of user interface (for examle button, or section)
// 5. What is the latest version of React?
// most new version, which work stable
// 6. What is DOM?
// DOM - Document Object Model. It is special documents structure in html, which browser can read
// 7. What is React Virtual DOM?
// it is virtual structure, in which react can add or remove components, compare new version DOM between old version DOm, and rerender only new components
// 8. What does a web application or a website(composed of) have?
// components

// Exercises: Why React?
// 1. Why did you chose to use react?
// because it is popular library
// 2. What measures do you use to know popularity ?
// surf in internet and look at count vancies for any JS library
// 3. What is more popular, React or Vue ?
// I think React, because its more easer, than vue. And more junior developers choose react

// Exercises: JSX
// 1. What is an HTML element?
// it is one element/slice of HTML page 
// 2. How to write a self closing HTML element?
// <label>
// 3. What is an HTML attribute? Write some of them
// <div type="" style=""></div> in this example type and style is HTML attribute
// 4. What is JSX?
// it is syntax, which transpill of babel library, and  this syntax stands for JS whith XML
// 5. What is babel?
// library, which transpilate JSX code
// 6. What is a transpiler?
// converter for code to language, which understand compilator

// Exercises: JSX Elements
// 1. What is a JSX element?
// JSC element is html element, which coded in JSX
// 2. Write your name in a JSX element and store it in a name variable
// const name = (<div>Daniil</div>);
// 3. Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
// const name = "Daniil";
// const country = "Poland";
// const email = "...@gmail.com"
// const phoneNumber = "+48-...-...-..."
// const user = (
//     <>
//     <h1>{name}</h1>
//     <p>{country}</p>
//     <p>{title}</p>
//     <p>{gender}</p>
//     <p>{email}</p>
//     <p>{phoneNumber}</p>
//     </>
// );
// 4. Write a footer JSX element
// const footer = <footer>{user}</footer>

// Exercises: Inline Style
// 1. Create a style object for the main JSX
// style = {{width: "400px?, color: "blue"}}
// 2. Create a style object for the footer and app JSX
// styleFooter = {};
// styleApp = {};
// 3. Add more styles to the JSX elements
// styleFooter.color = "red";

// Exercises: Internal Styles
// 1. Apply different styles to your JSX elements
// <footer style={styleFooter}></footer>

// Exercise: Inject data to JSX
// 1. Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
// const stringV = "Hello";
// const numberV = 10;
// const booleanV = true;
// const arrayV = [1, 2, 3, 4];
// const objectV = {name: "Daniil", age: 21}
{/* <div>{objectV.name, objectV.age}</div>
<div>{stringV}</div>
<div>{numberV}</div>
<div>{booleanV}</div>
<div>{arrayV}</div> */}