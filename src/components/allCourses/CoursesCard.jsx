import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {/* Map over courses data and create a card for each course */}
          {coursesCard.map((val) => (
            <div className="items" key={val.id}>
              {/* Create a container for course info */}
              <div className="content flex">
                <div className="left">
                  {/* Add course cover image */}
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  {/* Add course name */}
                  <h1>{val.coursesName}</h1>
                  {/* Add course rating */}
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  {/* Add course teacher info */}
                  <div className="details">
                    {/* Map over teacher data and create a box for each teacher */}
                    {val.courTeacher.map((details) => (
                      <div key={details.id}>
                        <div className="box">
                          <div className="dimg">
                            {/* Add teacher's image */}
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="para">
                            {/* Add teacher's name */}
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        {/* Add teacher's total course time */}
                        <span>{details.totalTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Add course price */}
              <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              {/* Add enroll button */}
              <button className="outline-btn">ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
