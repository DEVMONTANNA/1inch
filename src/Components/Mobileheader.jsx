import React, { useState, useEffect } from "react";
import Logo from "./Images/logo.png";
import Button from "./Button";


const Mobileheader = () => {
  const [menu, setMenu] = useState(false);
  const [showtext, setShowText] = useState(false);
  const [developer, setDeveloper] = useState(false);
  const [about, setAbout] = useState(false);
  const [community, setCommunity] = useState(false);
   useEffect(() => {
      function hanlleScroll() {
        if (window.scrollY> 30) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      window.addEventListener("scroll", hanlleScroll);
    }, []);
      const toggleDropdown = () => {
    setHover((prev) => !prev);
  };

  
  return (
    <>
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

      {menu && (
        <div className="relative">
          <div className="mobile-header w-[100%] bg-[#06070a] h-[100vh] mt-[50px] top-0  fixed   z-[4000] flex">
            <div className="w-[100%]">
              <div className="w-[100%]  h-[50px] mt-[20px] ">
                <button onClick={() => setMenu(false)} className=" float-right">
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
                          Portfolio
                        </li>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          Card
                        </li>
                        <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                          Fusion+
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="pl-[10px] pr-[10px]">
                  <hr />
                </div>
                <div>
                  <div
                    onMouseEnter={() => setDeveloper(true)}
                    className="flex   h-[30px] justify-between items-center mr-[24px] m-[10px] mb-[20px] cursor-pointer hover:text-white"
                  >
                    <ol className="mr-2">Developers</ol>
                    <i class="fas fa-angle-down text-[13px]"></i>
                  </div>
                  {developer && (
                    <div
                      onMouseLeave={() => setDeveloper(false)}
                      className=" z-[100] pl-[20px] pb-[20px]  "
                    >
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
                <div
                  onMouseEnter={() => setAbout(true)}
                  className="flex  justify-between items-center mr-[24px] m-[10px] mb-[24px] cursor-pointer hover:text-white"
                >
                  <ol className="mr-2">About</ol>
                  <i class="fas fa-angle-down text-[13px]"></i>
                </div>
                {about && (
                  <div
                    onMouseLeave={() => setAbout(false)}
                    className=" z-[100] pl-[20px] pb-[20px]  "
                  >
                    <ul>
                      <li className="mt-[10px] text-[#fff9] hover hover:text-[white]">
                        Security
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
                <div
                  onMouseEnter={() => setCommunity(true)}
                  className="flex justify-between items-center mr-[24px] m-[10px]  mb-[20px] cursor-pointer hover:text-white"
                >
                  <ol className="mr-2">Community</ol>
                  <i class="fas fa-angle-down text-[13px]"></i>
                </div>
                {community && (
                  <div
                    onMouseLeave={() => setCommunity(false)}
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
  </>
  );
};

export default Mobileheader;
