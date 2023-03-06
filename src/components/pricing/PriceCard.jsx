import React from "react";
import { price } from "../../dummydata";

// PriceCard component that displays pricing information
const PriceCard = () => {
  return (
    <>
      {/* Map through price data and render a card for each */}
      {price.map((val) => (
        <div className="items shadow" key={val.id}>
          <h4>{val.name}</h4>
          <h1>
            <span>Ksh</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className="outline-btn">GET STARTED</button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
