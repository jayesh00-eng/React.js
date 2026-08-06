import React from "react";
import { Routes, Route } from "react-router";
import Sigup from "./screens/Sigup";
import Sigin from "./screens/Sigin";
import Home from "./screens/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Sigin />} />
      <Route path="/signin" element={<Sigin />} />
      <Route path="/signup" element={<Sigup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}