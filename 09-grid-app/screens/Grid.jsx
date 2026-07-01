import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Grid() {
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [editId, setEditId] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const getRandomColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  };


  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUserList(res.data);
  };


  const submitData = async () => {
    if (name === "" || role === "") {
    
      return;
    }

    if (editId === "") {
      const newUser = {
        name,
        role,
        color: getRandomColor(),
        date: new Date().toLocaleDateString("en-GB"),
      };

      const res = await axios.post(
        "http://localhost:3000/users",
        newUser
      );

      setUserList([...userList, res.data]);
    } else {
      const oldUser = userList.find((user) => user.id === editId);

      await axios.put(`http://localhost:3000/users/${editId}`, {
        name,
        role,
        color: oldUser.color,
        date: oldUser.date,
      });

      fetchUsers();
      setEditId("");
    }

    setName("");
    setRole("");
  };


  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    fetchUsers();
  };


  const editUser = (user) => {
    setName(user.name);
    setRole(user.role);
    setEditId(user.id);
  };

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">Notes App</h2>

      <div className="d-flex gap-2 mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Enter Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button
          className={editId ? "btn btn-success" : "btn btn-primary"}
          onClick={submitData}
        >
          {editId ? "Update" : "Submit"}
        </button>

      </div>

      <div className="row">
        {userList.map((user) => (
          <div className="col-md-3 mb-3" key={user.id}>

            <div
              className="card p-3 shadow"
              style={{
                backgroundColor: user.color,
                minHeight: "220px",
              }}
            >
              <h5>{user.name}</h5>

              <p>{user.role}</p>

              <small>
                <b>Date:</b> {user.date}
              </small>

              <div className="mt-3">

                <button
                  className="btn btn-warning me-2"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}