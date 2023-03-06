import React from "react";
import Heading from "../common/heading/Heading";
import PriceCard from "../pricing/PriceCard";

// Hprice component renders a section with pricing information
// Define a functional component Hprice
const Hprice = () => {
  // Render the following JSX code
  return (
    <>
      <section className="hprice padding">
        {/* Renders a Heading component with subtitle and title props */}
        <Heading subtitle="OUR PRICING" title="Pricing & Packages" />
        <div className="price container grid">
          {/* Renders a PriceCard component */}
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Hprice;
