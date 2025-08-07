import React from "react";
import Port2 from "../Components/Images/Port2.png";
import Phoneimg from "../Components/Images/Phoneimg.png";
import Button from "./Button";

const OneinchProuducts = () => {
  return (
    <>
      <div className="mt-[55px] inchwalletheading flex justify-center items-center">
        <b className="text-center text-[45px] text-[white] ">
          <p>1inch Portfolio</p>
        </b>
      </div>
      <div className=" ] flex text-[white]">
        <div className=" items-center justify-center   w-[100%] p-[20px] flex ">
          <div className=" w-[100%]  rounded-[20px] omneinchwallet p-[20px] flex justify-around items-center">
            <div className=" p-[15px] ">
              <b className="text-center text-[45px] flex justify-start">
                <p>1inch Wallet</p>
              </b>
              <p className="text-[14px] text-[#fff9]">
                The most powerful mobile app for managing your assets and
                exploring Web3.
              </p>
              <div className="flex mt-[55px] oneinchwalletsmallscreen   w-[50%] justify-between">
                <Button className=" " props="Download" />
                <Button
                  className="bg-[transparent]  border border-amber-50"
                  props="Learn more"
                />
              </div>
            </div>
            <img className="0px]" src={Phoneimg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OneinchProuducts;
