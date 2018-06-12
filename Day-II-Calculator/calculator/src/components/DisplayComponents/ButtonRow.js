import React from 'react';
import NumberButton from '../ButtonComponents/NumberButton.js'

const ButtonRow = (props) => {

    let buttons = props.buttons.map(function(button) {
        return (
            <div key={button} className="numButtonContainer" id={button}>
                <NumberButton value={button} />
            </div>

        )
    });

  return (
    <div className="buttonRow">
        {buttons}
    </div>
  );
};

export default ButtonRow;
