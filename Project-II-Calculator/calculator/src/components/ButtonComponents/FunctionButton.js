import React from 'react';
import './Button.css';

const DivideButton = {
  buttonStyle: 'functionButton',
  text: '÷'
};

const MultiplyButton = {
  buttonStyle: 'functionButton',
  text: '×'
};

const SubtractButton = {
  buttonStyle: 'functionButton',
  text: '-'
};

const AddButton = {
  buttonStyle: 'functionButton',
  text: '+'
};

const EqualButton = {
  buttonStyle: 'functionButton',
  text: '='
};


const FunctionButton = (props) => {
  return (
    <div className='FunctionalButtons'>
      <button className={props.button.buttonStyle}>{props.button.text}</button>
    </div>
  );
}

const FunctionButtons = () => {
  return (
    <div className='functions'>
      <FunctionButton button ={DivideButton} />
      <FunctionButton button ={MultiplyButton} />
      <FunctionButton button ={SubtractButton} />
      <FunctionButton button ={AddButton} />
      <FunctionButton button ={EqualButton} />
    </div>
  );
}
export default FunctionButtons;