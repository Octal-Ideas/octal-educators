// This is a functional component that renders a dropdown menu using the react-select library.
// It receives three props:
// - selectedOption: the currently selected option, passed as a prop from the parent component
// - setSelectedOption: a function that updates the selected option, passed as a prop from the parent component
// - options: an array of objects representing the options to be displayed in the dropdown menu, passed as a prop from the parent component.

import React, { useState } from "react";
import Select from "react-select";

const DropDown = ({ selectedOption, setSelectedOption, options }) => {
  // This function is called whenever the user selects a new option from the dropdown menu.
  // It updates the selected option using the setSelectedOption function passed as a prop.
  const handleChange = (selectedOption) => {
    console.log("selected option:", selectedOption);
    setSelectedOption(selectedOption);
  };

  console.log("current selected option:", selectedOption);

  // This component returns the Select component from react-select, with the props passed from the parent component.
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
