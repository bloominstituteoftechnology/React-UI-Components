import React from 'react';
import ButtonRow from './ButtonRow.js'

const NumPad = (props) => {

    let numPadRows = props.buttons.map(function(row, i) {
        return (<ButtonRow key={i} buttons={row} />);
    });

  return (
    <div className="numPad">
        {numPadRows}
    </div>
  );
};

export default NumPad;