import React from "react";

const DisplayUser = ({ allUsers }) => {
  return (
    <>
      <div className="d-flex gap-2 flex-wrap">
        {allUsers.map((user, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {user.course}
              </h6>
              <p className="card-text">
                Likes {user.food} with age {user.age}
              </p>
              <div className="d-flex justify-content-between">
                <button className="bg-primary px-4 py-2 rounded-2 border-0 text-white">
                  Edit
                </button>
                <button className="bg-danger px-4 py-2 rounded-2 border-0 text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>

          // <Card
          //   key={index}
          //   content1={user.name}
          //   content2={` Likes to  eat ${user.food} every ${user.age} days`}
          //   content3={user.course}
          // />
        ))}
      </div>
    </>
  );
};

export default DisplayUser;
