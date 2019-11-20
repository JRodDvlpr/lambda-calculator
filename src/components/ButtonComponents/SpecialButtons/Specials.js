import React, { useState } from "react";
import SpecialButton from "./SpecialButton";


//import any components needed
import { specials } from '../../../data';
//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [ special ] = useState(specials);
  return (
    <div className ="special_Container">
       {special.map((numbers, index) => (
             <SpecialButton key={index} button={numbers} data={props.newData} />
        ))}
    </div>
  );
};

export default Specials;