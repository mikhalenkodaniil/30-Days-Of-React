import PopulationStats from "../populationStats/PopulationStats";
import LanguageStats from "../languageStats/LanguageStats";
import "./stats.css";
import { useState } from "react";

export default function Stats({ data }) {
    let statsOut;
    const [flag, setFlag] = useState(true);
    if (data[0]) {
        if (flag) {
            statsOut = <PopulationStats cdata={data} />;
        } else {
            statsOut = <LanguageStats data={data} />;
        }
    }
     function setTrue() {
        setFlag(true);
     }
     function setFalse() {
        setFlag(false);
     }
  return (
    <section className="stats" id="stats">
      <div>
        <button className="stats__btn" onClick={setTrue}>POPULATION</button>
        <button className="stats__btn" onClick={setFalse}>LANGUAGES</button>
      </div>
      {statsOut}
    </section>
  );
}
