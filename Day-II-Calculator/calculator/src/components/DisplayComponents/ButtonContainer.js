import React from 'react';
import './Display.sass';

import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const ButtonContainer = () => {

  let numBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  numBtns = numBtns.map(btn => <NumberButton id={btn} />);

  return (

    <div className="buttons">

      <div className="nums-container">

        <ActionButton action="clear" />

        {numBtns}

        <ActionButton action="0" />

      </div>

      <div className="action-container">

        <ActionButton action="÷" />
        <ActionButton action="x" />
        <ActionButton action="-" />
        <ActionButton action="+" />
        <ActionButton action="=" />

      </div>

    </div>

  );

}

export default ButtonContainer;
