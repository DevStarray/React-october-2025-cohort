import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  let { username } = useParams();
  console.log(username);

  return (
    <div className="pt-5 mt-5">
      <p>Welcome onboard {username}, we are happy to have you!</p>
    </div>
  );
};

export default Profile;
