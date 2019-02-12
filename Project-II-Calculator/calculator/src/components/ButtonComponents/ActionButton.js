import React from 'react';



const ActionButton = props =>{
    return(
        <div className={props.buttonStyle}>
            {props.action}
        </div>
    );
}

export default ActionButton;