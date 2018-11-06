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
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine fontBold">{InputKeyPadText.seven}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine fontBold">{InputKeyPadText.eight}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine fontBold">{InputKeyPadText.nine}</button>
      </div>
      <div className="Row">
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine fontBold">{InputKeyPadText.four}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine fontBold">{InputKeyPadText.five}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine fontBold">{InputKeyPadText.six}</button>
      </div>
      <div className="Row">
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine fontBold">{InputKeyPadText.one}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine fontBold">{InputKeyPadText.two}</button>
        <button className="InputKeyPadButton InputKeyPadButtonOne_Nine fontBold">{InputKeyPadText.three}</button>
      </div>
      <div className="Row">
        <button className="InputKeyPadButton InputKeyPadButtonClear_Zero fontBold">{InputKeyPadText.zero}</button>
      </div>
    </div>
  );
};

export default InputKeyPad;
