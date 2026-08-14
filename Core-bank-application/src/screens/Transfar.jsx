
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Transfer() {

  const [user, setUser] = useState(null);
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));

    if (data) {
      setUser(data);
    }
  }, []);

  const handleTransfer = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first");
      return;
    }

    if (toAccount === "" || amount === "") {
      alert("Please fill all fields");
      return;
    }

    const transferAmount = Number(amount);

    if (transferAmount <= 0) {
      alert("Enter valid amount");
      return;
    }

    try {

      // Get all accounts
      const response = await axios.get(
        "http://localhost:3000/accounts"
      );

      const accounts = response.data;

      // Find sender
      const sender = accounts.find(
        (item) =>
          String(item.accountNumber) ===
          String(user.accountNumber)
      );

      if (!sender) {
        alert("Sender account not found");
        return;
      }

      // Find receiver
      const receiver = accounts.find(
        (item) =>
          String(item.accountNumber) ===
          String(toAccount)
      );

      if (!receiver) {
        alert("Receiver account not found");
        return;
      }

      // Same account
      if (
        String(sender.accountNumber) ===
        String(receiver.accountNumber)
      ) {
        alert("You cannot transfer to your own account");
        return;
      }

      // Balance check
      if (Number(sender.balance) < transferAmount) {
        alert("Insufficient balance");
        return;
      }

      // Calculate new balance
      const senderBalance =
        Number(sender.balance) - transferAmount;

      const receiverBalance =
        Number(receiver.balance) + transferAmount;

      // Update sender
      await axios.patch(
        `http://localhost:3000/accounts/${sender.id}`,
        {
          balance: senderBalance
        }
      );

      // Update receiver
      await axios.patch(
        `http://localhost:3000/accounts/${receiver.id}`,
        {
          balance: receiverBalance
        }
      );

      // Add transaction
      await axios.post(
        "http://localhost:3000/transactions",
        {
          fromAccount: String(sender.accountNumber),
          toAccount: String(receiver.accountNumber),
          amount: transferAmount,
          type: "Transfer",
          date: new Date().toLocaleString()
        }
      );

      alert("Transfer Successful");

      setToAccount("");
      setAmount("");

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container mt-5">

      <div className="card p-4 mx-auto" style={{ maxWidth: "500px" }}>

        <h2 className="text-center mb-4">
          Transfer Money
        </h2>

        {user && (
          <p>
            Your Account Number:{" "}
            <strong>{user.accountNumber}</strong>
          </p>
        )}

        <form onSubmit={handleTransfer}>

          <div className="mb-3">

            <label className="form-label">
              Receiver Account Number
            </label>

            <input
              type="text"
              className="form-control"
              value={toAccount}
              onChange={(e) => setToAccount(e.target.value)}
              placeholder="Enter account number"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Amount
            </label>

            <input
              type="number"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />

          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Transfer
          </button>

        </form>

      </div>

    </div>
  );
}
