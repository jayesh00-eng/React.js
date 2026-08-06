"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:3001/users", {
        email,
        password,
      });
      localStorage.setItem(
      "user",
      JSON.stringify({
        email,
        password,
      })
    );
     router.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1>Login</h1>

      <input className="flex flex-col gap-2 border-2 border-black rounded-md p-2 mt-4"
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input className="flex flex-col gap-2 border-2 border-black rounded-md p-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}