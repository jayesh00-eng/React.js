import React, { useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../redux/auth_slice";

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameRef = useRef();
  const passwordRef = useRef();
  const [userType, setUserType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!username || !password || !userType) {
      alert("Please fill all fields");
      return;
    }

    dispatch(loginStart());

    try {
      const res = await axios.get("http://localhost:3000/users");

      const user = res.data.find((item) => {
        const pwd = String(item.password || "");

        return (
          item.username.trim() === username &&
          pwd === password &&
          item.userType === userType
        );
      });

      if (user) {
        dispatch(loginSuccess(user));
        alert("Login Successful");
        navigate("/home");
      } else {
        dispatch(loginFailure("Invalid Details"));
        alert("Invalid Username, Password or User Type");
      }
    } catch (error) {
      console.log(error);
      dispatch(loginFailure("Server Error"));
      alert("Server Error");
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center flex-column">
      <div
        className="bg-dark text-white p-4 rounded"
        style={{ width: "400px" }}
      >
        <h2 className="text-center mb-4">Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>User Type</label>
            <select
              className="form-select"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select User Type</option>
              <option value="vesu_admin">Admin Vesu Branch</option>
              <option value="adajan_admin">Admin Adajan Branch</option>
              <option value="user">User</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              ref={usernameRef}
              placeholder="Enter Username"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              ref={passwordRef}
              placeholder="Enter Password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>

          <div className="text-center mt-3">
            <span>Don't have an account? </span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}