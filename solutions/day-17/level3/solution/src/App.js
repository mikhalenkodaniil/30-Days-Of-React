import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";

function App() {
// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)
  return (
          <Router>
            <header>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/challenges">Challenges</Link>
                </li>
              </ul>
            </header>
            <main>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact strict path="/about" element={<About />} />
                <Route exact strict path='/contact' element={<Contact />} />
                <Route exact strict path='/challenges' element={<Challenges />} />
              </Routes>
            </main>
          </Router>
  );
}

export default App;
