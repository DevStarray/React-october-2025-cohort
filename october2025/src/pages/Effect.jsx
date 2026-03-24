import React, { useEffect, useState } from "react";

const Effect = () => {
  const [name, setName] = useState("Pampam");
  const [num, setNum] = useState(0);
  // useEffect syntax is a function  that collects a callback parameter and also an array.
  useEffect(() => {
    console.log("use effect ran");
  }, [name]);
  // [] this is called the dependency array

  // without dependency array --> useEffect will run on load, when any state changes it will run

  // empty dependency array --> useEffect will run on load, when state changes it won't run

  // Dependency array with state inside --> useEffect will run onload and when that particular state changes it will also run

  return (
    <div className="mt-5 pt-5">
      <h1 onClick={() => setName("Matthew")}>{name}</h1>

      <h1 onClick={() => setNum(num + 1)}>{num}</h1>
    </div>
  );
};

export default Effect;
