// Use h1, p, input and button HTML elements to create the following design using JSX

import './App.css';

function App() {
  return (
    <main className='main'>
      <div className='container__1'>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive news and updates.</p>
        <ul className='container1__ul'>
          <li className='li__input1'>
            <input className='input' placeholder='First name'></input>
          </li>
          <li className='li__input2'>
            <input className='input' placeholder='Last name'></input>
          </li>
          <li className='li__input3'>
            <input className='input' placeholder='Email'></input>
          </li>
        </ul>
        <button className='subscribe__btn'>Subscribe</button>
      </div>
    </main>
  );
}

export default App;
