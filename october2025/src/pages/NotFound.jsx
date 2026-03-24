import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <div>
      <p className="mt-5 pt5">User where you dey carry me go.</p>
      <button className="btn btn-success" onClick={() => navigate("/")}>
        Go Home
      </button>

      <Link to={"/"} className="btn btn-primary">
        GO HOME
      </Link>
    </div>
  );
};

export default NotFound;
