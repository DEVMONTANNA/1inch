import React, { useState } from "react";
import image from "./Images/press.png";
import Header from "./Header";
import Onestopaccess from "./Onestopaccess";
import OptimizeYourTrades from "./OptimizeYourTrades";
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
    <div
      className="bg-cover bg-center   min-h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      
      <Header />
      <Onestopaccess />
      <OptimizeYourTrades />
    </div>
  );
};
{/* <div className="flex justify-center">
        <button className="w-[5%] bg-[red] border border-[white]" onClick={increase}>
          +
        </button>

        <button
          className="w-[5%] bg-[blue] border border-[white]"
          onClick={decrease}
        >
          -
        </button>
      </div>
      <p className="text-center text-[white]">Count : {count}</p> */}
export default Home;
