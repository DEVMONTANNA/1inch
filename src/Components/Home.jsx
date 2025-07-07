import React from "react";
import image from "./Images/press.png";
import Header from "./Header";
import Onestopaccess from "./Onestopaccess";
import OptimizeYourTrades from "./OptimizeYourTrades";
const Home = () => {
  return (
    <div
      className="bg-cover bg-center  min-h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Header />
      <Onestopaccess />
      <OptimizeYourTrades />
    </div>
  );
};

export default Home;
