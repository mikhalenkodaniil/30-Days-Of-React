import "./populationStats.css";

export default function PopulationStats({ cdata }) {
    const names = [];
    const percent = [];
    const population = [];
    let k = 10;
    if (cdata[0]) {
      const data = [...cdata];
        data.sort((a, b) => b.population - a.population);
        if (data.length < 10) k = data.length;
        for (let i = 0; i < k; i++) {
            names.push(<div className="stats__graph__text" key={`name ${i}`}>{data[i].name}</div>)
            let length = data[i].population.toString().length;
            let str = data[i].population.toString().split('').map((el, id) => {
                if ((length - (id + 1)) % 3 === 0 && (id + 1) !== length) {
                    return `${el},`
                }
                    return `${el}`;
            }).join('');
            population.push(<div className="stats__graph__text" key={`population ${i}`}>{str}</div>)
            percent.push(<div className="graph__percent" key={`percent ${i}`} style={{width:`${(data[i].population / 7693165599) * 500}px`}}></div>)
        }
    }
  return (
    <>
      <p className="stats__p">{k} Most populated countries in the world</p>
      <div className="stats__graph">
        <div className="stats__graph__block">
          <div className="stats__graph__shadow">
            <div className="stats__graph__column">
              <div className="stats__graph__text">World</div>
              {names}
            </div>
            <div className="stats__graph__column">
              <div className="graph__percent"></div>
              {percent}
            </div>
            <div className="stats__graph__column">
              <div className="stats__graph__text">7,693,165,599</div>
              {population}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
