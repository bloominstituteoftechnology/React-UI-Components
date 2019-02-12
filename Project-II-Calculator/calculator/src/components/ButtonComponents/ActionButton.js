import React from 'react';



const ActionButton = props =>{
    return(
        <div className={props.buttonStyle}>
            {props.button}
        </div>
    );
}

export default ActionButton;