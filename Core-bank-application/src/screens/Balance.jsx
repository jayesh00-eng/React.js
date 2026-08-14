import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Balance() {

  const [balance, setBalance] = useState(null);

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    axios
      .get(`http://localhost:3000/accounts?accountNumber=${user.accountNumber}`)
      .then((res) => {

        if (res.data.length > 0) {
          setBalance(res.data[0].balance);
        }

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div className="container mt-5">

      <h2>Balance</h2>

      <div className="card p-4 mt-3">

        <h3>
          ₹ {balance !== null ? balance : "Loading..."}
        </h3>

      </div>

    </div>
  );
}