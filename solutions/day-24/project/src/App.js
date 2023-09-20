
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<><Main /><Footer /></>} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
