import React from "react";

export const Card = ({ char, handleClick }) => {
  const handleChoose = (e) => {
    handleClick(e.target.textContent);
  };

  return (
    <div
      onClick={(e) => handleChoose(e)}
      className="bg-white w-[64px] h-[64px] flex justify-center items-center rounded-lg cursor-pointer shadow-lg hover:scale-105 duration-150 text-4xl"
    >
      {char}
    </div>
  );
};
