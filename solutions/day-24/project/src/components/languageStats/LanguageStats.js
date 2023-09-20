import "./languageStats.css";
export default function LanguageStats({ data }) {
    let name = [];
    let percent = [];
    let count = [];
    let k = 10;
    if (data[0]) {
        let languages = {};
        data.forEach(el => {
            el.languages.forEach(e => {
                if (languages[e.name]) {
                    languages[e.name]++;
                } else {
                    languages[e.name] = 1;
                }
            });
        });
        const arr = [];
        for (let el in languages) {
            arr.push([el, languages[el]])
        }
        arr.sort((a, b) => b[1] - a[1]);
        const MAX = arr[0][1];
        if (arr.length < k) k = arr.length;
        if (arr[0] === undefined) k = 0;
        for (let i = 0; i < k; i++) {
            name.push(<div className="stats__graph__text" key={`name ${i}`}>{arr[i][0]}</div>);
            percent.push(<div className="graph__percent" key={`percent ${i}`} style={{width:`${(arr[i][1] / MAX) * 500}px`}}></div>);
            count.push(<div className="stats__graph__text" key={`count ${i}`}>{arr[i][1]}</div>)
        }
    }
  return (
    <>
      <p className="stats__p">{k} Most spoken languages in the world</p>
      <div className="stats__graph">
        <div className="stats__graph__block">
          <div className="stats__graph__shadow">
            <div className="stats__graph__column">{name}</div>
            <div className="stats__graph__column">{percent}</div>
            <div className="stats__graph__column">{count}</div>
          </div>
        </div>
      </div>
    </>
  );
}
