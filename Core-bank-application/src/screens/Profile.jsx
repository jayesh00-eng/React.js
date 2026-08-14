import React, { useEffect, useState } from "react";

export default function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));

    if (data) {
      setUser(data);
    }
  }, []);

  if (!user) {
    return <h3 className="text-center mt-5">User not found</h3>;
  }

  return (
    <div className="container mt-5">

      <h2>Profile</h2>

      <div className="card p-4 mt-3">

        <h5>Username: {user.username}</h5>

        <p>Email: {user.email || "Not Available"}</p>

        <p>Phone: {user.phoneno || "Not Available"}</p>

        <p>Address: {user.address || "Not Available"}</p>

        <p>
          Account Number:{" "}
          {user.accountNumber || "Not Available"}
        </p>

        <p>
          User Type: {user.userType}
        </p>

      </div>

    </div>
  );
}