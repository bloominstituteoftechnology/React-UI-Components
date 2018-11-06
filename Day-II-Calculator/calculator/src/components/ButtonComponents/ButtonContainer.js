import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonContainer = props => {
  return (
    <div className="btn--container">
      <div className="row">
        <ActionButton button = { {text: 'clear', style: 'btn--white'} } />
        <NumberButton button = { {text: '/', style: 'btn--operator'} } />
      </div>
      <div className="row">
        <NumberButton button = { {text: '7', style: 'btn--number'} } />
        <NumberButton button = { {text: '8', style: 'btn--number'} } />
        <NumberButton button = { {text: '9', style: 'btn--number'} } />
        <NumberButton button = { {text: 'x', style: 'btn--operator'} } />
      </div>
      <div className="row">
        <NumberButton button = { {text: '4', style: 'btn--number'} } />
        <NumberButton button = { {text: '5', style: 'btn--number'} } />
        <NumberButton button = { {text: '6', style: 'btn--number'} } />
        <NumberButton button = { {text: '-', style: 'btn--operator'} } />
      </div>
      <div className="row">
        <NumberButton button = { {text: '1', style: 'btn--number'} } />
        <NumberButton button = { {text: '2', style: 'btn--number'} } />
        <NumberButton button = { {text: '3', style: 'btn--number'} } />
        <NumberButton button = { {text: '+', style: 'btn--operator'} } />
      </div>
      <div className="row">
        <ActionButton button = { {text: '0', style: 'btn--white'} } />
        <NumberButton button = { {text: '=', style: 'btn--operator'} } />
      </div>
    </div>
  );
}

export default ButtonContainer;