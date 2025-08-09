import React from "react";
import Header from "./Header";
import Card1 from "../Components/Images/Card1.png";
import Card2 from "../Components/Images/Card2.png";
import Button from "./Button";
import Cardvideo from "../Components/Images/cardvideo.mp4";

const Card = () => {
  return (
    <div>
      <Header />
      <div className="mt-[70px]">
        <img src={Card1} />
        <div className="p-[10px]">
          <Button
            border="1px solid white"
            width="60%"
            text="13px"
            padding="9px"
            buttonColor="transparent"
            props="Powered by crypto life"
          />
        </div>
        <div className="p-[14px]">
          <b>
            <p className="text-[35px] text-[rgb(38,105,230)]">1inch Card</p>
            <p className="text-[35px]  text-[white]">
              Pay with crypto anywhere
            </p>
          </b>
          <div className="mt-[15px]">
            <Button
              color="black"
              padding="15px"
              width="100%"
              buttonColor="white"
              text="14px"
              props="Get your 1inch card"
            />
          </div>
        </div>
        <div className="p-[13px]">
          <video
            className="rounded-[20px]"
            controls
            autoPlay
            muted
            src={Cardvideo}
          />
        </div>
        <div className="mt-[87px]">
          <img src={Card1} />
          <div className="p-[15px]">
            <b>
              <p className="text-[25px] text-[rgb(38,105,230)]">
                Earn up to 2% back
                <span className="text-[white]"> on every purchase</span>
              </p>
            </b>
            <p className="text-[15px]  text-[#fff9]">
              Earn more cashback in 1INCH, USDT, BTC, or BTX tokens.
            </p>
            <img className="mt-[45px] " src={Card2} />
          </div>
          <div className="p-[15px]">
            <b>
              <p className="text-[24px] text-[white] ">
                Borrow fiat at
                <span className="text-[rgb(38,105,230)]"> 0% interest rate</span>
              </p>
            </b>
            <p className="text-[15px] mt-[12px] text-[#fff9]">
              When you borrow against your crypto up to 10% LTV. Spend your
              crypto without selling it!
            </p>
            {/* <img className="mt-[45px] " src={Card2}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
