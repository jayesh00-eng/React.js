import { useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
    
      <nav className="navbar navbar-dark bg-primary px-3">
        <button
          className="btn btn-primary"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <div className="d-flex justify-content-center align-items-center flex-grow-1"> 
        <h4 className="text-white m-0 text-center">My Bank</h4>
       </div>
      </nav>

      
      <div
        className={`bg-dark text-white position-fixed top-0 start-0 h-100 p-3 ${
          open ? "d-block" :  "d-none"
        }`}
        style={{ width: "250px", zIndex: "1000" }}
      >
        <h3>Dashboard</h3>
        <hr />

        <Link className="d-block text-white text-decoration-none mb-3" to="/home">
          🏠 Home
        </Link>

        <Link className="d-block text-white text-decoration-none mb-3" to="/profile">
          👤 Profile
        </Link>

        <Link className="d-block text-white text-decoration-none mb-3" to="/balance">
          💰 Balance
        </Link>

        <Link className="d-block text-white text-decoration-none mb-3" to="/transfer">
          💸 Transfer
        </Link>

        <Link className="d-block text-white text-decoration-none mb-3" to="/history">
          📜 History
        </Link>

        <Link className="d-block text-white text-decoration-none mb-3" to="/signin">
          🚪 Logout
        </Link>
      </div>


      
    </>
  );
}
