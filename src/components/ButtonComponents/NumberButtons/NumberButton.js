import React from "react";


const NumberButton = ({number}) => {
  return (
    <button> {number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton
