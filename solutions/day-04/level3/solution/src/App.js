
import './App.css';

function RandomColor() {
  const VALUE = "ABCDEF1234567890";
  let COLOR = [];
  for (let i = 0; i < 6; i++) {
    COLOR.push(VALUE[Math.floor(Math.random() * VALUE.length)]);
  }
  COLOR.unshift("#")
  COLOR = COLOR.join("");
  const colorStyle = {
    backgroundColor:`${COLOR}`,
    width: "80%",
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
    marginTop: "5px",
    height: "50px"
  }
  return (
    <div style={colorStyle}>{COLOR}</div>
  );
}

function App() {
  return (
    <div className="App">
      <RandomColor></RandomColor>
      <RandomColor></RandomColor>
      <RandomColor></RandomColor>
      <RandomColor></RandomColor>
      <RandomColor></RandomColor>
    </div>
  );
}

export default App;
