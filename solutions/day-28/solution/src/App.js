import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
          <Route index element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
