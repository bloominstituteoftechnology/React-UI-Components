import React from 'react';
import './Display.css';

//import ActionButton from "./components/ButtonComponents/ActionButton";
/* import statement keeps giving a module not found error
I'm not sure why so I commented out that section and added it to App.js*/
//cal display

const CalDisplay = (props) => {
    return(
        <div>
            <div className={props.displayStyle}>
                {props.data.zero}
            </div>
            {/* <ActionButton data={props.data} displayStyle="long-white-square"/> */}
        </div>
    )
};

CalDisplay.defaultProps = {
    displayStyle: "black-box"
}

export default CalDisplay;