import React, { useState } from "react";
import Select from "react-select";



const DropDown = ({ selectedOption, setSelectedOption, options }) => {
  const handleChange = (selectedOption) => {
    console.log("selected option:", selectedOption);
    setSelectedOption(selectedOption);
  };

  console.log("current selected option:", selectedOption);

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder="Select an option"
    />
  );
};

export default DropDown;
