import React from 'react';
import './Button.css';

const grayStyle = {
  height: '93px',
  width: '110px',
  backgroundColor: '#FFFFFF',
  color: 'black',
  fontSize: '2.7rem',
  textAlign: 'center'
}

const DynamicButtonGray = (props) => (
  <button style={grayStyle}>{props.buttonText}</button>
);

export default DynamicButtonGray;
