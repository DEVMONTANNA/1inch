import React from "react";
import Header from "./Header";
import Mainfoundationimg from "../Components/Images/Mainfoundationimg.png";
import Awardimg from "../Components/Images/Awardimg.png";
import Communityimg from "../Components/Images/Communityimg.png";
import Farmingimg from "../Components/Images/Farmingimg.png";
import Grantimg from "../Components/Images/Grantimg.png";
import Networkimg from "../Components/Images/Networkimg.png";
import Researchimg from "../Components/Images/Researchimg.png";
import Button from "./Button";

const FoundationPage = () => {
  return (
    <div>
      <Header />
      {/* bg-gradient-to-r from-[rgba(155,37,223,0.54)] via-[rgba(155,37,223,0.54)] to-[rgba(155,37,223,0.54)] */}
      <div className=" p-[15px]  mt-[70px]">
        <div className="flex justify-center items-center">
          <img className="w-[80%] " src={Mainfoundationimg} />
        </div>
        <div>
          <b>
            <h1 className="text-[white] text-[30px] mt-[15px]">
              1inch Foundation
            </h1>
          </b>
          <p className="text-[#fff9] text-[17.5px]">
            A non-profit organization that issued the 1INCH token and is
            dedicated to fostering the 1inch Network and initiatives that
            benefit the network's community.
          </p>
        </div>
        <div className="mt-[65px]">
          <b>
            <h1 className="text-[white] text-[32px] mt-[15px]">Mission</h1>
          </b>
          <p className="text-[#fff9] text-[17.5px]">
            The mission of the 1inch Foundation is to foster growth and
            expansion of the 1inch Network and incentivize contributions through
            grants and other capital deployment vehicles. The 1inch Foundation
            is focused on the following areas:
          </p>
        </div>

        <div className=" text-[#fff] mt-[50px] p-[10px]">
          <div className="p-[25px] border border-[2px solid #fff9] rounded-[30px] ">
            <img className="w-[25%]" src={Communityimg} />
            <b className="text-[21px]">
              <p className="mt-[10px]">Community</p>
            </b>
            <p className="text-[17px] mt-[10px] text-[#fff9]">
              Engaging adopters and maximizing the network's decentralization
              through growing stakeowner numbers and their participation in DAO
              governance.
            </p>
          </div>
          <div className="p-[25px] border border-[2px solid #fff9] mt-[15px] rounded-[30px]">
            <img className="w-[25%]" src={Grantimg} />
            <b className="text-[20px]">
              <p className="mt-[10px]">Grants</p>
            </b>
            <p className="text-[17px] mt-[10px] text-[#fff9]">
              Incentivizing individual developers and teams to build on the
              1inch Network's protocols and contribute to protocol evolution.
            </p>
          </div>
          <div className="p-[25px] border border-[2px solid #fff9] mt-[15px] rounded-[30px]">
            <img className="w-[25%]" src={Farmingimg} />
            <b className="text-[20px]">
              <p className="mt-[10px]">Farming programs</p>
            </b>
            <p className="text-[17px] mt-[10px] text-[#fff9]">
              Running yield farming programs that have proven to be efficient
              bootstrapping tools for potential blue chips of the DeFi space,
              while offering users lucrative pool rewards.
            </p>
          </div>
          <div className="flex justify-center items-center mt-[40px]">
            <img className="w-[80%]" src={Awardimg} />
          </div>
          <div className="mt-[35px]">
            <b className="text-[20px] ">
              <p className="mt-[10px]">Grant program</p>
            </b>
            <p className="text-[17px] mt-[7px] text-[#fff9]">
              The 1inch Foundation's key activity is to provide funding to
              entities and initiatives that contribute to long-term and
              sustainable growth of the 1inch Network.
            </p>
          </div>
          <div className="mt-[20px]">
            <Button
              width="100%"
              border="1px solid white"
              buttonColor="transparent"
              padding="10px"
              text="18px"
              props="Learn more"
            />
          </div>

          <div className=" mt-[50px]">
            <b className="text-[26px]">
              <p className="mt-[10px]">Areas of interest</p>
            </b>
          </div>

          <div className="p-[25px] border border-[2px solid #fff9] mt-[15px] rounded-[30px]">
            <img className="w-[25%]" src={Networkimg} />
            <b className="text-[20px]">
              <p className="mt-[10px]">Network development</p>
            </b>
            <p className="text-[17px] mt-[10px] text-[#fff9]">
              Integrations that increase the usage of 1inch Network products and
              development of technologies beneficial to the 1inch Network
            </p>
          </div>
          <div className="p-[25px] border border-[2px solid #fff9] mt-[15px] rounded-[30px]">
            <img className="w-[25%]" src={Communityimg} />
            <b className="text-[20px]">
              <p className="mt-[10px]">Community development</p>
            </b>
            <p className="text-[17px] mt-[10px] text-[#fff9]">
              Enabling teams and individuals to strengthen 1inch Network through
              education, events, and social outlets
            </p>
          </div>
          <div className="p-[25px] border border-[2px solid #fff9] mt-[15px] rounded-[30px]">
            <img className="w-[25%]" src={Researchimg} />
            <b className="text-[20px]">
              <p className="mt-[10px]">Research & analytics</p>
            </b>
            <p className="text-[17px] mt-[10px] text-[#fff9]">
              Research and analytics projects who provide key insight to 1inch
              Network’s growth, competition, and product/market fit
            </p>
          </div>

          <div className="mt-[20px]">
          <Button width="100%" buttonColor = "#dc2c56" padding="16px" text="18px" props="Apply for grant"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationPage;
