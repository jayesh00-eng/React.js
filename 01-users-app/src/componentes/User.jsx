import { useState } from "react";
import allUsers from "../Data/User.js";
import "../index.css";

const User = () => {
  const [users, setUsers] = useState(allUsers);

  return (
    <div>
      <div className="users-container">
        {users.map((user, index) => (
    <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>
         <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>

 <button
    onClick={() => {
        const temp = [...users];
         temp.splice(index, 1);
          setUsers(temp);
            }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          setUsers([ ...users, { name: "jayesh", email: "jayesh@12.com", phone: "7096863392", }]); }} >
        Add
      </button>
    </div>
  );
};

export default User;