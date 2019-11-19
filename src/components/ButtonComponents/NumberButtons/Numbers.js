import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 


//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [ numberState ] = useState(numbers)
  console.log(numbers);
  return (
    <div className="numbers_Container">
      {numberState.map((numbers, index) => {
        return <NumberButton key={index} button={numbers} />;
      })}
    </div>
  );
};
export default Numbers;
