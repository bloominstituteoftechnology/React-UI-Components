import React from 'react';
import './Button.css';

const redStyle = {
  height: '93px',
  width: '121px',
  backgroundColor: '#A0001E',
  color: 'white',
  fontSize: '2.7rem',
  textAlign: 'center'
}

const DynamicButtonRed = (props) => (
  <button style={redStyle}>{props.buttonText}</button>
);

export default DynamicButtonRed;
