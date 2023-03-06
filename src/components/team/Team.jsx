import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import "./team.css";
import Awrapper from "../about/Awrapper";
import "../about/about.css";

const Team = () => {
  return (
    <>
      {/* Render the back button with the title 'Team' */}
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          {/* Render the team cards */}
          <TeamCard />
        </div>
      </section>
      {/* Render the about section wrapper */}
      <Awrapper />
    </>
  );
};

export default Team;
