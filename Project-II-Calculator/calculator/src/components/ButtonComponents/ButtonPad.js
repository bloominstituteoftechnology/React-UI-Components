import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';
import MathButton from './MathButton';
import NumberButton from './NumberButton';





const ButtonPad = () => {
    return (
    <div>
      <div className="row">
        <ActionButton text="clear"/>
        <MathButton text="/"/>
      </div>
      <div className="row">
        <NumberButton text={7}/>
        <NumberButton text={8}/>
        <NumberButton text={9}/>
        <MathButton text="X"/>
      </div>
      <div className="row">
        <NumberButton text={4}/>
        <NumberButton text={5}/>
        <NumberButton text={6}/>
        <MathButton text="-"/>
      </div>
      <div className="row">
        <NumberButton text={1}/>
        <NumberButton text={2}/>
        <NumberButton text={3}/>
        <MathButton text="+"/>
      </div>
      <div className="row">
        <ActionButton text={0}/>
        <MathButton text="="/>
      </div>
    </div>
    );
  };

  export default ButtonPad;