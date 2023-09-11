import "./cell.css"
import { RandomColor } from "../generator/Generator";

export default function Cell () {
    const arr = Array(32).fill(null);
    const cell = arr.map((e, id) => {
        let color = RandomColor();
        let style = {
            backgroundColor:`${color}`
        }
        return <div key={`cell${id}`} style={style}>{color}</div>
    });
    const str = <>
    <div className="str">{cell.slice(0, 8)}</div>
    <div className="str">{cell.slice(8, 16)}</div>
    <div className="str">{cell.slice(16, 24)}</div>
    <div className="str">{cell.slice(24, 32)}</div>
    </>
    return (
        <div>{str}</div>
    );
}