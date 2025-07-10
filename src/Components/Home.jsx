import React, { useState } from "react";
import image from "./Images/press.png";
import Header from "./Header";
import Onestopaccess from "./Onestopaccess";
import OptimizeYourTrades from "./OptimizeYourTrades";
const Home = () => {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  // api call for pokemon Api
  // const [data1, setData] = useState("");
  // async function fetchData() {
  //   const data = await fetch("https://pokeapi.co/api/v2/pokemon");
  //   const converttoJson = await data.json();
  //   console.log(converttoJson);
  //   setData(converttoJson);
  // }
  return (
    <div
      className="bg-cover bg-center   min-h-screen"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Header />
      <Onestopaccess />
      <OptimizeYourTrades />
    </div>
  );
};
{
  /* <div className="flex justify-center">
        <button className="w-[5%] bg-[red] border border-[white]" onClick={increase}>
          +
        </button>

        <button
          className="w-[5%] bg-[blue] border border-[white]"
          onClick={decrease}
        >
          -
        </button>
      </div>
      <p className="text-center text-[white]">Count : {count}</p> */
}
export default Home;



// pokemon api
{/* <div className="justify-around bg-[red] p-[10px]">
  <div>
    <button className="border border-[white] p-[10px]" onClick={fetchData}>
      Click
    </button>
  </div>
  {/* {data1?.results?.map((poke, index) => (
          <p key={index} className="text-white text-[18px]">
            {index + 1}. {poke.name}
          </p>
        ))} */}
