import React from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-br from-blue-900 via-purple-700 to-pink-600 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-10 animate-pulse">Book Management</h1>
      <button
        onClick={() => navigate("/view")}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default StartPage;