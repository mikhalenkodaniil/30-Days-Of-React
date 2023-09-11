export function RandomColor() {
    const VALUE = "ABCDEF1234567890";
    let COLOR = [];
    for (let i = 0; i < 6; i++) {
      COLOR.push(VALUE[Math.floor(Math.random() * VALUE.length)]);
    }
    COLOR.unshift("#")
    COLOR = COLOR.join("");
    const colorStyle = {
      backgroundColor:`${COLOR}`,
      width: "100px",
      display:"flex",
      justifyContent: "center",
      alignItems:"center",
      border: "1px solid #fff",
      height: "100px",
      color: "#fff"
    }
    return (
      <div style={colorStyle}>{COLOR}</div>
    );
  }