import React, {useState} from "react";
import { numbers } from "../../../data"
import NumberButton from "./NumberButton"
import Display from "../../DisplayComponents/Display"



const Numbers = () => {
  
  const [number, setNumber] = useState(numbers);
  const [displayNumbers, setDisplayNumbers] = useState()

  const showNumbers = value => {
    console.log('value to display', value)
    setDisplayNumbers(value)
  }

  return (
    <div>
      {number.map((number,index) => <NumberButton number = {number} key={index} showNumbers={showNumbers}/>)}
      <Display displayNumbers={displayNumbers}/>
    </div>
  );
};

export default Numbers

