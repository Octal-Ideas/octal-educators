import React from "react";
import Back from "../common/back/Back";
import PriceCard from "./PriceCard";
import "./price.css";
import Faq from "./Faq";

const Pricing = () => {
  return (
    <>
      <Back title="Choose The Right Plan" /> {/* Back component with a title */}
      <section className="price padding">
        <div className="container grid">
          <PriceCard /> {/* PriceCard component */}
        </div>
      </section>
      <Faq /> {/* Faq component */}
    </>
  );
};

export default Pricing;
