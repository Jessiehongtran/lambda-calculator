import React from "react";

const Display = (props) => {
  console.log('props in Display', props)
  return <div>Display here: {props.displayNumbers} {props.displayOperators}</div>;
};

export default Display
