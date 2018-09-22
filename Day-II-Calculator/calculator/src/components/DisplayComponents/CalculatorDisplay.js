import React from 'react';
import './Display.css';

import ActionButton from "../ButtonComponents/ActionButton";

//cal display

const CalDisplay = (props) => {
    return(
        <div>
            <div className={props.displayStyle}>
                {props.data.zero}
            </div>
            <ActionButton data={props.data} displayStyle="long-white-square"/>
        </div>
    )
};

CalDisplay.defaultProps = {
    displayStyle: "black-box"
}

export default CalDisplay;