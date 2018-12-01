import React from 'react';


const NumberDisplay = props => {
    return (
        <div className="numDisplay">
          <div className="numPrinted">{props.number}</div>
        </div>
    );
};

export default NumberDisplay;