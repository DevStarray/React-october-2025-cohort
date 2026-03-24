// import React, { useState } from "react";
// import Button from "./components/Button";
// import NavBar from "./components/NavBar";
// import Form from "./components/Form";
// import Card from "./components/Card";

// const App = () => {
//   const [num, setNum] = useState(0);
//   const [name, setName] = useState("PamPam");
//   const incNum = () => {
//     setNum(num + 1);
//     console.log(num);
//   };
//   return (
//     <>
//       <NavBar />

//       <h1 className="bg-danger text-light mt-5">
//         This is the React css styling
//       </h1>
//       {/* <button className="btn btn-success text-light">Click Me</button> */}

//       <Button title="Buy me" color="btn-success" />
//       <Button title="Warn app" color="btn-warning" />
//       <Button title="Delete" color="btn-danger" />

//       <Card content1="Steven" content2="Hard Eba" content3="Entrepreneurs" />
//       <Card content1="Mrs Ini" content2="Semo" content3="Developer" />

//       <h1>{name}</h1>
//       <button onClick={() => setName("Blessing")}>change Name</button>
//       <button className="ms-5 btn btn-success" onClick={incNum}>
//         {num}
//       </button>
//       <Form />
//     </>
//   );
// };

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Effect from "./pages/Effect";
import Layout from "./pages/Layout";
import Fetch from "./pages/Fetch";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} /> */}

        <Route path="/sp-contact" element={<Navigate to={"/contact"} />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/fetch" element={<Fetch />} />

        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/user/:username" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
