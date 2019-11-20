import React from "react";


const OperatorButton = (props) => {
  
  return  <button className="operator_Btn" onClick={() =>{props.data(props.button)}}>{props.button}</button>;
 
};
 export default OperatorButton;