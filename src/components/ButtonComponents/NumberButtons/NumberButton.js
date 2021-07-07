import React from "react";
import Display from "../../DisplayComponents/Display";


const NumberButton = (props) => {
  console.log('props in numberbutton', props)
  return (
    <button onClick={() => props.showNumbers(props.number)}>{props.number}</button>
  );
};

export default NumberButton
