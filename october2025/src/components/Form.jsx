import React from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [food, setFood] = useState("");
  const [age, setAge] = useState(0);
  const [allUsers, setAllUsers] = useState([]);

  //   const changeName = (event) => {
  //     console.log(event.target.value);
  //     setName();
  //   };

  const submitUser = () => {
    let userDetails = {
      name,
      course,
      food,
      age,
    };

    // console.log(userDetails);

    let newAllUsers = [...allUsers, userDetails];
    setAllUsers(newAllUsers);
    console.log(newAllUsers);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course"
        onChange={(e) => setCourse(e.target.value)}
      />
      <input
        type="text"
        placeholder="Best food"
        onChange={(e) => setFood(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={submitUser}>submit user</button>
    </div>
  );
};

export default Form;
