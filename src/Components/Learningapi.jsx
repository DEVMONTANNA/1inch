import React, { useState, useEffect } from "react";

const Learningapi = () => {
  const [user, setUser] = useState();
  const [dog, setDog] = useState();
  const [post, setPost] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logoApi, setLogoApi] = useState("");

  async function callLogoApi() {
    try {
      const logoData = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );
      if (!logoData.ok) {
        console.log("Error in fetching");
      }
      const logodataJson = await logoData.json();
      console.log(logodataJson);
      setLogoApi(logodataJson);
    } catch (error) {
      console.error("Error", error);
    }
  }

  useEffect(() => {
    callLogoApi();
  }, []);
  async function fetchData(e) {
    e.preventDefault();
    console.log({ firstName, lastName, email, password });

    // const data = await fetch("https://opentdb.com/api.php?amount=5");
    // if (!data.ok) {
    //   console.log("Error fetching data");
    // }
    // try {
    //   const convert_to_json = await data.json();
    //   console.log(convert_to_json);
    //   setDog(convert_to_json);
    // } catch (error) {
    //   console.log("Error", error);
    // }

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (!response.ok) {
        console.log("Failed");
      }

      const result = await response.json();
      console.log("Registration successful:", result);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  async function publickUserData() {
    try {
      const userApiData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!userApiData.ok) {
        console.log("error getting users ");
      }
      const convert_to_json = await userApiData.json();
      console.log(convert_to_json);
      setUser(convert_to_json);
    } catch (error) {
      console.log("error", error);
    }
  }
  // const [data, setData] = useState();

  // async function fetchData() {
  //   try {
  //     const apiData = await fetch(
  //       "https://official-joke-api.appspot.com/random_joke"
  //     );
  //     if (!apiData.ok) {
  //       console.log("Error in calling Api");
  //     }
  //     const convert_to_json = await apiData.json();
  //     console.log(convert_to_json);
  //     setData(convert_to_json);
  //   } catch (error) {
  //     console.error("invalid", error);
  //   }
  // }

  // api call for pokemon Api
  // const [data1, setData] = useState("");
  // async function fetchData() {
  //   const data = await fetch("https://pokeapi.co/api/v2/pokemon");
  //   const converttoJson = await data.json();
  //   console.log(converttoJson);
  //   setData(converttoJson);
  // }

  return (
    <>
      {/* <form onSubmit={fetchData}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form> */}

      <div>
        <div className="flex overflow-x-auto  gap-4 mt-4 p-[25px] ">
          {logoApi &&
            logoApi.map((item, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[100px] flex flex-col items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <p className="text-[white]">{item.symbol}</p>
                </div>
              );
            })}
        </div>
      </div>

      {/* <button
        className="border boder-[white] ml-[50px] bg-[blue] text-[white]"
        onClick={publickUserData}
      >
        Click to get new joke here
      </button>
      {dog && (
        <div className="text-white bg-green-700 w-full p-4">
          <table
            className="w-full bg-red-600 text-white "
            border="1"
            cellPadding="10"
          >
            <thead className="w-full bg-[orange] text-white justify-start">
              <tr>
                <th>Index</th>
                <th>Question</th>
                <th>Anwser</th>
              </tr>
            </thead>
            <tbody>
              {dog.results.map((item, index) => (
                <tr key={index}>
                  <td>Q{index + 1}:</td>
                  <td>{item.question}</td>
                  <td>{item.correct_answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}
    </>
  );
};

export default Learningapi;
{
  /* <div className="block ">
        <button
          onClick={callLogoApi}
          className="border boder-[white] bg-[blue] text-[white]"
        >
          click to get your name and gender
        </button>
        <div className="w-[100%] bg-[red] flex justify-center items-center"></div>

        <table className="table-auto border border-collapse w-full text-left">
          <thead>
            <tr className="w-full bg-[red] ">
              <th>Index</th>
              <th>Question</th>
              <th>Category</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {dog &&
              dog.results.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{item.question}</td>
                  <td className="border px-4 py-2">{item.category}</td>
                  <td className="border px-4 py-2">{item.correct_answer}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* <p className="text-[white]">Q{index + 1}</p>
              <p className="text-[white] " >{item.question}</p>
              <p className="text-[white]">Answer: {item.correct_answer}</p> */
}
