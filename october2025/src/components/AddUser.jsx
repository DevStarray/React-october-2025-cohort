import React, { useState } from "react";

const AddUser = ({ submitUser }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [food, setFood] = useState("");
  const [age, setAge] = useState(0);
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
      <button onClick={() => submitUser({ name, course, food, age })}>
        submit user
      </button>
    </div>
  );
};

export default AddUser;
