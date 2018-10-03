import React from "react";
import "./Button.css";

const WhiteButtons = (props) => {

  return (
    
          <div className="btn num" onClick={() => props.clickHandler(props.number)}>
            {props.number}
          </div>
        )
      
};

export default WhiteButtons;
