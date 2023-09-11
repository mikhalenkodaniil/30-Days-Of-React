import "./countries.css"
import { tenHighestPopulation } from "../data";
export default function Countries () {
    let data = tenHighestPopulation;
    const MAX = data[0].population;
    console.log(data);


    let countries = data.map((el, id) => {
        let style = {
            marginTop: "3px",
            height: "20px"
        }
        return <div key={`country${id}`} style={style}>{el.country}</div>
    });
    countries = <div className="coun__cont">{countries}</div>;


    let lines = data.map((el, id) => {
        let style = {
            height: "20px",
            width: `${500 * el.population / MAX}px`,
            backgroundColor: "orange",
            borderRadius:"3px",
            marginTop:"3px",
            marginLeft: "10px"
        }
        return <div className="line" key={`line${id}`} style={style}></div>
    });
    lines = <div className="lin__cont">{lines}</div>

    let populateds = data.map((el, id) => {
        let style = {
            marginTop: "3px",
            height: "20px",
            marginLeft: "30px"
        }
        return <div key={`populated${id}`} style={style}>{el.population}</div>
    });
    populateds = <div className="pop__cont">{populateds}</div>
    
    return (
        <div className="cont">{countries}{lines}{populateds}</div>
    );
}