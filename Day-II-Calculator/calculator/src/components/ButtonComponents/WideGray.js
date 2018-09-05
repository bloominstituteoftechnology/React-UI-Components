import React from 'react';
import './Button.css';

const wideStyle = {
  height: '93px',
  width: '330px',
  backgroundColor: '#FFFFFF',
  color: 'black',
  fontSize: '2.7rem',
  textAlign: 'center'
}

const ButtonWide = (props) => (
  <button style={wideStyle}>{props.buttonText}</button>
);



export default ButtonWide;
