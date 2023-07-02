import React from "react";
import { Link } from "react-router-dom";

export const Result = ({ mistakes, onPlayAgain, word }) => {
  const handlePlayAgain = () => {
    onPlayAgain();
  };

  return (
    <div className="bg-black bg-opacity-20 w-full z-10 absolute h-screen flex items-center justify-center">
      <div className="bg-white p-4 mx-4 w-full md:w-[50%] rounded-lg flex flex-col justify-center items-center">
        <h1
          className={`${
            mistakes > 5 ? "text-red-500" : "text-green-500"
          } text-4xl font-bold`}
        >
          {mistakes > 5 ? "Fail!" : "Won!"}
        </h1>
        <p className="text-2xl">Secret word: {word}</p>
        <button
          onClick={handlePlayAgain}
          className="bg-orange-300 p-2 rounded-md mt-4 hover:scale-105 duration-100"
        >
          Play again
        </button>
      </div>
    </div>
  );
};
