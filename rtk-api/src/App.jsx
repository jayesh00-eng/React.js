import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./screens/signup";
import Signin from "./screens/signin";
import Home from "./screens/home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

