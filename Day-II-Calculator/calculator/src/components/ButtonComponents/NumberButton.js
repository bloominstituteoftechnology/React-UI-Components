import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <button className={`defaultNumButton ${props.buttonStyles}`}>{ props.buttonText }</button>
  )
}

// NumberButton.defaultProps = {
//   buttonStyles: 'defaultNumButton',
// }


export default NumberButton;