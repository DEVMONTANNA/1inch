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
     
        <div className="w-full flex gap-4 hide-scrollbar  overflow-x-auto">
          {api &&
            api.map((item, index) => (
                <div className="w-[300px] bg-[red] flex flex-col ">
                <img
                  key={index}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
                <p className="text-[white]"> {item.symbol}</p>
              </div>
              
          
            ))}
        </div>
    
    </>
  );
};

export default Logo;
