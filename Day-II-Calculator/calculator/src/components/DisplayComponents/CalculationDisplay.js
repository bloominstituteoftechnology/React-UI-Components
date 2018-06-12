import React from 'react';
import './Display.css';

const CalculationDisplay = props => {
    return (
        <div className={props.customClass}>
            <div>
                {props.value}
            </div>

        </div>
    );

};
CalculationDisplay.defaultProps = {
    customClass: "calculationDisplay",
    name: "0"
}

export default CalculationDisplay;