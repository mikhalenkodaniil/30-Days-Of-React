
import { useState } from 'react';

function App() {
  const [TOP, setTOP] = useState (300);
  const [LEFT, setLEFT] = useState (750);
  let style = {
    width:"300px",
    height: "75px",
    position: "relative",
    top: `${TOP}px`,
    left: `${LEFT}px`,
    borderRadius: "10px",
    backgroundColor: "rgb(255, 122, 122)",
    fontSize: "30px",
    color: "#fff"
  }
  function changePosition () {
    let left = Math.floor(Math.random() * 1500);
    let top = Math.floor(Math.random() * 750);
    setLEFT(left);
    setTOP(top);
  }
  return (
    <div className="App">
      <button style={style} onMouseOver={changePosition}>Click me</button>
    </div>
  );
}

export default App;
