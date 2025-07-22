import React from "react";
import { useNavigate } from "react-router-dom";

const ChooseView = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-br from-pink-500 to-orange-500 flex flex-col justify-center items-center text-white space-y-8">
      <h1 className="text-8xl font-bold mb-6" style={{fontFamily: "Doto"}}>Choose Your View</h1>
      <div className="flex w-1/4 justify-between" >
        <button
          onClick={() => navigate("/card")}
          className="px-6 py-3 bg-green-500 hover:bg-green-700 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300"
        >
          Card View
        </button>
        <button
          onClick={() => navigate("/table")}
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-700 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300"
        >
          Table View
        </button>
      </div>
    </div>
  );
};

export default ChooseView;
