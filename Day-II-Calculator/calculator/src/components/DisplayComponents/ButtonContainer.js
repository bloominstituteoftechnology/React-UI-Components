import React from 'react';
import './Display.css';

import NumberButton from '../ButtonComponents/NumberButton';

const ButtonContainer = () => {

  const numBtns = [];

  for (let i = 1; i <= 9; i++) {

    numBtns.push(<NumberButton id={i} />);

  }

  return (

    <div className="button-container">

      {numBtns}

    </div>

  );

}

export default ButtonContainer;
