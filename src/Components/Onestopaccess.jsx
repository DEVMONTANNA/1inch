import React from "react";
import Button from "./Button";

const Onestopaccess = () => {
  return (
    <div className="z-[3000]">
      <div className="w-[100%] h-[600px] mt-[20px] onestopaccessholder  flex justify-between items-center ">
        <div className="p-[50px]   onestopaccess">
          <h1 className="text-[80px] onestopaccesstexts font-bold text-[white]">
            One-stop acces
            <span className="text-[80px] onestopaccesstexts font-bold vv text-[black]">
              s
            </span>
          </h1>
          <h3 className="text-[45px] onestopaccesstexts2 text-[white] font-stretch-30%">
            to decentralized finance
          </h3>
          <div className="flex justify-between downloadbuttons">
            <Button props="Launch dApp" className=" downloadbuttonsbutton" />

            <Button
              props="Download on Appstore"
              className="bg-[transparent]  border border-[1px solid white] downloadbuttonsbutton2"
            />
            <Button
              props="Get it on google play"
              className="bg-[transparent]  border border-[1px solid white] downloadbuttonsbutton2"
            />
          </div>
        </div>
        <div className="block  w-[40%] p-[50px] icons">
          <div className="grid grid-cols-4 gap-4 items-center justify-center float-right">
            <div>
              <a href="https://t.me/OneInchNetworkNews" target="blank">
                <i className="fab fa-telegram fa-2x text-[#007aff] hover:text-[#007aff] hover:animate-bounce"></i>
              </a>
            </div>
            <div>
              <a href="https://discord.com/invite/1inch" target="blank">
                <i className="fab fa-discord fa-2x text-[#007aff]  hover:text-[#007aff] hover:animate-bounce"></i>
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/1inchNetwork/>">
                <i className="fab fa-facebook fa-2x text-[white] hover:text-[white] hover:animate-bounce"></i>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/intent/follow?screen_name=1inch">
                <i className="fab fa-x-twitter fa-2x  text-[white] hover:text-[white] hover:animate-bounce"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex onetospacefigureholder justify-center items-center">
        <div className="w-[80%]  bg-[#0b0b14] pricedata flex justify-between items-center p-[30px]    rounded-[25px] border border-white">
          <div className="text-center">
            <h2 className="text-[40px] font-semibold text-white pricedatafigures">
              3.2M+
            </h2>
            <h3 className="text-[#fff9]">Liquidity sources</h3>
          </div>
          <div className="text-center">
            <h2 className="text-[40px] font-semibold text-white pricedatafigures">
              $695B+
            </h2>
            <h3 className="text-[#fff9]">Total volume</h3>
          </div>
          <div className="text-center">
            <h2 className="text-[40px] font-semibold text-white pricedatafigures">
              24.1M+
            </h2>
            <h3 className="text-[#fff9]">Users</h3>
          </div>
          <div className="text-center">
            <h2 className="text-[40px] font-semibold text-white pricedatafigures">
              189M+
            </h2>
            <h3 className="text-[#fff9]">Trades</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onestopaccess;
