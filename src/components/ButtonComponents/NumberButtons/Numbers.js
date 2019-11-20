import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 


//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [ numberState, setNumberState ] = useState(numbers)
  console.log(numbers);
  return (
    <div className="numbers_Container">
      {numberState.map((numbers, index) => (
          <NumberButton key={index} button={numbers} data={props.newData} />
      ))}
    </div>
  );
};
export default Numbers;
