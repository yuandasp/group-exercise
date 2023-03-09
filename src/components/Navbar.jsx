import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-800 flex justify-center h-16 gap-8 font-bold text-white">
      <button
        onClick={() => {
          navigate("/users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Navbar;
