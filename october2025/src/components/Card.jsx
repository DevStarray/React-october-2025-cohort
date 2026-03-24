import React from "react";

const Card = ({ content1, content2, content3 }) => {
  return (
    <div className="card mb-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{content1}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{content2}</h6>
        <p className="card-text">{content3}</p>
      </div>

      <div className="d-flex justify-content-around mb-2">
        <button className="bg-primary px-4 py-2 rounded-2 border-0 text-white">
          Edit
        </button>
        <button className="bg-danger px-4 py-2 rounded-2 border-0 text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
