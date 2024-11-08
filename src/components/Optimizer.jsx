import React from "react";
import { FaTools } from "react-icons/fa";

const OptimizerWIP = () => {
  return (
    <div className="flex flex-col h-[92vh] justify-center items-center">
      <div className="w-full max-w-3xl mx-auto my-24 p-8 bg-gray-800 rounded-lg shadow-lg text-center text-gray-100">
        <FaTools className="text-6xl mx-auto mb-4 text-green-400 animate-pulse" />
        <h2 className="text-3xl font-bold mb-4">Optimizer is Coming Soon!</h2>
        <p className="text-lg mb-4">
          Our AI-powered tool, <span className="text-green-400">Optimizer</span>
          , is in the works. It will help you debug, optimize, and solve your ML
          problems effortlessly. Stay tuned!
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300"
          disabled
        >
          Not Available Yet
        </button>
      </div>
    </div>
  );
};

export default OptimizerWIP;
