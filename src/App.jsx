import { useState } from "react";
import "./App.css";
import Home from "./Components/Home.jsx";
import Log from "./Components/Log.jsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
      {/* <Log/> */}
    </div>
  );
}

export default App;
