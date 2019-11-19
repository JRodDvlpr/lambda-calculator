import React, { useState } from "react";
import OperatorButton from './OperatorButton';


//import any components needed
import { operators } from '../../../data';
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [ operatorState ] = useState(operators)
  return (
    <div className="operator_Container">
       {operatorState.map((operators, index) => {
           return  <OperatorButton key={index} operators={operators}/>;
       })}
    </div>
  );
};
export default Operators;