import React, { useState } from "react";
import OperatorButton from './OperatorButton';


//import any components needed
import { operators } from '../../../data';
//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [ operator, setOperator ] = useState(operators)
  return (
    <div className="operator_Container">
       {operator.map((numbers, index ) => {
           return  <OperatorButton key={index} button={numbers.char} data={props.newData}/>;
       })}
    </div>
  );
};
export default Operators;