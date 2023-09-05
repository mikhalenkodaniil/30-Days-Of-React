
import './App.css';
function H1() {
  return (
  <h1 className='h1'>SUBSCRIBE</h1>
  );
}

function P() {
  return (
    <p>
      Sign up with your email addres to 
      receive news and updates
    </p>
  ); 
}

function Input({ Value }) {
  return (
    <input placeholder={Value} className='Input'></input>
  );
}

function Button() {
  return (
    <button className="btn">SUBSCRIBE</button>
  );
}

function App() {
  return (
    <div className='cont'>
      <H1></H1>
      <P></P>
      <div className='inputs'>
        <Input Value={"First name"}></Input>
        <Input Value={"Last name"}></Input>
        <Input Value={"Email"}></Input>
      </div>
      <Button></Button>
    </div>
  );
}

export default App;
