import React, { useState } from "react";
import Logo from "./Images/logo.png";
import Button from "./Button";

const Header = () => {
  const [headState, setHeaderState] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div className="smallscreendisplay hidden w-[100%] p-[10px]   items-center justify-between ">
        <div className="w-[35%]  cursor-pointer hidden mobilelogo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="menu w-[100%] p-[10px] hidden  cursor-pointer ">
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
          <img src={Logo} alt="logo" />
        </div>
        <div>
          <ul className="flex text-[#fff9] text-[18px] ">
            <div className="flex items-center mr-[24px] cursor-pointer hover:text-white">
              <ol className="mr-2">Products</ol>
              <i class="fas fa-angle-down text-[13px]"></i>
            </div>

            <div className="flex items-center mr-[24px] cursor-pointer hover:text-white">
              <ol className="mr-2">Developers</ol>
              <i class="fas fa-angle-down text-[13px]"></i>
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
        <div className="mobile-header w-[100%] bg-[#06070a] h-[100vh] mt-[-40px]  z-[4000] flex">
          <div className="w-[100%]">
            <div className="w-[100%] h-[100px] mt-[20px] ">
              <button onClick={() => setMenu(false)} className=" float-right">
                <i className=" fas fa-times text-[white] text-[25px] mt-[20px] mr-[20px]"></i>
              </button>
            </div>
            <ul className="text-[18px] text-[white] mt-[-30px]">
              <div className="flex justify-between items-center mr-[24px] m-[10px] cursor-pointer hover:text-white">
                <ol className="mr-2">Products</ol>
                <i class="fas fa-angle-down text-[13px]"></i>
              </div>
              <div className="pl-[10px] pr-[10px]">
                <hr />
              </div>
              <div className="flex h-[60px] justify-between items-center mr-[24px] m-[10px] cursor-pointer hover:text-white">
                <ol className="mr-2">Developers</ol>
                <i class="fas fa-angle-down text-[13px]"></i>
              </div>
              <div className="pl-[10px] pr-[10px]">
                <hr />
              </div>
              <div className="flex justify-between items-center mr-[24px] m-[10px] mb-[20px] cursor-pointer hover:text-white">
                <ol className="mr-2">About</ol>
                <i class="fas fa-angle-down text-[13px]"></i>
              </div>
              <div className="pl-[10px] pr-[10px]">
                <hr />
              </div>
              <div className="flex justify-between items-center mr-[24px] m-[10px] mb-[20px] cursor-pointer hover:text-white">
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
      )}
    </div>
  );
};

export default Header;
