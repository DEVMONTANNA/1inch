import React, { Children } from "react";

const Button = ({ props, className }) => {
  return (
    <div>
      <a href="https://app.1inch.io/swap?src=1:ETH&dst=1:USDC">
        <button
          className={`bg-[#007aff] ${className} pl-[9px] pr-[9px] pb-[10px] pt-[10px] rounded-[16px] items-center text-center border-[1px solid transparent] text-[#ffffff] font-[verdana]  cursor-pointer`}
        >
          {props}
        </button>
      </a>
    </div>
  );
};

export default Button;
