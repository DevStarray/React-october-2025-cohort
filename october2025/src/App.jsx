import React, { useState } from "react";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Form from "./components/Form";

const App = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("PamPam");
  const incNum = () => {
    setNum(num + 1);
    console.log(num);
  };
  return (
    <>
      <NavBar />
      <h1 className="bg-danger text-light mt-5">
        This is the React css styling
      </h1>
      <button className="btn btn-success text-light">Click Me</button>
      <Button />
      <Button />
      <h1>{name}</h1>
      <button onClick={() => setName("Noah")}>change Name</button>
      <button className="ms-5 btn btn-success" onClick={incNum}>
        {num}
      </button>
      <Form />
    </>
  );
};

export default App;
