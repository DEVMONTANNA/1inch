import React, { useState, useEffect } from "react";
import image from "./Images/press.png";
import Header from "./Header";
import Onestopaccess from "./Onestopaccess";
import OptimizeYourTrades from "./OptimizeYourTrades";
import Learningapi from "./learningapi";

const Home = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div
        className="bg-cover bg-center   min-h-screen"
        style={{ backgroundImage: `url(${image})` }}
      >
        
         <Header /> 
        <Onestopaccess />
        <Learningapi/>
        <OptimizeYourTrades /> 
      </div>
    </>
  );
};

export default Home;
