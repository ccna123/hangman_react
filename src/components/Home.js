import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Link
      to="/playground"
      className="bg-yellow-500 text-white text-4xl w-[50%] rounded-lg cursor-pointer hover:scale-105 duration-100 mx-auto"
    >
      <h1 className="text-center">Start</h1>
    </Link>
  );
};
