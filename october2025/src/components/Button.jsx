import React from "react";

const Button = ({ title, color }) => {
  // let nameOfProduct = "Sugar";
  const shout = (name) => {
    alert(`This user is shouting my name ${name}`);
  };

  return (
    <button className={`btn ${color}`} onClick={() => shout("Pampam")}>
      {title}
    </button>
  );
};

export default Button;
