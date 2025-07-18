import React, { useState, useEffect } from "react";

const Logo = () => {
  const [api, setApi] = useState([]);
  async function fetchApi() {
    try {
      const logoApi = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      if (!logoApi.ok) {
        console.log("Error fetching Api");
      }
      const convert_to_json = await logoApi.json();
      console.log(convert_to_json);
      setApi(convert_to_json);
    } catch (error) {}
  }
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="w-full flex gap-4 overflow-x-auto hide-scrollbar ">
        {api &&
          api.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px] "
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[100px]  h-[100px] object-contain rounded-[20px]"
              />
              <p className="text-white text-sm mt-2">{item.symbol}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Logo;
