import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
// import "./App.css";

const supabaseUrl = "https://gqgjhevsrgnynkhvdzws.supabase.co"; // ✅ Paste actual URL
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxZ2poZXZzcmdueW5raHZkendzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMzE4NTEsImV4cCI6MjA2NzkwNzg1MX0.DXE_u9pfr7cUisW5PbET_hCNZOE8GehEYtD2VYYNUfI";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const user = supabase.auth.getUser();

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from("Devmontannatable")
      .insert([{ name, type }]);
    if (error) {
      console.error(error);
    } else {
      alert("Instrument added!");
      setName("");
      setType("");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert("Check your email to confirm signup!");
    }
  };
  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      alert("Signed in!");
    }
  };
  const [instruments, setInstruments] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase
        .from("Devmontannatable")
        .select("*");
      if (error) {
        console.log("Fetch error:", error);
      } else {
        setInstruments(data); // assuming you have a state
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center w-[100%]  h-[400px]">
        <div className="flex flex-col bg-blue-950 border border-amber-950 w-[35%] h-[300px] p-[20px]">
          <label className=" text-[white]">Email</label>
          <input
            className="border text-[white] outline-0 pl-[10px] p-[5px] border-amber-200"
            type="email"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className=" text-[white]">Password</label>
          <input
            type="password"
            className="border  text-[white] outline-0 pl-[10px] p-[5px] border-amber-200"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mt-[20px] block">
            <button
              className="bg-[blue] text-[white] p-[10px] border w-[100%] border-[1px solid white] "
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <button
              className="bg-[blue] text-[white]  p-[10px] mt-[15px] w-[100%] border border-[1px solid white]"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
