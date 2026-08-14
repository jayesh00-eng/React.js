import React, { useEffect, useState } from "react";
import axios from "axios";

export default function History() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    axios
      .get("http://localhost:3000/transactions")
      .then((res) => {

        const data = res.data.filter(
          (item) =>
            item.fromAccount === user.accountNumber ||
            item.toAccount === user.accountNumber
        );

        setTransactions(data);

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div className="container mt-5">

      <h2>Transaction History</h2>

      {transactions.length === 0 ? (
        <p className="mt-3">No transactions found.</p>
      ) : (

        <table className="table table-bordered mt-3">

          <thead>
            <tr>
              <th>Date</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>

            {transactions.map((item) => (

              <tr key={item.id}>

                <td>{item.date}</td>

                <td>{item.fromAccount}</td>

                <td>{item.toAccount}</td>

                <td>₹ {item.amount}</td>

                <td>{item.type}</td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}