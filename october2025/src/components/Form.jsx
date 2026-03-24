import React from "react";
import { useState } from "react";
import Card from "./Card";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

const Form = () => {
  const [allUsers, setAllUsers] = useState([]);

  //   const changeName = (event) => {
  //     console.log(event.target.value);
  //     setName();
  //   };

  const submitUser = (userDetails) => {
    // let userDetails = {
    //   name,
    //   course,
    //   food,
    //   age,
    // };

    // console.log(userDetails);

    let newAllUsers = [...allUsers, userDetails];
    setAllUsers(newAllUsers);
  };

  return (
    <div>
      <AddUser submitUser={submitUser} allUsers={allUsers} />
      <hr />
      <DisplayUser allUsers={allUsers} />
    </div>
  );
};

export default Form;
