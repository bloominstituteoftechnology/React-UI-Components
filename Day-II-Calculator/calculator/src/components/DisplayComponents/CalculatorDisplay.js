import React from 'react';
import './Display.css';

//import ActionButton from "./components/ButtonComponents/ActionButton";

//cal display

const CalDisplay = (props) => {
    return(
        <div>
            <div className={props.displayStyle}>
                {props.text}
            </div>
            {/* <ActionButton /> */}
        </div>
    )
};

CalDisplay.defaultProps = {
    displayStyle: "black-box"
}

export default CalDisplay;