// 1. What is the difference between a regular function and an arrow function?
// arrow function is calling after initialization, but regular function we can calling any times for function name

// 2. What is a React Component?
// its slice of page, which have his logic and html

// 3. How do you make a React functional component?
// export default function ReactComponent () {
    // let text = "hello world"
    // return (<div>{text}</div>)
// }

// 4. What is the difference between a pure JavaScript function and a functional component?
// 1) component return HTML component, with logic, but pure js func return js data type;
// 2) component have jsx syntaxyx, pure js - js;

// 5. How small is a React component?
// min size of component - it is, for example, simplest <div></div>

// 6. Can we make a button or input field component?
// Yes

// 7. Make a reusable Button component.
// export default function Button () {
//     return (<button></button>);
// }

// 8. Make a reusable InputField component.
// export default function Button () {
    // return (<input></input>);
// }

// 9. Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
// export default function AlertBox ({ val }) {
//     return (
//         <div>
//             <p>{val}</p>
//         </div>
//     );
// }