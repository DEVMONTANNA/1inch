import React, { useState, useEffect } from "react";
import Logo from "./Images/logo.png";
import Button from "./Button";
import Fusion from "./Images/fusion.png";
import Card from "./Images/card.svg";
import Swap from "./Images/swapping.svg";
import Wallet from "./Images/wallet.svg";
import Portfolio from "./Images/portfolio.svg";
import Hunter from "./Images/hunter.svg";

const Header = () => {
  const [scroll, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [hover, setHover] = useState(false);
  const [developerScroll, setDeveloperScroll] = useState(false);

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
              <i class="fas fa-angle-down text-[13px]"></i>
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
                        <p className="text-[13px]">Pay with crypto anywhere</p>
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
                          src={Swap}
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
                          src={Swap}
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
                    <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                      <div>
                        <img
                          className="flex rounded-[18px] bg-[black] p-[12px] items-center justify-center"
                          src={Swap}
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
                    <div className="  flex  leading-tight  p-[15px] hover:bg-[black] rounded-[25px]">
                      <div>
                        <img
                          className="flex rounded-[18px] bg-[black] p-[12px] items-center justify-center"
                          src={Swap}
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
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center mr-[24px] cursor-pointer hover:text-white">
              <ol className="mr-2">About</ol>
              <i class="fas fa-angle-down text-[13px]"></i>
            </div>
            <div className="flex items-center mr-[24px] cursor-pointer hover:text-white">
              <ol className="mr-2">Community</ol>
              <i class="fas fa-angle-down text-[13px]"></i>
            </div>
            <div className="flex items-center mr-[24px] cursor-pointer hover:text-white">
              <ol className="mr-2">Blog</ol>
              <i class="fas fa-arrow-up-right-from-square text-[12px]"></i>
            </div>
          </ul>
        </div>
        <div className="flex mr-[30px]  p-[10px]">
          <div className="flex  items-center mr-[26px]">
            <i class="fas fa-globe fa-1x text-[#fff9] mr-[5px] cursor-pointer hover:text-[white]"></i>
            <p className=" text-[#fff9] cursor-pointer  hover:text-[white] ">
              EN
            </p>
          </div>
          <Button props="Launch dApp" />
        </div>
      </div>

      {menu && (
        <div className="relative">
          <div className="mobile-header w-[100%] bg-[#06070a] h-[100vh] mt-[50px] top-0  fixed   z-[4000] flex">
            <div className="w-[100%]">
              <div className="w-[100%] bg-[red] h-[50px] mt-[20px] ">
                <button onClick={() => setMenu(false)} className=" float-right">
                  <i className=" fas fa-times text-[white] text-[25px] mt-[20px] mr-[20px]"></i>
                </button>
              </div>
              <ul className="text-[18px] text-[white] mt-[-20px]">
                <div
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className="flex h-[60px] justify-between items-center mr-[24px] m-[10px] cursor-pointer hover:text-white"
                >
                  <p className="mr-2">Products</p>
                  <i className="fas fa-angle-down text-sm text-[13px]  "></i>
                </div>
                {hover && (
                  <div className="bg-red-600 h-[60px] z-[100]">
                    Hover is active
                  </div>
                )}

                <div className="pl-[10px] pr-[10px]">
                  <hr />
                </div>
                <div className="flex  h-[30px] justify-between items-center mr-[24px] m-[10px] mb-[20px] cursor-pointer hover:text-white">
                  <ol className="mr-2">Developers</ol>
                  <i class="fas fa-angle-down text-[13px]"></i>
                </div>
                <div className="pl-[10px] pr-[10px]">
                  <hr />
                </div>
                <div className="flex  justify-between items-center mr-[24px] m-[10px] mb-[24px] cursor-pointer hover:text-white">
                  <ol className="mr-2">About</ol>
                  <i class="fas fa-angle-down text-[13px]"></i>
                </div>
                <div className="pl-[10px] pr-[10px]">
                  <hr />
                </div>
                <div className="flex justify-between items-center mr-[24px] m-[10px]  mb-[20px] cursor-pointer hover:text-white">
                  <ol className="mr-2">Community</ol>
                  <i class="fas fa-angle-down text-[13px]"></i>
                </div>
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
                  <i class="fas fa-angle-down text-[13px]"></i>
                </div>
                <div className="pl-[8px] pr-[8px] mt-[35px]">
                  <Button props="Launch dApp" className="w-[100%] h-[60px] " />
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
