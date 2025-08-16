import React, { useState, useEffect } from "react";
import image from "./Images/press.png";
import Header from "./Header";
import Onestopaccess from "./Onestopaccess";
import OptimizeYourTrades from "./OptimizeYourTrades";
import Logo from "./Logo";
import Button from "./Button";
import OneinchProuducts from "./OneinchProuducts";
import Portfolio from "./Portfolio";
import Card from "./Card";
import Fusion from "./Fusion";
import Security from "./Security";
import FoundationPage from "./FoundationPage";

const Home = () => {
  const [count, setCount] = useState(0);
  const [togglemenu, setToggleMenu] = useState(false);
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  console.log(text);

  function callText(e) {
    e.preventDefault();
    if (text.trim() !== "") {
      setSubmittedText(text);
    }
  }

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      {/* <div className=" h-[100vh]">
        <header className="hh bg-[orange] text-[white] h-[70px] justify-between text-[30px] flex items-center pl-[30px]">
          <h1>Keeper</h1>
        </header>

        <div className="flex bg-[white] justify-between">
          <div className="content  bg-[white]  w-[45%] flex ml-[30px] mt-[20px] pl-[10px] p-[10px]  shadow-lg">
            <div>
              <p>Click the (+) to ad contents to your do list</p>
            </div>
            <div className="ml-[10px]">
              <i
                onClick={() => setToggleMenu(true)}
                className=" text-[rgb(63,253,63)] fas fa-plus"
              ></i>
            </div>
          </div>
          <div className="bg-[hsla(0,0%,100%,1)] w-[45%] p-[15px] shadow-lg">
            <div className="w-full flex items-center justify-center mt-[10px]">
              <p>
                <b>TO DO LIST</b>
              </p>
            </div>
            <input
              type="text"
              className="border
              p-[15px]
               w-full border-amber-200"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button
              className="bg-[#31dfd0] ml-[10px] mt-[10px] text-[white] p-[10px]"
              onClick={callText}
            >
              Add
            </button>

            {submittedText ? (
              <div className=" shadow-lg bg-[white] p-[15px] flex justify-between">
                <div className="flex justify-between items-center">
                  <input type="checkbox" className="accent-[#31dfd0]" />
                  <p className="italic ml-[10px]">{submittedText}</p>
                </div>
                <i
                  onClick={() => setSubmittedText(false)}
                  className="  fas fa-trash text-[red]"
                ></i>
              </div>
            ) : (
              <p className="text-[14px] font-verdana">
                Click the add button above to add a list
              </p>
            )}
            {togglemenu && (
              <div className="flex justify-around items-center shadow-lg bg-[white] p-[15px]">
                HELLO YOU JUST TOGGLED MENU WHAT DO YOU WANT TO ADD HERE
                <i
                  onClick={() => setToggleMenu(false)}
                  className=" text-[red] fas fa-trash"
                ></i>
              </div>
            )}
          </div>
        </div>
        <footer className="absolute bg-[red] w-[100%] bottom-0 flex items-center justify-center text-[black] text-[20px]">
          {`Copyright @ ${year}`}
        </footer>
      </div> */}

      <div
        className="bg-cover bg-center   n"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <FoundationPage/> */}
        {/* <Security/> */}
        {/* <Fusion/>
        <Card/> */}
        <Header />
        <Onestopaccess />
        <OptimizeYourTrades />
      </div>
       <div className="mt-[50px] ">
        <Logo />
      </div>
      <OneinchProuducts />
      {/* <Portfolio/> */}
    </>
  );
};

export default Home;
