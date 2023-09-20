// import PopulationStats from "../populationStats/PopulationStats";
import LanguageStats from "../languageStats/LanguageStats";
import "./stats.css";

export default function Stats({ data }) {
    // const statsOut = <PopulationStats data={data} />
  return (
    <section className="stats" id="stats">
      <div>
        <button className="stats__btn">POPULATION</button>
        <button className="stats__btn">LANGUAGES</button>
      </div>
      {/* {statsOut} */}
      <LanguageStats data={data} />
    </section>
  );
}
