import React, { useState } from "react";
import Header from "./Header";
import PortFirstImg from "../Components/Images/Port1stimg.png";
import Button from "./Button";
import Multichain from "../Components/Images/multichain.png";
import Multidevice from "../Components/Images/multidevice.png";
import LpPosition from "../Components/Images/lpposition.png";
import Threeinone from "../Components/Images/Threeinoneimg.png";
import Port2 from "../Components/Images/Port2.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Portfolio = () => {
  const [performance, setPerformance] = useState("");
  return (
    <div>
      <Header />
      <div className="portfoliosmallscreen mt-[50px]   pt-[40px]">
        <div className="flex items-center justify-center">
          <img className="w-[85%]" src={PortFirstImg} />
        </div>
        <div className="mt-[20px] pl-[20px] text-[white]">
          <b>
            <h1 className="text-[35px] font-sans ">1inch Portfolio</h1>
          </b>
          <b>
            <p className="text-[22px] font-sans">Explore your Web3 assets'</p>
          </b>
          <b>
            <p className="text-[22px] font-sans">
              from a single screen performance
            </p>
          </b>
        </div>
        <div className="pl-[15px] pr-[15px] mt-[30px]">
          <Button width="100%" buttonColor="orange-500" props="Get started" />
        </div>
        <div className="pl-[20px] mt-[60px]">
          <b>
            <p className="text-[30px] text-[white]">
              One dashboard, endless insight
            </p>
          </b>
        </div>
        <div className=" mt-[30px]">
          {performance === "Mobile chain" ? (
            <img src={PortFirstImg} />
          ) : performance === "Mobile wallet" ? (
            <img src={Port2} />
          ) : (
            <img src={Threeinone} />
          )}
        </div>
        <div className="flex justify-between items-center mt-[20px] text-[white] p-[10px]">
          <button
            className="bg-transparent border-b-2 border-b-transparent hover:border-b-orange-500"
            onClick={() => setPerformance("Mobile wallet")}
          >
            Mobile wallet
          </button>

          <button
            className="bg-transparent border-b-2 border-b-transparent hover:border-b-orange-500"
            onClick={() => setPerformance("Mobile chain")}
          >
            Mobile chain
          </button>
          <button
            className="bg-transparent border-b-2 border-b-transparent hover:border-b-orange-500 "
            onClick={() => setPerformance("lP positions")}
          >
            Lp positions
          </button>
        </div>
      </div>

      <div className="text-[white] portfoliolargescreen  flex justify-between items-center pl-[30px] pr-[30px] mt-[60px] p-[10px]">
        <div className="pl-[40px] mt-[15px] ">
          <b>
            <h1 className="text-[80px] font-sans ">1inch Portfolio</h1>
          </b>
          <b>
            <p className="text-[41px] font-sans">Explore your Web3</p>
          </b>
          <b>
            <p className="text-[41px] font-sans"> assets' performance</p>
          </b>
          <b>
            <p className="text-[41px] font-sans"> from a single screen</p>
          </b>
          <div className="mt-[30px]">
            <Button buttonColor="orange" padding="15px" props="Get started" />
          </div>
        </div>
        <div className="mt-[-15px] mr-[50px]">
          <img src={PortFirstImg} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
