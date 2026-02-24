import React from "react";

const Button = () => {
  let nameOfProduct = "Sugar";
  const shout = (name) => {
    alert(`This user is shouting my name ${name}`);
  };

  return (
    <button
      className="bg-primary border-0 rounded-2 my-2 mx-2"
      onClick={() => shout("Starray")}
    >
      Buy {nameOfProduct}
    </button>
  );
};

export default Button;
