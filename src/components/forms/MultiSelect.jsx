import React, { useState } from "react"; // Import React and useState hook
import CreatableSelect from "react-select/creatable"; // Import CreatableSelect component from react-select library

const components = {
  DropdownIndicator: null, // Hide the default dropdown indicator component
};

const createOption = (label) => ({
  // Function to create a new option with a label and value of the same string
  label,
  value: label,
});

const MultiSelect = ({ tags, setTags }) => {
  // Define a functional component MultiSelect that receives tags and setTags as props
  const [inputValue, setInputValue] = useState(""); // Create a state variable inputValue and a function to update it, with an initial value of an empty string
  console.log("tags", tags); // Log the current value of the tags prop to the console
  const handleKeyDown = (event) => {
    // Define a function to handle the keydown event
    if (!inputValue) return; // If the inputValue is empty, return early
    switch (
      event.key // Switch statement to handle different keys
    ) {
      case "Enter": // If the key is Enter or Tab
      case "Tab":
        setTags((prev) => [...prev, createOption(inputValue)]); // Add a new option with the inputValue as the label to the tags array using setTags function
        setInputValue(""); // Clear the inputValue using setInputValue function
        event.preventDefault(); // Prevent the default behavior of the key press
    }
  };

  return (
    // Render the CreatableSelect component
    <CreatableSelect
      components={components} // Use the components object to hide the dropdown indicator
      inputValue={inputValue} // Pass the inputValue state variable as the input value to the select
      isClearable // Allow clearing the selected tags
      isMulti // Allow selecting multiple tags
      menuIsOpen={false} // Hide the options menu by default
      onChange={(newValue) => {
        // Function to handle changes in the selected tags
        setTags(newValue); // Update the tags array with the new value using setTags function
        console.log("newValue", newValue); // Log the new value to the console
      }}
      onInputChange={(newValue) => setInputValue(newValue)} // Update the inputValue state variable with the new input value
      onKeyDown={handleKeyDown} // Call the handleKeyDown function when a key is pressed
      placeholder="Type tags and press enter..." // Set the placeholder text
      value={tags} // Pass the tags prop as the current value of the select
    />
  );
};

export default MultiSelect; // Export the MultiSelect component as the default export of the module
