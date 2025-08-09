import React, { useState } from "react";
import Header from "./Header";
import PortFirstImg from "../Components/Images/Port1stimg.png";
import Button from "./Button";
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
          <Button width="100%" buttonColor="orange" props="Get started" />
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
            <div className="p-[12px]">
              <img src={PortFirstImg} />
              <b>
                <h1 className="text-[white] text-[25px]">
                  Track your performance across multiple chains
                </h1>
              </b>
              <p className="text-[white] text-[17px]">
                Simultaneously track asset performance across major blockchains
                or use filters to select a specific network
              </p>
            </div>
          ) : performance === "Mobile wallet" ? (
            <div className="p-[12px]">
              <img src={Port2} />
              <b>
                <h1 className="text-[white] text-[25px]">
                  Track your performance across multiple Defi protocols
                </h1>
              </b>
              <p className="text-[white] text-[17px]">
                Get comprehensive analytics of your Lp positions such as Uniswap
                V3, Lido Aave etc.
              </p>
            </div>
          ) : (
            <div className="p-[12px]">
              <img src={Threeinone} />
              <b>
                <h1 className="text-[white] text-[25px]">
                  Track your performance across multiple wallets
                </h1>
              </b>
              <p className="text-[white] text-[17px]">
                Add as many wallets as you need and monitor combined assets.
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-[20px] text-[white] p-[20px]">
          <button
            className={`bg-transparent border-b-2 ${
              performance === "Mobile wallet"
                ? "border-b-orange-500"
                : "border-b-transparent"
            }`}
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
