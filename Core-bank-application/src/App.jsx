import { Routes, Route } from "react-router";

import Signin from "./screens/Sigin";
import Sigup from "./screens/Sigup";
import Home from "./screens/Home";
import Profile from "./screens/profile";
import Balance from "./screens/Balance";
import Transfer from "./screens/Transfar";
import History from "./screens/History";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Signin />} />

      <Route path="/signin" element={<Signin />} />

      <Route path="/signup" element={<Sigup />} />

      <Route path="/home" element={<Home />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/balance" element={<Balance />} />

      <Route path="/transfer" element={<Transfer />} />

      <Route path="/history" element={<History />} />

    </Routes>
  );
}