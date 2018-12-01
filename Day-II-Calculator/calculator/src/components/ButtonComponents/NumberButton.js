import React from 'react';
import './Button.css';

const NumberButton = props => {
  console.log(props);
  let click = '';

  // if(props.styles === 'operator') {
  //   click = props.state.addDigit;
  // }

  // onClick={click}

  return(
    <button className={`num-btn ${props.styles}`} >{props.text}</button>
  );
}

NumberButton.defaultProps = {
  text: 'Default',
  styles: '',
}

export default NumberButton;
