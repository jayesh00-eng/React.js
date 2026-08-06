import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

export default function Sigup() {
  const navigate = useNavigate();

  const usernameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  const [userType, setUserType] = useState("");
 

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const phoneno = phoneRef.current.value;

    if (!username || !email || !address || !phoneno || !userType) {
      alert("Fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:3000/users", {
        username,
        email,
        address,
        phoneno,
        userType,
      
      });

      alert("User Created");
      navigate("/signin");
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  return (
    <div>
      <div
        className="container mt-5 d-flex justify-content-center align-items-center flex-column bg-black text-white p-5 rounded-3"
        style={{ height: "700px", width: "400px" }}
      >
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <select
            className="form-select mt-2"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select User Type</option>
           
            <option value="user">User</option>
          </select>

          <div className="mb-3 mt-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" ref={usernameRef} />
          </div>

          

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" ref={emailRef} />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" ref={addressRef} />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone No</label>
            <input type="text" className="form-control" ref={phoneRef} />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <div className="d-flex justify-content-center mt-3 gap-2">
            <p className="mb-0">Already have an account?</p>
            <Link to="/signin">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
}