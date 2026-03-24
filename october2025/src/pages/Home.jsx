import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p className="mt-5 pt5">
        This is the home route, welcome home, sweet home
      </p>
      <Link to={"/about"}>
        <button className="px-4 py-2 rounded-2 bg-primary border-0 mx-2 text-white">
          ABOUT
        </button>
      </Link>
      <Link to={"/contact"}>
        <button className="px-4 py-2 rounded-2 bg-success border-0 mx-2 text-white">
          CONTACT
        </button>
      </Link>
    </div>
  );
};

export default Home;
