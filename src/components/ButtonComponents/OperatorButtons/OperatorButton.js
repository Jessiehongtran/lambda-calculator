import React from "react";

const OperatorButton = (props) => {
  return (
      // {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button onClick={() => props.showOperators(props.operator.char)}>{props.operator.value}</button>
  );
};

export default OperatorButton
