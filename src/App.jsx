import { useState } from "react";
import "./App.css";
import Home from "./Components/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from "./Components/Log.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Header from "./Components/Header.jsx";
import Card from "./Components/Card.jsx";
import Fusion from "./Components/Fusion.jsx";
import Security from "./Components/Security.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/card" element={<Card />} />
          <Route path="/fusion" element={<Fusion />} />
          <Route path="/security" element={<Security/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
