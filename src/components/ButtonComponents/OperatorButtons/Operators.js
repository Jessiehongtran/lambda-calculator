import React, {useState} from "react";
import { operators } from "../../../data"
import OperatorButton from "./OperatorButton"
import Display from "../../DisplayComponents/Display"

const Operators = () => {
  const [operator, setOperator] = useState(operators);
  const [displayOperators, setDisplayOperators] = useState()
  console.log('operator',operator)

  const showOperators = value => {
    console.log('value to display', value)
    setDisplayOperators(value)
  }

  return (
    <div>
      {operator.map((operator, index)=> <OperatorButton operator = {operator} key = {index} showOperators = {showOperators}/>)}
      <Display displayOperators={displayOperators}/>
    </div>
  );
};

export default Operators
