import React from 'react';
import './Button.css';
import NumberButtons from './NumberButton';
import FunctionButtons from './FunctionButton';

const ClearButton = {
  buttonStyle: 'actionButton',
  text: 'clear'
};

const ZeroButton = {
  buttonStyle: 'actionButton',
  text: '0'
};

const ImputButtons = () => {
  return (
    <div className='all-buttons'>
      <div>
        <ActionButton button ={ClearButton} />
        <NumberButtons />
        <ActionButton button ={ZeroButton} />
      </div>
      <div>
        <FunctionButtons />
      </div>
    </div>
  );
}


const ActionButton = (props) => {
  return (
    <div className='actionButtons'>
      <button className={props.button.buttonStyle}>{props.button.text}</button>
    </div>
  );
}

export default ImputButtons;