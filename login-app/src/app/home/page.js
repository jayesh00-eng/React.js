"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      setUser(data);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Home Page</h1>

      <h3>Email: {user.email}</h3>
      <h3>Password: {user.password}</h3>
    </div>
  );
}