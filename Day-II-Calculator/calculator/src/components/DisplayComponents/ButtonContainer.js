import React from 'react';
import './Display.sass';

import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

const ButtonContainer = (props) => {

  let numBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3];

  numBtns = numBtns.map(btn => <NumberButton id={btn} onBtnClick={props.onBtnClick}/>);

  return (

    <div className="buttons">

      <div className="nums-container">

        <ActionButton action="clear" onClick={props.onActionClick}/>

        {numBtns}

        <ActionButton action="0" onClick={props.onBtnClick} />

      </div>

      <div className="action-container">

        <ActionButton action="÷" onClick={props.onActionClick} />
        <ActionButton action="x" onClick={props.onActionClick} />
        <ActionButton action="-" onClick={props.onActionClick} />
        <ActionButton action="+" onClick={props.onActionClick} />
        <ActionButton action="=" onClick={props.onActionClick} />

      </div>

    </div>

  );

}

export default ButtonContainer;
