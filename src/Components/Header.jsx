import React, { useState, useEffect } from "react";
import Logo from "./Images/logo.png";
import Button from "./Button";
import Fusion from "./Images/fusion.png";
import Card from "./Images/card.svg";
import Swap from "./Images/swapping.svg";
import Wallet from "./Images/wallet.svg";
import Portfolio from "./Images/portfolio.svg";
import Hunter from "./Images/hunter.svg";
import Devportal from "./Images/devportal.svg";
import Aggregration from "./Images/Aggregationprotocol.svg";
import LimitOrder from "./Images/Limitorder.svg";
import LiquidityPool from "./Images/Liquidtypool.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [scroll, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [hover, setHover] = useState(false);
  const [developerScroll, setDeveloperScroll] = useState(false);
  const [AboutScroll, setAboutScroll] = useState(false);
  const [showtext, setShowText] = useState(false);
  const [developer, setDeveloper] = useState(false);
  const [about, setAbout] = useState(false);
  const [community, setCommunity] = useState(false);
  const [langaugeToggle, setLanguageToggle] = useState(false);

  const toggleDropdown = () => {
    setHover((prev) => !prev);
  };

  useEffect(() => {
    function hanlleScroll() {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", hanlleScroll);
  }, []);

  return (
    <>
      <div className="relative">
        <div
          className={`smallscreendisplay hidden w-[100%] p-[10px]  top-0 z-[50] fixed transition-all duration-300  items-center justify-between ${
            scroll ? "bg-[#0b0b14] shadow-lg" : "bg-[]"
          }`}
        >
          <div className="w-[35%]  cursor-pointer hidden mobilelogo">
            <a href="home.html">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="menu w-[100%]  p-[10px] hidden  cursor-pointer ">
            <button
              className="float-right   mr-[10px]"
              onClick={() => setMenu(true)}
            >
              <i className="fas fa-bars fa-1x text-[white] "></i>
            </button>
          </div>
        </div>
        <div className=" desktop header flex justify-between items-center pt-[20px] h-[70px] sticky z-[2000]">
          <div className="w-[15%] logo cursor-pointer">
            <a href="home.html">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div>
            <ul className="flex text-[#fff9] text-[18px] ">
              <div
                onMouseEnter={() => setHover(true)}
                // onMouseLeave={() => setHover(false)}

                className="flex  relative items-center mr-[24px] cursor-pointer hover:text-white"
              >
                <ol className="mr-2">Products</ol>
                <i className="fas fa-angle-down text-[13px]"></i>
                {hover && (
                  <div
                    onMouseLeave={() => setHover(false)}
                    className=" absolute bg-[#0b0b14] z-50 w-[65vw] mt-[15px]  flex justify-between  -left-50 top-full  p-[20px] rounded-[25px]"
                  >
                    <div className="productchild1  w-[40%] p-[15px]">
                      <b>
                        <h1 className="text-[verdana] ml-[15px]">APPS</h1>
                      </b>
                      <div className="">
                        <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                          <div>
                            <img
                              className="flex rounded-[22px] bg-[black] p-[8px] items-center justify-center"
                              src={Swap}
                            />
                          </div>
                          <div className="ml-[10px] ">
                            <b>
                              <p>Swap</p>
                            </b>
                            <p className="text-[12.5px] flex items-center">
                              Swap any token at he best rates
                            </p>
                          </div>
                        </div>
                        <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                          <div>
                            <img
                              className="flex rounded-[22px] bg-[black] p-[8px] items-center justify-center"
                              src={Wallet}
                            />
                          </div>
                          <div className="ml-[10px]">
                            <b>
                              <p>WALLET</p>
                            </b>
                            <p className="text-[13px]">
                              Access Web3 with your phone
                            </p>
                          </div>
                        </div>
                        <div className="flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                          <div>
                            <img
                              className="flex rounded-[22px] bg-[black] p-[8px] items-center justify-center"
                              src={Portfolio}
                            />
                          </div>
                          <div className="ml-[10px]">
                            <b>
                              <p>PORTFOLIO</p>
                            </b>
                            <p className="text-[13px]">
                              Track your assets' performance
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mt-[30px]">
                          <b>
                            <h1 className="ml-[20px]">OTHERS</h1>
                          </b>
                        </div>
                        <div className="flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                          <div>
                            <img
                              className="flex rounded-[22px] bg-[black] p-[8px] items-center justify-center"
                              src={Hunter}
                            />
                          </div>
                          <div className="ml-[10px]">
                            <b>
                              <p>PORTFOLIO</p>
                            </b>
                            <p className="text-[13px]">
                              Track your assets' performance
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productchild1  w-[40%] p-[15px]">
                      <b>
                        <h1 className="text-[verdana] ml-[10px]">PHYSICAL</h1>
                      </b>
                      <div className="flex  leading-tight mt-[17px] hover:bg-[black] pl-[10px] p-[15px] rounded-[25px]">
                        <div>
                          <img
                            className="flex bg-[black] p-[8px] rounded-[22px] items-center justify-center"
                            src={Card}
                          />
                        </div>
                        <div className="ml-[10px] ">
                          <b>
                            <p>CARD</p>
                          </b>
                          <p className="text-[13px]">
                            Pay with crypto anywhere
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" w-[40%] p-[15px]">
                      <div>
                        <img className="rounded-[20px]" src={Fusion} />
                      </div>
                      <div className="mt-[15px]">
                        <b>Cross chain swaps are here!</b>
                        <p className="text-[13px] font-robotoSerif ">
                          seamless, secure and self-custodial, all at once
                        </p>
                      </div>
                      <div className="mt-[20px]">
                        <Button
                          className="   hover:bg-[rgba(155,182,182,0.06)] pl-[10px] p-[15px] rounded-[25px] pr-[10px] bg-[transparent] border border-[2px solid white] "
                          props="Learn more"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                onMouseEnter={() => setDeveloperScroll(true)}
                // onMouseLeave={() => setDeveloperScroll(false)}
                className="flex items-center mr-[24px] cursor-pointer hover:text-white"
              >
                <ol className="mr-2">Developers</ol>
                <i class="fas fa-angle-down text-[13px]"></i>
                {developerScroll && (
                  <div
                    onMouseLeave={() => setDeveloperScroll(false)}
                    className=" absolute bg-[#0b0b14]  z-50 w-[43vw] mt-[15px]  grid grid-rows-3 -left-[-250px] top-full pt-[15px]  p-[10px] rounded-[25px]"
                  >
                    <div className="row-span-1 ">
                      <b>
                        <p className="ml-[18px] text-[22px]">Devlopers</p>
                      </b>
                      <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                        <div>
                          <img
                            className="flex rounded-[18px] bg-[black] p-[12px] items-center justify-center"
                            src={Devportal}
                          />
                        </div>
                        <div className="ml-[10px]  ">
                          <b>
                            <p className="flex items-center mt-[5px]">
                              Developer portal
                            </p>
                          </b>
                          <p className="text-[12.5px] mt-[5px] flex items-center">
                            Integrate web3 tools that suites your need
                          </p>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="row-span-2 ">
                      <b>
                        <p className="ml-[18px] text-[22px]">Protocols</p>
                      </b>
                      <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                        <div>
                          <img
                            className="flex rounded-[18px] bg-[black] p-[12px] items-center justify-center"
                            src={Aggregration}
                          />
                        </div>
                        <div className="ml-[10px]  ">
                          <b>
                            <p className="flex items-center mt-[5px]">
                              Aggregation protocol
                            </p>
                          </b>
                          <p className="text-[12.5px] mt-[5px] flex items-center">
                            The protocol aggregates liquidity from multiple
                            DEXes to ensure the best swap rates
                          </p>
                        </div>
                      </div>
                      <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                        <div>
                          <img
                            className="flex rounded-[18px] bg-[black] p-[12px] items-center justify-center"
                            src={LimitOrder}
                          />
                        </div>
                        <div className="ml-[10px]  ">
                          <b>
                            <p className="flex items-center mt-[5px]">
                              Limit Order Protocol
                            </p>
                          </b>
                          <p className="text-[12.5px] mt-[5px] flex items-center">
                            The most innovative and flexible functionality in
                            Defi
                          </p>
                        </div>
                      </div>
                      <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                        <div>
                          <img
                            className="flex rounded-[18px] bg-[black] p-[12px] items-center justify-center"
                            src={LiquidityPool}
                          />
                        </div>
                        <div className="ml-[10px]  ">
                          <b>
                            <p className="flex items-center mt-[5px]">
                              Liquidity Protocol
                            </p>
                          </b>
                          <p className="text-[12.5px] mt-[5px] flex items-center">
                            A next-generation AMM that offers capital efficiency
                            to liquidity providers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setAboutScroll(true)}
                className="flex items-center mr-[24px] cursor-pointer hover:text-white"
              >
                <ol className="mr-2">About</ol>
                <i class="fas fa-angle-down text-[13px]"></i>
                {AboutScroll && (
                  <div
                    onMouseLeave={() => setAboutScroll(false)}
                    className=" absolute bg-[#0b0b14]  z-50 w-[43vw] mt-[15px]  grid grid-rows-3 -left-[-250px] top-full pt-[15px]  p-[10px] rounded-[25px]"
                  >
                    <div className="row-span-1 ">
                      <b>
                        <p className="ml-[18px] text-[22px]">About</p>
                      </b>
                      <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                        <div>
                          <img
                            className="flex rounded-[18px] bg-[black] p-[12px] items-center justify-center"
                            src={Devportal}
                          />
                        </div>
                        <div className="ml-[10px]  ">
                          <b>
                            <p className="flex items-center mt-[5px]">
                              Developer portal
                            </p>
                          </b>
                          <p className="text-[12.5px] mt-[5px] flex items-center">
                            Integrate web3 tools that suites your need
                          </p>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="row-span-2 ">
                      <b>
                        <p className="ml-[18px] text-[22px]">Protocols</p>
                      </b>
                      <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                        <div>
                          <img
                            className="flex rounded-[18px] bg-[black] p-[12px] items-center justify-center"
                            src={Aggregration}
                          />
                        </div>
                        <div className="ml-[10px]  ">
                          <b>
                            <p className="flex items-center mt-[5px]">
                              Aggregation protocol
                            </p>
                          </b>
                          <p className="text-[12.5px] mt-[5px] flex items-center">
                            The protocol aggregates liquidity from multiple
                            DEXes to ensure the best swap rates
                          </p>
                        </div>
                      </div>
                      <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                        <div>
                          <img
                            className="flex rounded-[18px] bg-[black] p-[12px] items-center justify-center"
                            src={LimitOrder}
                          />
                        </div>
                        <div className="ml-[10px]  ">
                          <b>
                            <p className="flex items-center mt-[5px]">
                              Limit Order Protocol
                            </p>
                          </b>
                          <p className="text-[12.5px] mt-[5px] flex items-center">
                            The most innovative and flexible functionality in
                            Defi
                          </p>
                        </div>
                      </div>
                      <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                        <div>
                          <img
                            className="flex rounded-[18px] bg-[black] p-[12px] items-center justify-center"
                            src={LiquidityPool}
                          />
                        </div>
                        <div className="ml-[10px]  ">
                          <b>
                            <p className="flex items-center mt-[5px]">
                              Liquidity Protocol
                            </p>
                          </b>
                          <p className="text-[12.5px] mt-[5px] flex items-center">
                            A next-generation AMM that offers capital efficiency
                            to liquidity providers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center mr-[24px] cursor-pointer hover:text-white">
                <ol className="mr-2">Community</ol>
                <i class="fas fa-angle-down text-[13px]"></i>
              </div>
              <div className="flex items-center mr-[24px] cursor-pointer hover:text-white">
                <a href="https://blog.1inch.io/">
                  <ol className="mr-2">Blog</ol>
                </a>
                <i class="fas fa-arrow-up-right-from-square text-[12px]"></i>
              </div>
            </ul>
          </div>
          <div className="flex mr-[30px]  p-[10px] relative">
            <div className="relative">
              {/* Trigger Section */}
              <div
                onClick={() => setLanguageToggle(true)}
                className="flex items-center mr-[26px] mt-[12px] cursor-pointer"
              >
                <i className="fas fa-globe fa-1x text-[#fff9] mr-[5px]  hover:text-white"></i>
                <p className="text-[#fff9] hover:text-white">EN</p>
              </div>

              {langaugeToggle && (
                <div className="absolute top-full left-[-500px] bg-[#0b0b14]  w-[40vw] mt-[30px] p-[20px] rounded-[25px]">
                  <div className="flex items-center justify-between mb-[10px]">
                    <p className="text-[22px] text-white">Change language</p>
                    <i
                      onClick={() => setLanguageToggle(false)}
                      className="fas fa-times text-white text-[22px] cursor-pointer"
                    ></i>
                  </div>

                  <hr className="border-white mb-[15px]" />

                  <div className="grid grid-cols-2 gap-[10px]">
                    <div className="flex flex-col gap-[10px] text-[white] text-[18px]">
                      <div className=" p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] rounded-[10px] ">
                        🇫🇷 Francais - FR
                      </div>
                      <div className="p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                        🇪🇸 Espanyol - ES
                      </div>
                      <div className="p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                        🇩🇪 German
                      </div>
                      <div className="  p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                        🇨🇳 Chinese
                      </div>
                      <div className=" p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                        🇸🇦 Arabic
                      </div>
                      <div className=" p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                        🇵🇹 Portuguese
                      </div>
                      <div className=" p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                        🇯🇵 Japanese
                      </div>
                    </div>

                    <div className="flex flex-col gap-[10px] text-[white] items-start text-[18px]">
                      <div className=" p-[10px] w-[100%]   rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                        🇮🇹 Italian
                      </div>
                      <div className=" p-[10px] w-[100%]  rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                        🇷🇺 Russian
                      </div>
                      <div className=" p-[10px]  w-[100%]  rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                        🇰🇷 Korean
                      </div>
                      <div className=" p-[10px]  w-[100%]  rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                        🇹🇷 Turkish
                      </div>
                      <div className=" p-[10px]  w-[100%]  rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                        🇳🇱 Dutch
                      </div>
                      <div className=" p-[10px]  w-[100%]  rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                        🇸🇪 Swedish
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button buttonColor="blue" props="Launch dApp" />
          </div>
        </div>

        {menu && (
          <div className="relative overflow-y-auto">
            <div className="mobile-header w-[100%] bg-[#06070a] h-[100vh] overflow-y-auto top-0  fixed   z-[4000] flex">
              <div className="w-[100%]">
                <div className="w-[100%]  h-[50px] mt-[20px] ">
                  <button
                    onClick={() => setMenu(false)}
                    className=" float-right"
                  >
                    <i className=" fas fa-times text-[white]  text-[25px] mt-[20px] mr-[20px]"></i>
                  </button>
                </div>
                <ul className="text-[18px] text-[white] mt-[30px] ">
                  <div className="relative">
                    <div className="flex h-[30px] justify-between items-center mr-[24px] m-[10px] mb-[20px] cursor-pointer hover:text-white">
                      <ol className="mr-2">Products</ol>
                      {!showtext ? (
                        <i
                          onClick={() => setShowText(true)}
                          className="fas fa-angle-down text-sm text-[13px] leading-none"
                        ></i>
                      ) : (
                        <i
                          onClick={() => setShowText(false)}
                          className="fas fa-times text-sm text-[13px] leading-none"
                        ></i>
                      )}
                    </div>

                    {showtext && (
                      <div className=" z-[100] pl-[20px] pb-[20px]">
                        <ul>
                          <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                            Swap
                          </li>
                          <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                            Wallet
                          </li>

                          <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                            <Link to="/portfolio">Portfolio</Link>
                          </li>

                          <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                            <Link to="/card">Card</Link>
                          </li>
                          <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                            <Link to="/fusion">Fusion+</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="pl-[10px] pr-[10px]">
                    <hr />
                  </div>
                  <div className="relative">
                    <div className="flex   h-[30px] justify-between items-center mr-[24px] m-[10px] mb-[20px] cursor-pointer hover:text-white">
                      <ol className="mr-2">Developers</ol>
                      {!developer ? (
                        <i
                          onClick={() => setDeveloper(true)}
                          className="fas fa-angle-down text-sm text-[13px] leading-none"
                        ></i>
                      ) : (
                        <i
                          onClick={() => setDeveloper(false)}
                          className="fas fa-times text-sm text-[13px] leading-none"
                        ></i>
                      )}
                    </div>
                    {developer && (
                      <div className=" z-[100] pl-[20px] pb-[20px] overflow-y-auto  ">
                        <ul>
                          <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                            Developer portal
                          </li>
                          <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                            Aggregation protocol
                          </li>
                          <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                            Limit order protocol
                          </li>
                          <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                            Liquidity order protocol
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="pl-[10px] pr-[10px]">
                    <hr />
                  </div>
                  <div>
                    <div className="flex  justify-between items-center mr-[24px] m-[10px] mb-[24px] cursor-pointer hover:text-white">
                      <ol className="mr-2">About</ol>
                      {!about ? (
                        <i
                          onClick={() => setAbout(true)}
                          className="fas fa-angle-down text-sm text-[13px] leading-none"
                        ></i>
                      ) : (
                        <i
                          onClick={() => setAbout(false)}
                          className="fas fa-times text-sm text-[13px] leading-none"
                        ></i>
                      )}
                    </div>
                  </div>

                  {about && (
                    <div className=" z-[100] pl-[20px] pb-[20px] overflow-y-auto  ">
                      <ul>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          <Link to="/security">Security</Link>
                        </li>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          Partnership & stakeholders
                        </li>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          Foundation
                        </li>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          Press room
                        </li>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          Contacts
                        </li>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          Terms of use
                        </li>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          Privacy policy
                        </li>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          1inch security white paper
                        </li>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          Tokens
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="pl-[10px] pr-[10px]">
                    <hr />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mr-[24px] m-[10px]  mb-[20px] cursor-pointer hover:text-white">
                      <ol className="mr-2">Community</ol>
                      {!community ? (
                        <i
                          onClick={() => setCommunity(true)}
                          className="fas fa-angle-down text-sm text-[13px] leading-none"
                        ></i>
                      ) : (
                        <i
                          onClick={() => setCommunity(false)}
                          className="fas fa-times text-sm text-[13px] leading-none"
                        ></i>
                      )}
                    </div>
                  </div>
                  {community && (
                    <div
                      onMouseLeave={() => setCommunity(true)}
                      className=" z-[100] pl-[20px] pb-[20px]  "
                    >
                      <ul>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          DAO
                        </li>

                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          Ambassador program
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="pl-[10px] pr-[10px]">
                    <hr />
                  </div>
                  <div className="flex justify-between items-center mr-[24px] m-[10px] mb-[20px]  cursor-pointer hover:text-white">
                    <ol className="mr-2">Blogs</ol>
                    <i class="fas fa-angle-down text-[13px]"></i>
                  </div>
                  <div className="pl-[10px] pr-[10px]">
                    <hr />
                  </div>
                  <div className="flex justify-between items-center mr-[24px] m-[10px]  cursor-pointer hover:text-white">
                    <ol className="mr-2">Language</ol>
                    {!langaugeToggle ? (
                      <i
                        onClick={() => setLanguageToggle(true)}
                        className="fas fa-angle-down text-sm text-[13px] leading-none"
                      ></i>
                    ) : (
                      <i
                        onClick={() => setLanguageToggle(false)}
                        className="fas fa-times text-sm text-[13px] leading-none"
                      ></i>
                    )}
                  </div>
                  {langaugeToggle && (
                    <div className="grid grid-rows-2 gap-[10px] pl-[25px]">
                      <div className="flex flex-col gap-[10px] text-[white] text-[24px]">
                        <div className=" p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] rounded-[10px] ">
                          🇫🇷 Francais - FR
                        </div>
                        <div className="p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                          🇪🇸 Espanyol - ES
                        </div>
                        <div className="p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                          🇩🇪 German
                        </div>
                        <div className="  p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                          🇨🇳 Chinese
                        </div>
                        <div className=" p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                          🇸🇦 Arabic
                        </div>
                        <div className=" p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                          🇵🇹 Portuguese
                        </div>
                        <div className=" p-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black]  rounded-[10px]">
                          🇯🇵 Japanese
                        </div>
                      </div>

                      <div className="flex flex-col gap-[10px] text-[white] items-start text-[24px]">
                        <div className=" p-[10px] w-[100%]   rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                          🇮🇹 Italian
                        </div>
                        <div className=" p-[10px] w-[100%]  rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                          🇷🇺 Russian
                        </div>
                        <div className=" p-[10px]  w-[100%]  rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                          🇰🇷 Korean
                        </div>
                        <div className=" p-[10px]  w-[100%]  rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                          🇹🇷 Turkish
                        </div>
                        <div className=" p-[10px]  w-[100%]  rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                          🇳🇱 Dutch
                        </div>
                        <div className=" p-[10px]  w-[100%]  rounded-[10px] hover:bg-[rgb(213,218,213)] hover:text-[black] hover:w-[100%]">
                          🇸🇪 Swedish
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="pl-[8px] pr-[8px] mt-[35px]">
                    <Button
                      props="Launch dApp"
                      className="w-[100%] h-[60px] "
                    />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="hamburgerdiv">
          <div className="w-[35%]  cursor-pointer hidden tabletlogodisplay">
            <a href="home.html">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <button className="hamburger-menu" onClick={() => setMenu(true)}>
            <i className="fas fa-bars text-white text-[24px]"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
