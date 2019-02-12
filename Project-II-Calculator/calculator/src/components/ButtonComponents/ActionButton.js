import React from 'react';



const ActionButton = props =>{
    return(
        <button className={props.buttonStyle}>{props.text}</button>
      
    );
}

export default ActionButton;