import React from 'react';
import './Button.css';
import Keypad from './Keypad';
import FunctionAction from './FunctionAction';


class ButtonContainer extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    return (
      <div className = 'button-container'>
      <Keypad/>
        <div className = 'function-container'>
          <FunctionAction buttonStyle = 'function' text = "÷"/>
          <FunctionAction buttonStyle = 'function' text = 'x'/>
          <FunctionAction buttonStyle = 'function' text = '-'/>
          <FunctionAction buttonStyle = 'function' text = '+'/>
          <FunctionAction buttonStyle = 'function' text = '='/>
        </div>
      </div>
    );
  }
}

export default ButtonContainer;