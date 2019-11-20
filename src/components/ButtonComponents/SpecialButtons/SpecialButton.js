import React from "react";

const SpecialButton = props => {
  return (

    <button className="special_Btn" onClick={() =>{props.data(props.button)}}>{props.button}</button>

  );
};

export default SpecialButton;