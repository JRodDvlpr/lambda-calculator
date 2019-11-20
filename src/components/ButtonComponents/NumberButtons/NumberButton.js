import React from "react";

const NumberButton = props => {
  
  return (
    <button className="numbers_Btn" onClick={() =>{props.data(props.button)}}> {props.button} </button>

  );
};

export default NumberButton;