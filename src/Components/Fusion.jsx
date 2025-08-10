import React from "react";
import Header from "./Header";
import Card5 from "../Components/Images/Card5.png";
import Card4 from "../Components/Images/Card4.png";
import Card7 from "../Components/Images/Card7.png";
import Card6 from "../Components/Images/Card6.png";
import Button from "./Button";
import Fusionvideo from "../Components/Images/fusionvideo.mp4";
const Fusion = () => {
  return (
    <div>
      <Header />
      <div className="mt-[20px]">
        <div className="mt-[70px] flex justify-center items-center">
          <img className="w-[90%]" src={Card5} />
        </div>
        <div className="p-[20px]">
          <b>
            <h1 className="text-[35px] font-sans text-[#4fbddf] ">
              1inch Fuison+
            </h1>
            <p className="text-[white] text-[18px] inline-block [transform:scaleX(1.3)] [transform-origin:left]">
              Swap across any chain
            </p>
          </b>
        </div>
        <div className=" p-[15px]">
          <Button
            padding="15px"
            width="100%"
            buttonColor="#4fbddf"
            text="14px"
            props="Swap now"
          />
          <video
            className="rounded-[20px] mt-[70px]"
            autoPlay
            muted
            controls
            src={Fusionvideo}
          />
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img className="w-[100%]" src={Card4} />
          </div>
          <div className="p-[15px]">
            <b>
              <h1 className="text-[27px] font-sans text-[#4fbddf] ">
                Seamless{" "}
                <span className="text-[white]"> cross-chain swaps</span>
              </h1>
            </b>
            <p className="text-[white] text-[16px] ">
              Swap any tokens across supported networks, with gasless execution
              and no extra fees.
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center">
            <img className="w-[100%]" src={Card7} />
          </div>
          <div className="p-[15px]">
            <b>
              <h1 className="text-[27px] font-sans text-[#4fbddf] ">
                Secure <span className="text-[white]"> by design</span>
              </h1>
            </b>
            <p className="text-[white] text-[16px] ">
              Stay protected from malicious activities with resilient
              architecture and built-in MEV protection.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img className="w-[100%]" src={Card6} />
          </div>
          <div className="p-[15px]">
            <b>
              <h1 className="text-[27px] font-sans text-[white] ">
                Ultimate <span className="text-[#4fbddf]">self-custody</span>
              </h1>
            </b>
            <p className="text-[white] text-[16px] ">
              Maintain full ownership of your assets with no need to trust any
              third party.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fusion;
