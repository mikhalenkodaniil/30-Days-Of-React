import { numbersArray } from "../generator/Generator";
import { check } from "../../checkNumber";
import './numbers.css';

export default function Numbers() {
    const nums = numbersArray.map((el) => {
        let color = {
            backgroundColor: `${check(el)}`
        }
        return <div key={`number ${el}`} style={color} className="sq">{el}</div>
    });
    const num = <>
        <div className="str">{nums.slice(0, 8)}</div>
        <div className="str">{nums.slice(8, 16)}</div>
        <div className="str">{nums.slice(16, 24)}</div>
        <div className="str">{nums.slice(24, 32)}</div>
    </>;
    return(
    <div className="contain">{num}</div>
    );
}