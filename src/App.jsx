import { useState } from "react";
import "./App.css";
import Home from "./Components/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from "./Components/Log.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Header from "./Components/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
