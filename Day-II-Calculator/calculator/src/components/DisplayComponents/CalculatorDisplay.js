import React from 'react';
import './Display.sass';

const CalculatorDisplay = ({total}) => {

  return (

    <div className="display">

      <p>{total}</p>

    </div>

  );

}

export default CalculatorDisplay;
