import React from 'react';
import './Display.css';
import ActionButton from "../ButtonComponents/ActionButton";

 const CalDisplay = (props) => {
    return(
        <div>
            <div className={props.displayStyle}>
                {props.text.zero}
            </div>
            <ActionButton text={props.text} displayStyle="long-white-square"/>
        </div>
    )
};
 CalDisplay.defaultProps = {
    displayStyle: "black-box"
}
 export default CalDisplay;
