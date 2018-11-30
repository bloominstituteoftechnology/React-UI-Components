import React from 'react';
import './Button.css';

const NumberButton = props => {
  return(
    <button className={`num-btn ${props.styles}`}>{props.text}</button>
  );
}

NumberButton.defaultProps = {
  text: 'Default',
  styles: '',
}

export default NumberButton;
