import React from "react";
import { team } from "../../dummydata";

// This component displays a list of team members using data from dummydata.js
const TeamCard = () => {
  return (
    <>
      {/* Loop through each team member and create a card */}
      {team.map((val) => (
        <div className="items shadow" key={val.id}>
          {/* Display the team member's image and add social media icons */}
          <div className="img">
            <img src={val.cover} alt="" />
            <div className="overlay">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-tiktok icon"></i>
            </div>
          </div>
          {/* Display the team member's name and job title */}
          <div className="details">
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
