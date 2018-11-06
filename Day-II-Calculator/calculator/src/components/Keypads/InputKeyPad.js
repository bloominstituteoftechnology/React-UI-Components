import React from 'react';
import './InputKeyPad.css';

const InputKeyPad = () => {
  const InputKeyPadText = {
    clear: 'clear',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0'
  }

  return (
    <div className="InputKeyPad">
      <div className="Row">
        <button className="InputKeyPadButton InputKeyPadButtonClear_Zero">{InputKeyPadText.clear}</button>
      </div>
      <div className="Row">
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine">{InputKeyPadText.seven}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine">{InputKeyPadText.eight}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine">{InputKeyPadText.nine}</button>
      </div>
      <div className="Row">
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine">{InputKeyPadText.four}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine">{InputKeyPadText.five}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine">{InputKeyPadText.six}</button>
      </div>
      <div className="Row">
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine">{InputKeyPadText.one}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine">{InputKeyPadText.two}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine">{InputKeyPadText.three}</button>
      </div>
      <div className="Row">
        <button className="InputKeyPadButton InputKeyPadButtonClear_Zero">{InputKeyPadText.zero}</button>
      </div>
    </div>
  );
};

export default InputKeyPad;
