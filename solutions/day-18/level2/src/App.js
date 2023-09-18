
import { useState } from 'react';
import './App.css';

function App() {
  const [catData, setCatData] = useState(null);

  async function fetchData() {
    const url = 'https://api.thecatapi.com/v1/breeds';
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCatData(data);
    } catch (err){
      console.log(err)
    }
  }

  let weight = 0;
  let years = 0;
  if (catData === null) {
    fetchData();
  } else {
    console.log(catData);
    let yearsCount = 0;
    catData.forEach(el => {
      yearsCount++;
      let old = el.life_span;
      old = old.split(' - ');
      old = (+old[0] + +old[1]) / 2;
      years += old;    

      let metric = el.weight.metric;
      metric = metric.split(' - ');
      metric = (+metric[0] + +metric[1]) / 2;
      weight += metric;
    });
    years = Math.round(parseFloat(years / yearsCount) * 100) / 100;

    weight = Math.round(parseFloat(weight / yearsCount) * 100) / 100;
  }
  return (
    <div className="App">
      <h1>30 Days Of React</h1>
      <p><b>Cats Paradise</b></p>
      <p>There are 67 cat breeds</p>
      <div>On average a cat can weight about {weight} Kg and live {years} years</div>
    </div>
  );
}

export default App;
